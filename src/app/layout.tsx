import type { Metadata } from "next";
import { Geist_Mono, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { HeaderWrapper } from "@/components/header-wrapper";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PMI Total Fitness | Waterville, MN",
  description: "Your local gym and fitness center in Waterville, MN. Offering memberships, personal training, tanning, and massage.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, oswald.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
