import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description: "Grievance Redressal contact information for Treatfab Chemicals Private Limited.",
};

export default function GrievanceRedressalPage() {
  return (
    <LegalPageShell
      eyebrow="04 — Grievance"
      title="Grievance Redressal"
      intro="For privacy or data-related concerns, Treatfab Chemicals provides the following grievance contact point."
    >
      <LegalSection number="4.1" title="Grievance Contact">
        <p><strong>Designated contact:</strong> Treatfab Chemicals Private Limited</p>
        <p><strong>Email:</strong> office@treatfab.com</p>
        <p><strong>Phone:</strong> +91 9829093188</p>
        <p><strong>Address:</strong> Office No. 3, III Floor, Orient Arcade, Transport Nagar, Bhilwara – 311001, Rajasthan</p>
      </LegalSection>

      <LegalSection number="4.2" title="Response">
        <p>We aim to acknowledge grievances within 48 hours and resolve them within 30 days, in line with the expectations described in Treatfab's current legal-page draft.</p>
      </LegalSection>
    </LegalPageShell>
  );
}
