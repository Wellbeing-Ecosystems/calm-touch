import type { NextConfig } from "next";

/**
 * A Calm Touch a /calm-touch alapútvonalon fut, így a pszichoszoc.hu projekt egy
 * rewrite-tal aloldalként tudja kiszolgálni (pszichoszoc.hu/calm-touch/...).
 * A kódban a linkek és képek ezért teljes, /calm-touch-csal kezdődő útvonalak.
 */
const nextConfig: NextConfig = {
  basePath: "/calm-touch",
  async redirects() {
    return [{ source: "/", destination: "/calm-touch", basePath: false, permanent: false }];
  },
};

export default nextConfig;
