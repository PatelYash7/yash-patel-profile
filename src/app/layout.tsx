import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-[#0f0f0f]`}>{children}</body>
    </html>
  );
}
