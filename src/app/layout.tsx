import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Shine Tecnologia",
    template: "%s — Shine Tecnologia",
  },
  description:
    "Portfólio e blog do André Lucas: Intellicita, aegis4j, Cronos e o resto do que sai do estúdio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
