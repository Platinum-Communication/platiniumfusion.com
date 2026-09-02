export const optionsMemoSample = {
  eyebrow: "Anonymised sample",
  title: "Options memo · OM-0142",
  client: "Confidential · EU product team",
  date: "Sample format",
  note: "Placeholder figures. Not an offer.",
  fields: [
    { label: "Workload", value: "Fine-tune, 8-node, 14-day window" },
    { label: "Constraints", value: "EU processing; dedicated tenancy; customer-held keys" },
    { label: "Option A", value: "NVIDIA H200 · dedicated · supplier-operated" },
    { label: "Option B", value: "NVIDIA H100 · dedicated · customer-operated" },
    { label: "Open", value: "Interconnect class · checkpoint storage · who holds keys" },
  ],
} as const;

export const topologyMatrix = {
  title: "Topology decision",
  columns: ["Single node", "Multi-node"] as const,
  rows: [
    {
      label: "When",
      cells: ["Fits in one GPU or one dense node", "Model or batch needs scale-out"],
    },
    {
      label: "Interconnect",
      cells: ["On-board NVLink / PCIe class", "NVLink / InfiniBand-class fabric"],
    },
    {
      label: "Ask Platinum",
      cells: ["Node class and local storage", "Node count, topology, fabric class"],
    },
  ],
} as const;

export const compareCards = [
  {
    title: "Capacity",
    items: ["Node count and GPU class", "Window and duration", "Burst vs standing"],
  },
  {
    title: "Tenancy",
    items: ["Shared", "Dedicated", "Private / higher isolation"],
  },
  {
    title: "Residency",
    items: ["Named in the order", "Processor named", "Not inferred from Dublin"],
  },
] as const;

export const handoffLanes = [
  {
    title: "Platinum",
    items: ["Requirements model", "Options memo", "Supplier alignment", "Written handoff"],
  },
  {
    title: "Operating party",
    items: ["Access provision", "Runtime", "Any SLA", "Incident response"],
  },
  {
    title: "Customer",
    items: ["Workload owner", "Signs capacity contract", "Key custody if required", "Accepts handoff"],
  },
] as const;

export const operatingTempo = {
  label: "Inquiry acknowledgment",
  value: "Two Irish business days for a complete brief.",
  note: "Operating target, not a contractual SLA.",
} as const;
