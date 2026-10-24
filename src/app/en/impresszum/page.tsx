import { LegalPage, legalMeta } from "@/app/jogi/LegalPage";

export const metadata = legalMeta("en", "impresszum");

export default function Page() {
  return <LegalPage lang="en" doc="impresszum" />;
}
