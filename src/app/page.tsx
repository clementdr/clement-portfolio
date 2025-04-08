// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import APropos from "@/components/APropos";
import Citation from "@/components/Citation";
import Galerie from "@/components/Galerie";
import Projet from "@/components/Projets";

export default function Home() {
  return (
    <main className="bg-[#fdfdfd] text-[#313131]">
      <Hero />
      <APropos />
      <Citation />
      <Projet />
      <Galerie />
    </main>
  );
}
