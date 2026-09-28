import { ImageResponse } from "next/og";

export const alt = "Nadeem Ashfaq, Full-Stack Developer and Solutions Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          background: "linear-gradient(135deg, #052e2b 0%, #0f172a 58%, #082f49 100%)",
          color: "#f8fafc"
        }}
      >
        <div style={{ color: "#6ee7b7", fontSize: 24, marginBottom: 24 }}>
          Nadeem Ashfaq
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          Full-Stack Developer &amp; Solutions Architect
        </div>
        <div style={{ color: "#cbd5e1", fontSize: 28, marginTop: 28, maxWidth: 900 }}>
          Web · Microsoft 365 · Google Workspace · AI · Integrations
        </div>
      </div>
    ),
    size
  );
}