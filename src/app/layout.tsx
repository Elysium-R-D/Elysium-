import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Elysium Research - Blockchain Innovation & VASP Compliance",
  description:
    "Research-driven blockchain institute empowering ventures with VASP-backed compliance and R&D investment to transform the digital economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
