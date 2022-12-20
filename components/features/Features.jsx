import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  return (
    <div className="">
      <div className="container max-w-[1280px] mx-auto mt-16">
        <h2 className="text-[32px] text-[#A9610A] text-primary font-semibold">
          Quyidagi video rolik orqali siz batafsil ma’lumot olishingingiz
          mumkin.
        </h2>
        <div className=" h-[500px] rounded-sm bg-slate-400">
          <iframe
            width="1280"
            height="500"
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
