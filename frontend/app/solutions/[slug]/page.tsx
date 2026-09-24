import { notFound } from "next/navigation";
import SolutionPageClient from "./SolutionPageClient";

const SOLUTIONS = {
  "pre-treatment": {
    number: "01",
    title: "Pre-Treatment",
    eyebrow: "Prepare · Purify · Stabilise",
    description:
      "Chemistry that prepares fibres and fabrics for consistent colour, cleaner processing and reliable downstream performance.",
    image: "/process/desizing-scouring.jpeg",
    applications: [
      "Desizing",
      "Scouring",
      "Bleaching",
      "Wetting",
      "Peroxide Stabilisation",
      "Mercerizing",
    ],
    benefits: [
      "Improved fabric preparation",
      "More consistent downstream dyeing",
      "Controlled wetting and processing",
      "Support for cleaner process conditions",
    ],
    chemistry: [
      "Desizing chemistry",
      "Scouring auxiliaries",
      "Wetting agents",
      "Peroxide stabilisers",
    ],
  },

  "yarn-dyeing": {
    number: "02",
    title: "Yarn Dyeing",
    eyebrow: "Control · Colour · Consistency",
    description:
      "Auxiliary chemistry supporting controlled yarn dyeing, even colour distribution and reliable batch-to-batch performance.",
    image: "/process/fibre-dyeing.jpeg",
    applications: [
      "Package Dyeing",
      "Hank Dyeing",
      "Levelling",
      "Dispersing",
      "Fixing",
      "Dyeing Auxiliaries",
    ],
    benefits: [
      "Controlled colour development",
      "Improved colour uniformity",
      "Reliable batch performance",
      "Process-focused auxiliary chemistry",
    ],
    chemistry: [
      "Levelling agents",
      "Dispersing agents",
      "Fixing auxiliaries",
      "Dyeing auxiliaries",
    ],
  },

  denim: {
    number: "03",
    title: "Denim",
    eyebrow: "Indigo · Wash · Finish",
    description:
      "Process chemistry for denim production, from indigo dyeing through washing, appearance development and finishing.",
    image: "/process/denim-processing.jpeg",
    applications: [
      "Indigo Dyeing",
      "Denim Washing",
      "Desizing",
      "Finishing",
      "Anti-Backstaining",
      "Denim Auxiliaries",
    ],
    benefits: [
      "Support for denim washing processes",
      "Controlled fabric appearance",
      "Improved process consistency",
      "Chemistry across dyeing and finishing",
    ],
    chemistry: [
      "Indigo auxiliaries",
      "Washing chemistry",
      "Anti-backstaining agents",
      "Finishing auxiliaries",
    ],
  },

  cotton: {
    number: "04",
    title: "Cotton",
    eyebrow: "Natural Fibre · Preparation · Colour",
    description:
      "Solutions for cotton and cotton-rich textiles across preparation, dyeing, washing and finishing.",
    image: "/process/piece-fabric-dyeing.jpeg",
    applications: [
      "Pre-Treatment",
      "Reactive Dyeing",
      "Washing",
      "Levelling",
      "Fixing",
      "Finishing",
    ],
    benefits: [
      "Reliable cotton preparation",
      "Controlled colour development",
      "Improved process consistency",
      "Solutions across multiple stages",
    ],
    chemistry: [
      "Pre-treatment auxiliaries",
      "Levelling agents",
      "Fixing agents",
      "Finishing chemistry",
    ],
  },

  polyester: {
    number: "05",
    title: "Polyester",
    eyebrow: "Synthetic Fibre · Dispersion · Control",
    description:
      "Chemistry for polyester processing focused on controlled dyeing, dispersion and consistent final results.",
    image: "/process/fibre-dyeing.jpeg",
    applications: [
      "Pre-Treatment",
      "Disperse Dyeing",
      "Levelling",
      "Dispersing",
      "Washing",
      "Finishing",
    ],
    benefits: [
      "Controlled disperse dyeing",
      "Improved colour uniformity",
      "Efficient auxiliary action",
      "Reliable processing",
    ],
    chemistry: [
      "Dispersing agents",
      "Levelling agents",
      "Dyeing auxiliaries",
      "Washing auxiliaries",
    ],
  },

  sizing: {
    number: "06",
    title: "Sizing",
    eyebrow: "Strength · Lubrication · Weaving",
    description:
      "Chemistry for warp preparation, helping improve yarn strength, weaving performance and process stability.",
    image: "/process/sizing.jpeg",
    applications: [
      "Sizing Agents",
      "Film Formers",
      "Lubricants",
      "Anti-Static Chemistry",
      "Warp Preparation",
      "Weaving Support",
    ],
    benefits: [
      "Improved warp preparation",
      "Support for weaving performance",
      "Controlled yarn lubrication",
      "Process stability",
    ],
    chemistry: [
      "Sizing agents",
      "Film formers",
      "Lubricants",
      "Anti-static chemistry",
    ],
  },

  printing: {
    number: "07",
    title: "Printing",
    eyebrow: "Pattern · Colour · Definition",
    description:
      "Process auxiliaries supporting textile printing with controlled application, colour development and fabric performance.",
    image: "/process/printing.jpeg",
    applications: [
      "Pigment Printing",
      "Reactive Printing",
      "Disperse Printing",
      "Printing Auxiliaries",
      "Wetting",
      "Fixing",
    ],
    benefits: [
      "Controlled print application",
      "Consistent colour development",
      "Improved process control",
      "Support across printing systems",
    ],
    chemistry: [
      "Printing auxiliaries",
      "Wetting agents",
      "Fixing chemistry",
      "Print process aids",
    ],
  },

  finishing: {
    number: "08",
    title: "Finishing",
    eyebrow: "Feel · Function · Final Character",
    description:
      "Final-stage chemistry that helps define the hand feel, appearance and functional performance of finished textiles.",
    image: "/process/finishing.jpeg",
    applications: [
      "Softeners",
      "Easy-Care Finishes",
      "Functional Finishes",
      "Surface Modification",
      "Hand Feel",
      "Performance Finishes",
    ],
    benefits: [
      "Controlled fabric hand feel",
      "Enhanced finished appearance",
      "Functional performance",
      "Consistent finishing results",
    ],
    chemistry: [
      "Softeners",
      "Easy-care chemistry",
      "Functional finishes",
      "Surface modification chemistry",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({
    slug,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution =
    SOLUTIONS[slug as keyof typeof SOLUTIONS];

  if (!solution) {
    notFound();
  }

  const entries = Object.entries(SOLUTIONS);
  const currentIndex = Number(solution.number) - 1;

  const previous =
    currentIndex > 0 ? entries[currentIndex - 1] : null;

  const next =
    currentIndex < entries.length - 1
      ? entries[currentIndex + 1]
      : null;

  return (
    <SolutionPageClient
      solution={solution}
      previous={previous}
      next={next}
    />
  );
}