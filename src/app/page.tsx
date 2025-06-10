// app/page.tsx
"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect } from "react"; // Importer useState et useEffect

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
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Gérer l'affichage du bouton en fonction du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Affiche le bouton après 300px de défilement
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Utilise le défilement fluide
    });
  };

  return (
    <main className="bg-[#fdfdfd] text-[#313131] relative">
      {" "}
      {/* Ajoutez 'relative' pour positionner le bouton */}
      <div className="bg-[#fdfdfd] text-[#313131]">
        <Analytics />
        <SpeedInsights />
      </div>
      <Hero />
      <APropos />
      <Projet />
      <Portfolio />
      <Galerie />
      <Citation />
      <Coulisses />
      <Resume />
      <Footer />
      {/* Bouton "Retour en haut" */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-200 ease-in-out opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Retour en haut de la page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
