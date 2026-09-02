/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070708",
        "ink-soft": "#101114",
        steel: "#2A2D33",
        "steel-mid": "#4A4E56",
        mist: "#A7ABB3",
        cloud: "#E8E6E1",
        paper: "#F3F1EC",
        platinum: {
          DEFAULT: "#C9CCD2",
          dim: "#8B9098",
          bright: "#E8E6E1",
          deep: "#5C6168",
        },
        accent: {
          DEFAULT: "#C9CCD2",
          mid: "#9EA3AB",
          deep: "#E8E6E1",
          soft: "rgba(201, 204, 210, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-oxanium)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-barlow)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-barlow)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        soft: "0px",
        panel: "0px",
        bar: "0px",
      },
      boxShadow: {
        glow: "0 0 48px rgba(201, 204, 210, 0.08)",
        panel: "0 18px 40px rgba(0, 0, 0, 0.45)",
        lift: "0 8px 24px rgba(0, 0, 0, 0.4)",
        bar: "0 10px 28px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
