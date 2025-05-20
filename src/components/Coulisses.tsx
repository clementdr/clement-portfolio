import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  { id: 1, name: "vidéos", value: "6" },
  { id: 2, name: "vues au total", value: "128 054" },
  { id: 3, name: "réactions", value: "5 383" },
];

const videos = [
  {
    url: "https://www.youtube.com/embed/-r9VTmwUHeM?si=FjFU88-iZCzkRM0f",
    title: "Épisode 1 - Nivoculture",
  },
  {
    url: "https://www.youtube.com/embed/fBt85EwzgZQ?si=Cns8Ax3M8KIkbw5c",
    title: "Épisode 2 - Damage domaine nordique",
  },
  {
    url: "https://www.youtube.com/embed/7pVK1UFMbEY?si=tMvvreZNgZeJDGIW",
    title: "Épisode 3 - Damage domaine alpin",
  },
  {
    url: "https://www.youtube.com/embed/kgkuvCHaTW4?si=Bun4ALLzG-PtlGbG",
    title: "Épisode 4 - Sécurité des pistes",
  },
  {
    url: "https://www.youtube.com/embed/O6lV7ON1HEQ?si=3ICR96_tYTwq5l3I",
    title: "Épisode 5 - Remontées mécaniques",
  },
  {
    url: "https://www.youtube.com/embed/ldNtvW1FLDM?si=8wVbGM89tuoRIOh1",
    title: "Épisode 6 - Maître chien d'avalanches",
  },
];

const Coulisses = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Add overflow: hidden to body when modal is open
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset"; // Or '' to revert to default
    }

    // Cleanup: Remove the style when the component unmounts or modal closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isModalOpen]);

  return (
    <section className="min-h-screen flex flex-col justify-center m-20">
      <div className="text-center flex flex-col gap-y-10 shadow-2xl bg-white rounded-xl p-10">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-4xl font-medium">
            Les coulisses du domaine skiable
          </h2>
          <p className="text-lg text-gray-600">
            Une série vidéo de 6 épisodes pour découvrir les coulisses du
            domaine skiable de Pralognan-la-Vanoise. Le contenu a été publié sur
            les différents réseaux de la station, à savoir : Facebook,
            Instagram, TikTok, LinkedIn et Youtube.
          </p>
        </div>

        <dl className="flex flex-wrap w-full content-between">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-1"
            >
              <dt className="text-gray-600 font-normal">{stat.name}</dt>
              <dd className="order-first text-4xl font-normal tracking-tight ">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col items-center gap-y-4">
          <div className="relative w-full max-w-3xl flex items-center justify-center">
            <button
              onClick={prevVideo}
              className="absolute left-0 p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft size={32} />
            </button>
            <div className="flex flex-col items-center">
              <iframe
                width="560"
                height="315"
                src={videos[current].url}
                title={videos[current].title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
              <h4 className="mt-2 font-medium">{videos[current].title}</h4>
            </div>
            <button
              onClick={nextVideo}
              className="absolute right-0 p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={openModal}
          >
            Plus d'informations
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-8 w-full m-10 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Informations Complémentaires
            </h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Tâche :</h3>
              <p className="text-gray-600">
                Réalisation d'une série de vidéos sur les coulisses du domaine
                skiable de Pralognan-la-Vanoise. Ce projet impliquait
                l'interview de professionnels du secteur afin de mettre en avant
                leur travail et leur passion, et de créer un contenu engageant
                et informatif pour les réseaux sociaux.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Explication et analyse réflexive :
              </h3>
              <p className="text-gray-600">
                Mon alternance au sein de l'Office de Tourisme de
                Pralognan-la-Vanoise a été marqué par un projet majeur : la
                création d'une série de vidéos. L'objectif principal était de
                concevoir un contenu engageant et informatif, destiné à être
                diffusé sur les réseaux sociaux, en mettant en lumière le
                fonctionnement interne du domaine et le travail des
                professionnels qui y œuvrent. Ce projet m'a permis de développer
                significativement mes compétences en production vidéo, depuis la
                conception jusqu'à la diffusion, ainsi qu'en storytelling
                appliqué au contexte professionnel.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Méthodologie :
              </h3>
              <p className="text-gray-600">
                La réalisation de la série de vidéos s'est appuyée sur la
                méthodologie suivante :
              </p>
              <ul className="list-disc list-inside ml-4">
                <li className="text-gray-600">
                  Recherche des intervenants : Identification et contact des
                  professionnels pertinents (chefs de piste, dameurs,
                  responsables de remontées mécaniques, etc.).
                </li>
                <li className="text-gray-600">
                  Préparation des interviews : Création de guides d'entretien
                  détaillés pour chaque intervenant, adaptés à son rôle et à son
                  expertise.
                </li>
                <li className="text-gray-600">
                  Tournage : Organisation et réalisation des tournages sur le
                  terrain, en tenant compte des contraintes logistiques et
                  météorologiques.
                </li>
                <li className="text-gray-600">
                  Montage : Sélection et assemblage des séquences vidéo, ajout
                  de musique, de textes et d'effets visuels pour créer un
                  produit fini de qualité professionnelle.
                </li>
                <li className="text-gray-600">
                  Publication : Coordination avec la responsable communication
                  de la station pour la validation et la diffusion des vidéos
                  sur les réseaux sociaux (Facebook, Instagram, TikTok,
                  LinkedIn, YouTube).
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Ressources externes mobilisées :
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="text-gray-600">
                  Ressources techniques : Caméra, microphone, éclairage
                  portable, trépied, ordinateur équipé du logiciel de montage
                  Adobe Premiere Pro.
                </li>
                <li className="text-gray-600">
                  Sources d'inspiration : Analyse de vidéos similaires produites
                  par d'autres stations de ski et entreprises du secteur
                  touristique, notamment sur les plateformes de réseaux sociaux.
                </li>
                <li className="text-gray-600">
                  Autres ressources : Collaboration étroite avec la responsable
                  communication de la station de Pralognan-la-Vanoise, qui a
                  fourni un soutien logistique et a validé la diffusion des
                  vidéos.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Améliorations envisagées :
              </h3>
              <p className="text-gray-600">
                Pour de futurs projets similaires, les améliorations suivantes
                pourraient être envisagées :
              </p>
              <ul className="list-disc list-inside ml-4">
                <li className="text-gray-600">
                  Diversification des formats : Production de contenus
                  complémentaires plus courts (teasers, stories, reels)
                  spécifiquement adaptés aux différents formats des réseaux
                  sociaux, afin de maximiser l'engagement.
                </li>
                <li className="text-gray-600">
                  Analyse des performances : Mise en place d'un suivi
                  statistique précis des performances des vidéos (nombre de
                  vues, taux d'engagement, etc.) afin d'ajuster la stratégie de
                  diffusion et d'optimiser l'impact du contenu.
                </li>
                <li className="text-gray-600">
                  Intégration de témoignages clients : Inclure des interviews de
                  vacanciers ou de skieurs pourrait ajouter une dimension
                  supplémentaire au récit et renforcer l'attrait du contenu.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Acquis et apprentissages clés du projet :
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="text-gray-600">
                  Maîtrise des techniques de production vidéo (cadrage,
                  éclairage, prise de son, montage) appliquées au storytelling
                  dans un contexte professionnel.
                </li>
                <li className="text-gray-600">
                  Développement de compétences en interview (préparation,
                  conduite, gestion des imprévus) et en gestion de projet vidéo
                  (planification, organisation, respect des délais).
                </li>
                <li className="text-gray-600">
                  Expérience pratique de l'utilisation des réseaux sociaux comme
                  outil de communication pour une entreprise du secteur
                  touristique.
                </li>
                <li className="text-gray-600">
                  Capacité à analyser les données de performance vidéo (vues,
                  engagement) et à utiliser ces informations pour optimiser la
                  stratégie de contenu.
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Coulisses;
