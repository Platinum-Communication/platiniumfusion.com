import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070708",
        }}
      >
        <div
          style={{
            width: 92,
            height: 92,
            transform: "rotate(45deg)",
            background: "#C9CCD2",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
