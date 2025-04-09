import React, { useState, useEffect } from "react";

import Json from "../../public/projets.json";

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
  savoirs?: string;
  ressources?: string;
  ameliorations?: string;
  CEAC?: string;
  role?: string;
  apprentissage?: string;
  image1?: string;
  lien?: string;
}

export default function Projets() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fonction pour charger les données depuis le fichier JSON
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

  const handleVoirProjet = (id: number) => {
    const projet = projets.find((p) => p.id === id);
    setSelectedProjet(projet || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjet(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Nettoyage de l'effet : s'assure que la classe est supprimée lors du démontage du composant
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen flex justify-center items-center mx-20">
      <div className="w-screen p-10 shadow-xl bg-white rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-normal">Projets</h2>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {projet.nom}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {projet.categorie}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                    {projet.ue}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleVoirProjet(projet.id)}
                    className="text-blue-600 hover:text-blue-900 cursor-pointer"
                  >
                    Voir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup Modal */}
        {isModalOpen && selectedProjet && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen text-center ">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle "
                aria-hidden="true"
              >
                &#8203;
              </span>
              {/* Contenu */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full m-10">
                <div className="bg-white px-4 pt-5 pb-4 ">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {selectedProjet.nom}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {selectedProjet.analyse}
                        </p>

                        {selectedProjet.lien && (
                          <p className="mt-2 text-sm text-blue-600 hover:underline">
                            <a
                              href={selectedProjet.lien}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Voir le projet
                            </a>
                          </p>
                        )}
                        {selectedProjet.image1 && (
                          <img
                            src={selectedProjet.image1}
                            alt={selectedProjet.nom}
                            className="mt-4 max-w-full h-auto"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
          </div>
        )}
      </div>
    </div>
  );
}
