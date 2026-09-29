import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for the Treatfab Chemicals website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      eyebrow="03 — Cookies"
      title="Cookie Policy"
      intro="This Website uses cookies to improve your browsing experience."
    >
      <LegalSection number="3.1" title="What are cookies?">
        <p>Small text files stored on your device when you visit a website.</p>
      </LegalSection>

      <LegalSection number="3.2" title="Cookies we use">
        <ul className="space-y-3 pl-5">
          <li className="list-disc pl-1"><strong>Essential cookies</strong> — required for basic site functionality, where applicable.</li>
          <li className="list-disc pl-1"><strong>Analytics cookies</strong> — if enabled, Google Analytics or similar tools may be used to understand site traffic and improve content. These are anonymised/aggregated.</li>
        </ul>
      </LegalSection>

      <LegalSection number="3.3" title="Managing cookies">
        <p>You can disable cookies through your browser settings. Disabling essential cookies may affect site functionality.</p>
      </LegalSection>

      <LegalSection number="3.4" title="Third-party cookies">
        <p>If analytics tools are used, they may set their own cookies governed by their respective privacy policies.</p>
      </LegalSection>

      <div className="border border-[#C6972F]/30 bg-[#C6972F]/[0.07] p-5 text-sm leading-6 text-[#0B1F3A]/65">
        If Treatfab adds Google Analytics or another tracking script, a cookie-consent banner should be used before non-essential cookies are set, and the analytics scripts should load only after consent.
      </div>
    </LegalPageShell>
  );
}
