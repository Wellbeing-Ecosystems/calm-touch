import { marked } from 'marked';
import fs from 'fs';
const F = 'node_modules/@fontsource';
const font = (pkg, fam, w) => ['latin','latin-ext'].map(s =>
  `@font-face{font-family:'${fam}';font-weight:${w};src:url(${F}/${pkg}/files/${pkg}-${s}-${w}-normal.woff2) format('woff2');}`).join('\n');
const fonts = [font('nunito','Nunito',600),font('nunito','Nunito',700),font('nunito-sans','Nunito Sans',400),font('nunito-sans','Nunito Sans',600),font('nunito-sans','Nunito Sans',700)].join('\n');
const css = `
${fonts}
@page{size:A4;margin:18mm 17mm 20mm;}
*{box-sizing:border-box}
body{font-family:'Nunito Sans',sans-serif;color:#2E3631;font-size:10.5pt;line-height:1.5;margin:0;}
.cover{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #DDE8EF;padding-bottom:12px;margin-bottom:18px}
.cover img{height:46px}
.tag{font-size:8pt;letter-spacing:.18em;font-weight:700;color:#2C5069;background:#DDE8EF;border-radius:999px;padding:4px 12px}
h1{font-family:'Nunito',sans-serif;font-weight:700;color:#2C5069;font-size:24pt;line-height:1.1;margin:0 0 4px}
.sub{color:#5E6A62;font-size:9.5pt;margin-bottom:16px}
h2{font-family:'Nunito',sans-serif;font-weight:700;color:#55665A;font-size:14.5pt;margin:22px 0 6px;break-after:avoid}
h3{font-family:'Nunito',sans-serif;font-weight:700;color:#2C5069;font-size:11.5pt;margin:14px 0 6px;break-after:avoid}
p{margin:0 0 8px}
ul,ol{margin:0 0 8px;padding-left:20px} li{margin:2px 0}
table{width:100%;border-collapse:collapse;margin:6px 0 10px;font-size:9pt;break-inside:auto}
th{background:#DDE8EF;color:#2C5069;text-align:left;font-weight:700;padding:5px 7px}
td{padding:5px 7px;border-bottom:1px solid #EADFD2;vertical-align:top}
tr{break-inside:avoid}
tr:nth-child(even) td{background:#FAF6F1}
a{color:#3F6E8C;text-decoration:none}
strong{color:#2E3631}
em{color:#5A4248}
code{font-size:9pt;background:#F5EEE3;padding:1px 4px;border-radius:4px}
.formula{font-family:'Nunito',sans-serif;font-weight:700;color:#2C5069;background:#DDE8EF;border-radius:10px;padding:8px 14px;margin:6px 0 10px;display:inline-block}
.foot{margin-top:20px;border-top:1px solid #EADFD2;padding-top:8px;font-size:8pt;color:#5E6A62}
ol li{font-size:9pt}
`;
const docs = [
 {md:'ceges.md', out:'Calm-Touch_Pulse_meresi_modszertan.html', title:'Calm-Touch Pulse – mérési módszertan', tag:'CÉGEKNEK', sub:'Hogyan mérjük az alkalmak hatását · 2026. október'},
 {md:'belso.md', out:'Calm-Touch_Pulse_belso_kezikonyv.html', title:'Calm-Touch Pulse – belső módszertani kézikönyv', tag:'BELSŐ HASZNÁLATRA', sub:'Szakembereknek és munkatársaknak · 2026. október'},
 {md:'ceges_en.md', out:'Calm-Touch_Pulse_measurement_method_EN.html', title:'Calm-Touch Pulse – measurement method', tag:'FOR COMPANIES', sub:'How we measure the effect of the sessions · October 2026', foot:'Calm Touch · Operated by: Alternatíva Tanácsadó Csoport Kft. · Calm-Touch is a workplace wellbeing service, not a medical treatment.'},
 {md:'ceges_de.md', out:'Calm-Touch_Pulse_Messmethodik_DE.html', title:'Calm-Touch Pulse – Messmethodik', tag:'FÜR UNTERNEHMEN', sub:'Wie wir die Wirkung der Sitzungen messen · Oktober 2026', foot:'Calm Touch · Betreiber: Alternatíva Tanácsadó Csoport Kft. · Calm-Touch ist ein betriebliches Wellbeing-Angebot, keine medizinische Behandlung.'},
];
for (const d of docs) {
  const body = marked.parse(fs.readFileSync(d.md,'utf8'));
  const html = `<!doctype html><html lang="${d.md.includes('_en') ? 'en' : d.md.includes('_de') ? 'de' : 'hu'}"><head><meta charset="utf-8"><title>${d.title}</title><style>${css}</style></head><body>
<div class="cover"><img src="logo-fekvo.webp" alt="Calm Touch"><span class="tag">${d.tag}</span></div>
<h1>${d.title}</h1><div class="sub">${d.sub}</div>${body}
<div class="foot">${d.foot ?? 'Calm Touch · Üzemeltető: Alternatíva Tanácsadó Csoport Kft. · A Calm-Touch munkahelyi jóllétet támogató szolgáltatás, nem egészségügyi kezelés.'}</div></body></html>`;
  fs.writeFileSync(d.out, html);
}
// site content (public doc only, without intro title)
for (const [md, out] of [['ceges.md','content.ts'],['ceges_en.md','content_en.ts'],['ceges_de.md','content_de.ts']])
  fs.writeFileSync(out, '// Generálva a cégeknek szóló módszertani dokumentumból (scripts: pdfbuild/build.mjs).\nexport const methodHtml = ' + JSON.stringify(marked.parse(fs.readFileSync(md,'utf8'))) + ';\n');
