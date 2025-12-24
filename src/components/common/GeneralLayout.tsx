import React, { ReactNode } from "react";
import { Header } from "@/src/components/common/Header";
import { Footer } from "@/src/components/common/Footer";

interface GeneralLayoutProps {
  children: ReactNode;
}

export function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
