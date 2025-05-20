const Portfolio = () => (
  <section className="min-h-screen m-20 max-sm:m-10">
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-4xl font-semibold ">Projet Portfolio</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Portfolio personnel de compétences et de projets réalisés.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Technologies</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Next.JS, Node.JS, React, Tailwind CSS, TypeScript
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Déploiement</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Github, Vercel
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Format</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              One-page
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Direction artistique</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Typographie : Unbounded <br />
              Couleur principale : #fdfdfd (blanc cassé)
              <br />
              Couleur secondaire : #313131 (noir cassé)
              <br />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Ressources</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Logo de Pralognan-la-Vanoise © <br />
              Vidéos de Pralognan-la-Vanoise © <br />
              Images de Clément De Roberti
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Analyse</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Dans le cadre de mon projet personnel, j'ai décidé de créer un
              portfolio pour mettre en avant mes compétences et mes projets
              réalisés durant ma formation. Le but était de concevoir un site
              web simple, efficace et esthétique, qui puisse servir de vitrine
              pour mes réalisations. J'ai choisi d'utiliser Next.js pour le
              développement côté serveur et Tailwind CSS pour le design, afin
              d'assurer une expérience utilisateur fluide et agréable. Le site
              est structuré de manière à présenter mes projets et mes
              compétences tant scolaires que professionnelles et personnelles.
              J'ai également intégré une galerie d'images pour illustrer mes
              réalisations. Le projet a été réalisé dans le cadre de
              l'évaluation finale de ma 3e année de BUT MMI, afin de démontrer
              mes compétences et mes acquis en développement web.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">
              Composantes Essentielles et Apprentissages Critiques
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              CE4.01 - Développer pour le web et les médias numériques en se
              conformant aux standards du web et aux normes d’accessibilités.{" "}
              <br />
              CE4.03 - Développer pour le web et les médias numériques en
              produisant un code fonctionnel, sobre et réutilisable. <br />{" "}
              AC34.05 - Maitriser l’hébergement et le déploiement
              d’applications. <br /> AC35.02 - Maîtriser la qualité en projet
              Web ou multimédia.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Liens</dt>
            <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className=" font-medium">Gestion du projet</span>
                      <span className="shrink-0 text-gray-400 max-md:hidden">
                        Github
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="https://github.com/clementdr/clement-portfolio"
                      className="font-medium text-blue-600 hover:text-indigo-500"
                      target="_blank"
                    >
                      Voir
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className=" font-medium">Inspiration</span>
                      <span className="shrink-0 text-gray-400 max-md:hidden">
                        Portfolio de David McGillivray
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="https://www.dmcg.co"
                      className="font-medium text-blue-600 hover:text-indigo-500"
                      target="_blank"
                    >
                      Voir
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

export default Portfolio;
