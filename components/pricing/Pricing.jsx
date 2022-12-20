import Image from "next/image";
import React from "react";
import timer from "/public/timer.svg";

import Link from "next/link";

const Pricing = () => {
  return (
    <div className="mt-16">
      <div className="container max-w-[1280px] mx-auto">
        <h1 className="text-[#A9610A] underline underline-offset-4 font-bold text-[30px] lg:text-[40px] leading-[49px] tracking-[0.8px] pb-6">
          Bizning tariflarimiz
        </h1>
        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between">
          <div className="w-[350px] lg:w-[400px] h-fit flex flex-col justify-between bg-[#EDEDED] py-8 my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div className="text-center">
              <h2 className="text-primary text-[#DFAF24] text-2xl font-semibold tracking-[0.8px] pb-6">
                Standart ta’rifi
              </h2>
              <h3 className="text-[#A9610A] pb-6 text-3xl font-medium">
                Narxi: 3 800 $
              </h3>
              <div className="flex flex-col divide-y">
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Bepul o‘qish
                  </p>
                </div>
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Bepul yotoqxona
                  </p>
                </div>
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    6 oy ingliz va xitoy tilini o‘rganish (offline+online)
                  </p>
                </div>
                <div className="items-center">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Talabalik davrida ish bilan ta’minlash
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[350px] lg:w-[400px] h-fit flex flex-col justify-between bg-[#FCE663]  my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
              <div className="absolute w-[350px] lg:w-[400px]">
                <div className="relative left-[280px]">
                  <p className="absolute z-10 -top-6 left-8 font-sans font-semibold text-white text-base">
                    12:12:12
                  </p>
                  <Image className="relative -top-6" src={timer} alt="timer" />
                </div>
              </div>
              <div className="text-center py-8">
                <h2 className="text-primary text-[#242424] text-2xl font-semibold tracking-[0.8px] pb-6">
                  Optimal ta’rifi
                </h2>
                <h3 className="text-[#A9610A] pb-6 text-3xl font-medium">
                  Narxi: 3 800 $
                </h3>
                <div className="flex flex-col divide-y divide-[#F0F0F0]">
                  <div className="">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Bepul o‘qish
                    </p>
                  </div>
                  <div className="">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Bepul yotoqxona
                    </p>
                  </div>
                  <div className="">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      6 oy ingliz va xitoy tilini o‘rganish (offline+online)
                    </p>
                  </div>
                  <div className="items-center">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Talabalik davrida ish bilan ta’minlash
                    </p>
                  </div>
                  <div className="items-center">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Savdo agentlik kursi (talabalikni o’zida tadbirkorlikni
                      boshlashni istaganlar uchun)
                    </p>
                  </div>
                  <div className="items-center">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Sug’urta
                    </p>
                  </div>
                  <div className="items-center">
                    <p className="py-2 pl-[10px] font-normal text-xl">
                      Tibbiy tekshiruv
                    </p>
                  </div>
                  <div className="items-center">
                    <p className="pt-2 pl-[10px] font-normal text-xl">
                      Visa xarajatlari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] lg:w-[400px] h-fit flex flex-col justify-between bg-[#EDEDED] py-8 my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div className="text-center">
              <h2 className="text-primary text-[#DFAF24] text-2xl font-semibold tracking-[0.8px] pb-6">
                Premium ta’rifi
              </h2>
              <h3 className="text-[#A9610A] pb-6 text-3xl font-medium">
                Narxi: 8 800 $
              </h3>
              <div className="flex flex-col divide-y">
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Bepul o‘qish
                  </p>
                </div>
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Bepul yotoqxona
                  </p>
                </div>
                <div className="">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    6 oy ingliz va xitoy tilini o‘rganish (offline+online)
                  </p>
                </div>
                <div className="items-center">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Talabalik davrida ish bilan ta’minlash
                  </p>
                </div>
                <div className="items-center">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Savdo agentlik kursi (talabalikni o’zida tadbirkorlikni
                    boshlashni istaganlar uchun)
                  </p>
                </div>
                <div className="items-center">
                  <p className="py-2 pl-[10px] font-normal text-xl">Sug’urta</p>
                </div>
                <div className="items-center">
                  <p className="py-2 pl-[10px] font-normal text-xl">
                    Tibbiy tekshiruv
                  </p>
                </div>
                <div className="items-center">
                  <p className="pt-2 pl-[10px] font-normal text-xl">
                    Visa xarajatlari
                  </p>
                </div>
                <div className="items-center">
                  <p className="pt-2 pl-[10px] font-normal text-xl">
                    O’qishni yakunlagandan so’ng ish bilan ta’minlash kafolati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
