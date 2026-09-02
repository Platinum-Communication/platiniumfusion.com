import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-32 md:px-8">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-platinum">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[0.04em] text-paper md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-mist">
        The page you requested is not part of the Platinum site map.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center clip-corner metal-sheen px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:brightness-110"
      >
        Back to home →
      </Link>
    </section>
  );
}
