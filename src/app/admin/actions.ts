"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminDb } from "@/lib/pulse-server";
import { requireRole } from "@/lib/admin-session";
import { detailsFromForm, missingColumn } from "@/lib/company";

const text = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();
const todayBudapest = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

/* ---------- cégek, csapatok (admin) ---------- */

export async function createCompany(fd: FormData) {
  await requireRole("admin");
  const name = text(fd, "name");
  if (!name) return;
  const db = adminDb();
  let res = await db.from("ct_companies").insert({ name, ...detailsFromForm(fd) }).select("id").single();
  // ha a cégadat-oszlopok még hiányoznak (0002-es SQL nem futott), legalább a cég jöjjön létre
  if (missingColumn(res.error)) res = await db.from("ct_companies").insert({ name }).select("id").single();
  if (res.error) throw res.error;
  await insertTeams(res.data.id, text(fd, "teams"));
  revalidatePath("/admin");
}

export async function updateCompany(fd: FormData) {
  await requireRole("admin");
  const id = text(fd, "company_id");
  const name = text(fd, "name");
  if (!id) return;
  const { error } = await adminDb()
    .from("ct_companies")
    .update({ ...(name ? { name } : {}), ...detailsFromForm(fd) })
    .eq("id", id);
  if (error) throw error;
  revalidatePath("/admin");
  revalidatePath("/admin/riport");
}

export async function addTeams(fd: FormData) {
  await requireRole("admin");
  await insertTeams(text(fd, "company_id"), text(fd, "teams"));
  revalidatePath("/admin");
}

async function insertTeams(companyId: string, raw: string) {
  const names = [...new Set(raw.split(/[\n,;]/).map((s) => s.trim()).filter(Boolean))];
  if (!companyId || !names.length) return;
  const { error } = await adminDb()
    .from("ct_teams")
    .upsert(names.map((name) => ({ company_id: companyId, name })), { onConflict: "company_id,name", ignoreDuplicates: true });
  if (error) throw error;
}

/* ---------- alkalmak és állomások (admin) ---------- */

export async function createOccasion(fd: FormData) {
  await requireRole("admin");
  const company_id = text(fd, "company_id");
  if (!company_id) return;
  const row: Record<string, string> = { company_id };
  const date = text(fd, "date");
  const label = text(fd, "label");
  if (date) row.occasion_date = date;
  if (label) row.label = label;
  const { data, error } = await adminDb().from("ct_occasions").insert(row).select("id").single();
  if (error) throw error;
  const practitioner = text(fd, "practitioner_id");
  if (practitioner) await ensureStation(data.id, practitioner);
  revalidatePath("/admin");
}

export async function setOccasionActive(fd: FormData) {
  await requireRole("admin");
  const { error } = await adminDb()
    .from("ct_occasions")
    .update({ active: text(fd, "active") === "true" })
    .eq("id", text(fd, "id"));
  if (error) throw error;
  revalidatePath("/admin");
}

export async function addStation(fd: FormData) {
  await requireRole("admin");
  const occasion = text(fd, "occasion_id");
  const practitioner = text(fd, "practitioner_id");
  if (occasion && practitioner) await ensureStation(occasion, practitioner);
  revalidatePath("/admin");
}

async function ensureStation(occasionId: string, practitionerId: string): Promise<string> {
  const db = adminDb();
  const { error } = await db
    .from("ct_stations")
    .upsert({ occasion_id: occasionId, practitioner_id: practitionerId }, { onConflict: "occasion_id,practitioner_id", ignoreDuplicates: true });
  if (error) throw error;
  const { data, error: e2 } = await db
    .from("ct_stations").select("slug").eq("occasion_id", occasionId).eq("practitioner_id", practitionerId).single();
  if (e2) throw e2;
  return data.slug as string;
}

/* ---------- szakemberek (admin) ---------- */

export async function createPractitioner(fd: FormData) {
  await requireRole("admin");
  const name = text(fd, "name");
  if (!name) return;
  await ensurePractitioner(name);
  revalidatePath("/admin");
}

async function ensurePractitioner(name: string): Promise<string> {
  const db = adminDb();
  const { error } = await db.from("ct_practitioners").upsert({ name }, { onConflict: "name", ignoreDuplicates: true });
  if (error) throw error;
  const { data, error: e2 } = await db.from("ct_practitioners").select("id").eq("name", name).single();
  if (e2) throw e2;
  return data.id as string;
}

export async function setPractitionerActive(fd: FormData) {
  await requireRole("admin");
  const { error } = await adminDb()
    .from("ct_practitioners")
    .update({ active: text(fd, "active") === "true" })
    .eq("id", text(fd, "id"));
  if (error) throw error;
  revalidatePath("/admin");
}

/* ---------- helyszíni beállítás (admin és admin2) ---------- */

/**
 * A program előtt, a helyszínen: cég + szakember kiválasztása (vagy új felvétele).
 * A cég mai aktív alkalmát használja, ha nincs, létrehozza; majd a szakember saját QR-kódjára vált.
 */
export async function startOnSite(fd: FormData) {
  await requireRole("admin", "admin2");
  const db = adminDb();

  let companyId = text(fd, "company_id");
  const newCompany = text(fd, "new_company");
  if (!companyId && newCompany) {
    const { data, error } = await db.from("ct_companies").insert({ name: newCompany }).select("id").single();
    if (error) throw error;
    companyId = data.id;
  }
  let practitionerId = text(fd, "practitioner_id");
  const newPractitioner = text(fd, "new_practitioner");
  if (!practitionerId && newPractitioner) practitionerId = await ensurePractitioner(newPractitioner);
  if (!companyId || !practitionerId) redirect("/admin/helyszin?hiba=1");

  const today = todayBudapest();
  const { data: existing, error: oErr } = await db
    .from("ct_occasions").select("id").eq("company_id", companyId).eq("occasion_date", today).eq("active", true).limit(1);
  if (oErr) throw oErr;
  let occasionId = existing?.[0]?.id as string | undefined;
  if (!occasionId) {
    const label = text(fd, "label");
    const { data, error } = await db
      .from("ct_occasions").insert({ company_id: companyId, occasion_date: today, ...(label ? { label } : {}) }).select("id").single();
    if (error) throw error;
    occasionId = data.id as string;
  }
  const slug = await ensureStation(occasionId!, practitionerId);
  revalidatePath("/admin");
  redirect(`/admin/helyszin?st=${slug}`);
}
