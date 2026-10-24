"use client";

import { useEffect } from "react";

/** A /en és /de oldalakon a <html lang> értékét is átállítja (a gyökér-layout magyar). */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
