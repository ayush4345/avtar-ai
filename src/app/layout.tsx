import "./globals.css";
import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import ClientBody from "./ClientBody";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "avtar.ai - Your personal AI agent for crypto and finance",
  description: "avtar.ai is your AI agent for DeFAI, crypto and finance. Imagine Pump.fun, Virtuals.io, AI agent, crypto signals and finance alphas. Proof of Trading PoT is the world's 1st token model based on trading volume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${workSans.className} dark`}>
      <body className={`bg-[#040b0c] text-slate-100`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
