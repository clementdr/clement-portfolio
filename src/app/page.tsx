"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = Array.from(
    { length: 11 },
    (_, i) => `../img/gallerie/${i + 1}.jpg`
  );

  return (
    <>
      {/* Hero */}
      <main className="font-custom bg-white">
        <div className="h-screen flex justify-center items-center text-[#313131] text-8xl relative">
          {/* Carré animé */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-60 h-60 border-2 border-[#313131] animate-spin-slow"></div>
          </div>
          <h1 className="z-[1] text-7xl font-normal">Clément De Roberti</h1>
        </div>

        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
        `}</style>

        {/* A propos */}
        <div className="h-screen flex items-center justify-center ">
          <div
            className="flex justify-center gap-20 p-10 shadow-2xl bg-white rounded-xl"
            style={{ width: "1100px" }}
          >
            <img
              src="../img/clement.jpeg"
              alt="Mon image"
              className="w-auto h-150 rounded-xl"
            />
            <div className="flex flex-col mt-6">
              <h2 className="text-4xl font-normal">Clément De Roberti</h2>
              <h3 className="text-xl font-light mt-3">
                - Communication digitale -
              </h3>
              <p className=" text-base mt-3 font-thin">
                Étudiant de 21 ans, passionné par le sport et la montagne.
                Actuellement en alternance à l'Office de Tourisme de
                Pralognan-la-Vanoise, j'occupe le poste d'assistant
                communication 360°. J'ai l'opportunité de travailler sur une
                variété de projets qui allient créativité, stratégie et
                communication, le tout dans un environnement qui me parle
                énormément. Mon objectif est de développer mes compétences dans
                le domaine de la communication tout en partageant ma passion
                pour la montagne et les activités de plein air.
              </p>
              <div className="flex gap-5 mt-6">
                <a
                  href="https://instagram.com/clementderoberti"
                  target="_blank"
                  className="hover:scale-125 ease-in-out duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="33"
                    width="33"
                    fill="#313131"
                  >
                    <g>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>

                <a
                  href="https://youtube.com/@cleementdr"
                  target="_blank"
                  className="hover:scale-125 ease-in-out duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="33"
                    width="33"
                    fill="#313131"
                  >
                    <g>
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Citation */}
        <section className="h-screen flex flex-col justify-center relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto h-12" src="../img/pralo.png" alt="" />
            <figure className="mt-10">
              <p className="text-center font-light text-2xl">
                “Évoluer dans un cadre comme Pralognan-la-Vanoise, véritable
                terre d'alpinisme et d'aventure, c'est avoir l'opportunité de
                vivre au coeur d'un terrain de jeu parfait pour les amoureux de
                la montagne.”
              </p>

              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-light">Clément</div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600 font-thin">
                    assistant communication 360°
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Galerie */}
        <div className="min-h-screen grid grid-cols-3 gap-3 m-20">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt="Photo de la galerie"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}

          {/* Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Photo de la galerie"
                className="max-w-5xl max-h-[90vh] rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Projet */}
        <div className="min-h-screen"></div>
      </main>
    </>
  );
}
