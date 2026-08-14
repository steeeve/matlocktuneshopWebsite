import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matlock's Tune Shop | Calgary Snowboard Tuning",
  description:
    "Calgary-based snowboard tuning by Kyle — 15+ years of experience. Base repair, same-day waxing, top sheet repair, and base grinding. Get your board serviced by a local shredder you can trust.",
  keywords: [
    "snowboard tuning",
    "Calgary snowboard",
    "base repair",
    "waxing",
    "base grinding",
    "top sheet repair",
    "Matlock's Tune Shop",
  ],
  openGraph: {
    title: "Matlock's Tune Shop | Calgary Snowboard Tuning",
    description:
      "Calgary-based snowboard tuning by Kyle — 15+ years of experience. Base repair, same-day waxing, top sheet repair, and base grinding.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
