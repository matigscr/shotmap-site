import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "End User License Agreement | Shotmap Studio"
};

export default function EulaPage() {
  return (
    <LegalPage
      title="End User License Agreement"
      effectiveDate="May 5, 2026"
      sections={[
        {
          heading: "License",
          body: "You are granted a license, not ownership."
        },
        {
          heading: "Scope",
          body: "Your license allows Shotmap Studio to be activated and used on one computer. A separate license is required for each additional computer. You may not share, transfer, publish, or resell your license key or license file."
        },
        {
          heading: "Restrictions",
          body: "No sharing, resale, or reverse engineering."
        },
        {
          heading: "Activation",
          body: "Requires online validation."
        },
        {
          heading: "Enforcement",
          body: "Licenses may be revoked for abuse."
        },
        {
          heading: "Ownership",
          body: "All rights belong to Adam Sampson, operating as Shotmap Studio."
        }
      ]}
    />
  );
}
