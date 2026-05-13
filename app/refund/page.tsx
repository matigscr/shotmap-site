import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Shotmap Studio"
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      effectiveDate="May 5, 2026"
      sections={[
        {
          heading: "Window",
          body: "7-day refund policy."
        },
        {
          heading: "Eligibility",
          body: "Refunds may be available if the software fails to function as described."
        },
        {
          heading: "Non-refundable",
          body: "Refunds may not be available if the software is heavily used or abused."
        },
        {
          heading: "Contact",
          body: "adam@adamsampson.com"
        },
        {
          heading: "Chargebacks",
          body: "Chargebacks may result in license termination."
        }
      ]}
    />
  );
}
