import type { Metadata } from "next";
import LegalPageShell, { LegalBulletList, LegalSection } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Treatfab Chemicals Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="01 — Privacy"
      title="Privacy Policy"
      intro="Treatfab Chemicals Private Limited respects your privacy. This policy explains what information we collect through the Website, how we use it, and your rights regarding it, in accordance with India's Digital Personal Data Protection Act, 2023 (DPDP Act)."
    >
      <LegalSection number="1.1" title="Information we collect">
        <p>Information you provide directly: name, company name, phone number, email address, and message content when you submit an enquiry or quote request form.</p>
        <p>Automatically collected information: IP address, browser type, and pages visited, via standard server logs and (if enabled) analytics tools such as Google Analytics.</p>
      </LegalSection>

      <LegalSection number="1.2" title="How we use your information">
        <LegalBulletList items={[
          "To respond to product enquiries and quote requests.",
          "To maintain records of business communication.",
          "To improve the Website's content and usability.",
        ]} />
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
      </LegalSection>

      <LegalSection number="1.3" title="Data sharing">
        <p>We may share information with:</p>
        <LegalBulletList items={[
          "Service providers who help us operate the Website (e.g. hosting, database, email delivery) — bound to confidentiality.",
          "Legal authorities, if required by applicable law.",
        ]} />
      </LegalSection>

      <LegalSection number="1.4" title="Data retention">
        <p>Enquiry data is retained for as long as necessary to respond to your request and maintain business records, or until you request deletion.</p>
      </LegalSection>

      <LegalSection number="1.5" title="Your rights">
        <p>You have the right to:</p>
        <LegalBulletList items={[
          "Access the personal data we hold about you.",
          "Request correction of inaccurate data.",
          "Request deletion of your data, subject to legal record-keeping requirements.",
          "Withdraw consent for future communication.",
        ]} />
        <p>To exercise these rights, contact us at treatfabchem@gmail.com or the Grievance Contact listed below.</p>
      </LegalSection>

      <LegalSection number="1.6" title="Cookies">
        <p>See our separate Cookie Policy for details on cookies used on this Website.</p>
      </LegalSection>

      <LegalSection number="1.7" title="Security">
        <p>We use reasonable technical and organisational measures (HTTPS encryption, access-controlled admin systems) to protect your data, but no online transmission is 100% secure.</p>
      </LegalSection>

      <LegalSection number="1.8" title="Changes to this policy">
        <p>We may update this policy periodically. The “Last updated” date at the top will reflect the latest revision.</p>
      </LegalSection>

      <LegalSection number="1.9" title="Contact">
        <p>Questions about this policy: treatfabchem@gmail.com · +91 9829093188</p>
      </LegalSection>

      <div className="border border-[#C6972F]/30 bg-[#C6972F]/[0.07] p-5 text-sm leading-6 text-[#0B1F3A]/65">
        This privacy policy is based on Treatfab's current legal-page draft and should be reviewed by a lawyer or CA before launch, particularly if analytics, cookies, newsletters, or other data-processing features are added.
      </div>
    </LegalPageShell>
  );
}
