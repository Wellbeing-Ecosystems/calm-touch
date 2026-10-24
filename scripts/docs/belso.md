Ez a kézikönyv leírja, hogyan gyűjti és számolja a Calm-Touch Pulse az adatokat, és mi a szakemberek dolga a helyszínen. A cégeknek szóló rövidebb változat: *Calm-Touch Pulse – mérési módszertan*.

## A folyamat a helyszínen

1. **Beállítás a program előtt.** A szakember a telefonján megnyitja a `calm-touch.vercel.app/calm-touch/admin/helyszin` oldalt (felhasználó: admin2). Kiválasztja vagy felveszi a céget és a saját nevét, majd a **QR-kód megjelenítése** gombra kattint.
2. **Saját QR-kód.** A rendszer létrehozza a cég mai alkalmát (ha még nincs), és a szakemberhez kötött QR-kódot ad. Ha több szakember dolgozik, mindegyik a saját kódját használja.
3. **Előtte-pillanatkép.** A résztvevő beolvassa a kódot, megadja a saját négyjegyű kódját és (ha van) a csapatát, elfogadja a hozzájárulást, és kitölti a 6 kérdést.
4. **Calm-Touch alkalom**, 15–20 perc.
5. **Utána-pillanatkép.** Ugyanaz a 6 kérdés, plusz komfort, ajánlás és egy szó. A telefon ugyanabban a böngészőben megjegyzi a kódot.
6. **Havi kérdőív.** A hónap első alkalma után a rendszer felajánlja; ha a kód abban a hónapban már kitöltötte, nem kéri újra.

**Szakembercsere a helyszínen:** a beállító oldalon a „Szakembercsere vagy újabb szakember ugyanitt” űrlappal az új szakember saját QR-kódot kap ugyanarra az alkalomra. Az alkalom általános (szakember nélküli) kódját ne használjuk, mert az onnan érkező válaszok a cég riportjába bekerülnek, de egyik szakember értékelésébe sem.

## Kérdések és pontozás

A kitöltő mindenhol 1–10 között válaszol (1 = nem jellemző, 10 = teljes mértékben). A riportban minden pont úgy olvasandó, hogy **10 = legjobb állapot**, ezért a negatív tartalmú tételek pontja fordított:

<div class="formula">pont = 11 − válasz</div>

### Pillanatkép (előtte és utána)

| # | Kérdés | Pontozás | Név a riportban |
| --- | --- | --- | --- |
| 1 | …feszültnek? | fordított | Feszültségmentesség |
| 2 | …nyugodtnak? | egyenes | Nyugalom |
| 3 | …pörögnek a gondolataid? | fordított | Gondolati nyugalom |
| 4 | …mentálisan fáradtnak? | fordított | Mentális frissesség |
| 5 | …frissnek, energikusnak? | egyenes | Energia |
| 6 | …feszülést a fejed, vállad, karod körül? | fordított | Testi ellazultság |

Csak utána: komfort (1–10), ajánlás (0–10), egy szó (nem kötelező).

**Jóllét-index** egy kitöltésre: a 6 pont átlaga.

<div class="formula">J = (p₁ + p₂ + p₃ + p₄ + p₅ + p₆) / 6</div>

### Havi kérdőív („az elmúlt hónapban”)

| # | Állítás | Pontozás | Melyik mutatóba számít |
| --- | --- | --- | --- |
| 1 | Mentális terhelés | fordított | Havi trend |
| 2 | Kikapcsolódás (könnyen ki tud kapcsolni) | egyenes | Havi trend |
| 3 | Kimerülés a munkanap végén | fordított | Havi trend |
| 4 | Regeneráció (tudatos szünet) | egyenes | Havi trend |
| 5 | Közvetlen hatás | egyenes | Alkalmak értékelése: cég + szakember |
| 6 | Fókusz | egyenes | Alkalmak értékelése: cég + szakember |
| 7 | Testtudatosság | egyenes | Alkalmak értékelése: cég + szakember |
| 8 | Gondoskodó kultúra | egyenes | Alkalmak értékelése: csak cég |
| 9 | Szervezés | egyenes | Alkalmak értékelése: csak cég |
| 10 | Folytatási igény | egyenes | Alkalmak értékelése: cég + szakember |
| 11 | Fenntarthatóság | egyenes | Havi trend + külön mutató |

A 8. és 9. állítás a céget minősíti (szervezeti kultúra, időpontok), ezért a szakember értékelésében nem szerepel.

## Számolt példa

### Egy résztvevő, egy alkalom

| | Feszült | Nyugodt | Pörög | Fáradt | Friss | Feszülés | Jóllét-index |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Előtte válasz | 8 | 3 | 7 | 6 | 4 | 8 | |
| Előtte pont | 3 | 3 | 4 | 5 | 4 | 3 | **3,7** |
| Utána válasz | 3 | 8 | 3 | 4 | 6 | 2 | |
| Utána pont | 8 | 8 | 8 | 7 | 6 | 9 | **7,7** |

Hatás = 7,7 − 3,7 = **+4,0**. A résztvevő piros állapotban érkezett, és zöld hatással távozott.

### Egy csoport, öt résztvevő

| Résztvevő | Előtte-index | Hatás | Ajánlás (0–10) |
| --- | --- | --- | --- |
| A | 3,7 | +4,0 | 10 |
| B | 5,2 | +1,5 | 9 |
| C | 6,5 | +0,5 | 8 |
| D | 4,8 | +2,3 | 6 |
| E | 5,8 | −0,2 | 10 |

- **Állapot-pulzus** = az előtte-indexek átlaga: 26,0 / 5 = **5,2** → sárga.
- **Hatás** = a változások átlaga: 8,1 / 5 = **+1,6** → sárga.
- **Javulók aránya** = 4 / 5 = **80%**.
- **Ajánlási mutató** = 9–10 pontot adók (3 fő = 60%) mínusz 0–6 pontot adók (1 fő = 20%) = **+40**.

### Egy havi kérdőív

- Havi trend: a válaszok 7, 5, 8, 4, 5 (1., 2., 3., 4., 11. állítás), a pontok 4, 5, 3, 4, 5, az átlag **4,2** → piros.
- Alkalmak értékelése, ha az 5–10. állításra adott válaszok 8, 7, 6, 5, 9, 10:
    - a cég riportjában mind a hat számít: 45 / 6 = **7,5**;
    - a szakember értékelésében csak az 5., 6., 7. és 10.: 31 / 4 = **7,8**.

## Mutatók és küszöbök

| Mutató | Számítás | Zöld | Sárga | Piros |
| --- | --- | --- | --- | --- |
| Állapot-pulzus | az előtte-pillanatképek jóllét-indexének átlaga | > 6 | 4,1–6 | ≤ 4 |
| Hatás | (utána-index − előtte-index) átlaga, csak párosított kitöltésekből | ≥ +2 | +1 … +1,9 | < +1 |
| Havi trend | az 1., 2., 3., 4. és 11. havi állítás pontjának átlaga | > 6,5 | 4,6–6,5 | ≤ 4,5 |
| Javulók aránya | a párok hány százalékánál nőtt az index | – | – | – |
| Komfort | az utána-kérdés átlaga (1–10) | – | – | – |
| Ajánlási mutató | 9–10 pontot adók %-a − 0–6 pontot adók %-a | – | – | – |
| Fenntarthatóság | a 11. havi állítás átlaga | – | – | – |

A párosítás kulcsa: ugyanaz az alkalom + ugyanaz a négyjegyű kód. Aki csak előtte vagy csak utána töltött ki, az Állapot-pulzusba (előtte) beleszámít, a Hatásba nem.

### Cégriport és szakemberértékelés

| | Cégriport (havi) | Szakemberértékelés (1, 3 vagy 12 hónap) |
| --- | --- | --- |
| Ki látja | admin; később a cég HR-je | csak admin, belső használatra |
| Csoportosítás | cég, csapat (legalább 5 fő) | szakember, az összes cég alkalmain át |
| Állapot-pulzus | igen | nem (az érkezési állapot nem a szakemberen múlik) |
| Hatás, javulók, komfort, ajánlás | igen | igen |
| Havi trend | igen | nem |
| Alkalmak értékelése | 5–10. állítás | 5., 6., 7. és 10. állítás |

A válasz annak a szakembernek számít, akinek a QR-kódján érkezett. A havi kérdőív is annak a szakembernek számít, akinek a QR-kódjáról megnyitották.

## Adatkezelési szabályok

- **Mit tárolunk:** a négyjegyű kód, a csapat (ha megadták), a nyers válaszok (1–10), az időpont, az alkalom és a szakember (a QR-kódból). Nevet és e-mailt nem kérünk, IP-címet az adatbázisba nem írunk.
- **Hozzájárulás:** a pipa nélkül a rendszer nem fogad választ; a hozzájárulás időpontját rögzítjük.
- **Egy kód, egy kitöltés:** alkalmanként kódonként egy előtte- és egy utána-pillanatkép; a havi kérdőív cégenként kódonként havonta egyszer. Ha a kód már foglalt, a résztvevő másik kódot választhat.
- **5 fős minimum:** 5 fő alatti csapat külön nem jelenik meg; ha az egész cég 5 fő alatt van, a riport figyelmeztet, hogy az eredmény nem adható ki a cégnek.
- **Hozzáférés:** admin2 csak a helyszíni beállítást látja; riportot és szakemberértékelést csak admin. Az adatbázist közvetlenül csak a szerver éri el.
- **Lezárt vagy hibás link:** lezárt alkalomra és ismeretlen kódra nem lehet választ küldeni; a résztvevő hibaüzenetet lát.
- **A szakemberek tájékoztatása:** minden szakember tudjon róla, hogy az alkalmairól belső értékelés készül, és mely mutatók alapján.

## Értelmezés, korlátok, szakmai háttér

- **Kis létszámnál óvatosan.** 10 pár alatt egy-két szélső válasz erősen elviszi a Hatást; szakemberértékelésben legalább 3 hónap adatát nézzük.
- **A Hatás függ az érkezéstől.** Aki eleve jó állapotban érkezik (7 feletti index), annak kevesebb a javulási tere; egy nyugodt csapatnál a sárga Hatás nem rossz jel.
- **A színhatárok kiinduló értékek.** Az Állapot-pulzus a munkahelyi stressz 0–10-es skáláján leírt kockázati sávot követi (5 felett figyelem, 7 körül beavatkozás); a többit az első 3 hónap adatai alapján kalibráljuk.
- **Nem validált skála.** A kérdések validált eszközök fogalmaira épülnek, de rövidített, saját formában. A Pulse ezért trendkövetésre és csoportösszevetésre jó, egyéni diagnosztikára nem. Kutatási célú összevetéshez a pilot elején és végén egy validált rövid skála (pl. WHO-5) is felvehető.
- **Nem a szakember minősítése egyedül.** A szakemberértékelés fejlesztési célú visszajelzés; döntést mindig a számok, a szöveges visszajelzések és a személyes beszélgetés együtt alapozzon meg.
- **Egyedi magas értékek.** Egyéni szinten nem diagnosztizálunk. Ha egy csapat több alkalmon át piros, a cégnek célzott pszichoszociális felmérést vagy stresszkezelési workshopot javaslunk.

A kérdések forrásait és a teljes hivatkozáslistát a cégeknek szóló *Calm-Touch Pulse – mérési módszertan* tartalmazza.
