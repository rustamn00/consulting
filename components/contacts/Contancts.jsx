import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import FormInput from "./FormInput";

const Contancts = () => {
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      window.initMap = initMap;
    }
  }, []);

  return (
    <>
      <div id="Contacts" className="mt-5">
        <div className="container mx-auto max-w-[375px] lg:max-w-[1280px]">
          <div className="flex flex-wrap lg:px-10 py-4 justify-start overflow-hidden bg-[#DFAF24] text-white ">
            <label
              className="font-white text-xl lg:text-4xl grow px-4 py-3 font-medium"
              htmlFor="collapse"
            >
              Biz bilan bog’lanish
            </label>
            <input
              className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
              type="checkbox"
              name="collapse"
              defaultChecked={true}
              id="collapse"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 36 36"
              stroke-width="1.5"
              stroke="currentColor"
              className="my-3 w-9 transition-all duration-200 peer-checked:rotate-45"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg> */}
            <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100">
              <FormInput />
            </div>
            {/* <div className="w-[100vw] h-[400px] z-20" id="map"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contancts;
