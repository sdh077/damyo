import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={cn(
          "bg-background font-sans antialiased bg-custom-background",
          fontSans.variable
        )}
      >
        <div className="w-full fixed top-0 bg-[#FAFAFA]">
          <Header />
        </div>
        <div className="py-[118px]">
          {children}
        </div>
        <div className="fixed bottom-0 w-full">
          <div className="h-[56px] grid content-between bg-white pt-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


