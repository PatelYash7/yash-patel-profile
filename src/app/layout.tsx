import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Yash Patel",
  description: "Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0f0f0f]`}>{children}
        <Analytics/>
      </body>
    </html>
  );
}
