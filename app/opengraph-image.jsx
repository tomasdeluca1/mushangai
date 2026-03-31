import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tomas Deluca @ muShanghai 2026 — Sponsorship Journey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0d0c0a",
          color: "#f5f0e8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c94b2b",
              fontFamily: "monospace",
            }}
          >
            Buenos Aires → Shanghai · May 2026
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b6459",
              fontFamily: "monospace",
            }}
          >
            mu<span style={{ color: "#c94b2b" }}>Shanghai</span> · 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Building the future
            <br />
            <span style={{ fontStyle: "italic", color: "#c94b2b" }}>from China.</span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#6b6459",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            28 days in Shanghai building at the heart of the Chinese tech ecosystem. Join as a sponsor.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { n: "28", l: "Days" },
              { n: "100+", l: "Builders" },
              { n: "4", l: "Weeks" },
            ].map((s) => (
              <div key={s.l} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>{s.n}</div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6b6459",
                    fontFamily: "monospace",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Tomas Deluca — Huevo
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
