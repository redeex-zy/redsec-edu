import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const size = {
  width: 1200,
  height: 630,
};

let fontDataPromise:
  | Promise<
      [
        {
          name: string;
          data: ArrayBuffer;
          weight: 700;
          style: "normal";
        },
        {
          name: string;
          data: ArrayBuffer;
          weight: 500;
          style: "normal";
        },
      ]
    >
  | null = null;

function getFonts() {
  if (!fontDataPromise) {
    fontDataPromise = Promise.all([
      readFile(join(process.cwd(), "app/fonts/FiraSansCondensed-Bold.ttf")),
      readFile(join(process.cwd(), "app/fonts/NotoSans-Medium.ttf")),
    ]).then(([displayFont, bodyFont]) => {
      return [
        {
          name: "RedSec Display",
          data: displayFont.buffer.slice(
            displayFont.byteOffset,
            displayFont.byteOffset + displayFont.byteLength,
          ),
          weight: 700 as const,
          style: "normal" as const,
        },
        {
          name: "RedSec Body",
          data: bodyFont.buffer.slice(
            bodyFont.byteOffset,
            bodyFont.byteOffset + bodyFont.byteLength,
          ),
          weight: 500 as const,
          style: "normal" as const,
        },
      ];
    });
  }

  return fontDataPromise;
}

function trimText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = trimText(
    searchParams.get("title") || siteConfig.name,
    88,
  );
  const eyebrow = trimText(
    searchParams.get("eyebrow") || "Education cybersecurity",
    44,
  );
  const description = trimText(
    searchParams.get("description") ||
      "Authorized checks, clear reporting, awareness training, and student-focused digital protection.",
    170,
  );

  const fonts = await getFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #07111f 0%, #030713 52%, #020617 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 18%, rgba(255, 77, 103, 0.24), transparent 28%), radial-gradient(circle at 86% 22%, rgba(92, 231, 255, 0.18), transparent 30%), linear-gradient(0deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(123, 160, 197, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 160, 197, 0.08) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            maskImage:
              "radial-gradient(circle at center, black 32%, rgba(0,0,0,0.82) 62%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: 110,
            width: 420,
            height: 420,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(92, 231, 255, 0.24), rgba(92, 231, 255, 0.08) 34%, rgba(2, 6, 23, 0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -40,
            width: 380,
            height: 380,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(255, 77, 103, 0.22), rgba(255, 77, 103, 0.08) 32%, rgba(2, 6, 23, 0) 72%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "74%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#86e6ff",
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "RedSec Display",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(255, 77, 103, 0.84), rgba(92, 231, 255, 0.84))",
                }}
              />
              <span>{eyebrow}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div
                style={{
                  fontFamily: "RedSec Display",
                  fontSize: 84,
                  lineHeight: 0.94,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  maxWidth: 760,
                  textWrap: "balance",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  width: 460,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(255, 77, 103, 0.7), rgba(92, 231, 255, 0.52), rgba(92, 231, 255, 0))",
                }}
              />
              <div
                style={{
                  fontFamily: "RedSec Body",
                  color: "#cbd5e1",
                  fontSize: 30,
                  lineHeight: 1.45,
                  maxWidth: 860,
                  textWrap: "balance",
                }}
              >
                {description}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: "#ff4d67",
                  }}
                />
                <span
                  style={{
                    fontFamily: "RedSec Display",
                    fontSize: 22,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Authorized checks
                </span>
              </div>

              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 22,
                  fontFamily: "RedSec Body",
                }}
              >
                {siteConfig.name}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: 128,
                height: 128,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(239,68,68,0.28), transparent 56%), rgba(2,6,23,0.86)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 10,
                  borderRadius: 999,
                  border: "1px solid rgba(92,231,255,0.22)",
                }}
              />
              <span
                style={{
                  fontFamily: "RedSec Display",
                  fontSize: 28,
                  letterSpacing: "0.3em",
                  paddingLeft: 8,
                }}
              >
                RS
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              <span
                style={{
                  color: "#f8fafc",
                  fontFamily: "RedSec Display",
                  fontSize: 32,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.name}
              </span>
              <span
                style={{
                  color: "#94a3b8",
                  fontFamily: "RedSec Body",
                  fontSize: 20,
                }}
              >
                {siteConfig.url.replace("https://", "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
      headers: {
        "cache-control": "public, max-age=86400, s-maxage=86400",
      },
    },
  );
}
