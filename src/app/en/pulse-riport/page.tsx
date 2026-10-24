// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/pulse-riport/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";

export const metadata: Metadata = {
  title: "Calm-Touch Pulse – monthly HR report (example)",
  description: "Example of the monthly Calm-Touch Pulse report: state pulse, effect and monthly trend on a 1–10 scale (10 = best), by team, in groups of at least 5.",
  alternates: { canonical: "/calm-touch/en/pulse-riport" },
};

export default function PulseRiportPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.5", "fontSize": "16px"}}>
<HtmlLang lang="en" />
<div style={{"maxWidth": "1180px", "margin": "0 auto", "padding": "clamp(28px, 4vw, 40px) 20px clamp(48px, 6vw, 64px)", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "12px", "letterSpacing": "0.2em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE · MONTHLY REPORT</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.4vw, 44px)", "lineHeight": "1.05", "color": "#2C5069"}}>[COMPANY] · [MONTH]</h1>
</div>
<span style={{"background": "#F4E3E4", "color": "#5A4248", "borderRadius": "999px", "padding": "8px 16px", "fontSize": "14px", "fontWeight": "500"}}>Example – illustration, not measured data</span>
</div>
<div style={{"background": "#DDE8EF", "borderRadius": "16px", "padding": "14px 20px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "8px 20px", "color": "#2C5069", "fontSize": "15px"}}>
<b>All indicators on a 1–10 scale</b>
<span>1 = not at all</span>
<span>10 = completely</span>
<span style={{"color": "#3F6E8C"}}>For every indicator higher is better; for negatively worded questions (e.g. tension, exhaustion) scoring is reversed: 11 − answer.</span>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Participation</span>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>18 people</span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>22 sessions · 92% completion rate</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>1. State pulse</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#F6EBD3", "color": "#5E4310", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>amber</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>4,6 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>/ 10</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>wellbeing index on arrival</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>2. Effect</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#DDEBE1", "color": "#1F4A33", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#2F6B4A"}}></span>green</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>+3,3 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>points</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>wellbeing index 4.6 <span className="ct-arrow">→</span> 7.9 · 86% improved</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>3. Monthly trend</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#F6EBD3", "color": "#5E4310", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>amber</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>5,3 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>/ 10</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>monthly wellbeing index · 17 responses</span>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><b style={{"fontSize": "18px"}}>The state pulse has been worsening for four months</b><span style={{"fontSize": "14px", "color": "#5E6A62"}}>Wellbeing index on arrival, monthly average (1–10, 10 = best) · below 6 amber, 4 or below red</span></div>
<div style={{"position": "relative", "height": "220px", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "24px", "alignItems": "end", "borderBottom": "1px solid #A9C1D1", "padding": "0 8px"}}>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>5,2</span><div style={{"width": "100%", "maxWidth": "64px", "height": "104px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>5,0</span><div style={{"width": "100%", "maxWidth": "64px", "height": "100px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>4,9</span><div style={{"width": "100%", "maxWidth": "64px", "height": "98px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "700", "color": "#2C5069"}}>4,6</span><div style={{"width": "100%", "maxWidth": "64px", "height": "92px", "background": "#3F6E8C", "borderRadius": "6px 6px 0 0"}}></div></div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "24px", "padding": "0 8px", "fontSize": "14px", "color": "#5E6A62", "textAlign": "center"}}><span>[month 1]</span><span>[month 2]</span><span>[month 3]</span><span style={{"color": "#2C5069", "fontWeight": "600"}}>[this month]</span></div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "10px"}}>
<b style={{"fontSize": "18px"}}>Before <span className="ct-arrow">→</span> after, group average (10 = best)</b>
<div style={{"display": "flex", "gap": "14px", "fontSize": "13px", "color": "#5E6A62"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "16px", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></span>before</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "16px", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></span>after</span></div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "fontSize": "15px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Freedom from tension</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "44%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "79%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,4 <span className="ct-arrow">→</span> 7,9</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Calm</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "39%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "70%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>3,9 <span className="ct-arrow">→</span> 7,0</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Calm thoughts</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "42%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "77%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,2 <span className="ct-arrow">→</span> 7,7</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Mental freshness</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "48%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "72%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,8 <span className="ct-arrow">→</span> 7,2</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Energy</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "44%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "66%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,4 <span className="ct-arrow">→</span> 6,6</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Physical relaxation</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "50%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "81%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>5,0 <span className="ct-arrow">→</span> 8,1</b></div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Safety / comfort: 9.6 / 10 · recommendation score: +62</span>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<b style={{"fontSize": "18px"}}>By team (at least 5 people)</b>
<div style={{"overflowX": "auto"}}>
<table style={{"width": "100%", "minWidth": "720px", "borderCollapse": "collapse", "fontSize": "15px"}}>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "2px solid #DDE8EF", "color": "#2C5069"}}>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Team</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>People</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>State pulse (1–10)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Effect (points)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Monthly trend (1–10)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Sustainability (statement 11)</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #EEF3F6"}}>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[Finance]</th>
<td style={{"padding": "12px"}}>6</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#A63D32"}}></span>3.6 · red</span></td>
<td style={{"padding": "12px"}}>+3,0</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#A63D32"}}></span>4.1 · red</span></td>
<td style={{"padding": "12px"}}>3,9 / 10</td>
</tr>
<tr style={{"borderBottom": "1px solid #EEF3F6"}}>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[Customer service]</th>
<td style={{"padding": "12px"}}>5</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>4.4 · amber</span></td>
<td style={{"padding": "12px"}}>+3,6</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>5.3 · amber</span></td>
<td style={{"padding": "12px"}}>5,1 / 10</td>
</tr>
<tr>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[IT]</th>
<td style={{"padding": "12px"}}>7</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#2F6B4A"}}></span>6.2 · green</span></td>
<td style={{"padding": "12px"}}>+3,2</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>6.4 · amber</span></td>
<td style={{"padding": "12px"}}>6,2 / 10</td>
</tr>
</tbody>
</table>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Groups smaller than 5 are not shown separately. Monthly trend: green above 6.5, amber 4.6–6.5, red 4.5 or below. For statement 11 (sustainability) higher is better.</span>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#2C5069", "color": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "18px"}}>Recommended action</b>
<span style={{"color": "#E6EEF3"}}>[Finance]: state pulse below 4 in three consecutive sessions, monthly trend red. Recommendation: a targeted psychosocial risk assessment, a stress management workshop, and more frequent Calm-Touch sessions during month-end close.</span>
</div>
<div style={{"border": "1px solid #A9C1D1", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "18px", "color": "#2C5069"}}>How to read it</b>
<span style={{"color": "#3B443E"}}>The report shows the state of voluntary participants, not of the whole organisation. The Pulse snapshot is a self-report, not a medical measurement. The effect measures a short-term experience; the monthly trend shows lasting change. With the Pulse+ package the report is complemented by group-level results of a one-off instrument-based assessment (qEEG, HRV, cognitive test).</span>
</div>
</div>
<a href="/calm-touch/en" style={{"alignSelf": "flex-start", "fontWeight": "600"}}><span className="ct-arrow">←</span> Back to the home page</a>
</div>
</div>
  );
}
