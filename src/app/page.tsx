// app/page.tsx
"use client";

import { Analytics } from "@vercel/analytics/react";

import Hero from "@/components/Hero";
import APropos from "@/components/APropos";
import Citation from "@/components/Citation";
import Galerie from "@/components/Galerie";
import Projet from "@/components/Projets";
import Coulisses from "@/components/Coulisses";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] text-[#313131]">
      <div className="bg-[#fdfdfd] text-[#313131]">
        <Analytics />
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
