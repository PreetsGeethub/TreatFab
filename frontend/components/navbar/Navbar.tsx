"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { solutionsProcesses, productCategories } from "./navbar.data";

type DropdownKey = "solutions" | "products" | null;

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 96);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  /*
   * Hero state:
   * White navigation over photograph.
   *
   * Scrolled state:
   * Warm white navigation over the rest of the site.
   */
  const reversed = !scrolled && !mobileOpen;
  const textColor = reversed ? WARM_WHITE : FOREST;

  return (
    <header
      ref={navRef}
      onMouseLeave={() => setOpenDropdown(null)}
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-500
        motion-reduce:transition-none
      "
      style={{
        /*
         * Rather than a completely transparent navbar over the photograph,
         * give the hero state a very subtle dark glass layer.
         *
         * This makes PRODUCTS / ABOUT / BRANDS readable without making
         * the navbar look like a black rectangle.
         */
        backgroundColor: mobileOpen
          ? WARM_WHITE
          : scrolled
          ? "rgba(250,247,240,0.96)"
          : "rgba(10,18,14,0.16)",

        backdropFilter:
          scrolled || mobileOpen
            ? "blur(12px)"
            : "blur(3px)",

        WebkitBackdropFilter:
          scrolled || mobileOpen
            ? "blur(12px)"
            : "blur(3px)",
      }}
    >
      {/* Very subtle top fade for the photographic hero */}
      {reversed && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-28
          "
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.22), rgba(0,0,0,0))",
          }}
          aria-hidden="true"
        />
      )}

      <div
        className="
          relative
          mx-auto
          flex
          h-24
          max-w-[1440px]
          items-center
          justify-between
          px-6
          md:px-12
        "
        style={{ color: textColor }}
      >
        {/* ---------------------------------------------------------- */}
        {/* TREATFAB LOGO                                               */}
        {/* ---------------------------------------------------------- */}

        <Link
          href="/"
          className="
            group
            flex
            shrink-0
            items-center
          "
          aria-label="Treatfab home"
        >
          <Image
            src="/images/treatfab-logo3.png"
            alt="Treatfab"
            width={220}
            height={90}
            priority
            className="
              h-auto
              w-[145px]
              transition-opacity
              duration-300
              group-hover:opacity-90
              md:w-[185px]
            "
          />
        </Link>

        {/* ---------------------------------------------------------- */}
        {/* DESKTOP NAV                                                 */}
        {/* ---------------------------------------------------------- */}

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          <NavDropdown
            label="Solutions"
            isOpen={openDropdown === "solutions"}
            onToggle={() =>
              setOpenDropdown((cur) =>
                cur === "solutions" ? null : "solutions"
              )
            }
            textColor={textColor}
            reversed={reversed}
          />

          <NavDropdown
            label="Products"
            isOpen={openDropdown === "products"}
            onToggle={() =>
              setOpenDropdown((cur) =>
                cur === "products" ? null : "products"
              )
            }
            textColor={textColor}
            reversed={reversed}
          />

          <NavLink
            href="/about"
            textColor={textColor}
            reversed={reversed}
          >
            About
          </NavLink>

          <NavLink
            href="/brands"
            textColor={textColor}
            reversed={reversed}
          >
            Brands
          </NavLink>
        </nav>

        {/* ---------------------------------------------------------- */}
        {/* CTA + MOBILE                                                */}
        {/* ---------------------------------------------------------- */}

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="
              hidden
              select-none
              border
              px-5
              py-2.5
              text-[0.72rem]
              transition-all
              duration-300
              hover:-translate-y-px
              hover:bg-[#C6972F]
              hover:text-[#14251C]
              md:inline-block
            "
            style={{
              borderColor: reversed
                ? "rgba(250,247,240,0.8)"
                : "rgba(20,37,28,0.65)",

              color: textColor,

              textShadow: reversed
                ? "0 1px 8px rgba(0,0,0,0.55)"
                : "none",

              fontVariant: "all-small-caps",
              letterSpacing: "0.07em",
            }}
          >
            Get a Quote
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="
              flex
              h-9
              w-9
              flex-col
              items-center
              justify-center
              gap-[5px]
              md:hidden
            "
          >
            <span
              className="
                h-px
                w-6
                transition-transform
                duration-300
              "
              style={{
                backgroundColor: textColor,
                transform: mobileOpen
                  ? "translateY(3px) rotate(45deg)"
                  : "none",
              }}
            />

            <span
              className="
                h-px
                w-6
                transition-transform
                duration-300
              "
              style={{
                backgroundColor: textColor,
                transform: mobileOpen
                  ? "translateY(-3px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* GOLD BRAND RAIL                                               */}
      {/* ------------------------------------------------------------ */}

      <div
        className="relative h-[2px] w-full"
        style={{ backgroundColor: GOLD }}
      />

      {/* ------------------------------------------------------------ */}
      {/* DESKTOP DROPDOWN                                              */}
      {/* ------------------------------------------------------------ */}

      {openDropdown && (
        <div
          className="
            hidden
            border-b
            border-black/5
            shadow-[0_14px_30px_rgba(0,0,0,0.08)]
            md:block
          "
          style={{
            backgroundColor: "rgba(250,247,240,0.94)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            color: FOREST,
          }}
        >
          <div className="mx-auto max-w-[1440px] px-12 py-10">
            {openDropdown === "solutions" ? (
              <SolutionsPanel />
            ) : (
              <ProductsPanel />
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* MOBILE MENU                                                   */}
      {/* ------------------------------------------------------------ */}

      {mobileOpen && (
        <div
          className="
            flex
            h-[calc(100vh-6rem)]
            flex-col
            justify-between
            overflow-y-auto
            px-6
            py-8
            md:hidden
          "
          style={{
            backgroundColor: WARM_WHITE,
            color: FOREST,
          }}
        >
          <div className="flex flex-col gap-8">
            <MobileSection title="Solutions">
              {solutionsProcesses.map((p) => (
                <Link
                  key={p.slug}
                  href={`/solutions/${p.slug}`}
                  className="
                    py-1.5
                    text-base
                    transition-colors
                    duration-200
                    hover:text-[#C6972F]
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  {p.label}
                </Link>
              ))}
            </MobileSection>

            <MobileSection title="Products">
              {productCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="
                    py-1.5
                    text-base
                    transition-colors
                    duration-200
                    hover:text-[#C6972F]
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </MobileSection>

            <Link
              href="/about"
              className="text-base"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              href="/brands"
              className="text-base"
              onClick={() => setMobileOpen(false)}
            >
              Brands
            </Link>
          </div>

          <Link
            href="/enquiry"
            className="
              mt-10
              border
              px-5
              py-3
              text-center
              text-[0.8rem]
            "
            style={{
              borderColor: FOREST,
              fontVariant: "all-small-caps",
              letterSpacing: "0.06em",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

/* ================================================================ */
/* NAV LINK                                                         */
/* ================================================================ */

function NavLink({
  href,
  textColor,
  reversed,
  children,
}: {
  href: string;
  textColor: string;
  reversed: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        rounded-sm
        px-3
        py-2
        text-[0.78rem]
        transition-all
        duration-300
        hover:bg-white/10
        hover:text-[var(--gold)]
      "
      style={
        {
          color: textColor,

          textShadow: reversed
            ? "0 1px 7px rgba(0,0,0,0.72)"
            : "none",

          fontVariant: "all-small-caps",
          letterSpacing: "0.045em",

          "--gold": GOLD,
        } as React.CSSProperties
      }
    >
      {children}

      {/* Tiny gold underline */}
      <span
        className="
          absolute
          bottom-[2px]
          left-3
          h-px
          w-0
          transition-all
          duration-300
          group-hover:w-[calc(100%-1.5rem)]
        "
        style={{
          backgroundColor: GOLD,
        }}
        aria-hidden="true"
      />
    </Link>
  );
}

/* ================================================================ */
/* DROPDOWN TRIGGER                                                 */
/* ================================================================ */

function NavDropdown({
  label,
  isOpen,
  onToggle,
  textColor,
  reversed,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  textColor: string;
  reversed: boolean;
}) {
  return (
    <button
      type="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={onToggle}
      onMouseEnter={() => {
        if (!isOpen) onToggle();
      }}
      className="
        group
        rounded-sm
        px-3
        py-2
        text-[0.78rem]
        transition-all
        duration-300
        hover:bg-white/10
        focus-visible:outline
        focus-visible:outline-1
        focus-visible:outline-offset-4
      "
      style={
        {
          color: textColor,

          textShadow: reversed
            ? "0 1px 7px rgba(0,0,0,0.72)"
            : "none",

          fontVariant: "all-small-caps",
          letterSpacing: "0.045em",

          outlineColor: GOLD,
        } as React.CSSProperties
      }
    >
      <span
        className="transition-colors duration-300"
        style={{
          color: isOpen ? GOLD : textColor,
        }}
      >
        {label}
      </span>

      <span
        className="
          ml-1
          inline-block
          h-1
          w-1
          rotate-45
          border-r
          border-b
          transition-transform
          duration-300
        "
        style={{
          borderColor: isOpen ? GOLD : textColor,

          transform: isOpen
            ? "rotate(225deg) translateY(-1px)"
            : "rotate(45deg)",
        }}
        aria-hidden="true"
      />
    </button>
  );
}

/* ================================================================ */
/* SOLUTIONS PANEL                                                  */
/* ================================================================ */

function SolutionsPanel() {
  return (
    <div>
      <p
        className="mb-5 text-[0.7rem]"
        style={{
          color: FOREST,
          fontVariant: "all-small-caps",
          letterSpacing: "0.05em",
          opacity: 0.6,
        }}
      >
        Browse by process
      </p>

      <ul className="grid grid-cols-2 gap-x-12 gap-y-3 md:grid-cols-4">
        {solutionsProcesses.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/solutions/${p.slug}`}
              className="
                group
                flex
                items-center
                gap-2
                text-[1.05rem]
                transition-colors
                duration-200
                hover:text-[var(--gold)]
              "
              style={
                {
                  color: FOREST,
                  "--gold": GOLD,
                } as React.CSSProperties
              }
            >
              <span
                className="
                  h-px
                  w-0
                  transition-all
                  duration-200
                  group-hover:w-3
                "
                style={{
                  backgroundColor: GOLD,
                }}
                aria-hidden="true"
              />

              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================ */
/* PRODUCTS PANEL                                                   */
/* ================================================================ */

function ProductsPanel() {
  return (
    <div>
      <p
        className="mb-5 text-[0.7rem]"
        style={{
          color: FOREST,
          fontVariant: "all-small-caps",
          letterSpacing: "0.05em",
          opacity: 0.6,
        }}
      >
        Browse the catalogue
      </p>

      <ul className="flex flex-col gap-3">
        {productCategories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/products/${c.slug}`}
              className="
                group
                flex
                items-center
                gap-2
                text-[1.05rem]
                transition-colors
                duration-200
                hover:text-[var(--gold)]
              "
              style={
                {
                  color: FOREST,
                  "--gold": GOLD,
                } as React.CSSProperties
              }
            >
              <span
                className="
                  h-px
                  w-0
                  transition-all
                  duration-200
                  group-hover:w-3
                "
                style={{
                  backgroundColor: GOLD,
                }}
                aria-hidden="true"
              />

              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================ */
/* MOBILE SECTION                                                   */
/* ================================================================ */

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="mb-3 text-[0.7rem]"
        style={{
          color: FOREST,
          fontVariant: "all-small-caps",
          letterSpacing: "0.05em",
          opacity: 0.6,
        }}
      >
        {title}
      </p>

      <div className="flex flex-col">{children}</div>
    </div>
  );
}