import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";
import { UserProvider } from "@/components/UserProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "THE BHĀIRAVA CODEX",
  description: "A sacred psychological archive merging tantra, consciousness studies, symbolic systems, and inner observation into an immersive path of self-deconstruction, awareness, and rebirth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} antialiased bg-obsidian text-bone min-h-screen selection:bg-blood selection:text-bone`}>
        <UserProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </UserProvider>
      </body>
    </html>
  );
}
