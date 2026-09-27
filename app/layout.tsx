import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrian Neubauer — Fachinformatiker Systemintegration | Linux & Rust Portfolio",
  description:
    "Portfolio von Adrian Neubauer (16) aus Weinheim: Linux, Netzwerke, Server, Rust. Bewerbung als Fachinformatiker für Systemintegration – Ausbildung & Praktikum.",
  keywords: [
    "Adrian Neubauer",
    "Fachinformatiker Systemintegration",
    "Ausbildung IT",
    "Linux",
    "Arch Linux",
    "Rust",
    "Systemadministration",
    "Weinheim",
    "Praktikum IT",
    "Silen Linux",
  ],
  authors: [{ name: "Adrian Neubauer" }],
  openGraph: {
    title: "Adrian Neubauer — Linux • Server • Rust",
    description:
      "Schüler aus Weinheim. Sucht Ausbildung als Fachinformatiker für Systemintegration. Linux, Netzwerke, Server, Rust.",
    type: "website",
    locale: "de_DE",
  },
  twitter: { card: "summary_large_image", title: "Adrian Neubauer — IT Portfolio" },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
