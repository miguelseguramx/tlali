import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Category({}) {
  return (
    <section className="w-10/12 mx-auto mt-[10rem] pb-10">
      <div className="relative text-center font-poppins">
        <h2 className="my-4 text-4xl text-gray-800">
          Nosotros
        </h2>
        <img
          src="/images/pluses.png"
          className="absolute right-0 -top-2"
          role="presentation"
        />
      </div>
      <div className="flex flex-wrap justify-center my-14 gap-14 font-poppins">
        <div className="relative group">
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] cursor-default">
            <div className="relative flex mb-4 w-max">
              <img
                src="./images/conoce.png"
                className="z-10"
                role="presentation"
                width={120}
              />
              <div className="absolute w-12 h-12 rounded-tr-sm rounded-bl-sm -bottom-1 -right-6 bg-light-orange rounded-br-2xl"></div>
            </div>
            <div className="text-center">
              <h3 className="font-sans text-xl text-gray-800">
                Conoce
              </h3>
              <p className="max-w-[11rem] text-gray-500 mt-3">
                Las tradiciones y los pueblos mexicanos
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] cursor-default">
            <div className="relative flex mb-4 w-max">
              <img src="/images/hospedaje.png" className="z-10" alt="Plane image" width={120} />
              <div className="absolute w-12 h-12 rounded-bl-2xl rounded-tr-2xl -top-2 left-6 bg-light-orange rounded-br-md"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans text-xl text-gray-800">
                Hospedate
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3">
                En comunidades y pueblos originarios
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] cursor-default">
            <div className="relative flex mb-4 w-max">
              <img src="./images/comunidades.png" width={120} className="z-10" alt="Mic image" />
              <div className="absolute w-10 h-10 rounded-br-sm rounded-tr-xl rounded-bl-xl -top-5 -right-20 bg-light-orange"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans text-xl text-gray-800">
                Apoya
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3">
                Comunidades que viven del turismo
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="grid px-3 pt-4 pb-10 transition transform place-items-center rounded-[2rem] cursor-default">
            <div className="relative flex mb-4 w-max">
              <img
                src="/images/huella-carbono.png"
                className="z-10"
                alt="power supply image"
                width={120}
              />
              <div className="absolute w-10 h-10 rounded-tr-sm rounded-br-sm rounded-bl-xl -bottom-2 -right-6 bg-light-orange"></div>
            </div>
            <div className="text-center">
              <h4 className="font-sans text-xl text-gray-800">
                Repara
              </h4>
              <p className="max-w-[11rem] text-gray-500 mt-3">
                Tu huella de carbono
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
