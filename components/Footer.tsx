import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full p-10 pt-20 pb-10 mx-auto mt-10 md:w-10/12 md:px-20">
      <div className="flex flex-wrap justify-between gap-14">
        <div className="md:max-w-[16rem] text-center md:text-start">
          <div className="flex items-center gap-4">
            <img src="/images/tlali.png" width={80} />
            <h2 className="text-5xl font-poppins">Tlali.</h2>
          </div>
          <p className="mt-3 text-xs text-gray-600 font-poppins">
            Reserva en minuto, Recuerda toda la vida.
          </p>
        </div>
        <div className="flex flex-col items-center col-span-2 mb-16 md:items-start sm:mb-0 md:ml-8">
          <ul className="flex gap-6 font-light text-gray-600">
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Facebook Icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.857"
                  height="12.69"
                  viewBox="0 0 5.857 12.69"
                >
                  <path
                    id="Facebook_Icon"
                    data-name="Facebook Icon"
                    d="M5.537,2.244a3.523,3.523,0,0,0-1.024-.169c-.416,0-1.312.287-1.312.844V4.253H5.329V6.5H3.2V12.69H1.056V6.5H0V4.253H1.056V3.122C1.056,1.418,1.792,0,3.569,0A8.08,8.08,0,0,1,5.857.253Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Instagram icon"
              >
                <svg
                  id="instagram_1"
                  data-name="instagram 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="Group">
                    <g id="Group-2" data-name="Group">
                      <path
                        id="Vector"
                        d="M13.656,0H2.344A2.347,2.347,0,0,0,0,2.344V13.656A2.346,2.346,0,0,0,2.344,16H13.656A2.346,2.346,0,0,0,16,13.656V2.344A2.346,2.346,0,0,0,13.656,0Zm1.406,13.656a1.408,1.408,0,0,1-1.406,1.406H2.344A1.408,1.408,0,0,1,.938,13.656V2.344A1.408,1.408,0,0,1,2.344.938H13.656a1.408,1.408,0,0,1,1.406,1.406Z"
                      />
                    </g>
                    <g id="Group-3" data-name="Group">
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M.938,0a.938.938,0,1,0,.938.938A.939.939,0,0,0,.938,0Z"
                        transform="translate(12.219 1.906)"
                      />
                    </g>
                    <g id="Group-4" data-name="Group">
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M4.219,0A4.219,4.219,0,1,0,8.438,4.219,4.223,4.223,0,0,0,4.219,0Zm0,7.5A3.281,3.281,0,1,1,7.5,4.219,3.285,3.285,0,0,1,4.219,7.5Z"
                        transform="translate(3.781 3.781)"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="grid w-10 h-10 bg-white rounded-full md:w-8 md:h-8 drop-shadow-2xl place-items-center"
                aria-label="Twitter icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                >
                  <path
                    id="Vector"
                    d="M16,1.539a6.839,6.839,0,0,1-1.89.518A3.262,3.262,0,0,0,15.553.244a6.555,6.555,0,0,1-2.08.794A3.28,3.28,0,0,0,7.8,3.281a3.378,3.378,0,0,0,.076.748A9.284,9.284,0,0,1,1.114.6,3.281,3.281,0,0,0,2.122,4.982a3.239,3.239,0,0,1-1.482-.4v.036A3.3,3.3,0,0,0,3.268,7.837a3.274,3.274,0,0,1-.86.108,2.9,2.9,0,0,1-.621-.056,3.311,3.311,0,0,0,3.065,2.285,6.591,6.591,0,0,1-4.067,1.4A6.144,6.144,0,0,1,0,11.528,9.234,9.234,0,0,0,5.032,13a9.272,9.272,0,0,0,9.336-9.334c0-.145-.005-.285-.012-.424A6.544,6.544,0,0,0,16,1.539Z"
                    fill="#080809"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
