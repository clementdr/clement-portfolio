import React, { useState } from "react";

type ResumeItemProps = {
  icon: string;
  title: string;
  description: string;
  maxLength?: number; // Optionnel: longueur maximale du texte initial
};

const ResumeItem = ({
  icon,
  title,
  description,
  maxLength = 150,
}: ResumeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowReadMore = description.length > maxLength;
  const displayedDescription = isExpanded
    ? description
    : description.slice(0, maxLength);

  return (
    <div className="flex gap-1 text-base">
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className="max-sm:w-[100px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} fill="#212121" />
      </svg>
      <p className="font-normal max-w-[600px]">
        <strong>{title}.</strong> {displayedDescription}
        {shouldShowReadMore && (
          <button
            onClick={toggleExpand}
            className="text-blue-600 cursor-pointer font-medium ml-1 focus:outline-none hover:text-indigo-600 transition-colors duration-200"
          >
            {isExpanded ? "Lire moins" : "... Lire la suite"}
          </button>
        )}
      </p>
    </div>
  );
};

const Resume = () => {
  const skillsData = [
    {
      icon: "M13.211 3.10263C12.7158 2.09925 11.285 2.09926 10.7898 3.10263L8.43183 7.88036L3.1593 8.6465C2.052 8.8074 1.60987 10.1682 2.41111 10.9492L6.22635 14.6681L5.32569 19.9193C5.13655 21.0222 6.29408 21.8632 7.28448 21.3425L12.0004 18.8632L16.7163 21.3425C17.7067 21.8632 18.8642 21.0222 18.675 19.9193L17.7744 14.6681L21.5896 10.9492C22.3909 10.1682 21.9487 8.8074 20.8414 8.6465L15.5689 7.88036L13.211 3.10263Z",
      title: "Autonomie et engagement",
      description:
        '"Cette année d’apprentissage m’a permis de développer une réelle capacité à travailler de manière autonome. Là où, au départ, chaque tâche nécessitait validation et accompagnement, j’ai appris à gagner la confiance de mes encadrants grâce à un travail rigoureux et constant. J’ai progressivement compris l’importance de l’initiative et de la fiabilité dans un environnement professionnel. Être progressivement considéré comme responsable de la communication digitale a renforcé mon sens des responsabilités. J’ai également découvert que l’engagement ne se limite pas à accomplir les tâches demandées, mais implique aussi de proposer, anticiper et s’impliquer avec conviction. Ce changement de posture m’a permis de mieux appréhender les exigences du monde professionnel, tout en prenant confiance en ma capacité à mener des projets de manière autonome."',
    },
    {
      icon: "M8.29446 14L6.52743 21.0681C6.34097 21.814 7.26385 22.324 7.79618 21.7693L11.0582 18.37C11.0201 18.0854 11.0005 17.795 11.0005 17.5C11.0005 13.9101 13.9106 11 17.5005 11C17.704 11 17.9054 11.0094 18.1042 11.0277L19.7916 9.2693C20.2491 8.79255 19.9112 8 19.2505 8H14.791L16.462 2.98717C16.6238 2.50152 16.2624 2 15.7505 2H8.75046C8.4156 2 8.12131 2.22198 8.02931 2.54396L5.02931 13.044C4.89242 13.5231 5.25217 14 5.75046 14H8.29446ZM12.5005 15.6285L12.9477 16.0588C13.7654 16.8456 13.7654 18.1544 12.9477 18.9412L12.5005 19.3715C12.701 19.945 12.9911 20.4742 13.3533 20.9409L13.9552 20.7631C15.0527 20.4388 16.1979 21.0998 16.4662 22.2122L16.6388 22.9281C16.9192 22.9754 17.207 23 17.5003 23C17.7936 23 18.0814 22.9754 18.3617 22.9281L18.5344 22.2122C18.8027 21.0998 19.9479 20.4388 21.0454 20.7631L21.6473 20.9409C22.0095 20.4742 22.2996 19.945 22.5001 19.3715L22.0529 18.9412C21.2352 18.1544 21.2352 16.8456 22.0529 16.0588L22.5001 15.6285C22.2996 15.055 22.0095 14.5258 21.6473 14.0591L21.0454 14.2369C19.9479 14.5612 18.8027 13.9002 18.5344 12.7878L18.3617 12.0719C18.0814 12.0246 17.7936 12 17.5003 12C17.207 12 16.9192 12.0246 16.6388 12.0719L16.4662 12.7878C16.1979 13.9002 15.0527 14.5612 13.9552 14.2369L13.3533 14.0591C12.9911 14.5258 12.701 15.055 12.5005 15.6285ZM17.5003 19C16.6997 19 16.0506 18.3284 16.0506 17.5C16.0506 16.6716 16.6997 16 17.5003 16C18.3009 16 18.95 16.6716 18.95 17.5C18.95 18.3284 18.3009 19 17.5003 19Z",
      title: "Professionnalisation",
      description:
        '"Au fil de cette année, j’ai acquis une meilleure compréhension du fonctionnement d’un environnement professionnel et des responsabilités qu’il implique. Aujourd’hui, je me sens plus légitime et plus apte à prendre en charge certains projets. Je suis capable d’estimer ma place au sein de l’équipe et de me sentir réellement utile dans la dynamique globale de l’entreprise. L’adaptation au monde du travail, bien différent du cadre scolaire, s’est faite naturellement. Mon intégration a été fluide, et j’assume désormais pleinement mon rôle. J’ai notamment appris à structurer mes journées de manière efficace, à prioriser les missions en fonction de leur urgence ou de leur importance, et à communiquer de manière claire et professionnelle avec mes collègues et partenaires. Cette évolution m’a permis de franchir une étape importante dans ma construction en tant que futur professionnel. Elle m’a offert des repères concrets pour mieux me projeter dans la suite de mon parcours."',
    },
    {
      icon: "M19 4.49146C19 5.87217 17.8807 6.99146 16.5 6.99146C16.3246 6.99146 16.1535 6.9734 15.9883 6.93904L14.7085 9.05651C15.5025 9.7875 16 10.8357 16 12L15.9997 12.0474L15.9996 12.0583L17.2959 12.3191C17.7175 11.5339 18.5464 11 19.5 11C20.8807 11 22 12.1193 22 13.5C22 14.8807 20.8807 16 19.5 16C18.2184 16 17.1621 15.0357 17.017 13.793L15.6979 13.5276C15.3532 14.3613 14.7347 15.0529 13.9547 15.4907L14.4498 17.0027L14.4717 17.0024L14.5 17.0022C15.8807 17.0022 17 18.1215 17 19.5022C17 20.8829 15.8807 22.0022 14.5 22.0022C13.1193 22.0022 12 20.8829 12 19.5022C12 18.6717 12.4049 17.9358 13.0281 17.4812L12.5316 15.965C12.3577 15.9881 12.1802 16 12 16C10.679 16 9.50759 15.3597 8.77919 14.3724L6.98453 15.2203C6.99475 15.3121 7 15.4055 7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13C5.24768 13 5.9187 13.3282 6.37684 13.8484L8.13113 13.0196C8.04557 12.6941 8 12.3524 8 12C8 11.0323 8.34362 10.1449 8.9155 9.45309L7.92382 8.32377C7.63803 8.43748 7.32632 8.5 7 8.5C5.61929 8.5 4.5 7.38071 4.5 6C4.5 4.61929 5.61929 3.5 7 3.5C8.38071 3.5 9.5 4.61929 9.5 6C9.5 6.50832 9.34829 6.98121 9.08768 7.37586L10.0706 8.49523C10.6427 8.17961 11.3004 8 12 8C12.5055 8 12.9891 8.09376 13.4343 8.26484L14.6794 6.20477C14.2581 5.7573 14 5.15452 14 4.49146C14 3.11074 15.1193 1.99146 16.5 1.99146C17.8807 1.99146 19 3.11074 19 4.49146Z",
      title: "Développement personnel",
      description:
        '"Cette année d’alternance m’a permis de gagner en confiance en moi, même si j’ai encore parfois besoin d’un accompagnement ponctuel pour valider certaines décisions. J’ai appris à mieux m’écouter tout en cherchant à m’assurer que je suis sur la bonne voie. Cette prise de recul me permet aujourd’hui d’avancer avec plus de sérénité dans mes missions. J’ai également découvert en moi une forme de posture de médiateur : je me sens capable, à mon échelle, d’apporter des solutions concrètes et de faciliter la communication ou la résolution de petits problèmes au sein de l’équipe. Cette position me tient à cœur, car elle participe à une dynamique de travail positive. Sur le plan émotionnel, j’ai dû apprendre à gérer mes réactions pour préserver l’équilibre collectif. J’ai compris l’importance de savoir prendre sur soi, notamment pour maintenir une ambiance de travail saine et constructive. Enfin, cette année m’a conforté dans mon projet professionnel : évoluer dans le domaine de la communication, au service du sport et de la montagne. Cette expérience m’a montré que cette voie correspond pleinement à mes aspirations et à mes valeurs."',
    },
  ];

  return (
    <section className="min-h-fit m-20 max-sm:m-10">
      <div className="flex justify-between max-xl:flex-col-reverse gap-10">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <h5 className="text-blue-600 font-medium">
            Situation d'apprentissage
          </h5>
          <h1 className="text-4xl font-medium">Où en sommes-nous ?</h1>
          <p className="text-gray-500 text-base font-light">
            Après bientôt un an au sein de l'Office de Tourisme de
            Pralognan-la-Vanoise, il est temps de faire un bilan sur la qualité
            de mon apprentissage tant sur le plan professionnel que personnel.
          </p>
          <div className="pt-4 flex flex-col gap-y-3">
            {skillsData.map((skill, index) => (
              <ResumeItem
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
        <div className="overflow-hidden w-[450px] max-sm:w-full" dir="ltr">
          <img
            src="../img/clement2.webp"
            alt="Mon image"
            className="w-auto h-600px rounded-s-2xl overflow-hidden max-xl:w-60 max-sm:auto max-xl:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
