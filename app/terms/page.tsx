import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Shotmap Studio"
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="May 5, 2026"
      intro="Owner: Adam Sampson, operating as Shotmap Studio."
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "By accessing or using Shotmap Studio, the Software, you agree to these Terms."
        },
        {
          heading: "License Grant",
          body: "You are granted a limited, non-exclusive, non-transferable license to use the Software."
        },
        {
          heading: "Restrictions",
          body: "You may not resell, distribute, reverse engineer, or share your license beyond allowed devices."
        },
        {
          heading: "Payments",
          body: "Payments are processed via Stripe."
        },
        {
          heading: "Refunds",
          body: "See Refund Policy."
        },
        {
          heading: "Termination",
          body: "We may revoke access if terms are violated."
        },
        {
          heading: "Disclaimer",
          body: "Software is provided as is."
        },
        {
          heading: "Limitation of Liability",
          body: "Liability is limited to the amount paid."
        },
        {
          heading: "Governing Law",
          body: "Colorado, USA."
        },
        {
          heading: "Contact",
          body: "adam@adamsampson.com"
        }
      ]}
    />
  );
}
