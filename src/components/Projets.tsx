export default function Projets() {
  const projets = [
    {
      nom: "Chat Websocket",
      categorie: "Développement Front",
      ue: "Développer",
    },
    {
      nom: "Portfolio",
      categorie: "Développement Front, Développement Back, Entrepreneuriat",
      ue: "Développer, Entreprendre",
    },
    { nom: "TikTok", categorie: "Entrepreunariat", ue: "Entreprendre" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center mx-20">
      <div className="w-screen p-10 shadow-xl bg-white rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-normal">Projets</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, temporibus?
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
            {projets.map((projets) => (
              <tr key={projets.nom}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {projets.nom}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {projets.categorie}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                    {projets.ue}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Voir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
