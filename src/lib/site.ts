/**
 * Az oldal éles címe (a /calm-touch nélkül). Most a pszichoszoc.hu alatt fut aloldalként;
 * a végleges saját domainre költözéskor elég a Vercelen a NEXT_PUBLIC_SITE_URL változót átírni.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pszichoszoc.hu";
