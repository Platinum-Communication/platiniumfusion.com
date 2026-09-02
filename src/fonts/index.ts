import localFont from "next/font/local";

export const oxanium = localFont({
  src: "./oxanium-latin-600.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-oxanium",
  display: "swap",
});

export const barlow = localFont({
  src: [
    { path: "./barlow-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./barlow-latin-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});
