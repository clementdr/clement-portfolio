"use client";

import { useState } from "react";
import Image from "next/image";

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = Array.from(
    { length: 15 },
    (_, i) => `/img/gallerie/${i + 1}.jpg`
  );

  return (
    <div className="min-h-screen grid grid-cols-3 gap-3 m-20 max-sm:m-10 max-sm:grid-cols-2 max-sm:gap-2">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={src}
            alt="Photo de la galerie"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          />
        </div>
      ))}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Photo de la galerie"
            className="max-w-5xl max-h-[90vh] rounded-lg shadow-lg max-sm:max-w-[90%] max-sm:max-h-[80vh] transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Galerie;
