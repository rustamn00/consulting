import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  return (
    <div className="">
      <div className="container max-w-[375px] lg:max-w-[1280px] mx-auto mt-12 lg:mt-16">
        <h2 className="text-[32px] px-4 lg:px-0 leading-[42px] text-[#A9610A] font-bold lg:font-semibold">
          Quyidagi video rolik orqali siz batafsil ma’lumot olishingingiz
          mumkin.
        </h2>
        <div className="h-[350px] lg:h-[500px] mx-4 lg:mx-0 lg:px-0 max-w-[343px] lg:max-w-[1280px] rounded-sm bg-slate-400">
          <iframe
            className="hidden mt-4 lg:block"
            width="1280"
            height="500"
            src="https://www.youtube.com/embed/6o4xaxSrrLY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="block mt-4 lg:hidden"
            width="343"
            height="350"
            src="https://www.youtube.com/embed/6o4xaxSrrLY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Features;
