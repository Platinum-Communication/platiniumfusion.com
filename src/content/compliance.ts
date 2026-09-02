export const compliancePage = {
  title: "Compliance",
  headline: "What we can state about data. Nothing more.",
  support:
    "No ISO, SOC, or residency logos. If a control is not written into an order, it is not a claim.",
  orderTitle: "Put it in the order if you need it",
} as const;

export const dataResidency = [
  {
    label: "No default region",
    value:
      "Data location is named in the contract with the party who actually processes it. This site does not imply EU residency for all work.",
  },
  {
    label: "EU only if written",
    value:
      "If processing must stay inside the EU/EEA, that requirement has to be in the order — not inferred from the Dublin registered office.",
  },
  {
    label: "Inquiry tools",
    value:
      "The contact form and email may use tools we select. Workload data should not be sent unless it is necessary to start the conversation. See the Privacy Policy.",
  },
] as const;

export const isolationLevels = [
  {
    label: "Shared",
    value: "Planning label for multi-tenant style capacity. Exact tenancy depends on the supplier named in the order.",
  },
  {
    label: "Dedicated",
    value: "Planning label for capacity reserved to one customer context. Confirmation is contractual, not marketing.",
  },
  {
    label: "Private / higher isolation",
    value:
      "Planning label for stronger boundary requirements (network, access, or facility). Controls are listed in the SOW only when available.",
  },
] as const;

export const securityControls = [
  {
    label: "Certifications held",
    value: "None published. This site does not display ISO 27001, SOC 2, or similar marks.",
  },
  {
    label: "Access control",
    value: "Defined per engagement with the operating party. Not a global Platinum control-plane claim.",
  },
  {
    label: "Logging & retention",
    value: "Not standardized here. Retention and log access are set in the agreement or supplier policy.",
  },
  {
    label: "Destruction / return",
    value: "Data return or destruction applies only when written into the contract or required by law.",
  },
] as const;

export const orderChecklist = [
  {
    label: "Name the processor",
    value: "Which legal entity actually hosts or processes the workload — Platinum may only coordinate.",
  },
  {
    label: "Name the location",
    value: "Region or facility class, if residency matters. Do not rely on the Dublin registered office.",
  },
  {
    label: "Name the tenancy",
    value: "Shared, dedicated, or listed isolation controls — as contract language, not page copy.",
  },
  {
    label: "Name the operator",
    value: "Customer, supplier, or joint operation, including who holds keys and who sees logs.",
  },
  {
    label: "Name the exit",
    value: "How data and access are returned or destroyed when the window closes.",
  },
] as const;
