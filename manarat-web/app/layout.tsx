import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700", "800"],
  variable: "--font-tajawal",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "منارة الطريق - منصة البحث العلمي",
  description:
    "منارة الطريق - منصة البحث العلمي المتكاملة للباحثين والمجتمع الأكاديمي: مستودع رقمي، أدوات بحث، فعاليات، ومجتمع باحثين.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${plexArabic.variable} ${mono.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
