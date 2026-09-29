import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Treatfab Chemicals website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPageShell
      eyebrow="02 — Terms"
      title="Terms of Use"
      intro="By accessing the Treatfab Chemicals website, you agree to the following terms."
    >
      <LegalSection number="2.1" title="Purpose of the Website">
        <p>This Website provides information about Treatfab Chemicals Private Limited's textile chemical products and allows visitors to submit enquiries. It does not constitute a binding offer to sell; all product quotations are subject to separate written confirmation.</p>
      </LegalSection>

      <LegalSection number="2.2" title="Intellectual property">
        <p>All content on this Website — including the Treatfab name, logo, text, graphics, and product descriptions — is the property of Treatfab Chemicals Private Limited unless otherwise noted, and may not be reproduced without written permission.</p>
      </LegalSection>

      <LegalSection number="2.3" title="Product information disclaimer">
        <p>Product descriptions, applications, and specifications on this Website are provided for general information. Actual product specifications, technical data sheets (TDS), and safety data sheets (SDS) supplied at the time of order shall govern. Treatfab reserves the right to modify formulations and specifications without prior notice on the Website.</p>
      </LegalSection>

      <LegalSection number="2.4" title="No warranty on website content">
        <p>The Website is provided “as is.” While we aim for accuracy, we do not warrant that all content is error-free or continuously available.</p>
      </LegalSection>

      <LegalSection number="2.5" title="Limitation of liability">
        <p>Treatfab shall not be liable for any indirect, incidental, or consequential damages arising from use of this Website, to the extent permitted by applicable Indian law.</p>
      </LegalSection>

      <LegalSection number="2.6" title="External links">
        <p>This Website may link to third-party sites. We are not responsible for the content or privacy practices of external sites.</p>
      </LegalSection>

      <LegalSection number="2.7" title="Governing law">
        <p>These terms are governed by the laws of India, with courts at Bhilwara, Rajasthan having exclusive jurisdiction.</p>
      </LegalSection>

      <LegalSection number="2.8" title="Contact">
        <p>treatfabchem@gmail.com · +91 9829093188 / 9116739555</p>
      </LegalSection>
    </LegalPageShell>
  );
}
