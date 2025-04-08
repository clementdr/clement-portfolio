import Image from "next/image";

const APropos = () => (
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
        <h3 className="text-xl font-light mt-3">- Communication digitale -</h3>
        <p className=" text-base mt-3 font-thin">
          Étudiant de 21 ans, passionné par le sport et la montagne.
          Actuellement en alternance à l'Office de Tourisme de
          Pralognan-la-Vanoise, j'occupe le poste d'assistant communication
          360°. J'ai l'opportunité de travailler sur une variété de projets qui
          allient créativité, stratégie et communication, le tout dans un
          environnement qui me parle énormément. Mon objectif est de développer
          mes compétences dans le domaine de la communication tout en partageant
          ma passion pour la montagne et les activités de plein air.
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
);

export default APropos;
