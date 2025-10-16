import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "src/components/Animation/LenisProvide";
import { Header } from "src/components/layouts/Header";
import { Footer } from "src/components/layouts/Footer/Footer";
import { GetSiteSettings } from "src/lib/api/GetGlobal";
import { GetHomePages } from "src/lib/api/getHome";
import { getSeoMetadata } from "src/lib/getSeoMetadata";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const aoi = new GetHomePages("cough-monitor-suite", "home", false);
  const seo = await aoi.geSEO();

  return getSeoMetadata(seo);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const api = new GetSiteSettings("cough-monitor-suite");
  const header = await api.header();
  const settings = await api.settings();
  const footer = await api.footer();

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header data={header} settings={settings} />
        <LenisProvider>{children}</LenisProvider>
        <Footer data={footer} global={settings} />
        <Analytics />
      </body>
    </html>
  );
}
