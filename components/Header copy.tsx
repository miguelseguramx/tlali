import Head from "next/head";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Tlali | Travel Agency</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./images/favicon.png" />
        <meta
          name="description"
          content="Tlali is one of the leading agencies that has smooth process and provides affordable pricing."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type”" content="website" />
        <meta
          property="og:title"
          content="Tlali – Travel with the best travel agency for a lovely travel experience."
        />
        <meta
          property="og:description"
          content="Tlali Travel agency is one of the leading agencies that has smooth process and provides affordable pricing."
        />
        <meta
          property="og:url"
          content="https://www.jadoo-travel-agency.vercel.app/"
        />
        <meta property="og:site_name" content="Jadoo Travel Agency" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Tlali Travel agency is one of the leading agencies that has smooth process and provides affordable pricing."
        />
        <meta
          name="twitter:title"
          content="Tlali – Travel with the best travel agency for a lovely travel experience."
        />
        <meta name="twitter:site" content="@imaisam" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:creator" content="@imaisam" />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      <div
        id="header-left-decor"
        className="absolute hidden md:block md:-top-32 md:-left-44 h-[378px] w-[396px] bg-pink-circle bg-no-repeat bg-cover"
      ></div>
      <header className="relative w-full mx-auto mt-5 mb-20 md:w-10/12">
        <div>
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <a href="#" className="flex items-center px-2 py-4">
                    <img src="/images/tlali.png" width={36} height={36} className="mr-2" />
                    <h2 className="text-5xl font-poppins">Tlali</h2>
                  </a>
                </div>
              </div>
              <ul className="items-center hidden gap-10 text-sm md:flex font-poppins">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 rounded-md border-[2px] border-gray-300"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
              <div className="flex items-center md:hidden">
                <button
                  className="outline-none"
                  id="btn-mobile-menu"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <svg
                    className="w-6 h-6 text-gray-500 hover:text-primary"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            id="mobile-menu"
            className={`bg-[#FFF1DA] transition transform duration-300 ease-linear ${
              open ? "flex" : "hidden"
            }`}
          >
            <ul
              className={`flex flex-col p-4 mx-4 space-y-5 text-sm sm:hidden font-poppins`}
            >
              <li>
                <a href="/#">Destinations</a>
              </li>
              <li>
                <a href="/#">Hotels</a>
              </li>
              <li>
                <a href="/#">Flights</a>
              </li>
              <li>
                <a href="/#">Bookings</a>
              </li>
              <li>
                <a href="/#">Flights</a>
              </li>
              <li>
                <a href="/#">Login</a>
              </li>
              <li className="-ml-2">
                <a
                  href="#"
                  className="px-2 py-2 rounded-md inline-block border-[2px] border-gray-300"
                >
                  Sign up
                </a>
              </li>
              <li className="">
                <select
                  className="py-2 bg-transparent"
                  name="langs"
                  id="lang-select"
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                  <option value="tr">TR</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -top-[12rem] -right-[16.5rem] -z-10 rotate-10 h-[872px] w-[786px] bg-hero bg-no-repeat bg-cover" />
        <div className="flex flex-col pb-5 my-20 md:mx-12 md:flex-row">
          <div className="flex-1 mx-8 md:mt-10">
            <p className="font-bold uppercase text-[#05668d]">
              Las mejores experiencias en mexico
            </p>
            <h1 className="my-10 mb-4 text-5xl font-bold text-gray-900 md:text-7xl">
              Viaja y
              <span
                className="inline-block ml-2"
                style={{
                  backgroundImage: `url('/images/decore-red.png')`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "320px 30px",
                }}
              >
                conoce
              </span>
              las raices mexicanas
            </h1>

            <p className="mt-0 text-xl font-poppins">
              Encuentra las mejores experiencias
            </p>
            <button className="mt-8 inline-block bg-[#02c39a] hover:bg-[#28bc9c] font-poppins px-7 py-2 rounded-lg text-white text-lg">
              Ver todos los destinos
            </button>
          </div>
          <div className="relative flex-1 mt-24 md:mt-0">
            <img
              src="/images/chichen.png"
              className="-mt-14 md:w-full md:right-7 md:absolute"
              alt="girl travelling"
            />
           
          </div>
        </div>
      </header>
    </>
  );
}
