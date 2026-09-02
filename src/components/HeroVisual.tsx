export function HeroVisual() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink" aria-hidden>
      <div className="metal-hatch absolute inset-0" />
      <div className="metal-grain absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_38%,rgba(201,204,210,0.14),transparent_52%)]" />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,204,210,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(201,204,210,0.28) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="hero-mark pointer-events-none absolute right-[-4%] top-[10%] h-[62vmin] w-[62vmin]">
        <span className="hero-mark-ring absolute inset-0" />
        <span className="hero-mark-ring hero-mark-ring-2 absolute inset-[16%]" />
        <span className="hero-mark-ring hero-mark-ring-3 absolute inset-[32%]" />
        <span className="hero-mark-core absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-platinum/70" />
      </div>

      <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-ink via-ink/85 to-transparent" />
    </div>
  );
}
