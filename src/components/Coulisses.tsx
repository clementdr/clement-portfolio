import { useState } from "react";
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

export default function Coulisses() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

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
      </div>
    </section>
  );
}
