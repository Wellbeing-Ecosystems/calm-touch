/**
 * Az ajánlatkérő űrlap ide küldi az előre kitöltött e-mailt (mailto).
 * Amíg az érték null, az „Ajánlatot kérek” gomb letiltott, így nem vezet hibás címre.
 * Példa: export const OFFER_EMAIL: string | null = "info@pszichoszoc.hu";
 */
export const OFFER_EMAIL: string | null = "ugyfelszolgalat@stressz-m.hu";

/**
 * Az ajánlatkérés / jelentkezés oldala a bevetel.hu-n. Ha meg van adva, a Cégeknek oldal
 * ajánlatkérő része erre a címre visz (új lapon); ez elsőbbséget élvez az e-mailes űrlappal szemben.
 * Példa: export const OFFER_URL: string | null = "https://bevetel.hu/...";
 */
export const OFFER_URL: string | null = "https://bevetel.hu/intrest?id=521e16bcad0d4d75&lang=hu";

/**
 * Az Adatfelhasználási nyilatkozat (adatkezelési tájékoztató) címe – a pillanatkép és a havi kérdőív
 * hozzájárulás-pipája erre hivatkozik, a kitöltés nyelvén. Forrás: scripts/legal/ (build.py).
 */
export const PRIVACY_URL = "/calm-touch/adatkezeles";
export const privacyUrl = (lang: string) => (lang === "en" || lang === "de" ? `/calm-touch/${lang}/adatkezeles` : PRIVACY_URL);
