import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted from @fontsource, so the build never depends on
// reaching Google Fonts.
const plexSans = localFont({
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231D4ED8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Arial,sans-serif' font-weight='700' font-size='13' fill='white'%3EAN%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akashnikam.in"),
  title: "Akash Nikam | AI Engineer",
  description:
    "AI engineer building agentic AI: multi-agent systems, RAG, MCP tools and LLM evaluation. Senior Software Engineer at John Deere.",
  alternates: { canonical: "/" },
  icons: { icon: faviconSvg },
  openGraph: {
    title: "Akash Nikam | AI Engineer",
    description:
      "AI engineer building agentic AI: multi-agent systems, RAG, MCP tools and LLM evaluation.",
    type: "website",
    url: "https://www.akashnikam.in",
    siteName: "Akash Nikam",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akash Nikam, AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Nikam | AI Engineer",
    description:
      "AI engineer building agentic AI: multi-agent systems, RAG, MCP tools and LLM evaluation.",
    images: ["/og.png"],
  },
};

// Adds a `js` class before first paint. Animations only hide content when
// this class is present, so the page reads fine without JavaScript.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
