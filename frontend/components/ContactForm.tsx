"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Send,
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

type ResultState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [result, setResult] = useState<ResultState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setResult("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append(
      "subject",
      "New Treatfab Website Enquiry"
    );

    formData.append(
      "from_name",
      "Treatfab Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("success");
        form.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setResult("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white p-6 shadow-[0_30px_90px_rgba(11,31,58,0.08)] md:p-10 lg:p-12">

      {/* Decorative circle */}
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full border border-[#E8B830]/20" />

      {/* Header */}
      <div className="relative mb-10 flex items-end justify-between gap-6 border-b border-[#0B1F3A]/10 pb-7">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B5A61F]">
            Tell us more
          </p>

          <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#0B1F3A]">
            Your enquiry
          </h2>
        </div>

        <div className="hidden text-2xl text-[#B5A61F] md:block">
          ✦
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >

        {/* Name + Company */}
        <div className="grid gap-7 md:grid-cols-2">

          <Field
            label="Name"
            name="name"
            required
            placeholder="Your name"
          />

          <Field
            label="Company"
            name="company"
            placeholder="Company name"
          />

          <Field
            label="Phone"
            name="phone"
            type="tel"
            required
            placeholder="+91"
          />

          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
          />

        </div>

        {/* Enquiry type */}
        <SelectField
          label="What can we help with?"
          name="enquiry_type"
          required
          options={enquiryTypes}
        />

        {/* Process */}
        <SelectField
          label="Process"
          name="process"
          options={processes}
        />

        {/* Requirement */}
        <div>

          <label
            htmlFor="requirement"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]/50"
          >
            Requirement{" "}
            <span className="text-[#B5A61F]">
              *
            </span>
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

        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Success / Error */}
        <AnimatePresence mode="wait">

          {result === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex items-start gap-3 rounded-2xl border border-[#0B3D24]/15 bg-[#0B3D24]/5 p-4 text-sm text-[#0B3D24]"
            >

              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0"
              />

              <div>

                <p className="font-semibold">
                  Enquiry sent.
                </p>

                <p className="mt-1 text-[#0B3D24]/65">
                  Thank you. The Treatfab team will get back
                  to you.
                </p>

              </div>

            </motion.div>
          )}

          {result === "error" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="rounded-2xl border border-red-900/10 bg-red-50 p-4 text-sm text-red-900"
            >
              Something went wrong. Please try again or
              contact us directly by phone or WhatsApp.
            </motion.div>
          )}

        </AnimatePresence>

        {/* Submit */}
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xs text-[11px] leading-5 text-[#0B1F3A]/40">
            By submitting this form, you are sending your
            enquiry to Treatfab Chemicals.
          </p>

          <button
            type="submit"
            disabled={result === "sending"}
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0B3D24] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#082f1c] hover:shadow-xl hover:shadow-[#0B3D24]/15 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {result === "sending"
              ? "Sending..."
              : "Send Enquiry"}

            <Send
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />

          </button>

        </div>

      </form>
    </div>
  );
}


/* -------------------------------- */
/* Input Component */
/* -------------------------------- */

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
        {label}{" "}

        {required && (
          <span className="text-[#B5A61F]">
            *
          </span>
        )}
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


/* -------------------------------- */
/* Select Component */
/* -------------------------------- */

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
        {label}{" "}

        {required && (
          <span className="text-[#B5A61F]">
            *
          </span>
        )}
      </label>

      <div className="relative">

        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="w-full appearance-none rounded-2xl border border-[#0B1F3A]/12 bg-[#F7F5EE]/55 px-5 py-4 pr-12 text-sm text-[#0B1F3A] outline-none transition-all focus:border-[#0B3D24] focus:bg-white focus:ring-4 focus:ring-[#0B3D24]/5"
        >

          <option
            value=""
            disabled
          >
            Select an option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
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