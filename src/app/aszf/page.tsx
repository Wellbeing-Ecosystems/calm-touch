import { LegalPage, legalMeta } from "@/app/jogi/LegalPage";

export const metadata = legalMeta("hu", "aszf");

export default function Page() {
  return <LegalPage lang="hu" doc="aszf" />;
}
