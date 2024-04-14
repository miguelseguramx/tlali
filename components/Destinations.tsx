import React from "react";
import Destination from "./destination";

const places = [
  {
    id: 1,
    name: "Luciernagas Magicas",
    price: "$2000.00",
    days: "4 Days",
    image: "/images/luciernagas.webp",
  },
  {
    id: 2,
    name: "Huatulco",
    price: "$2000.00",
    days: "3 Days",
    image: "/images/huatulco.jpeg",
  },
  {
    id: 3,
    name: "Mundo Maya",
    price: "$4000.00",
    days: "7 Days",
    image: "/images/maya.jpeg",
  }
]

export default function Destinations() {
  return (
    <section className="w-10/12 mt[10rem] pb-10 mx-auto">
      <div
        className="relative text-center font-poppins"
      >
        <h2 className="my-4 text-4xl text-gray-800">
          Recomendaciones
        </h2>
        <div className="relative flex flex-wrap justify-center my-8 gap-14 font-poppins">
          <div className="flex flex-col flex-wrap gap-10 mt-5 sm:flex-row">
            {places.map((place) => (
              <Destination key={place.id} {...place} />
            ))}
          </div>
        </div>
        <button className="inline-block bg-[#02c39a] hover:bg-[#28bc9c] font-poppins px-7 py-2 rounded-lg text-white text-lg">
          Ver todos los destinos
        </button>
      </div>
    </section>
  );
}
