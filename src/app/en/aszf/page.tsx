import { LegalPage, legalMeta } from "@/app/jogi/LegalPage";

export const metadata = legalMeta("en", "aszf");

export default function Page() {
  return <LegalPage lang="en" doc="aszf" />;
}
