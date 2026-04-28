import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jirawat Suwannasit — Hardware Test Supervisor",
  description:
    "Personal resume of Jirawat Suwannasit — Hardware Test Supervisor specializing in IoT automation, energy conservation, and sustainable engineering.",
  openGraph: {
    title: "Jirawat Suwannasit — Hardware Test Supervisor",
    description:
      "Eco-Tech engineer combining hardware automation with environmental sustainability. 135.9 MWh annual energy savings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-bg-base text-text-primary antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
