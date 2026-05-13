import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Shotmap Studio"
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="May 5, 2026"
      sections={[
        {
          heading: "Data Collected",
          body: "Email, payment data via Stripe, and license data."
        },
        {
          heading: "Usage",
          body: "Data is used to provide services, licenses, and support."
        },
        {
          heading: "Third Parties",
          body: "Stripe and hosting providers."
        },
        {
          heading: "Security",
          body: "Reasonable protections are used."
        },
        {
          heading: "Contact",
          body: "adam@adamsampson.com"
        }
      ]}
    />
  );
}
