export type ProcessCategory =
  | "FIBRE"
  | "YARN"
  | "SIZING"
  | "PRE-TREAT"
  | "DYEING"
  | "PRINTING"
  | "DENIM"
  | "FINISH"
  | "GARMENT";

export interface ProcessStage {
  id: string;
  order: number;
  category: ProcessCategory;
  title: string;
  shortLabel: string;
  description: string;
  chips: string[];
  image: string;
}

export const stages: ProcessStage[] = [
  {
    id: "fibre-dyeing",
    order: 1,
    category: "FIBRE",
    title: "Fibre Dyeing",
    shortLabel: "Fibre Preparation",
    description:
      "Levelling and dyeing auxiliaries formulated for uniform shade uptake at the loose-fibre stage, before spinning.",
    chips: ["Cotton", "Wool", "Polyester"],
    image: "/process/fibre-dyeing.jpeg",
  },
  {
    id: "spinning",
    order: 2,
    category: "YARN",
    title: "Spinning",
    shortLabel: "Spinning & Yarn",
    description:
      "Spin finish oils that reduce friction and static during fibre-to-yarn conversion, improving spinning efficiency and yarn quality.",
    chips: ["Spin Finish", "Lubricants", "Antistatic"],
    image: "/process/spinning.jpeg",
  },
  {
    id: "texturing",
    order: 3,
    category: "YARN",
    title: "Texturing",
    shortLabel: "Texturing",
    description:
      "Oils and antistatic agents applied during texturising to give synthetic filament yarn bulk, stretch and a natural handfeel.",
    chips: ["Polyester", "Nylon", "Antistatic"],
    image: "/process/texturing.jpeg",
  },
  {
    id: "yarn-dyeing",
    order: 4,
    category: "DYEING",
    title: "Yarn Dyeing",
    shortLabel: "Yarn Dyeing",
    description:
      "Levelling and dyeing auxiliaries for package and hank dyeing, formulated for cotton, wool, polyester and blends.",
    chips: ["Cotton", "Wool", "Polyester", "P/C Blends"],
    image: "/process/yarn-dying.png",
  },
  {
    id: "sizing",
    order: 5,
    category: "SIZING",
    title: "Sizing",
    shortLabel: "Sizing",
    description:
      "Film-forming size agents that reduce warp breakage and improve weaving efficiency across cotton, polyester and blended yarns.",
    chips: ["Cotton", "Polyester", "P/C Blends"],
    image: "/process/sizing.jpeg",
  },
  {
    id: "desizing-scouring",
    order: 6,
    category: "PRE-TREAT",
    title: "Desizing & Scouring",
    shortLabel: "Desizing & Scouring",
    description:
      "Enzyme desizing and scouring agents that prepare fabric for a clean, even dye uptake downstream.",
    chips: ["Low Foam", "Enzyme Desizing", "Caustic Stable"],
    image: "/process/desizing-scouring.jpeg",
  },
  {
    id: "bleaching-mercerizing",
    order: 7,
    category: "PRE-TREAT",
    title: "Bleaching & Mercerizing",
    shortLabel: "Bleaching & Mercerizing",
    description:
      "Peroxide stabilisers and mercerizing auxiliaries for bright, even whiteness and improved fabric lustre.",
    chips: ["Peroxide Stabiliser", "Mercerizing"],
    image: "/process/bleaching-mercerizing.jpeg",
  },
  {
    id: "fabric-dyeing",
    order: 8,
    category: "DYEING",
    title: "Piece / Fabric Dyeing",
    shortLabel: "Piece / Fabric Dyeing",
    description:
      "Levelling, dispersing and fixing agents for shade consistency, alongside our range of dyes for cotton, wool, polyester and blends.",
    chips: ["Reactive", "Disperse", "Wool Dyeing", "Dyes"],
    image: "/process/piece-fabric-dyeing.jpeg",
  },
  {
    id: "printing",
    order: 9,
    category: "PRINTING",
    title: "Printing",
    shortLabel: "Printing",
    description:
      "Binders, thickeners and fixing agents formulated for sharp, wash-fast prints across printing methods.",
    chips: ["Pigment Printing", "Reactive Printing", "Digital Printing"],
    image: "/process/printing.jpeg",
  },
  {
    id: "denim-processing",
    order: 10,
    category: "DENIM",
    title: "Denim Processing",
    shortLabel: "Denim Processing",
    description:
      "Reduction, oxidation, sizing and enzyme-wash auxiliaries built for high-turbulence rope and slasher dyeing lines.",
    chips: ["Rope Dyeing", "Slasher Compatible", "Enzyme Wash"],
    image: "/process/denim-processing.jpeg",
  },
  {
    id: "finishing",
    order: 11,
    category: "FINISH",
    title: "Finishing",
    shortLabel: "Finishing",
    description:
      "Softeners and functional finishes — easy-care, water-repellent, anti-microbial — for a premium fabric handfeel.",
    chips: ["Softeners", "Water-Repellent", "Anti-Microbial"],
    image: "/process/finishing.jpeg",
  },
  {
    id: "garment-processing",
    order: 12,
    category: "GARMENT",
    title: "Garment Processing",
    shortLabel: "Garment Processing",
    description:
      "Garment dyeing, washing and bio-polishing auxiliaries plus lubricants for smooth garment-stage processing.",
    chips: ["Garment Washing", "Bio-Polishing", "Lubricants"],
    image: "/process/garment-processing.jpeg",
  },
];