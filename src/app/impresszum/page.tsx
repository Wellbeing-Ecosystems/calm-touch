import { LegalPage, legalMeta } from "@/app/jogi/LegalPage";

export const metadata = legalMeta("hu", "impresszum");

export default function Page() {
  return <LegalPage lang="hu" doc="impresszum" />;
}
