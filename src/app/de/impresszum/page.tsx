import { LegalPage, legalMeta } from "@/app/jogi/LegalPage";

export const metadata = legalMeta("de", "impresszum");

export default function Page() {
  return <LegalPage lang="de" doc="impresszum" />;
}
