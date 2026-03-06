import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lawrence Liao | lorentz.studio",
  description: "Software engineer, researcher, and builder. MS Computational Science & Engineering at Harvard.",
  openGraph: {
    title: "Lawrence Liao | lorentz.studio",
    description: "Software engineer, researcher, and builder.",
    url: "https://lorentz.studio",
    siteName: "lorentz.studio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
