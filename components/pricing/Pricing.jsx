import Image from "next/image";
import React, { useEffect } from "react";
import timer from "/public/timer.svg";
import Countdown from "react-countdown";
import Link from "next/link";

const Pricing = () => {
  const Completionist = () => <span>Missed</span>;
  return (
    <div className="lg:mt-16 mt-6">
      <div className="container max-w-[375px] lg:max-w-[1280px] mx-auto">
        <h1 className="text-[#A9610A] px-4 lg:px-0 underline underline-offset-4 font-bold text-[30px] lg:text-[40px] leading-[49px] tracking-[0.8px] pb-0 lg:pb-6">
          Bizning ta’riflarimiz
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-0">
          <div className="w-[343px] lg:w-[400px] flex flex-col justify-between bg-white border border-[#DFAF24] py-8 my-4 lg:my-0 rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
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
            <div className="w-[343px] lg:w-[400px] flex flex-col justify-between bg-[#FCE663]  my-4 lg:my-0 rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
              <div className="absolute w-[350px] lg:w-[400px]">
                <div className="relative lg:left-[300px] left-[230px]">
                  <div className="absolute z-10 -top-6 left-[18px] font-sans font-semibold text-white text-base">
                    <Countdown
                      date={new Date("Dec 23, 2022 23:59:59").getTime()}
                    >
                      <Completionist />
                    </Countdown>
                  </div>
                  <Image className="relative -top-6" src={timer} alt="timer" />
                </div>
              </div>
              <div className="text-center py-8">
                <h2 className="text-primary text-[#242424] text-2xl font-semibold tracking-[0.8px] pb-6">
                  Optimal ta’rifi <br />
                  (23-dekabrgacha chegirma)
                </h2>
                <h3 className="text-[#A9610A] pb-6 text-3xl font-medium">
                  Narxi:{" "}
                  <span className="line-through text-red-600 decoration-2">
                    5 800 $
                  </span>{" "}
                  3 800 $
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
                <div className="pt-6 items-center">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[343px] lg:w-[400px] flex flex-col justify-between bg-white border border-[#DFAF24] py-8 my-4 lg:my-0 rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
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

export const Button = () => {
  return (
    <a href="#Contacts" type="button" className="">
      <span className="text-white w-[291px] h-[60px] rounded-sm bg-[#A9610A] px-7 py-4 underline underline-offset-2 font-sans text-xl lg:text-xl font-semibold">
        Imkoniyatdan foydalanish
      </span>
    </a>
  );
};
