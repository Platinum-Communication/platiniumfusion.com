export const workloadsPage = {
  title: "Workloads",
  headline: "Start from the job. Hardware comes second.",
  support:
    "These patterns are how we structure a planning conversation. They are not packaged products, and they do not imply that a matching cluster is standing idle.",
} as const;

export type WorkloadPattern = {
  id: string;
  number: string;
  name: string;
  lead: string;
  when: string;
  weNeed: readonly string[];
  weDoNot: readonly string[];
};

export const workloadPatterns: readonly WorkloadPattern[] = [
  {
    id: "training",
    number: "01",
    name: "Training / fine-tuning",
    lead: "A bounded window to train or adapt a model — often with multi-node topology, checkpoint storage, and a hard stop date.",
    when: "Typical when a research or product team already knows the model family and needs capacity for a run, not a forever fleet.",
    weNeed: [
      "Approximate model size, precision, and whether the run is single-node or multi-node",
      "Checkpoint and storage expectations",
      "The window: start, duration, and what slips if capacity slips",
    ],
    weDoNot: [
      "Publish a training SKU, a cluster size, or a tokens-per-second number on this site",
      "Promise interconnect performance that has not been named in the order",
    ],
  },
  {
    id: "inference",
    number: "02",
    name: "Live inference",
    lead: "A serving path for models that must answer in a product — latency and concurrency as goals, not as a public SLA.",
    when: "Typical when the constraint is a serving pattern (shared, dedicated, or isolated) rather than a one-off training burst.",
    weNeed: [
      "Model family, context length, and whether batch or interactive traffic dominates",
      "Latency or concurrency targets stated as goals",
      "Who operates the runtime after handoff",
    ],
    weDoNot: [
      "Offer a public inference endpoint or a self-serve API under the Platinum brand",
      "Treat a latency goal mentioned on this page as a contractual SLA",
    ],
  },
  {
    id: "media",
    number: "03",
    name: "Visual & media compute",
    lead: "GPU time for generation, rendering, transcode, or other visual pipelines — often bursty, often storage-heavy.",
    when: "Typical when the job is framed by resolution, codec, batch size, or interactive vs offline throughput.",
    weNeed: [
      "Interactive vs batch, and any resolution / codec constraints already known",
      "Whether the pipeline is a short burst or a standing render path",
      "Whether NVIDIA RTX PRO 6000 Blackwell Server Edition is in scope, or datacentre-class accelerators only",
    ],
    weDoNot: [
      "Publish render-farm capacity or a media product catalogue",
      "Guarantee codec or throughput numbers that belong in a measured engagement",
    ],
  },
  {
    id: "isolated",
    number: "04",
    name: "Isolated deployments",
    lead: "When tenancy, network boundary, or operator model is the hard requirement — not an afterthought to a GPU name.",
    when: "Typical for regulated data, customer-operated runtimes, or any case where shared tenancy is not acceptable until proven otherwise.",
    weNeed: [
      "Which controls are mandatory: network, access, tenancy, key custody",
      "Whether the customer, a supplier, or both must operate the runtime",
      "Whether EU/EEA (or another) residency is a must — stated, not inferred from Irish registration",
    ],
    weDoNot: [
      "Treat ‘private’ as a marketing badge without listing controls in the SOW",
      "Imply that Ireland registration equals Ireland processing",
    ],
  },
] as const;
