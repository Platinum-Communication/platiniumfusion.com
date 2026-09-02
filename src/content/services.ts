export const servicesPage = {
  title: "Services",
  headline: "Requirements in. A written plan and a named handoff out.",
  support:
    "Platinum models the workload, drafts the options memo, and aligns suppliers when a path exists. GPU class and dates are confirmed per request.",
  artefactsTitle: "How the work runs",
  artefactsSupport:
    "You receive documents and a named operating party — then Platinum’s engagement ends at handoff.",
  classesTitle: "GPU classes used in planning",
  classesNote:
    "These names follow vendor product lines. They label a planning conversation; they are not a stock list.",
  responsibilityTitle: "Who owns what",
} as const;

export type ServiceLine = {
  id: string;
  name: string;
  youGet: string;
  notIncluded: string;
};

export const serviceLines: readonly ServiceLine[] = [
  {
    id: "integration",
    name: "Resource integration",
    youGet:
      "A requirements summary, an options memo, open questions, supplier-alignment notes, and a handoff checklist when access is arranged.",
    notIncluded:
      "Owning a public GPU cloud, or application / MLOps delivery as a default product.",
  },
  {
    id: "compute",
    name: "GPU capacity",
    youGet:
      "A scoped capacity ask (node count, topology, interconnect, timing) and access information once a supplier path is confirmed.",
    notIncluded:
      "On-demand provisioning from a Platinum-owned pool, or colo / power contracts unless separately scoped.",
  },
  {
    id: "serving",
    name: "Model serving",
    youGet:
      "A serving-pattern plan — shared, dedicated, or higher isolation — mapped to latency goals, data handling, and who operates the runtime.",
    notIncluded: "A live inference SKU or a public endpoint under the Platinum brand.",
  },
] as const;

export const engagementArtefacts = [
  {
    label: "Requirements summary",
    value: "What was asked, what is known, and what is still assumed.",
  },
  {
    label: "Options memo",
    value: "Two or three delivery shapes, with the questions that still block a quote.",
  },
  {
    label: "Supplier alignment",
    value: "Who can host or supply, and in what order they must approve access.",
  },
  {
    label: "Handoff checklist",
    value: "Access path, operating party, and follow-up — Platinum stops here.",
  },
] as const;

export const gpuDiscussion = [
  {
    label: "NVIDIA H100",
    use: "Hopper-class starting point for large-model training and high-throughput inference.",
  },
  {
    label: "NVIDIA H200",
    use: "Hopper-class label when HBM capacity for larger contexts or weights is the constraint.",
  },
  {
    label: "NVIDIA B200",
    use: "Blackwell-class label. Availability and interconnect are confirmed per request.",
  },
  {
    label: "NVIDIA B300 Blackwell Ultra",
    use: "Planning label for B300-class conversations. HGX B300 architectures may also be referenced. Availability is confirmed per request.",
  },
  {
    label: "AMD Instinct MI350X",
    use: "When the conversation is not locked to a single accelerator vendor.",
  },
  {
    label: "NVIDIA RTX PRO 6000 Blackwell Server Edition",
    use: "Server Edition only. Distinct from Workstation Edition and Max-Q Edition.",
  },
] as const;
