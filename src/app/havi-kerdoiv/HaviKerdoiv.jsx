"use client";

import { Component, Fragment } from "react";

export default class HaviKerdoiv extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 'kod', code: '', answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], open: '' };
  }
  renderVals() {
    const s = this.state;
    const ITEMS = [
      ['Mentális terhelés', 'Gyakran éreztem, hogy túl sok minden szakad rám egyszerre.'],
      ['Készenléti állapot', 'Napközben nehezen tudtam rövid időre kikapcsolni.'],
      ['Kimerülés', 'A munkanap végén mentálisan kimerültnek éreztem magam.'],
      ['Regeneráció', 'Tudtam tudatosan szünetet tartani a munkanapomban.'],
      ['Közvetlen hatás', 'A Calm-Touch utáni órákban nyugodtabb voltam.'],
      ['Fókusz', 'A Calm-Touch után könnyebben tudtam a feladataimra koncentrálni.'],
      ['Testtudatosság', 'Az alkalmak segítettek jobban észrevenni a testem feszülését.'],
      ['Gondoskodó kultúra', 'Úgy érzem, a munkahelyem törődik a jóllétemmel.'],
      ['Szervezés', 'Az alkalmak időpontja és szervezése jól illeszkedett a munkámhoz.'],
      ['Folytatási igény', 'Szeretném, ha a Calm-Touch rendszeresen elérhető lenne.'],
      ['Fenntarthatóság', 'A jelenlegi munkaterhelésemet hosszú távon is fenntarthatónak érzem.']
    ];
    const answered = s.answers.filter((a) => a > 0).length;
    const already = this.props.marKitoltotte ?? false;
    return {
      isKod: s.step === 'kod',
      isMar: s.step === 'mar',
      isKerdoiv: s.step === 'kerdoiv',
      isKesz: s.step === 'kesz',
      code: s.code,
      codeInvalid: s.code.length !== 4,
      setCode: (e) => this.setState({ code: e.target.value.replace(/\D/g, '').slice(0, 4) }),
      start: () => this.setState({ step: already ? 'mar' : 'kerdoiv' }),
      restart: () => this.setState({ step: 'kod', code: '', answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], open: '' }),
      answered,
      progressPct: Math.round((answered / 11) * 100),
      incomplete: answered < 11,
      open: s.open,
      setOpen: (e) => this.setState({ open: e.target.value }),
      submit: () => this.setState({ step: 'kesz' }),
      items: ITEMS.map((pair, i) => ({
        no: String(i + 1).padStart(2, '0'),
        area: pair[0].toUpperCase(),
        text: pair[1],
        labelId: 'h-item-' + i,
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
          n,
          selected: s.answers[i] === n,
          notSelected: s.answers[i] !== n,
          pick: () => {
            const next = this.state.answers.slice();
            next[i] = n;
            this.setState({ answers: next });
          }
        }))
      }))
    };
  }

  render() {
    const v = this.renderVals();
    return (
<div style={{"maxWidth": "480px", "margin": "0 auto", "minHeight": "100vh", "boxSizing": "border-box", "background": "#FAF6F1", "color": "#2E3631", "fontFamily": "var(--ct-text)", "fontSize": "16px", "lineHeight": "1.45"}}>
<div style={{"padding": "28px 24px 40px", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
<img src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stresszoldás érintéssel" style={{"display": "block", "height": "38px", "width": "auto"}} />
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Havi kérdőív</span>
</div>
{v.isKod && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<h1 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "36px", "fontWeight": "600", "lineHeight": "1.05"}}>Hogy telt ez a hónap?</h1>
<p style={{"margin": "0", "color": "#3B443E"}}>11 rövid állítás, kb. 2 perc. Havonta csak egyszer kérjük – a hónap első Calm-Touch alkalma után.</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="hkod" style={{"fontWeight": "500"}}>Saját 4 jegyű kódod</label>
<input id="hkod" type="text" inputMode="numeric" maxLength="4" autoComplete="off" value={v.code} onChange={v.setCode} style={{"minHeight": "52px", "font": "inherit", "fontSize": "24px", "letterSpacing": "0.4em", "textAlign": "center", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF"}} />
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Ugyanaz a kód, mint a pillanatképnél. Ezzel ellenőrizzük, hogy ebben a hónapban ne kelljen kétszer kitöltened.</span>
</div>
<button type="button" onClick={v.start} disabled={v.codeInvalid} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Kezdhetjük</button>
</div>
</>)}
{v.isMar && (<>
<div style={{"minHeight": "560px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px", "textAlign": "center", "alignItems": "center"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>Ebben a hónapban már kitöltötted.</h2>
<p style={{"margin": "0", "color": "#3B443E"}}>Köszönjük! A havi kérdőívet kódonként havonta egyszer kérjük. Legközelebb a következő hónap első alkalma után jelentkezik.</p>
<button type="button" onClick={v.restart} style={{"minHeight": "44px", "padding": "0 22px", "border": "1px solid #A9B39A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "cursor": "pointer"}}>Vissza (demó)</button>
</div>
</>)}
{v.isKerdoiv && (<>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "30px", "fontWeight": "600", "lineHeight": "1.1"}}>Az elmúlt hónapban…</h2>
<span style={{"color": "#2C5069", "fontWeight": "600"}}>1 = nem jellemző · 10 = teljes mértékben</span>
<div style={{"height": "6px", "background": "#DDE8EF", "borderRadius": "3px", "marginTop": "6px"}}><div style={{"height": "6px", "background": "#3F6E8C", "borderRadius": "3px", "width": `${v.progressPct}%`}}></div></div>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>{v.answered} / 11 megválaszolva</span>
</div>
{v.items.map((it, it_i) => (<Fragment key={it_i}>
<div style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontSize": "12px", "letterSpacing": "0.12em", "color": "#7E3A4A", "fontWeight": "500"}}>{it.no} · {it.area}</span>
<span id={it.labelId} style={{"fontWeight": "500"}}>{it.text}</span>
<div role="group" aria-labelledby={it.labelId} style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "8px"}}>
{it.options.map((o, o_i) => (<Fragment key={o_i}>
{o.selected && (<><button type="button" aria-pressed="true" onClick={o.pick} style={{"minHeight": "44px", "border": "2px solid #3F6E8C", "borderRadius": "10px", "background": "#3F6E8C", "color": "#FFFFFF", "font": "inherit", "fontWeight": "700", "cursor": "pointer"}}>{o.n}</button></>)}
{o.notSelected && (<><button type="button" aria-pressed="false" onClick={o.pick} style={{"minHeight": "44px", "border": "1px solid #A9C1D1", "borderRadius": "10px", "background": "#FFFFFF", "color": "#2E3631", "font": "inherit", "cursor": "pointer"}}>{o.n}</button></>)}
</Fragment>))}
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12px", "color": "#5E6A62"}}><span>1 = nem jellemző</span><span>10 = teljes mértékben</span></div>
</div>
</Fragment>))}
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<label htmlFor="nyitott" style={{"fontWeight": "500"}}>Mi volt a legjobb az alkalmakban, és min változtatnál? <span style={{"fontWeight": "400", "color": "#5E6A62"}}>(nem kötelező)</span></label>
<textarea id="nyitott" rows={4} value={v.open} onChange={v.setOpen} style={{"font": "inherit", "padding": "12px 14px", "border": "1px solid #CDB8A3", "borderRadius": "12px", "background": "#FFFFFF", "resize": "vertical"}}></textarea>
</div>
<button type="button" onClick={v.submit} disabled={v.incomplete} style={{"minHeight": "52px", "border": "none", "borderRadius": "999px", "background": "#7E3A4A", "color": "#FFFFFF", "font": "inherit", "fontWeight": "500", "cursor": "pointer"}}>Beküldöm</button>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Névtelen. A cég csak legalább 5 fős csoportok összesített eredményét látja.</span>
</div>
</>)}
{v.isKesz && (<>
<div style={{"minHeight": "560px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px", "textAlign": "center", "alignItems": "center"}}>
<span style={{"color": "#55665A", "display": "flex"}}><svg width="56" height="56" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.2", "strokeLinecap": "round", "strokeLinejoin": "round"}}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg></span>
<h2 style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "lineHeight": "1.1"}}>Köszönjük!</h2>
<p style={{"margin": "0", "color": "#3B443E"}}>A válaszod bekerült a havi Pulse riportba. A következő havi kérdőív a jövő hónap első alkalma után jelentkezik.</p>
<button type="button" onClick={v.restart} style={{"minHeight": "44px", "padding": "0 22px", "border": "1px solid #A9B39A", "borderRadius": "999px", "background": "transparent", "color": "#55665A", "font": "inherit", "cursor": "pointer"}}>Újrakezdés (demó)</button>
</div>
</>)}
</div>
</div>
    );
  }
}
