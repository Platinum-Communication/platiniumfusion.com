export const faqPage = {
  title: "FAQ",
  headline: "How an engagement works.",
  support:
    "Platinum writes the plan and aligns suppliers. Capacity contracts, runtime, and any SLA sit with the parties named at handoff.",
} as const;

export const faqItems = [
  {
    q: "What do I receive?",
    a: "A requirements model, an options memo, supplier alignment when a path exists, and a written handoff naming access, operator, and follow-up.",
  },
  {
    q: "Who signs the capacity contract?",
    a: "The hosting or supplying party named in the order. Platinum is not selling a Platinum-owned GPU cloud.",
  },
  {
    q: "Who deploys, operates, and handles incidents?",
    a: "The operating party named at handoff. Any SLA is theirs, as written in their agreement. Platinum’s work ends at that named handoff.",
  },
  {
    q: "Does Platinum introduce suppliers?",
    a: "Yes, when a delivery path exists: introduction and RFQ alignment. Platinum does not guarantee inventory.",
  },
  {
    q: "What is NeoCloud on this site?",
    a: "Third-party providers of dedicated or reserved accelerated-compute capacity. It is our working term, not a formal industry taxonomy.",
  },
  {
    q: "Which GPU products do you discuss?",
    a: "Planning often starts from NVIDIA H100, H200, B200, B300 Blackwell Ultra (including HGX B300 architectures), AMD Instinct MI350X, and NVIDIA RTX PRO 6000 Blackwell Server Edition. Names are planning labels, not a stock list.",
  },
  {
    q: "Why Ireland if the machines may be elsewhere?",
    a: "The company is incorporated in Ireland, registered office at 77 Lower Camden Street, Dublin 2. Hardware and data location are named in the order with the processor — not inferred from that office.",
  },
  {
    q: "Who owns models and data?",
    a: "You do, unless a later contract says otherwise. The inquiry form does not transfer IP.",
  },
  {
    q: "How are prices and service levels set?",
    a: "In the written quote or order with the supplying and operating parties. This website does not publish a price list or SLA.",
  },
  {
    q: "What happens when I submit the form?",
    a: "If a public email is listed, your mail client opens with the brief. If it is not listed yet, the form copies the brief to your clipboard and does not claim a send. Do not include secrets or production datasets.",
  },
] as const;
