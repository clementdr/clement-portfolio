const Portfolio = () => (
  <section className="min-h-screen m-20 max-sm:m-10">
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-4xl font-semibold ">Projet Portfolio</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Fiche technique du projet portfolio personnel de compétences et de
          projets réalisés.
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
              Couleur tertiaire : #3b82f6 (bleu)
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
              Dans le cadre de mon projet personnel, j’ai conçu un portfolio
              destiné à valoriser mes compétences et les projets réalisés au
              cours de ma formation. L’objectif était de créer un site web à la
              fois simple, fonctionnel et esthétique, servant de véritable
              vitrine pour mes réalisations. Pour le développement côté serveur,
              j’ai opté pour Next.js, tandis que Tailwind CSS a été utilisé pour
              assurer un design moderne et une expérience utilisateur agréable.
              La structure du site met en avant mes compétences ainsi que mes
              projets, qu’ils soient scolaires, professionnels ou personnels.
              Une galerie d’images complète également la présentation en
              illustrant mes travaux. Ce projet, réalisé dans le cadre de
              l’évaluation finale de ma 3e année de BUT MMI, témoigne de mes
              acquis en développement web.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium ">Méthode</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Pour concevoir un portfolio à la fois sobre et fonctionnel, j’ai
              commencé par définir les contenus à intégrer : la présentation de
              mes projets scolaires et professionnels, une galerie d’images,
              ainsi que des sections dédiées à deux projets spécifiques —
              Portfolio et Coulisses du domaine skiable. J’ai également inclus
              une analyse de mes compétences actuelles, organisée par pôles,
              afin de faire le point sur mon apprentissage. Le site a été
              développé avec Next.js pour la partie serveur et Tailwind CSS pour
              le design, afin d’assurer une interface moderne et cohérente. Il a
              ensuite été déployé sur la plateforme Vercel. J'ai utilisé GitHub
              pour le versioning et le déploiement, ce qui m'a permis de suivre
              l'évolution du projet. Le site est responsive et optimisé pour une
              navigation fluide sur tous les appareils. J'ai également intégré
              un outil d'analyse pour suivre les performances du site.
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
              AC34.04 - Concevoir et développer des composants logiciels,
              plugins ou extensions. <br />
              AC34.05 - Maitriser l’hébergement et le déploiement
              d’applications. <br />
              AC35.02 - Maîtriser la qualité en projet Web ou multimédia.
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
                      className="font-medium text-blue-600 hover:text-indigo-500 transition-colors duration-200"
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
