import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Desktop EULA | Shotmap Studio"
};

const legalHtml = "<h2>1. License Grant</h2><p>Shotmap Studio grants the user a limited, non-exclusive, non-transferable, revocable license to install and use the Desktop App under a one-time/lifetime desktop license, subject to this EULA.</p><h2>2. Licensed, Not Sold</h2><p>The Desktop App is licensed, not sold. Shotmap Studio and its licensors retain all rights, title, and interest in the software, code, design, branding, and related materials not expressly granted to the user.</p><h2>3. Desktop License Scope</h2><p>A Desktop License applies to the local desktop software. It does not by itself create a recurring Shotmap Studio Access subscription. Eligible Desktop App purchases may include one year of Included Access as described in the Terms of Service and Access Subscription Terms.</p><h2>4. Activation and Verification</h2><p>Certain versions may require activation, entitlement validation, license-key redemption, email delivery, or periodic license verification. Users may not circumvent or interfere with those systems.</p><h2>5. Local Software and Project Files</h2><p>The Desktop App is designed for local project creation and file-based workflows. Users are responsible for saving, exporting, and backing up project files. Desktop project files do not automatically sync to Shotmap Studio Access, iPad, browser storage, or other devices.</p><h2>6. Restrictions</h2><ul><li>Reverse engineer, decompile, disassemble, modify, or create derivative works of the software except where legally permitted.</li><li>Redistribute, rent, lease, sublicense, resell, or share unauthorized copies.</li><li>Circumvent licensing, activation, entitlement, security, or update systems.</li><li>Use the software in violation of applicable law or third-party rights.</li></ul><h2>7. Updates</h2><p>Updates, patches, compatibility fixes, or new versions may be provided at Shotmap Studio’s discretion. A lifetime Desktop License does not guarantee every future major version, paid add-on, online service, or subscription feature unless expressly stated.</p><h2>8. Termination</h2><p>Violation of this EULA may terminate the license. Upon termination, the user must stop using the Desktop App and may be required to delete unauthorized copies.</p><h2>9. Disclaimer</h2><p>The Desktop App is provided “as is” without warranties of any kind to the fullest extent permitted by law. Users are responsible for verifying final exports and production documents.</p><h2>10. Liability Limitation</h2><p>To the fullest extent permitted by law, Shotmap Studio will not be liable for indirect, incidental, consequential, special, punitive, or lost-profit damages, including production disruption, data loss, or loss of project files.</p><h2>11. Relationship to Other Terms</h2><p>This EULA applies to the Desktop App. Shotmap Studio Access, Free Trials, Included Access, subscriptions, refunds, and website use are also governed by the Terms of Service, Access Subscription Terms, Privacy Policy, and Refund Policy as applicable.</p><h2>12. Contact</h2><p>EULA questions may be directed to the official support contact listed on shotmapstudio.com.</p>";

export default function Page() {
  return (
    <LegalPage
      title="Desktop EULA"
      lastUpdated="May 2026"
      pdfHref="/legal/shotmap-studio-desktop-eula.pdf"
      html={legalHtml}
    />
  );
}
