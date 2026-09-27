import Image from "next/image";

const HERO_IMAGE_SRC = "/images/treatfab-demo.webp";
const MOBILE_HERO_IMAGE_SRC = "/images/mobile-hero.png";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";
const SOFT_WHITE = "#F7F4EC";

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M25 7C15 7 7 13 7 23c7 1 14-2 18-9 1-2 1-5 0-7Z" />
      <path d="M7 23c3-5 7-8 12-11" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="10" />
      <path d="M16 10v3M16 19v3M10 16h3M19 16h3M12 12l2 2M18 18l2 2M20 12l-2 2M14 18l-2 2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="10" />
      <path d="M6 16h20M16 6c3 3 4 6 4 10s-1 7-4 10M16 6c-3 3-4 6-4 10s1 7 4 10" />
    </svg>
  );
}

function TogetherIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="11" cy="12" r="3.5" />
      <circle cx="21" cy="12" r="3.5" />
      <path d="M4.5 24c.5-4 3-6 6.5-6s6 2 6.5 6M14.5 24c.5-4 3-6 6.5-6s6 2 6.5 6" />
    </svg>
  );
}

const VALUES = [
  {
    label: "Safer",
    icon: LeafIcon,
  },
  {
    label: "Smarter",
    icon: SparkIcon,
  },
  {
    label: "Greener",
    icon: GlobeIcon,
  },
  {
    label: "Better Together",
    icon: TogetherIcon,
  },
];

function Values({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div
      className={
        mobile
          ? "flex items-start justify-between gap-2"
          : "mt-7 flex items-start gap-5 sm:gap-7"
      }
    >
      {VALUES.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="flex min-w-0 flex-col items-center text-center"
          style={{
            color: mobile ? FOREST : WARM_WHITE,
          }}
        >
          <div
            className="flex h-10 w-10 items-center justify-center"
            style={{
              border: mobile
                ? `1px solid rgba(20,37,28,0.35)`
                : "1px solid rgba(250,247,240,0.72)",
              borderRadius: "999px",
            }}
          >
            <Icon />
          </div>

          <span
            className="
              mt-2
              whitespace-nowrap
              text-[0.58rem]
              font-medium
              uppercase
              sm:text-[0.68rem]
            "
            style={{
              letterSpacing: "0.04em",
              textShadow: mobile
                ? "none"
                : "0 1px 8px rgba(0,0,0,0.45)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   DESKTOP HERO
   ============================================================ */

function DesktopHero() {
  return (
    <section className="relative hidden h-screen min-h-[680px] w-full overflow-hidden md:block">
      {/* Hero image */}
      <Image
        src={HERO_IMAGE_SRC}
        alt="Family enjoying soft, comfortable fabrics"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: "center 42%",
        }}
      />

      {/* Left-side contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(20,37,28,0.58) 0%,
              rgba(20,37,28,0.34) 25%,
              rgba(20,37,28,0.08) 48%,
              rgba(20,37,28,0) 68%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Bottom softness */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background:
            "linear-gradient(to top, rgba(20,37,28,0.28), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Hero copy */}
      <div
        className="
          absolute
          left-[6.5%]
          top-[23%]
          z-10
          w-[560px]
        "
      >
        {/* Gold marker */}
        <div
          className="mb-5 h-[2px] w-10"
          style={{ backgroundColor: GOLD }}
        />

        {/* Eyebrow */}
        <p
          className="mb-4 text-[0.68rem] font-medium uppercase"
          style={{
            color: GOLD,
            letterSpacing: "0.14em",
          }}
        >
          Innovative Textile Chemical Solutions
        </p>

        {/* Heading */}
        <h1
          className="
            max-w-[600px]
            text-[4.15rem]
            font-semibold
            leading-[0.98]
            tracking-[-0.035em]
          "
          style={{
            color: WARM_WHITE,
            textShadow: "0 2px 18px rgba(0,0,0,0.35)",
          }}
        >
          Safer Fabrics
          <br />
          for{" "}
          <span style={{ color: GOLD }}>
            Brighter Lives
          </span>
        </h1>

        {/* Supporting statement */}
        <p
          className="mt-5 max-w-[470px] text-[1.05rem] leading-[1.5]"
          style={{
            color: WARM_WHITE,
            textShadow: "0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          From Nature to Everyday Life,
          <br />
          We Add Science for a Sustainable Tomorrow.
        </p>

        {/* Values */}
        <Values />

        {/* Actions */}
        <div className="relative z-20 mt-7 flex items-center gap-6">
          {/* Get a Quote */}
          <a
            href="/contact"
            className="
              border
              px-6
              py-3
              text-[0.7rem]
              font-medium
              uppercase
              transition-all
              duration-300
              hover:bg-[#C6972F]
              hover:text-[#14251C]
            "
            style={{
              borderColor: GOLD,
              color: WARM_WHITE,
              letterSpacing: "0.09em",
            }}
          >
            Get a Quote
          </a>

          {/* Explore Solutions */}
          <a
            href="/solutions"
            className="
              group
              relative
              text-[0.7rem]
              font-medium
              uppercase
            "
            style={{
              color: WARM_WHITE,
              letterSpacing: "0.07em",
              textShadow: "0 1px 8px rgba(0,0,0,0.45)",
            }}
          >
            Explore Solutions

            <span
              className="
                absolute
                -bottom-1
                left-0
                h-px
                w-full
                origin-left
                scale-x-50
                transition-transform
                duration-300
                group-hover:scale-x-100
              "
              style={{
                backgroundColor: GOLD,
              }}
            />
          </a>
        </div>
      </div>

      {/* Editorial phrase */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[3%]
          left-[6.5%]
          z-10
        "
      >
        <p
          className="text-[1.45rem] leading-[1.05]"
          style={{
            color: WARM_WHITE,
            fontFamily: "cursive",
            fontStyle: "italic",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          From Fibre
          <br />
          to a Brighter
          <br />
          Tomorrow
        </p>

        <div
          className="mt-3 h-[2px] w-14"
          style={{
            backgroundColor: GOLD,
            transform: "rotate(-4deg)",
          }}
        />
      </div>
    </section>
  );
}

/* ============================================================
   MOBILE HERO
   ============================================================ */

   function MobileHero() {
    return (
      <section
        className="relative block w-full overflow-hidden md:hidden"
        style={{
          backgroundColor: SOFT_WHITE,
        }}
      >
        {/* ======================================================
            MOBILE HERO IMAGE
           ====================================================== */}
        <div className="relative h-[680px] w-full overflow-hidden">
          <Image
            src={MOBILE_HERO_IMAGE_SRC}
            alt="Family enjoying soft, comfortable fabrics"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "center center",
            }}
          />
  
          {/* ==================================================
              READABILITY LAYER
             ================================================== */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(20,37,28,0.58) 0%,
                  rgba(20,37,28,0.46) 20%,
                  rgba(20,37,28,0.25) 40%,
                  rgba(20,37,28,0.10) 58%,
                  rgba(20,37,28,0.18) 100%
                )
              `,
            }}
            aria-hidden="true"
          />
  
          {/* ==================================================
              MAIN COPY
             ================================================== */}
          <div
            className="
              absolute
              left-0
              right-0
              top-[105px]
              z-10
              px-6
            "
          >
            {/* Gold marker */}
            <div
              className="mb-4 h-[2px] w-10"
              style={{
                backgroundColor: GOLD,
              }}
            />
  
            {/* Eyebrow */}
            <p
              className="
                mb-3
                max-w-[300px]
                text-[0.62rem]
                font-semibold
                uppercase
              "
              style={{
                color: GOLD,
                letterSpacing: "0.14em",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              Innovative Textile Chemical Solutions
            </p>
  
            {/* Main heading */}
            <h1
              className="
                max-w-[350px]
                text-[2.5rem]
                font-semibold
                leading-[0.96]
                tracking-[-0.04em]
              "
              style={{
                color: WARM_WHITE,
                textShadow: "0 2px 16px rgba(0,0,0,0.42)",
              }}
            >
              Safer Fabrics
              <br />
              for{" "}
              <span style={{ color: GOLD }}>
                Brighter Lives
              </span>
            </h1>
          </div>
  
          {/* ==================================================
              BOTTOM CONTENT
              CTA ABOVE SUPPORTING COPY
             ================================================== */}
          <div
            className="
              absolute
              bottom-[145px]
              left-0
              right-0
              z-20
              px-6
            "
          >
            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Get a Quote */}
              <a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  px-5
                  py-3
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  transition-all
                  duration-300
                "
                style={{
                  borderColor: GOLD,
                  color: WARM_WHITE,
                  letterSpacing: "0.09em",
                  backgroundColor: "rgba(20,37,28,0.18)",
                }}
              >
                Get a Quote
              </a>
  
              {/* Explore Solutions */}
              <a
                href="/solutions"
                className="
                  group
                  relative
                  text-[0.68rem]
                  font-semibold
                  uppercase
                "
                style={{
                  color: WARM_WHITE,
                  letterSpacing: "0.07em",
                  textShadow: "0 1px 8px rgba(0,0,0,0.45)",
                }}
              >
                Explore Solutions
  
                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-50
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                  style={{
                    backgroundColor: GOLD,
                  }}
                />
              </a>
            </div>
  
            {/* Supporting statement */}
            <p
              className="
                mt-5
                max-w-[335px]
                text-[0.88rem]
                font-medium
                leading-[1.45]
              "
              style={{
                color: WARM_WHITE,
                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              }}
            >
              From Nature to Everyday Life,
              <br />
              We Add Science for a Sustainable Tomorrow.
            </p>
          </div>
  
          {/* ==================================================
              TRUST / VALUE LABELS
              JUST ABOVE THE FABRIC WAVE
             ================================================== */}
          <div
            className="
              absolute
              bottom-[48px]
              left-0
              right-0
              z-20
              px-6
            "
          >
            <Values />
          </div>
  
          {/* ==================================================
              FABRIC WAVE
              AT THE VERY BOTTOM
             ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[-8px]
              left-[-10%]
              z-10
              h-[115px]
              w-[120%]
            "
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 500 120"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
            >
              <path
                d="
                  M-20 70
                  C55 18, 105 18, 170 62
                  C235 106, 285 106, 350 58
                  C415 10, 465 18, 520 66
                "
                stroke={GOLD}
                strokeWidth="1.4"
                opacity="0.72"
              />
  
              <path
                d="
                  M-20 76
                  C55 24, 105 24, 170 68
                  C235 112, 285 112, 350 64
                  C415 16, 465 24, 520 72
                "
                stroke={WARM_WHITE}
                strokeWidth="0.9"
                opacity="0.72"
              />
  
              <path
                d="
                  M-20 82
                  C55 30, 105 30, 170 74
                  C235 118, 285 118, 350 70
                  C415 22, 465 30, 520 78
                "
                stroke={GOLD}
                strokeWidth="0.7"
                opacity="0.5"
              />
  
              <path
                d="
                  M-20 88
                  C55 36, 105 36, 170 80
                  C235 124, 285 124, 350 76
                  C415 28, 465 36, 520 84
                "
                stroke={WARM_WHITE}
                strokeWidth="0.6"
                opacity="0.58"
              />
            </svg>
          </div>
        </div>
      </section>
    );
  }

/* ============================================================
   HERO
   ============================================================ */

export default function Hero() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
}