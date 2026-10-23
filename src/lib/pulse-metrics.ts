/**
 * Calm-Touch Pulse – riportszámítások (tiszta függvények, adatbázis nélkül tesztelhetők).
 *
 * Pillanatkép (6 kérdés, 1–10): [0] feszültség, [1] nyugalom, [2] pörgő gondolatok,
 * [3] mentális fáradtság, [4] energia, [5] testi feszülés.
 * Havi kérdőív (11 állítás, 1–10): [0] mentális terhelés, [1] készenléti állapot,
 * [2] kimerülés, … [10] fenntarthatóság.
 */

export type Snapshot = {
  occasion_id: string;
  team_id: string | null;
  participant_code: string;
  phase: "pre" | "post";
  answers: number[];
  comfort: number | null;
  recommend: number | null;
};

export type Monthly = {
  team_id: string | null;
  participant_code: string;
  answers: number[];
};

export type Status = "zöld" | "sárga" | "piros" | "nincs adat";

/** Minimális csoportméret, amely alatt a cég felé nem adható ki adat. */
export const MIN_GROUP = 5;

export const SNAPSHOT_ITEMS = ["Feszültség", "Nyugalom", "Pörgő gondolatok", "Mentális fáradtság", "Energia", "Testi feszülés"];

const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

/** Feszültségindex (1–10): feszültség, pörgés, testi feszülés és a megfordított nyugalom átlaga. */
export const tensionIndex = (a: number[]) => (a[0] + a[2] + a[5] + (11 - a[1])) / 4;

/** Havi terhelési index (1–10): az első három, terhelést mérő állítás átlaga. */
export const monthlyLoadIndex = (a: number[]) => (a[0] + a[1] + a[2]) / 3;

export function loadStatus(v: number | null): Status {
  if (v == null) return "nincs adat";
  return v < 5 ? "zöld" : v < 7 ? "sárga" : "piros";
}
/** Hatás: az utána − előtte feszültség-különbség (negatív = javulás). */
export function effectStatus(v: number | null): Status {
  if (v == null) return "nincs adat";
  return v <= -2 ? "zöld" : v <= -1 ? "sárga" : "piros";
}
export function trendStatus(v: number | null): Status {
  if (v == null) return "nincs adat";
  return v < 4.5 ? "zöld" : v < 6.5 ? "sárga" : "piros";
}

type Pair = { pre: Snapshot; post: Snapshot };

function pairUp(snaps: Snapshot[]): Pair[] {
  const pre = new Map<string, Snapshot>();
  for (const s of snaps) if (s.phase === "pre") pre.set(`${s.occasion_id}|${s.participant_code}`, s);
  const pairs: Pair[] = [];
  for (const s of snaps) {
    if (s.phase !== "post") continue;
    const p = pre.get(`${s.occasion_id}|${s.participant_code}`);
    if (p) pairs.push({ pre: p, post: s });
  }
  return pairs;
}

export type GroupMetrics = {
  participants: number;
  load: number | null;
  loadStatus: Status;
  effect: number | null;
  effectStatus: Status;
  improvedPct: number | null;
  trend: number | null;
  trendStatus: Status;
  sustainability: number | null;
  monthlyCount: number;
};

function groupMetrics(snaps: Snapshot[], monthly: Monthly[]): GroupMetrics {
  const pres = snaps.filter((s) => s.phase === "pre");
  const pairs = pairUp(snaps);
  const deltas = pairs.map((p) => tensionIndex(p.post.answers) - tensionIndex(p.pre.answers));
  const load = avg(pres.map((s) => tensionIndex(s.answers)));
  const effect = avg(deltas);
  const trend = avg(monthly.map((m) => monthlyLoadIndex(m.answers)));
  const participants = new Set([...snaps, ...monthly].map((x) => x.participant_code)).size;
  return {
    participants,
    load,
    loadStatus: loadStatus(load),
    effect,
    effectStatus: effectStatus(effect),
    improvedPct: deltas.length ? Math.round((100 * deltas.filter((d) => d < 0).length) / deltas.length) : null,
    trend,
    trendStatus: trendStatus(trend),
    sustainability: avg(monthly.map((m) => m.answers[10])),
    monthlyCount: monthly.length,
  };
}

export type Report = GroupMetrics & {
  occasions: number;
  preCount: number;
  postCount: number;
  pairCount: number;
  completionPct: number | null;
  items: { label: string; pre: number | null; post: number | null }[];
  comfort: number | null;
  nps: number | null;
  belowThreshold: boolean;
  teams: ({ id: string; name: string } & GroupMetrics)[];
  hiddenTeams: number;
};

export function buildReport(snaps: Snapshot[], monthly: Monthly[], teamNames: Map<string, string>): Report {
  const base = groupMetrics(snaps, monthly);
  const pairs = pairUp(snaps);
  const posts = snaps.filter((s) => s.phase === "post");
  const recs = posts.map((s) => s.recommend).filter((x): x is number => x != null);
  const nps = recs.length
    ? Math.round((100 * (recs.filter((r) => r >= 9).length - recs.filter((r) => r <= 6).length)) / recs.length)
    : null;

  const teamIds = new Set([...snaps, ...monthly].map((x) => x.team_id).filter((x): x is string => Boolean(x)));
  const teams: Report["teams"] = [];
  let hiddenTeams = 0;
  for (const id of teamIds) {
    const g = groupMetrics(snaps.filter((s) => s.team_id === id), monthly.filter((m) => m.team_id === id));
    if (g.participants >= MIN_GROUP) teams.push({ id, name: teamNames.get(id) ?? "Ismeretlen csapat", ...g });
    else hiddenTeams += 1;
  }
  teams.sort((a, b) => a.name.localeCompare(b.name, "hu"));

  const preCount = snaps.filter((s) => s.phase === "pre").length;
  return {
    ...base,
    occasions: new Set(snaps.map((s) => s.occasion_id)).size,
    preCount,
    postCount: posts.length,
    pairCount: pairs.length,
    completionPct: preCount ? Math.round((100 * pairs.length) / preCount) : null,
    items: SNAPSHOT_ITEMS.map((label, i) => ({
      label,
      pre: avg(pairs.map((p) => p.pre.answers[i])),
      post: avg(pairs.map((p) => p.post.answers[i])),
    })),
    comfort: avg(posts.map((s) => s.comfort).filter((x): x is number => x != null)),
    nps,
    belowThreshold: base.participants < MIN_GROUP,
    teams,
    hiddenTeams,
  };
}

export const fmt1 = (v: number | null, signed = false) =>
  v == null ? "–" : `${signed && v > 0 ? "+" : ""}${v.toFixed(1).replace(".", ",").replace("-", "−")}`;
