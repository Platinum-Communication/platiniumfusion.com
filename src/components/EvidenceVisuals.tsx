"use client";

import { useState, type JSX } from "react";
import {
  compareCards,
  handoffLanes,
  optionsMemoSample,
  topologyMatrix,
} from "@/content/evidence";

const tabs = [
  { id: "memo", label: "Memo" },
  { id: "topology", label: "Topology" },
  { id: "axes", label: "Axes" },
  { id: "handoff", label: "Handoff" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function MemoSheet() {
  return (
    <article className="relative overflow-hidden bg-ink p-4 md:p-7">
      <p
        aria-hidden
        className="pointer-events-none absolute right-2 top-8 rotate-[-18deg] font-display text-4xl font-semibold uppercase tracking-[0.12em] text-steel-mid/40 md:text-6xl"
      >
        Sample
      </p>
      <div className="relative">
        <div className="flex items-end justify-between gap-4 border-b border-platinum/25 pb-3">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
              {optionsMemoSample.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
              {optionsMemoSample.title}
            </h3>
          </div>
          <p className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-platinum-dim sm:block">
            {optionsMemoSample.date}
          </p>
        </div>
        <p className="mt-3 text-xs text-mist">
          {optionsMemoSample.client} · {optionsMemoSample.note}
        </p>
        <dl className="mt-4 divide-y divide-steel border-y border-steel">
          {optionsMemoSample.fields.map((field) => (
            <div key={field.label} className="grid gap-1 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-platinum-dim">
                {field.label}
              </dt>
              <dd className="text-sm text-cloud">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function TopologyMatrix() {
  return (
    <article className="bg-ink-soft p-4 md:p-7">
      <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
        {topologyMatrix.title}
      </h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[18rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-platinum/25">
              <th className="py-2 pr-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-platinum-dim">
                Axis
              </th>
              {topologyMatrix.columns.map((column) => (
                <th
                  key={column}
                  className="py-2 pr-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-platinum-dim last:pr-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {topologyMatrix.rows.map((row) => (
              <tr key={row.label} className="border-b border-steel align-top last:border-b-0">
                <th className="py-2.5 pr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-paper">
                  {row.label}
                </th>
                {row.cells.map((cell) => (
                  <td key={cell} className="py-2.5 pr-3 text-sm text-mist last:pr-0">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function CompareCards() {
  return (
    <article className="bg-ink p-4 md:p-7 lg:bg-ink-soft">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
        Decision axes
      </p>
      <ul className="mt-4 grid grid-cols-3 gap-px bg-steel">
        {compareCards.map((card) => (
          <li key={card.title} className="bg-ink-soft p-3 md:p-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-paper md:text-base">
              {card.title}
            </h3>
            <ul className="mt-2 space-y-1.5">
              {card.items.map((item) => (
                <li key={item} className="text-xs leading-snug text-mist md:text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}

function HandoffDiagram() {
  return (
    <article className="bg-ink-soft p-4 md:p-7 lg:bg-ink">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
        Responsibility handoff
      </p>
      <ol className="mt-4 grid grid-cols-3 gap-0">
        {handoffLanes.map((lane, i) => (
          <li
            key={lane.title}
            className={`px-2 md:px-4 ${i === 0 ? "pl-0" : "border-l border-steel"} ${i === 2 ? "pr-0" : ""}`}
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-paper md:text-base">
              {lane.title}
            </h3>
            <ul className="mt-2 space-y-1.5">
              {lane.items.map((item) => (
                <li key={item} className="text-xs leading-snug text-mist md:text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </article>
  );
}

const panels: Record<TabId, () => JSX.Element> = {
  memo: MemoSheet,
  topology: TopologyMatrix,
  axes: CompareCards,
  handoff: HandoffDiagram,
};

export function EvidenceVisuals() {
  const [tab, setTab] = useState<TabId>("memo");
  const Active = panels[tab];

  return (
    <>
      <div className="lg:hidden">
        <div role="tablist" aria-label="Sample evidence" className="grid grid-cols-4 border border-b-0 border-steel">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              className={`min-h-11 px-2 font-mono text-[11px] uppercase tracking-[0.12em] ${
                tab === item.id ? "bg-ink text-paper" : "bg-ink-soft text-mist"
              }`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="border border-steel">
          <Active />
        </div>
      </div>

      <div className="hidden gap-px bg-steel lg:grid lg:grid-cols-2">
        <MemoSheet />
        <TopologyMatrix />
        <CompareCards />
        <HandoffDiagram />
      </div>
    </>
  );
}
