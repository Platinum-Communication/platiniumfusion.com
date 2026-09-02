import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Platinum — GPU capacity and delivery plans";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#070708",
          color: "#E8E6E1",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C9CCD2",
          }}
        >
          Platinum
        </div>
        <div style={{ fontSize: 52, marginTop: 28, lineHeight: 1.15, maxWidth: 900 }}>
          Turn AI workload requirements into an actionable GPU capacity and delivery plan.
        </div>
      </div>
    ),
    { ...size },
  );
}
