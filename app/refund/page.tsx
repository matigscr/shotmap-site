import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Shotmap Studio"
};

const legalHtml = "<h2>1. Desktop License Refund Window</h2><p>Desktop App license purchases may be eligible for refund within 14 days of purchase unless otherwise stated at checkout, excluded by law, or disqualified by abuse, fraud, chargeback activity, or other policy violation. Refund approval may require proof of purchase and may be limited if the license has been heavily used, transferred, abused, or used to circumvent access controls.</p><h2>2. Shotmap Studio Access Subscriptions</h2><p>Standalone Access subscriptions may be canceled at any time through the account, billing provider, or Stripe Customer Portal where available. Cancellation stops future renewal. Unless required by law or expressly approved, cancellation does not automatically provide a prorated refund for unused time in the current billing period.</p><h2>3. Included Access</h2><p>Included Access provided with an eligible Desktop App purchase has no separate cash value, is not a separate paid subscription, and is not refundable as a standalone item. If a Desktop App purchase is refunded, any related Included Access grant may be canceled, disabled, or revoked.</p><h2>4. Free Trial</h2><p>Free Trial access may be provided through an email code or trial access flow for a limited period. Free Trials do not automatically convert into paid subscriptions unless the checkout or billing flow clearly states otherwise. Trial codes, expired trials, and unused trial periods are not redeemable for cash.</p><h2>5. Failed Payments</h2><p>Failure to complete payment, failed renewals, expired payment methods, or payment disputes may result in account warnings, grace periods, suspension, or termination of Access.</p><h2>6. Chargebacks and Disputes</h2><p>Unauthorized or abusive chargebacks may result in suspension of services, cancellation of Access, revocation of license-related benefits, and account review. Users should contact support first for billing problems before opening a payment dispute.</p><h2>7. Taxes, Fees, and Payment Provider Rules</h2><p>Refund amounts may be affected by taxes, currency conversion, payment processor rules, transaction timing, chargeback status, and applicable law. Some fees or taxes may not be recoverable.</p><h2>8. How to Request a Refund</h2><p>Refund requests and billing inquiries should be submitted through the official support contact listed on shotmapstudio.com. Include the purchase email, order or invoice information, product purchased, purchase date, and a short explanation of the issue.</p><h2>9. Policy Changes</h2><p>Shotmap Studio may update this Refund Policy from time to time. The policy shown at the time of purchase or the policy required by applicable law will govern where required.</p>";

export default function Page() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="May 2026"
      pdfHref="/legal/shotmap-studio-refund-policy.pdf"
      html={legalHtml}
    />
  );
}
