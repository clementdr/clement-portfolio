const Citation = () => (
  <section className="h-screen flex flex-col justify-center relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <img className="mx-auto h-12" src="../img/pralo.png" alt="" />
      <figure className="mt-10">
        <p className="text-center font-light text-2xl">
          “Évoluer dans un cadre comme Pralognan-la-Vanoise, véritable terre
          d'alpinisme et d'aventure, c'est avoir l'opportunité de vivre au coeur
          d'un terrain de jeu parfait pour les amoureux de la montagne.”
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
);

export default Citation;
