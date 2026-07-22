import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build360.online : India's Premium Construction Procurement Network",
  description:
    "Source premium tile adhesives, epoxy grouts, cement, steel, and construction materials in bulk. India's organized procurement network for contractors, builders, and architects.",
  metadataBase: new URL("https://build360.online"),
  openGraph: {
    title: "Build360.online — Construction Procurement Network",
    description:
      "India's organized procurement network for construction materials. Bulk pricing, pan-India delivery.",
    url: "https://build360.online",
    siteName: "Build360.online",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
