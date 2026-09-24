import Image from "next/image";

const HERO_IMAGE_SRC = "/images/treatfab-demo.webp";

const FOREST = "#14251C";
const GOLD = "#C6972F";
const WARM_WHITE = "#FAF7F0";

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

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden md:h-screen md:min-h-[680px]">
      {/* =========================================================
          HERO IMAGE
         ========================================================= */}
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

      {/* =========================================================
          LEFT-SIDE CONTRAST
          Keeps the photograph bright while making the copy readable.
         ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute inset-0
        "
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

      {/* Small lower-left softness */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background:
            "linear-gradient(to top, rgba(20,37,28,0.28), transparent)",
        }}
        aria-hidden="true"
      />

      {/* =========================================================
          HERO COPY
         ========================================================= */}
      <div
        className="
          absolute
          left-0
          top-[27%]
          z-10
          w-full
          px-6
          md:left-[6.5%]
          md:top-[23%]
          md:w-[560px]
          md:px-0
        "
      >
        {/* Gold editorial marker */}
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

        {/* Main heading */}
        <h1
          className="
            max-w-[600px]
            text-[2.65rem]
            font-semibold
            leading-[0.98]
            tracking-[-0.035em]
            sm:text-[3.2rem]
            md:text-[4.15rem]
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
          className="
            mt-5
            max-w-[470px]
            text-[0.98rem]
            leading-[1.5]
            sm:text-[1.05rem]
          "
          style={{
            color: WARM_WHITE,
            textShadow: "0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          From Nature to Everyday Life,
          <br />
          We Add Science for a Sustainable Tomorrow.
        </p>

        {/* =====================================================
            FOUR VALUES
           ===================================================== */}
        <div className="mt-7 flex items-start gap-5 sm:gap-7">
          {VALUES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-w-0 flex-col items-center text-center"
              style={{ color: WARM_WHITE }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center"
                style={{
                  border: "1px solid rgba(250,247,240,0.72)",
                  borderRadius: "999px",
                }}
              >
                <Icon />
              </div>

              <span
                className="
                  mt-2
                  whitespace-nowrap
                  text-[0.62rem]
                  font-medium
                  uppercase
                  sm:text-[0.68rem]
                "
                style={{
                  letterSpacing: "0.04em",
                  textShadow: "0 1px 8px rgba(0,0,0,0.45)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* =====================================================
            ACTIONS
           ===================================================== */}
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

      {/* =========================================================
          SMALL EDITORIAL PHRASE
         ========================================================= */}
    <div
  className="
    absolute
    bottom-[3%]
    left-[6.5%]
    z-10
    hidden
    pointer-events-none
    md:block
  ">
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