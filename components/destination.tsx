function Destination(params:type) {
  return (
    <div className="flex-col pb-6 bg-white shadow-xl overflow-hidden rounded-xl w-[280px] transition transform hover:scale-105 duration-300 cursor-pointer">
      <img
        src={params.image}
        className="w-full h-[280px] object-cover object-top"
        alt=""
      />
      <div className="flex justify-between px-4 mt-4 mb-2 font-sans">
        <p>{params.name}</p>
        <p>{params.price}</p>
      </div>
      <p className="px-4 font-sans text-sm text-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block mr-2"
          width="15"
          height="15"
          viewBox="0 0 16.25 16.25"
        >
          <g
            id="navigation_2"
            data-name="navigation 2"
            transform="translate(-1.875 -1.875)"
          >
            <g id="Navigation_2">
              <path
                id="Vector"
                d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z"
                transform="translate(1.875 1.875)"
                fill="#080809"
              />
            </g>
          </g>
        </svg>
        4 Dias
      </p>
  </div>
  )
}

export default Destination
