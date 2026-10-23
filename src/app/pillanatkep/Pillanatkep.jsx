"use client";

import { Component, Fragment } from "react";

export default class Pillanatkep extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 'kod', code: '', pre: [5, 5, 5, 5, 5, 5], post: [5, 5, 5, 5, 5, 5], u1: 0, u2: 5, u3: '', skipped: false };
  }
  renderVals() {
    const s = this.state;
    const Q = [
      'Mennyire érzed magad most feszültnek?',
      'Mennyire érzed magad most nyugodtnak?',
      'Mennyire pörögnek most a gondolataid?',
      'Mennyire érzed magad most mentálisan fáradtnak?',
      'Mennyire érzed magad most frissnek, energikusnak?',
      'Mennyire érzel most feszülést a fejed, vállad vagy karod körül?'
    ];
    const SHORT = ['Feszültség', 'Nyugalom', 'Pörgő gondolatok', 'Mentális fáradtság', 'Energia', 'Testi feszülés'];
    const fmt = (v) => v.toFixed(1).replace('.', ',');
    const delta = (d) => (d < 0 ? '−' + fmt(-d) : '+' + fmt(d));
    const tension = (a) => (a[0] + a[2] + a[5] + (11 - a[1])) / 4;
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
    const first = this.props.elsoAlkalom ?? true;
    const labels = { kod: 'Kezdés', elotte: '1 / 2 · Előtte', alkalom: 'Calm-Touch', utana: '2 / 2 · Utána', eredmeny: 'Eredmény' };
    const tPre = tension(s.pre), tPost = tension(s.post), rPre = recharge(s.pre), rPost = recharge(s.post);
    return {
      stepLabel: labels[s.step],
      isKod: s.step === 'kod',
      isElotte: s.step === 'elotte',
      isAlkalom: s.step === 'alkalom',
      isUtana: s.step === 'utana',
      isEredmeny: s.step === 'eredmeny',
      code: s.code,
      codeInvalid: s.code.length !== 4,
      setCode: (e) => this.setState({ code: e.target.value.replace(/\D/g, '').slice(0, 4) }),
      toElotte: () => this.setState({ step: 'elotte' }),
      toAlkalom: () => this.setState({ step: 'alkalom' }),
      toUtana: () => this.setState({ step: 'utana' }),
      toEredmeny: () => this.setState({ step: 'eredmeny' }),
      restart: () => this.setState({ step: 'kod', pre: [5, 5, 5, 5, 5, 5], post: [5, 5, 5, 5, 5, 5], u1: 0, u2: 5, u3: '', skipped: false }),
      preItems: items('pre'),
      postItems: items('post'),
      u1Options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ n, selected: s.u1 === n, notSelected: s.u1 !== n, pick: () => this.setState({ u1: n }) })),
      u2: s.u2,
      setU2: (e) => this.setState({ u2: Number(e.target.value) }),
      u3: s.u3,
      setU3: (e) => this.setState({ u3: e.target.value }),
      tPre: fmt(tPre), tPost: fmt(tPost), tDelta: delta(tPost - tPre) + ' pont',
      rPre: fmt(rPre), rPost: fmt(rPost), rDelta: delta(rPost - rPre) + ' pont',
      rows: SHORT.map((short, i) => ({ short, pre: s.pre[i], post: s.post[i], prePct: s.pre[i] * 10, postPct: s.post[i] * 10 })),
      offerHavi: first && !s.skipped,
      skipped: first && s.skipped,
      alreadyDone: !first,
      skipHavi: () => this.setState({ skipped: true })
    };
  }

  render() {
    const v = this.renderVals();
    return (
<div style={{"maxWidth": "480px", "margin": "0 auto", "minHeight": "100vh", "boxSizing": "border-box", "background": "#FAF6F1", "color": "#2E3631", "fontFamily": "var(--ct-text)", "fontSize": "16px", "lineHeight": "1.45"}}>
<div style={{"padding": "28px 24px 40px", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
<img src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stresszoldás érintéssel" style={{"display": "block", "height": "38px", "width": "auto"}} />
<span style={{"fontSize": "13px", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px"}}>Pulse · {v.stepLabel}</span>
</div>
{v.isKod && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<h1 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "38px", "fontWeight": "600", "lineHeight": "1.05"}}>Pillanatkép</h1>
<p style={{"margin": "0", "color": "#3B443E"}}>Két rövid kérdéssor: egy most, egy az alkalom után. Mindkettő kb. 30 másodperc.</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="kod" style={{"fontWeight": "500"}}>Saját 4 jegyű kódod</label>
<input id="kod" type="text" inputMode="numeric" maxLength="4" autoComplete="off" value={v.code} onChange={v.setCode} style={{"minHeight": "52px", "font": "inherit", "fontSize": "24px", "letterSpacing": "0.4em", "textAlign": "center", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF"}} />
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Ugyanezt a kódot add meg utána és a havi kérdőívnél is. Nevet nem kérünk; a cég csak legalább 5 fős csoportok összesítését látja.</span>
</div>
<button type="button" onClick={v.toElotte} disabled={v.codeInvalid} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Tovább</button>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>A kitöltés önkéntes. A Calm-Touch wellbeing-szolgáltatás, nem egészségügyi mérés.</span>
</div>
</>)}
{v.isElotte && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>Hogy vagy most, ebben a pillanatban?</h2>
<span style={{"color": "#5E6A62"}}>Nincs jó vagy rossz válasz.</span>
</div>
{v.preItems.map((q, q_i) => (<Fragment key={q_i}>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor={q.id} style={{"fontWeight": "500"}}>{q.label}</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id={q.id} type="range" min="1" max="10" step="1" value={q.value} onChange={q.set} style={{"flex": "1", "height": "32px", "accentColor": "#3F6E8C"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{q.value}</span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "color": "#2C5069"}}><span>1 = nem jellemző</span><span>10 = teljes mértékben</span></div>
</div>
</Fragment>))}
<button type="button" onClick={v.toAlkalom} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Kész, kezdhetjük</button>
</div>
</>)}
{v.isAlkalom && (<>
<div style={{"minHeight": "620px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "gap": "20px", "textAlign": "center"}}>
<span style={{"color": "#55665A", "display": "flex"}}><svg width="56" height="56" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.2", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" /><path d="M5 19l7-7" /></svg></span>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "34px", "fontWeight": "600", "lineHeight": "1.1"}}>Most csak ülj le, és engedd el.</h2>
<p style={{"margin": "0", "color": "#3B443E"}}>15–20 perc. Ha bármi kellemetlen, egy szóval leállíthatod.</p>
<button type="button" onClick={v.toUtana} style={{"minHeight": "52px", "padding": "0 28px", "border": "1px solid #55665A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Az alkalom véget ért</button>
</div>
</>)}
{v.isUtana && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>És most hogy vagy?</h2>
<span style={{"color": "#5E6A62"}}>Ugyanaz a 6 kérdés, plusz három rövid zárókérdés.</span>
</div>
{v.postItems.map((q, q_i) => (<Fragment key={q_i}>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor={q.id} style={{"fontWeight": "500"}}>{q.label}</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id={q.id} type="range" min="1" max="10" step="1" value={q.value} onChange={q.set} style={{"flex": "1", "height": "32px", "accentColor": "#3F6E8C"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{q.value}</span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "color": "#2C5069"}}><span>1 = nem jellemző</span><span>10 = teljes mértékben</span></div>
</div>
</Fragment>))}
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontWeight": "500"}}>Mennyire érezted magad biztonságban és komfortosan az alkalom alatt?</span>
<div role="group" aria-label="Biztonság és komfort, 1-től 10-ig" style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "8px"}}>
{v.u1Options.map((o, o_i) => (<Fragment key={o_i}>
{o.selected && (<><button type="button" aria-pressed="true" onClick={o.pick} style={{"minHeight": "44px", "border": "2px solid #3F6E8C", "borderRadius": "10px", "background": "#3F6E8C", "color": "#FFFFFF", "font": "inherit", "fontWeight": "700", "cursor": "pointer"}}>{o.n}</button></>)}
{o.notSelected && (<><button type="button" aria-pressed="false" onClick={o.pick} style={{"minHeight": "44px", "border": "1px solid #A9C1D1", "borderRadius": "10px", "background": "#FFFFFF", "color": "#2E3631", "font": "inherit", "cursor": "pointer"}}>{o.n}</button></>)}
</Fragment>))}
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12px", "color": "#2C5069"}}><span>1 = nem jellemző</span><span>10 = teljes mértékben</span></div>
</div>
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="u2" style={{"fontWeight": "500"}}>Mennyire ajánlanád egy kollégádnak?</label>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<input id="u2" type="range" min="0" max="10" step="1" value={v.u2} onChange={v.setU2} style={{"flex": "1", "height": "32px", "accentColor": "#5C6830"}} />
<span style={{"width": "28px", "textAlign": "right", "fontWeight": "600", "fontSize": "18px"}}>{v.u2}</span>
</div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="u3" style={{"fontWeight": "500"}}>Egy szó, ami most eszedbe jut <span style={{"fontWeight": "400", "color": "#5E6A62"}}>(nem kötelező)</span></label>
<input id="u3" type="text" value={v.u3} onChange={v.setU3} style={{"minHeight": "48px", "font": "inherit", "padding": "0 14px", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF"}} />
</div>
<button type="button" onClick={v.toEredmeny} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Megnézem a változást</button>
</div>
</>)}
{v.isEredmeny && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>Ez változott 20 perc alatt</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "12px"}}>
<div style={{"background": "#2C5069", "color": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontSize": "13px", "color": "#DDE8EF"}}>Feszültségindex</span>
<span style={{"fontSize": "22px", "fontWeight": "600"}}>{v.tPre} <span className="ct-arrow">→</span> {v.tPost}</span>
<span style={{"fontSize": "14px", "color": "#DDE8EF"}}>{v.tDelta}</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Feltöltődési index</span>
<span style={{"fontSize": "22px", "fontWeight": "600"}}>{v.rPre} <span className="ct-arrow">→</span> {v.rPost}</span>
<span style={{"fontSize": "14px", "color": "#7E3A4A"}}>{v.rDelta}</span>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
{v.rows.map((r, r_i) => (<Fragment key={r_i}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "5px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "fontSize": "14px"}}><span>{r.short}</span><b>{r.pre} <span className="ct-arrow">→</span> {r.post}</b></div>
<div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"height": "6px", "background": "#A9C1D1", "borderRadius": "3px", "width": `${r.prePct}%`}}></div></div>
<div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"height": "6px", "background": "#3F6E8C", "borderRadius": "3px", "width": `${r.postPct}%`}}></div></div>
</div>
</Fragment>))}
<div style={{"display": "flex", "gap": "16px", "fontSize": "12px", "color": "#5E6A62"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "14px", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></span>előtte</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "14px", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></span>utána</span><span>· 1–10 skála</span></div>
</div>
{v.offerHavi && (<>
<div style={{"background": "#F4E3E4", "borderRadius": "14px", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<b>Ez a hónap első alkalma.</b>
<span style={{"color": "#5A4248"}}>Van 2 perced a havi kérdőívre? 11 állítás – havonta csak egyszer kérjük.</span>
<a href="/calm-touch/havi-kerdoiv" style={{"textDecoration": "none", "minHeight": "48px", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "fontWeight": "500", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>Kitöltöm most</a>
<button type="button" onClick={v.skipHavi} style={{"minHeight": "44px", "border": "none", "background": "transparent", "color": "#5A4248", "font": "inherit", "textDecoration": "underline", "cursor": "pointer"}}>Most nem</button>
</div>
</>)}
{v.skipped && (<>
<div style={{"background": "#F4E3E4", "borderRadius": "14px", "padding": "18px", "color": "#5A4248"}}>Rendben. Ebben a hónapban a következő alkalmad után újra felkínáljuk.</div>
</>)}
{v.alreadyDone && (<>
<div style={{"background": "#E9EBD6", "borderRadius": "14px", "padding": "18px", "color": "#2E3631"}}>Ebben a hónapban már kitöltötted a havi kérdőívet – köszönjük! Legközelebb a következő hónap első alkalma után kérjük.</div>
</>)}
<button type="button" onClick={v.restart} style={{"minHeight": "44px", "border": "1px solid #A9B39A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "cursor": "pointer"}}>Új pillanatkép (demó)</button>
</div>
</>)}
</div>
</div>
    );
  }
}
