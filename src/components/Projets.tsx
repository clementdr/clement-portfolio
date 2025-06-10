import React, { useState, useEffect, useRef } from "react";

import Json from "../../data/projets.json";

// Définir l'interface pour un projet
interface Projet {
  id: number;
  nom: string;
  categorie: string;
  ue: string;
  task?: string;
  livrable?: string;
  analyse?: string;
  methode?: string;
  ressources?: string;
  ameliorations?: string;
  CEAC?: string;
  apprentissage?: string;
  image1?: string;
  lien?: string;
}

export default function Projets() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Fonction pour charger les données depuis le fichier JSON
  useEffect(() => {
    const loadProjets = async () => {
      try {
        const data: Projet[] = Json;
        setProjets(data);
      } catch (error) {
        console.error("Erreur lors du chargement des projets:", error);
      }
    };
    loadProjets();
  }, []);

  // Fonction pour gérer l'ouverture du modal
  const handleVoirProjet = (id: number) => {
    const projet = projets.find((p) => p.id === id);
    setSelectedProjet(projet || null);
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjet(null);
  };

  // Effet pour gérer le défilement de la page lorsque le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Effet pour se placer en haut du modal lorsque celui-ci est ouvert
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen flex justify-center items-center m-20 max-sm:m-10">
      <div className="w-screen p-10 shadow-xl bg-white rounded-xl max-sm:p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Projets</h2>
            <p className="text-gray-500">
              Découvrez mes différents projets. Cliquez sur "Voir" pour plus de
              détails.
            </p>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-md:hidden">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-xl:hidden">
                UE
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Voir</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projets.map((projet) => (
              <tr key={projet.id}>
                <td className="px-6 py-4 whitespace-nowrap max-sm:max-w-xs max-sm:whitespace-normal">
                  <div className="text-sm font-medium text-gray-900">
                    {projet.nom}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap max-md:hidden">
                  <div className="text-sm text-gray-500 max-w-xs">
                    {projet.categorie}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap max-xl:hidden">
                  <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                    {projet.ue}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleVoirProjet(projet.id)}
                    className="text-blue-600 hover:text-indigo-500 cursor-pointer transition-colors duration-200"
                  >
                    Voir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup projet */}
        {isModalOpen && selectedProjet && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className="bg-white rounded-lg p-8 w-full m-10 shadow-2xl overflow-y-auto max-h-[80vh]"
              ref={modalRef}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {selectedProjet.nom}
              </h2>

              <div className="mt-2">
                <p className="font-medium text-sm">Catégorie :</p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.categorie}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">Unité d'Enseignement :</p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.ue}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">Tâche :</p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.task}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">Livrable :</p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.livrable}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">
                  Explication ou analyse réflective :
                </p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.analyse}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">
                  Quelle méthode ai-je suivi :
                </p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.methode}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">
                  Quelles ressources externes ai-je mobilisé :
                </p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.ressources}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">
                  Quelle(s) amélioration(s) pourrais-je prévoir pour une
                  prochaine fois :
                </p>
                <p className=" font-light text-sm text-gray-500">
                  {selectedProjet.ameliorations}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">
                  Composantes Essentielles (C.E) et Apprentissages Critiques
                  (A.C) associés :
                </p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.CEAC}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-medium text-sm">Ce que j'ai appris :</p>
                <p className="font-light text-sm text-gray-500">
                  {selectedProjet.apprentissage}
                </p>
              </div>
              <div className="mt-2">
                {selectedProjet.image1 && (
                  <img
                    src={selectedProjet.image1}
                    alt={selectedProjet.nom}
                    className="mt-4 max-w-full h-auto"
                  />
                )}
              </div>
              <div className="mt-2">
                {selectedProjet.lien && (
                  <p className="mt-2 text-sm text-blue-600 hover:text-indigo-500 transition-colors duration-200">
                    <a
                      href={selectedProjet.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le projet
                    </a>
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
