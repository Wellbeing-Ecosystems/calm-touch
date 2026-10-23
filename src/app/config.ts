/**
 * Az ajánlatkérő űrlap ide küldi az előre kitöltött e-mailt (mailto).
 * Amíg az érték null, az „Ajánlatot kérek” gomb letiltott, így nem vezet hibás címre.
 * Példa: export const OFFER_EMAIL: string | null = "info@pszichoszoc.hu";
 */
export const OFFER_EMAIL: string | null = null;

/**
 * Az adatkezelési tájékoztató címe – a pillanatkép és a havi kérdőív hozzájárulás-pipája
 * erre hivatkozik. Az éles honlap tájékoztatójának címét kell ide beírni.
 */
export const PRIVACY_URL = "https://pszichoszoc.hu/adatkezelesi-tajekoztato";
