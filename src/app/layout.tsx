import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import {Manrope} from 'next/font/google'
export const metadata: Metadata = {
  title: "Yash Patel",
  description: "Full Stack Engineer",
};

const ManropeFonts= Manrope({
  subsets:['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0f0f0f] ${ManropeFonts.className}` }>{children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
