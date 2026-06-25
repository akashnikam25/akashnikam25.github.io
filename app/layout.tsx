import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%235b50e8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Arial Black,sans-serif' font-weight='900' font-size='13' fill='white' letter-spacing='-0.5'%3EAN%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL("https://akashnikam25.github.io"),
  title: "Akash Nikam | AI Engineer",
  description:
    "AI engineer building multi-agent systems, RAG pipelines, and event-driven backends. Senior Software Engineer at John Deere.",
  icons: {
    icon: faviconSvg,
  },
  openGraph: {
    title: "Akash Nikam | AI Engineer",
    description:
      "AI engineer building multi-agent systems, RAG pipelines, and event-driven backends.",
    type: "website",
    url: "https://akashnikam25.github.io",
    siteName: "Akash Nikam",
  },
  twitter: {
    card: "summary",
    title: "Akash Nikam | AI Engineer",
    description:
      "AI engineer building multi-agent systems, RAG pipelines, and event-driven backends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
