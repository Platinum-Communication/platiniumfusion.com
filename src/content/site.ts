export const site = {
  name: "Platinum",
  legalName: "Platinum Communication Technologies Limited",
  fullLegalName: "Platinum Communication Technologies Limited",
  tagline: "NeoCloud resource integration — planning and delivery",
  description:
    "Ireland-registered company for NeoCloud resource integration: GPU capacity planning, serving plans, and supplier alignment on request. By NeoCloud, we mean third-party providers of dedicated or reserved accelerated-compute capacity.",
  neoCloud:
    "By NeoCloud, we mean third-party providers of dedicated or reserved accelerated-compute capacity.",
  location: "Dublin, Ireland",
  region: "European Union",
  email: "",
  phone: "",
  address: "77 Lower Camden Street, Dublin 2, Dublin, Ireland",
  companyNumber: "760668",
  incorporated: "26 March 2024",
  registry: "Companies Registration Office (Ireland)",
  taxId: "",
  managingDirector: "",
  mainActivity: "NeoCloud / resource integration",
  croActivity: "7022 — Business and other management consultancy activities",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Workloads", href: "/workloads" },
  { label: "Company", href: "/about" },
] as const;

export type NavMenuItem = {
  label: string;
  href: string;
};

export const navMenus: Record<string, readonly NavMenuItem[]> = {
  Company: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Compliance", href: "/compliance" },
    { label: "Privacy", href: "/legal/privacy" },
  ],
} as const;

export const footerNav = [
  { label: "Services", href: "/services" },
  { label: "Workloads", href: "/workloads" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Compliance", href: "/compliance" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerDisclosure = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Terms", href: "/legal/terms" },
] as const;

export const hero = {
  headline: "Turn AI workload requirements into an actionable GPU capacity and delivery plan.",
  support:
    "We translate model, scale, topology, tenancy and residency requirements into an options memo, supplier alignment plan and named operational handoff.",
  disclaimer:
    "Commercial terms, availability, and data location are confirmed in writing — not on this page.",
  primaryCta: { label: "Start an inquiry", href: "/contact" },
  secondaryCta: { label: "See the delivery path", href: "#delivery-path" },
} as const;

export const homeSections = {
  deliverables: {
    eyebrow: "Deliverables",
    title: "What you leave with.",
  },
  flow: {
    eyebrow: "Delivery path",
    title: "From workload to handoff.",
  },
  evidence: {
    eyebrow: "Sample evidence",
    title: "How a decision is written down.",
  },
  workloads: {
    eyebrow: "Workloads",
    title: "Start from the job.",
    cta: "Patterns",
  },
} as const;

export const audienceTags = [
  "Product & research",
  "Infrastructure owners",
  "Procurement & legal",
] as const;

export const deliverables = [
  {
    title: "Requirements model",
    body: "Workload, window, topology, tenancy, residency, and who should operate — written as facts and gaps.",
  },
  {
    title: "Options memo",
    body: "Two or three delivery shapes with GPU class, operator model, and the questions that still block a quote.",
  },
  {
    title: "Supplier alignment",
    body: "Introduction and RFQ coordination with parties who can host or supply, when a path exists.",
  },
  {
    title: "Named handoff",
    body: "Access path, operating party, and follow-up contact. Platinum’s work ends at this written handoff.",
  },
] as const;

export const scopeSplit = {
  title: "One role. Two edges.",
  inTitle: "We take on",
  outTitle: "Held for Services and the contract",
  in: [
    "GPU capacity planning — node count, topology, timing",
    "Model serving plans — shared, dedicated, or isolated",
    "Delivery coordination — suppliers, access, handoff",
  ],
  out: [
    "An owned GPU cloud or public inventory",
    "SKU lists, regions, or standing capacity",
    "Uptime, latency, or price on this website",
  ],
} as const;

export const deliveryFlow = [
  {
    number: "01",
    title: "Workload",
    note: "Name the job: training, inference, media, or isolation.",
  },
  {
    number: "02",
    title: "Constraints",
    note: "Window, residency, tenancy, operator, interconnect.",
  },
  {
    number: "03",
    title: "Capacity plan",
    note: "Options memo: two or three shapes, plus open questions.",
  },
  {
    number: "04",
    title: "Supplier alignment",
    note: "Introduce and align parties who can actually supply.",
  },
  {
    number: "05",
    title: "Handoff",
    note: "Access, operator, and follow-up named in writing.",
  },
] as const;

export const responsibility = [
  {
    party: "Platinum",
    owns: "Requirements modelling, options memo, supplier introduction, and RFQ alignment when a path exists.",
  },
  {
    party: "Capacity contract",
    owns: "Signed with the hosting or supplying party named in the order — not as a Platinum-owned GPU cloud.",
  },
  {
    party: "Operating party",
    owns: "Deployment, runtime, any SLA, and incident response, as written in that party’s agreement.",
  },
  {
    party: "Handoff",
    owns: "Platinum’s engagement ends when access path, operator, and follow-up contact are named in writing.",
  },
] as const;

export const inquiryInputs = [
  { label: "Workload", hint: "Training, inference, media, isolated — or a mix." },
  { label: "Scale", hint: "Nodes, duration, or a budget band. Rough is enough." },
  { label: "Class", hint: "GPU preference, or ask us to propose a starting label." },
  { label: "Timing", hint: "When the window opens, and what slips if it slips." },
  { label: "Boundary", hint: "Residency, tenancy, who holds keys, who operates." },
] as const;

export const workloads = [
  { label: "Training / fine-tuning", href: "/workloads#training" },
  { label: "Live inference", href: "/workloads#inference" },
  { label: "Visual & media compute", href: "/workloads#media" },
  { label: "Isolated deployments", href: "/workloads#isolated" },
] as const;

export const gpuClasses = [
  "NVIDIA H100",
  "NVIDIA H200",
  "NVIDIA B200",
  "NVIDIA B300 Blackwell Ultra",
  "AMD Instinct MI350X",
  "NVIDIA RTX PRO 6000 Blackwell Server Edition",
] as const;

export const finalCta = {
  title: "Describe the workload. We’ll outline a delivery path.",
  cta: { label: "Contact", href: "/contact" },
} as const;

export const aboutPage = {
  title: "Company",
  headline: "Ireland-registered. NeoCloud resource integration.",
  support:
    "Platinum Communication Technologies Limited is a private company limited by shares. By NeoCloud, we mean third-party providers of dedicated or reserved accelerated-compute capacity. Main activity: modelling GPU capacity needs, writing an options memo, and aligning suppliers on request.",
  readingNote:
    "The registered office is a statutory address — not a campus, data centre, or owned compute facility.",
  role: [
    {
      title: "What the company is for",
      body: "Platinum models the workload, writes the options memo, and aligns suppliers when a path exists. Capacity contracts are signed with the hosting or supplying party. Deployment, SLA, and incident response sit with the operating party named at handoff.",
    },
    {
      title: "Why an Irish company",
      body: "The company is incorporated in Ireland, with a registered office in Dublin, and can contract under Irish law. That address is not a promise that processing happens in Ireland or even in the EU. Location of data and of hardware is written into each order, with the party who processes it.",
    },
    {
      title: "What 7022 means here",
      body: "The CRO filing lists business and other management consultancy (7022). In practice that maps to scoping, planning, and coordination around NeoCloud resources — not to an application-development studio, and not to a listed inventory of machines.",
    },
  ],
} as const;

export const contactPage = {
  title: "Contact",
  headline: "Enough to start: model, scale, timing.",
  support:
    "GPU class preference, expected scale, timeline, and any isolation or residency needs are enough. Inquiries are read manually. Terms are confirmed only in a written engagement.",
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company",
    workload: "Workload / GPU / constraints",
  },
  submitLabel: "Submit inquiry",
  sendingLabel: "Sending…",
  delivered: "Inquiry delivered. We will reply to the work email you provided.",
  note: "Do not send secrets, third-party personal data, or production datasets through this form.",
  briefTitle: "What to include",
  briefIntro: "A short brief is more useful than a perfect one. Incomplete answers are expected.",
  brief: [
    "Workload type — training, inference, visual/media, isolated, or a mix",
    "Model family or approximate size, if you already know it",
    "Preferred GPU class, or ‘advise a starting label’",
    "Scale as nodes, duration, or a budget band",
    "When the window opens, and what happens if it slips",
    "Residency, tenancy, key custody, and who should operate the runtime",
  ],
} as const;
