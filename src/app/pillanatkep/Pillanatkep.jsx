"use client";

import { Component, Fragment } from "react";
import { PRIVACY_URL } from "../config";
import { PILLANATKEP } from "./strings";
import { LangSwitch } from "../LangSwitch";
import { detectLang, storeLang } from "@/lib/i18n";
import {
  pulseLive, readOccasionSlug, loadOccasion, submitSnapshot, monthlyDone, rememberParticipant,
  savePre, loadPre, clearPre,
} from "@/lib/pulse-client";


export default class Pillanatkep extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 'kod', code: '', pre: [5, 5, 5, 5, 5, 5], post: [5, 5, 5, 5, 5, 5], u1: 0, u2: 5, u3: '', skipped: false,
      mode: pulseLive ? 'loading' : 'demo', slug: null, occasion: null, team: '', consent: false, busy: false, error: '', monthly: null, hasPre: true, resumed: false, lang: 'hu' };
  }

  t() { return PILLANATKEP[this.state.lang]; }

  async componentDidMount() {
    this.setState({ lang: detectLang() });
    if (!pulseLive) return;
    const slug = readOccasionSlug();
    if (!slug) { this.setState({ mode: 'demo' }); return; }
    try {
      const occasion = await loadOccasion(slug);
      if (!occasion) { this.setState({ mode: 'invalid', slug }); return; }
      const saved = loadPre(slug);
      this.setState(saved
        ? { mode: 'live', slug, occasion, code: saved.code, team: saved.team ?? '', consent: true, pre: saved.pre, step: 'alkalom', resumed: true }
        : { mode: 'live', slug, occasion });
    } catch {
      this.setState({ mode: 'invalid', slug });
    }
  }

  async save(phase) {
    const s = this.state;
    if (s.mode !== 'live') return 'ok';
    this.setState({ busy: true, error: '' });
    try {
      const res = await submitSnapshot({
        slug: s.slug, code: s.code, phase, team: s.team || null,
        answers: phase === 'pre' ? s.pre : s.post,
        comfort: phase === 'post' ? (s.u1 || null) : null,
        recommend: phase === 'post' ? s.u2 : null,
        word: phase === 'post' ? s.u3 : null,
      });
      this.setState({ busy: false });
      if (res === 'duplicate') {
        this.setState({ error: phase === 'pre' ? this.t().dupPre : this.t().dupPost });
      }
      return res;
    } catch {
      this.setState({ busy: false, error: this.t().err });
      return 'error';
    }
  }

  renderVals() {
    const s = this.state;
    const t = PILLANATKEP[s.lang];
    const Q = t.q;
    // Eredmény: minden sor 10 = legjobb; a negatív kérdéseknél fordított pontozás (11 − válasz).
    // Az eredményképernyő a kitöltő saját válaszait mutatja (ahogy a kérdés szólt); a riport a 10 = legjobb pontokat használja.
    const RAW = t.raw;
    const REVERSED = [0, 2, 3, 5];
    const score = (a) => a.map((x, i) => (REVERSED.includes(i) ? 11 - x : x));
    const fmt = (v) => (s.lang === 'en' ? v.toFixed(1) : v.toFixed(1).replace('.', ','));
    const delta = (d) => (d < 0 ? '−' + fmt(-d) : '+' + fmt(d));
    const tension = (a) => score(a).reduce((x, y) => x + y, 0) / 6;
    const recharge = (a) => (a[4] + (11 - a[3])) / 2;
    const items = (key) => Q.map((label, i) => ({
      label,
      id: key + i,
      value: s[key][i],
      set: (e) => {
        const next = this.state[key].slice();
        next[i] = Number(e.target.value);
        this.setState({ [key]: next });
      }
    }));
    const live = s.mode === 'live';
    const first = live ? s.monthly === false : (this.props.elsoAlkalom ?? true);
    const labels = t.steps;
    const tPre = tension(s.pre), tPost = tension(s.post), rPre = recharge(s.pre), rPost = recharge(s.post);
    return {
      stepLabel: labels[s.step],
      isKod: s.step === 'kod',
      isElotte: s.step === 'elotte',
      isAlkalom: s.step === 'alkalom',
      isUtana: s.step === 'utana',
      isEredmeny: s.step === 'eredmeny',
      code: s.code,
      codeInvalid: s.code.length !== 4 || (live && !s.consent) || s.mode === 'loading' || s.mode === 'invalid',
      setCode: (e) => this.setState({ code: e.target.value.replace(/\D/g, '').slice(0, 4) }),
      toElotte: () => { rememberParticipant(s.code, s.team || null); this.setState({ step: 'elotte', error: '' }); },
      toAlkalom: async () => {
        if ((await this.save('pre')) !== 'ok') return;
        if (live) savePre(s.slug, s.code, s.team || null, s.pre);
        this.setState({ step: 'alkalom', hasPre: true });
      },
      toUtanaNoPre: () => {
        const saved = live ? loadPre(s.slug) : null;
        this.setState(saved && saved.code === s.code
          ? { step: 'utana', error: '', pre: saved.pre, hasPre: true }
          : { step: 'utana', error: '', hasPre: false });
      },
      toUtana: () => this.setState({ step: 'utana' }),
      toEredmeny: async () => {
        const res = await this.save('post');
        if (res === 'error') return;
        if (live) clearPre(s.slug);
        let monthly = null;
        if (live) { try { monthly = await monthlyDone(s.slug, s.code); } catch { monthly = true; } }
        this.setState({ step: 'eredmeny', monthly, error: res === 'duplicate' ? '' : this.state.error });
      },
      backToKod: () => this.setState({ step: 'kod', error: '' }),
      restart: () => this.setState({ step: 'kod', error: '', monthly: null, hasPre: true, resumed: false, consent: false, pre: [5, 5, 5, 5, 5, 5], post: [5, 5, 5, 5, 5, 5], u1: 0, u2: 5, u3: '', skipped: false }),
      preItems: items('pre'),
      postItems: items('post'),
      u1Options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ n, selected: s.u1 === n, notSelected: s.u1 !== n, pick: () => this.setState({ u1: n }) })),
      u2: s.u2,
      setU2: (e) => this.setState({ u2: Number(e.target.value) }),
      u3: s.u3,
      setU3: (e) => this.setState({ u3: e.target.value }),
      tPre: fmt(tPre), tPost: fmt(tPost), tDelta: delta(tPost - tPre) + ' ' + t.point,
      rPre: fmt(rPre), rPost: fmt(rPost), rDelta: delta(rPost - rPre) + ' ' + t.point,
      rows: RAW.map((label, i) => {
        const neg = REVERSED.includes(i), a = s.pre[i], b = s.post[i];
        return { label, pre: a, post: b, prePct: a * 10, postPct: b * 10,
          num: neg ? '#7E3A4A' : '#5C6830', preBar: neg ? '#E3B5BF' : '#C9D1AE', postBar: neg ? '#A65D6B' : '#5C6830' };
      }),
      postRows: RAW.map((label, i) => ({ label, post: s.post[i] })),
      hasPre: s.hasPre,
      noPre: !s.hasPre,
      resumed: s.resumed,
      tPostOnly: fmt(tPost),
      offerHavi: first && !s.skipped,
      skipped: first && s.skipped,
      alreadyDone: !first,
      skipHavi: () => this.setState({ skipped: true }),
      isDemo: s.mode === 'demo',
      isInvalid: s.mode === 'invalid',
      live,
      busy: s.busy,
      error: s.error,
      company: s.occasion ? [s.occasion.company, s.occasion.label, s.occasion.practitioner && `${t.practitioner}: ${s.occasion.practitioner}`].filter(Boolean).join(' · ') : '',
      teams: s.occasion ? s.occasion.teams : [],
      hasTeams: Boolean(s.occasion && s.occasion.teams.length),
      team: s.team,
      setTeam: (e) => this.setState({ team: e.target.value }),
      consent: s.consent,
      setConsent: (e) => this.setState({ consent: e.target.checked }),
      privacyUrl: PRIVACY_URL,
      t,
      lang: s.lang,
      setLang: (l) => { storeLang(l); this.setState({ lang: l }); },
      haviHref: s.slug ? `/calm-touch/havi-kerdoiv?a=${encodeURIComponent(s.slug)}` : '/calm-touch/havi-kerdoiv'
    };
  }

  render() {
    const v = this.renderVals();
    return (
<div style={{"maxWidth": "480px", "margin": "0 auto", "minHeight": "100vh", "boxSizing": "border-box", "background": "#FAF6F1", "color": "#2E3631", "fontFamily": "var(--ct-text)", "fontSize": "16px", "lineHeight": "1.45"}}>
<div style={{"padding": "28px 24px 40px", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
<img src={`/calm-touch/brand/logo-fekvo${v.lang === "hu" ? "" : `-${v.lang}`}.webp`} alt={v.t.logoAlt} style={{"display": "block", "height": "34px", "width": "auto", "maxWidth": "48%"}} />
<LangSwitch lang={v.lang} onChange={v.setLang} />
</div>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px", "marginTop": "-8px"}}>Pulse · {v.stepLabel}</span>
{v.isDemo && (<p style={{"margin": "0", "background": "#F4E3E4", "color": "#5A4248", "borderRadius": "12px", "padding": "10px 14px", "fontSize": "14px"}}>{v.t.demo}</p>)}
{v.isInvalid && (<p role="alert" style={{"margin": "0", "background": "#F4E3E4", "color": "#5A4248", "borderRadius": "12px", "padding": "10px 14px", "fontSize": "14px"}}>{v.t.invalid}</p>)}
{v.company && (<p style={{"margin": "0", "fontSize": "14px", "color": "#2C5069", "fontWeight": "600"}}>{v.company}</p>)}
{v.error && (<p role="alert" style={{"margin": "0", "background": "#FBEFF0", "border": "1px solid #A65D6B", "color": "#5A4248", "borderRadius": "12px", "padding": "10px 14px", "fontSize": "14px"}}>{v.error}</p>)}
{v.isKod && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<h1 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "38px", "fontWeight": "600", "lineHeight": "1.05"}}>{v.t.title}</h1>
<p style={{"margin": "0", "color": "#3B443E"}}>{v.t.intro}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="kod" style={{"fontWeight": "500"}}>{v.t.codeLabel}</label>
<input id="kod" type="text" inputMode="numeric" maxLength="4" autoComplete="off" value={v.code} onChange={v.setCode} style={{"minHeight": "52px", "font": "inherit", "fontSize": "24px", "letterSpacing": "0.4em", "textAlign": "center", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF"}} />
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>{v.t.codeHelp}</span>
</div>
{v.hasTeams && (<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="csapat" style={{"fontWeight": "500"}}>{v.t.team} <span style={{"fontWeight": "400", "color": "#5E6A62"}}>{v.t.optional}</span></label>
<select id="csapat" value={v.team} onChange={v.setTeam} style={{"minHeight": "48px", "font": "inherit", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF", "padding": "0 12px"}}>
<option value="">{v.t.noTeam}</option>
{v.teams.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
</select>
</div>)}
{v.live && (<label style={{"display": "flex", "gap": "10px", "alignItems": "flex-start", "fontSize": "14px", "color": "#3B443E"}}>
<input type="checkbox" checked={v.consent} onChange={v.setConsent} style={{"width": "22px", "height": "22px", "marginTop": "1px", "accentColor": "#3F6E8C", "flex": "none"}} />
<span>{v.t.consent} <a href={v.privacyUrl} target="_blank" rel="noopener noreferrer">{v.t.privacy}</a></span>
</label>)}
<button type="button" onClick={v.toElotte} disabled={v.codeInvalid} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>{v.t.next}</button>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>{v.t.voluntary}</span>
</div>
</>)}
{v.isElotte && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>{v.t.preTitle}</h2>
<span style={{"color": "#5E6A62"}}>{v.t.preSub}</span>
</div>
{v.preItems.map((q, q_i) => (<Fragment key={q_i}>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor={q.id} style={{"fontWeight": "500"}}>{q.label}</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id={q.id} type="range" min="1" max="10" step="1" value={q.value} onChange={q.set} style={{"flex": "1", "height": "32px", "accentColor": "#3F6E8C"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{q.value}</span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "color": "#2C5069"}}><span>{v.t.scaleLow}</span><span>{v.t.scaleHigh}</span></div>
</div>
</Fragment>))}
<button type="button" onClick={v.toAlkalom} disabled={v.busy} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>{v.t.startSession}</button>
{v.error && (<button type="button" onClick={v.toUtanaNoPre} style={{"minHeight": "44px", "border": "1px solid #3F6E8C", "borderRadius": "999px", "background": "#DDE8EF", "color": "#2C5069", "font": "inherit", "fontWeight": "600", "cursor": "pointer"}}>{v.t.itWasMe}</button>)}
{v.error && (<button type="button" onClick={v.backToKod} style={{"minHeight": "44px", "border": "1px solid #A9C1D1", "borderRadius": "999px", "background": "transparent", "color": "#2C5069", "font": "inherit", "cursor": "pointer"}}>{v.t.otherCode}</button>)}
</div>
</>)}
{v.isAlkalom && (<>
{v.resumed && (<p style={{"margin": "0", "background": "#DDE8EF", "color": "#2C5069", "borderRadius": "12px", "padding": "10px 14px", "fontSize": "14px"}}>{v.t.resumed}</p>)}
<div style={{"minHeight": "620px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "gap": "20px", "textAlign": "center"}}>
<span style={{"color": "#55665A", "display": "flex"}}><svg width="56" height="56" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.2", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" /><path d="M5 19l7-7" /></svg></span>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "34px", "fontWeight": "600", "lineHeight": "1.1"}}>{v.t.sessionTitle}</h2>
<p style={{"margin": "0", "color": "#3B443E"}}>{v.t.sessionSub}</p>
<button type="button" onClick={v.toUtana} style={{"minHeight": "52px", "padding": "0 28px", "border": "1px solid #55665A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>{v.t.sessionEnd}</button>
</div>
</>)}
{v.isUtana && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>{v.t.postTitle}</h2>
<span style={{"color": "#5E6A62"}}>{v.t.postSub}</span>
</div>
{v.postItems.map((q, q_i) => (<Fragment key={q_i}>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor={q.id} style={{"fontWeight": "500"}}>{q.label}</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id={q.id} type="range" min="1" max="10" step="1" value={q.value} onChange={q.set} style={{"flex": "1", "height": "32px", "accentColor": "#3F6E8C"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{q.value}</span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "color": "#2C5069"}}><span>{v.t.scaleLow}</span><span>{v.t.scaleHigh}</span></div>
</div>
</Fragment>))}
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontWeight": "500"}}>{v.t.comfort}</span>
<div role="group" aria-label={v.t.comfortGroup} style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "8px"}}>
{v.u1Options.map((o, o_i) => (<Fragment key={o_i}>
{o.selected && (<><button type="button" aria-pressed="true" onClick={o.pick} style={{"minHeight": "44px", "border": "2px solid #3F6E8C", "borderRadius": "10px", "background": "#3F6E8C", "color": "#FFFFFF", "font": "inherit", "fontWeight": "700", "cursor": "pointer"}}>{o.n}</button></>)}
{o.notSelected && (<><button type="button" aria-pressed="false" onClick={o.pick} style={{"minHeight": "44px", "border": "1px solid #A9C1D1", "borderRadius": "10px", "background": "#FFFFFF", "color": "#2E3631", "font": "inherit", "cursor": "pointer"}}>{o.n}</button></>)}
</Fragment>))}
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12px", "color": "#2C5069"}}><span>{v.t.scaleLow}</span><span>{v.t.scaleHigh}</span></div>
</div>
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="u2" style={{"fontWeight": "500"}}>{v.t.recommend}</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id="u2" type="range" min="0" max="10" step="1" value={v.u2} onChange={v.setU2} style={{"flex": "1", "height": "32px", "accentColor": "#5C6830"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{v.u2}</span>
</div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="u3" style={{"fontWeight": "500"}}>{v.t.word} <span style={{"fontWeight": "400", "color": "#5E6A62"}}>{v.t.optional}</span></label>
<input id="u3" type="text" value={v.u3} onChange={v.setU3} style={{"minHeight": "48px", "font": "inherit", "padding": "0 14px", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF"}} />
</div>
<button type="button" onClick={v.toEredmeny} disabled={v.busy} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>{v.t.seeChange}</button>
</div>
</>)}
{v.isEredmeny && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>{v.hasPre ? v.t.resultTitle : v.t.thanks}</h2>
{v.hasPre && (<div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "12px"}}>
<div style={{"background": "#2C5069", "color": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontSize": "13px", "color": "#DDE8EF"}}>{v.t.wellbeing}</span>
<span style={{"fontSize": "22px", "fontWeight": "600"}}>{v.tPre} <span className="ct-arrow">→</span> {v.tPost}</span>
<span style={{"fontSize": "14px", "color": "#DDE8EF"}}>{v.tDelta}</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>{v.t.recharge}</span>
<span style={{"fontSize": "22px", "fontWeight": "600"}}>{v.rPre} <span className="ct-arrow">→</span> {v.rPost}</span>
<span style={{"fontSize": "14px", "color": "#7E3A4A"}}>{v.rDelta}</span>
</div>
</div>)}
{v.hasPre && (<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px"}}>{v.t.howIFeel}</b>
<div style={{"background": "#DDE8EF", "borderRadius": "10px", "padding": "6px 10px", "display": "flex", "justifyContent": "space-between", "gap": "8px", "fontSize": "12px", "color": "#2C5069"}}><span>{v.t.scaleLow}</span><span>{v.t.scaleHigh}</span></div>
<div style={{"display": "flex", "justifyContent": "flex-end", "gap": "14px", "fontSize": "12px", "color": "#5E6A62"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#D3D5C8"}}></span>{v.t.before}</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#5E6A62"}}></span>{v.t.after}</span></div>
</div>
{v.rows.map((r, r_i) => (<Fragment key={r_i}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "8px"}}><span style={{"fontWeight": "600"}}>{r.label}</span><b style={{"fontFamily": "var(--ct-display)", "fontSize": "22px", "color": r.num}}>{r.pre} <span className="ct-arrow">→</span> {r.post}</b></div>
<div style={{"height": "8px", "background": "#EEEDE4", "borderRadius": "4px"}}><div style={{"height": "8px", "background": r.preBar, "borderRadius": "4px", "width": `${r.prePct}%`}}></div></div>
<div style={{"height": "8px", "background": "#EEEDE4", "borderRadius": "4px"}}><div style={{"height": "8px", "background": r.postBar, "borderRadius": "4px", "width": `${r.postPct}%`}}></div></div>
</div>
</Fragment>))}
<span style={{"fontSize": "12px", "color": "#5E6A62"}}>{v.t.ownAnswers}</span>
</div>)}
{v.noPre && (<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b>{v.t.noPreTitle}</b>
<span style={{"color": "#3B443E", "fontSize": "14px"}}>{v.t.noPreText}</span>
{v.postRows.map((r, r_i) => (<Fragment key={r_i}><div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}><span>{r.label}</span><b>{r.post}</b></div></Fragment>))}
</div>)}
{v.offerHavi && (<>
<div style={{"background": "#F4E3E4", "borderRadius": "14px", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<b>{v.t.firstOfMonth}</b>
<span style={{"color": "#5A4248"}}>{v.t.monthlyAsk}</span>
<a href={v.haviHref} style={{"textDecoration": "none", "minHeight": "48px", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "fontWeight": "500", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>{v.t.fillNow}</a>
<button type="button" onClick={v.skipHavi} style={{"minHeight": "44px", "border": "none", "background": "transparent", "color": "#5A4248", "font": "inherit", "textDecoration": "underline", "cursor": "pointer"}}>{v.t.notNow}</button>
</div>
</>)}
{v.skipped && (<>
<div style={{"background": "#F4E3E4", "borderRadius": "14px", "padding": "18px", "color": "#5A4248"}}>{v.t.skipped}</div>
</>)}
{v.alreadyDone && (<>
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "18px", "color": "#2E3631"}}>{v.t.alreadyDone}</div>
</>)}
{v.isDemo && (<button type="button" onClick={v.restart} style={{"minHeight": "44px", "border": "1px solid #A9B39A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "cursor": "pointer"}}>{v.t.restartDemo}</button>)}
</div>
</>)}
</div>
</div>
    );
  }
}
