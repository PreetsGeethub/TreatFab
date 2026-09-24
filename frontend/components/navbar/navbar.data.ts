// Navbar navigation data.
// Kept separate from the component so this can later be swapped for a
// CMS/DB-driven fetch without touching the Navbar itself.

export interface SolutionProcess {
    label: string;
    slug: string;
  }
  
  export interface ProductCategory {
    label: string;
    slug: string;
  }
  
  // Order matters here — it should reflect the textile process chain
  // (pre-treatment through finishing), not alphabetical order, since this
  // same sequence is echoed visually in the homepage Solutions section.
  export const solutionsProcesses: SolutionProcess[] = [
    { label: "Pre-treatment", slug: "pre-treatment" },
    { label: "Yarn Dyeing", slug: "yarn-dyeing" },
    { label: "Denim", slug: "denim" },
    { label: "Cotton", slug: "cotton" },
    { label: "Polyester", slug: "polyester" },
    { label: "Sizing", slug: "sizing" },
    { label: "Printing", slug: "printing" },
    { label: "Finishing", slug: "finishing" },
  ];
  
  // Placeholder categories — replace with the client's real product
  // taxonomy once supplied. Keep this list short; Products is intentionally
  // the simpler of the two dropdowns.
  export const productCategories: ProductCategory[] = [
    { label: "Own Chemistry", slug: "treatfab" },
    { label: "Distributed Brands", slug: "distribution" },
    { label: "All Products", slug: "all" },
  ];