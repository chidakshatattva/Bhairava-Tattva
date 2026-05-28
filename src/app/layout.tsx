import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "Rebirth Through Awareness",
  description: "A cinematic, psychologically immersive, spiritually transformative Knowledge Codex and Interactive Awareness System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} antialiased bg-obsidian text-bone min-h-screen selection:bg-blood selection:text-bone`}>
        {children}
      </body>
    </html>
  );
}
