// app/page.tsx
"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Hero from "@/components/Hero";
import APropos from "@/components/APropos";
import Projet from "@/components/Projets";
import Portfolio from "@/components/Portfolio";
import Citation from "@/components/Citation";
import Galerie from "@/components/Galerie";
import Coulisses from "@/components/Coulisses";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] text-[#313131]">
      <div className="bg-[#fdfdfd] text-[#313131]">
        <Analytics />
        <SpeedInsights />
      </div>
      <Hero />
      <APropos />
      <Projet />
      <Portfolio />
      <Citation />
      <Galerie />
      <Coulisses />
      <Resume />
      <Footer />
    </main>
  );
}
