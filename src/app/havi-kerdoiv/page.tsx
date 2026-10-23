import type { Metadata } from "next";
import HaviKerdoiv from "./HaviKerdoiv";

export const metadata: Metadata = {
  title: "Havi kérdőív",
  description: "A Calm-Touch Pulse 11 állításos havi kérdőíve, 1–10 skálán. Demó.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <HaviKerdoiv />;
}
