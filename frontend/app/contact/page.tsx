"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const enquiryTypes = [
  "Own Brand Enquiry",
  "Bulk Distribution Enquiry",
  "Technical Requirement",
  "General Enquiry",
];

const processes = [
  "Pre-Treatment",
  "Yarn Dyeing",
  "Denim",
  "Cotton",
  "Polyester",
  "Sizing",
  "Printing",
  "Finishing",
  "Other / Not sure",
];

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [result, setResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );
    formData.append("subject", "New Treatfab Website Enquiry");
    formData.append("from_name", "Treatfab Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "success" : "error");

      if (data.success) form.reset();
    } catch {
      setResult("error");
    }
  }

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5EE] text-[#0B1F3A]">
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#0B3D24]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#E8B830]/40" />
          <div className="absolute -right-16 top-24 h-[360px] w-[360px] rounded-full border border-[#E8B830]/25" />
          <div className="absolute right-20 top-48 h-[180px] w-[180px] rounded-full border border-white/10" />
        </div>

        <motion.div
          aria-hidden
          animate={reduceMotion ? undefined : { rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 bottom-[-180px] h-[620px] w-[620px] rounded-full border border-[#E8B830]/20"
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:px-12">
          <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <motion.div {...reveal}>
              <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B830]">
                <span className="h-px w-10 bg-[#E8B830]" />
                Start a conversation
              </div>

              <h1 className="max-w-5xl text-[clamp(4rem,9vw,8.7rem)] font-medium leading-[0.82] tracking-[-0.07em] text-[#F7F5EE]">
                Let&apos;s make
                <br />
                chemistry
                <span className="text-[#E8B830]"> work.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Tell us what you are working on. Whether you need Treatfab
                chemistry, bulk distribution, or help with a textile process,
                our team can start from your requirement.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="lg:pb-2"
            >
              <div className="border-l border-white/20 pl-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Direct contact
                </p>

                <a
                  href="tel:+919829093188"
                  className="mt-5 block text-xl text-[#F7F5EE] transition-colors hover:text-[#E8B830]"
                >
                  +91 98290 93188
                </a>

                <a
                  href="mailto:treatfabchem@gmail.com"
                  className="mt-2 block text-sm text-white/65 transition-colors hover:text-[#E8B830]"
                >
                  treatfabchem@gmail.com
                </a>

                <a
                  href="https://wa.me/919829093188?text=Hi%20Treatfab%20team%2C%20I%20have%20a%20textile%20chemical%20requirement%20and%20would%20like%20to%20discuss%20it%20with%20your%20team."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#E8B830]/50 px-5 py-3 text-sm font-medium text-[#E8B830] transition-all hover:bg-[#E8B830] hover:text-[#0B3D24]"
                >
                  <MessageCircle size={16} />
                  WhatsApp the team
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E8B830]/60 to-transparent" />
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0B3D24]/55">
                Enquiry
              </p>
              <h2 className="mt-4 max-w-md text-4xl font-medium leading-tight tracking-[-0.04em] text-[#0B1F3A] md:text-5xl">
                Start with the requirement.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#0B1F3A]/60">
                A clear requirement gives our team a better starting point.
                Share the process, application, or distribution need you have
                in mind.
              </p>
            </div>

            <div className="border-t border-[#0B1F3A]/10">
              <div className="flex gap-4 border-b border-[#0B1F3A]/10 py-5">
                <MapPin className="mt-1 shrink-0 text-[#0B3D24]" size={19} />
                <div>
                  <p className="text-sm font-medium">Bhilwara, Rajasthan</p>
                  <p className="mt-1 text-xs leading-5 text-[#0B1F3A]/50">
                    Office No. 3, III Floor, Orient Arcade,
                    <br />
                    Transport Nagar, Bhilwara – 311001
                  </p>
                </div>
              </div>

              <a
                href="tel:+919829093188"
                className="flex gap-4 border-b border-[#0B1F3A]/10 py-5 transition-colors hover:text-[#0B3D24]"
              >
                <Phone className="mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-sm font-medium">Call us</p>
                  <p className="mt-1 text-xs text-[#0B1F3A]/50">
                    +91 98290 93188 · +91 91167 39555
                  </p>
                </div>
              </a>

              <a
                href="mailto:treatfabchem@gmail.com"
                className="flex gap-4 border-b border-[#0B1F3A]/10 py-5 transition-colors hover:text-[#0B3D24]"
              >
                <Mail className="mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="mt-1 text-xs text-[#0B1F3A]/50">
                    treatfabchem@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Image
                src="/images/treatfab-logo3.png"
                alt="Treatfab"
                width={190}
                height={78}
                className="h-auto w-[145px]"
              />
              <span className="h-8 w-px bg-[#0B1F3A]/10" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#0B1F3A]/40">
                Ethical Chemistry
              </span>
            </div>
          </motion.div>

          <motion.div {...reveal}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_30px_90px_rgba(11,31,58,0.08)] md:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#E8B830]/20" />

              <div className="relative mb-10 flex items-end justify-between gap-6 border-b border-[#0B1F3A]/10 pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B5A61F]">
                    Tell us more
                  </p>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                    Your enquiry
                  </h3>
                </div>
                <Sparkles className="hidden text-[#B5A61F] md:block" size={22} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 md:grid-cols-2">
                  <Field label="Name" name="name" required placeholder="Your name" />
                  <Field label="Company" name="company" placeholder="Company name" />
                  <Field label="Phone" name="phone" required type="tel" placeholder="+91" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                </div>

                <SelectField
                  label="What can we help with?"
                  name="enquiry_type"
                  required
                  options={enquiryTypes}
                />

                <SelectField label="Process" name="process" options={processes} />

                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]/50"
                  >
                    Requirement <span className="text-[#B5A61F]">*</span>
                  </label>
                  <textarea
                    id="requirement"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about the process, application, quantity, or requirement you would like to discuss..."
                    className="w-full resize-none rounded-2xl border border-[#0B1F3A]/12 bg-[#F7F5EE]/55 px-5 py-4 text-sm text-[#0B1F3A] outline-none transition-all placeholder:text-[#0B1F3A]/30 focus:border-[#0B3D24] focus:bg-white focus:ring-4 focus:ring-[#0B3D24]/5"
                  />
                </div>

                <input
                  type="hidden"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <AnimatePresence mode="wait">
                  {result === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-2xl border border-[#0B3D24]/15 bg-[#0B3D24]/5 p-4 text-sm text-[#0B3D24]"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                      <div>
                        <p className="font-semibold">Enquiry sent.</p>
                        <p className="mt-1 text-[#0B3D24]/65">
                          Thank you. The Treatfab team will get back to you.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {result === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl border border-red-900/10 bg-red-50 p-4 text-sm text-red-900"
                    >
                      Something went wrong. Please try again or contact us
                      directly by phone or WhatsApp.
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-[#0B1F3A]/40">
                    By submitting this form, you are sending your enquiry to
                    Treatfab Chemicals.
                  </p>

                  <button
                    type="submit"
                    disabled={result === "sending"}
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0B3D24] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#082f1c] hover:shadow-xl hover:shadow-[#0B3D24]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {result === "sending" ? "Sending..." : "Send Enquiry"}
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0B1F3A]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <motion.div {...reveal}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8B830]">
              Prefer WhatsApp?
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[#F7F5EE] md:text-5xl">
              Sometimes the fastest enquiry is a conversation.
            </h2>
          </motion.div>

          <motion.a
            {...reveal}
            href="https://wa.me/919829093188?text=Hi%20Treatfab%20team%2C%20I%20have%20a%20textile%20chemical%20requirement%20and%20would%20like%20to%20discuss%20it%20with%20your%20team."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#E8B830] px-7 py-4 text-sm font-semibold text-[#0B1F3A] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
          >
            <MessageCircle size={18} />
            Start on WhatsApp
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>
      </section>

      <section className="bg-[#F7F5EE] px-6 py-10 text-center md:px-10">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3D24] transition-opacity hover:opacity-60"
        >
          Back to Treatfab
        </Link>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]/50"
      >
        {label} {required && <span className="text-[#B5A61F]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#0B1F3A]/12 bg-[#F7F5EE]/55 px-5 py-4 text-sm text-[#0B1F3A] outline-none transition-all placeholder:text-[#0B1F3A]/30 focus:border-[#0B3D24] focus:bg-white focus:ring-4 focus:ring-[#0B3D24]/5"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]/50"
      >
        {label} {required && <span className="text-[#B5A61F]">*</span>}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="w-full appearance-none rounded-2xl border border-[#0B1F3A]/12 bg-[#F7F5EE]/55 px-5 py-4 pr-12 text-sm text-[#0B1F3A] outline-none transition-all focus:border-[#0B3D24] focus:bg-white focus:ring-4 focus:ring-[#0B3D24]/5"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#0B1F3A]/45"
        />
      </div>
    </div>
  );
}
