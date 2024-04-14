import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";

// import required modules
import { EffectCards, Scrollbar } from "swiper";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto mb-20">
      <div className="relative flex flex-col items-center justify-between w-full gap-10 md:gap-20 md:flex-row">
        <div className="max-w-lg text-center text-gray-800 md:text-start font-poppins">
          <h2 className="my-4 text-3xl text-gray-800 md:text-5xl font-poppins">
            Lo que dicen nuestos usuarios
          </h2>
        </div>
        <div className="max-w-sm md:max-w-md mt-14">
          <Swiper
            scrollbar={{
              hide: true,
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative flex flex-col mt-8 mx-8 mb-4 py-6 px-8 font-sans bg-white rounded-lg shadow-lg text-[#5E6282]">
                <img
                  src="/images/andy.jpg"
                  alt="Profile image of a man"
                  className="absolute rounded-full w-14 h-14 -left-6 -top-6"
                />
                <p className="">
                  La mejor experienca de la vida! Ame dormir en medio de la selva y despertar a desayunar con doña irma y salir a pescar con Don Goyo
                </p>
                <p className="mt-6">Andrea Nava, CDMX</p>
                <p className="mt-2 text-sm font-poppins">Luciernagas Magicas</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col mt-8 mx-8 mb-4 py-6 px-8 font-sans bg-white rounded-lg shadow-lg text-[#5E6282]">
                <img
                  src="./images/prici.jpg"
                  alt="Profile image of a man"
                  className="absolute object-cover rounded-full w-14 h-14 -left-6 -top-6"
                />
                <p className="">
                  Nunca habia visto caballos libres! Visitar una playa virgen en Oaxaca ha sido una de mis mejores recuerdos de mexico.
                </p>
                <p className="mt-6">Pricilla Binaffard, CA</p>
                <p className="mt-2 text-sm font-poppins">Puerto Escondido</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
