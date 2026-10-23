import type { Metadata } from "next";
import Pillanatkep from "./Pillanatkep";

export const metadata: Metadata = {
  title: "Pillanatkép előtte–utána",
  description: "Calm-Touch Pulse pillanatkép: 6 kérdés az alkalom előtt és után, 1–10 skálán. Demó.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <Pillanatkep />;
}
