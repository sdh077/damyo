import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full fixed top-0 mb-4 z-10">
        <Header />
      </div>
      <div className="h-[64px]"></div>
      <div className="pb-[108px]">
        <div className="bg-custom-background max-w-[500px] min-h-[100vh]">
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="max-w-[500px] h-[86px] grid content-between bg-white pt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}


