import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  return (
    <div className="">
      <div
        id="about_us"
        className="container max-w-[375px] bg-video lg:bg-feature_pattern bg-contain bg-no-repeat lg:max-w-[1580px] mx-auto mt-12 lg:mt-0"
      >
        <div className="text-center pt-20">
          <h2 className="text-[24px] lg:text-[32px] text-center font-poppins px-4 lg:px-0 leading-[34px] lg:leading-[49px] text-black font-bold lg:font-semibold">
            Avval shu videoni ko’ring
          </h2>
          <p className="mx-auto font-poppins text-[17px] w-[213px] lg:w-auto leading-8 font-normal text-[#161616]">
            Biz haqimizda batafsil shu yerdan bilasiz
          </p>
        </div>
        {/* Video */}
        <div className="justify-center flex mx-4 lg:mx-0 lg:px-0 rounded-sm">
          {/* <div className="hidden lg:block w-[1140px] h-[574px] bg-black"></div> */}
          {/* <div className="lg:hidden block w-[343px] h-[240px] bg-black"></div> */}
          <iframe
            className="hidden lg:block"
            width="1140"
            height="574"
            src="https://www.youtube.com/embed/pZsIVsJlTlI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            className="lg:hidden block"
            width="343"
            height="240"
            src="https://www.youtube.com/embed/pZsIVsJlTlI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <div className="relative w-[307px] lg:top-[20px] top-[26px] left-[28px] lg:left-[175px] text-[#161616] font-poppins font-bold text-[24px] leading-[34px] lg:text-[54px] lg:leading-[70px]">
            <p className="bg-white lg:w-[587px]">Falonchi qo'shnimni</p>
            <p className="bg-white lg:w-[528px] lg:mt-1 -mt-1">
              og'li 7 ta xalqaro
            </p>
            <p className="bg-white lg:w-[594px] lg:mt-1">
              universitetga kiribdi
            </p>
          </div>
        </div>

        <div className="relative lg:hidden mt-[126px]">
          <p className="font-poppins font-bold text-[28px] leading-[34px] text-center w-[220px] mx-auto bg-white">
            Bizning ta'riflar
          </p>
          <div className="absolute w-[390px] -left-[197px] -top-[297] h-[872px] blur-[100px] rotate-[53deg] bg-[rgba(207,124,42,0.12)]"></div>
        </div>
        {/* Tariflar */}
        <div
          id="tarifs"
          className="relative pt-20 h-[553px] flex max-w-[375px] lg:max-w-[1440px] lg:mt-[30px] xl:mt-[100px] 2xl:mt-[150px] lg:justify-end"
        >
          <div className="absolute lg:hidden mt-28 w-[375px] h-[553px] bg-discount_ph bg-contain bg-no-repeat"></div>
          <div className=" lg:w-auto lg:mx-0 mx-auto">
            <div className="relative mx-auto w-[343px] h-[138px] lg:w-[550px] lg:h-[141px] lg:px-0 lg:py-0 px-4 py-6 bg-white rounded-[30px] lg:rounded-[22px] lg:mr-10 z-10">
              <div className="flex flex-col">
                <div className="flex lg:ml-6 lg:mt-6 items-center font-poppins">
                  <p className="text-[20px] lg:text-[24px] leading-9 font-bold text-black">
                    Standart ta’rifi:
                  </p>
                  <p className="bg-black text-[#E5BC18] lg:text-black lg:bg-[#E5BC18] lg:bg-opacity-70 text-[20px] leading-[30px] font-extrabold rounded-[56px] px-6 py-2 ml-2">
                    900 $
                  </p>
                </div>
                <div className="flex flex-nowrap lg:ml-5 mt-2 lg:text-base text-sm">
                  <p className="lg:px-[10px] py-1 px-1 lg:py-[7px] rounded-xl lg:rounded-full bg-[#EEEEEE]">
                    Grandsiz kontrakt asosida o'qishga kirishga yordamlashish
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-[343px] lg:w-[550px] h-[138px] bg-white lg:bg-opacity-70 lg:px-0 lg:py-0 px-4 py-6 border-[#E5BC18] border-solid lg:border-2 rounded-[22px] lg:mr-10 mt-[10px]">
              <div className="flex flex-col">
                <div className="flex lg:ml-6 lg:mt-5 items-center font-poppins">
                  <p className="text-[20px] lg:text-[24px] leading-9 font-bold text-black">
                    Optimal ta’rifi:
                  </p>
                  <p className="lg:bg-white bg-[#F78E5F] text-[18px] lg:text-[20px] leading-[30px] font-extrabold rounded-[56px] lg:px-3 px-2 py-2 lg:py-2 ml-2">
                    1 600 $
                  </p>
                </div>
                <div className="flex lg:ml-5 mt-2">
                  <p className="lg:px-[10px] lg:py-[7px] lg:rounded-full lg:border border-solid border-black">
                    To'liq bo'lmagan grand asosida o'qisha kirishiga
                    yordamlashish
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-[343px] mx-auto lg:w-[550px] h-[138px] bg-stone-200 rounded-[22px] lg:mr-10 mt-[10px]">
              <div className="flex flex-col z-10">
                <div className="flex ml-6 mt-6 items-center font-poppins">
                  <p className="text-[20px] lg:text-[24px] leading-9 font-bold text-black">
                    Premium ta’rifi:
                  </p>
                  <p className="bg-black text-[#E5BC18] lg:text-black lg:bg-[#E5BC18] text-[16px] leading-[30px] font-extrabold rounded-[56px] px-2 lg:px-4 py-2 ml-2">
                    2 200 $
                  </p>
                  <p className="bg-[#E53D18] font-medium font-mono p-2 text-white rounded-[16px] text-[25px] leading-[30px] ml-2">
                    hot
                  </p>
                </div>
                <div className="flex text-sm ml-5 mt-2">
                  <p className="lg:px-[10px] lg:py-[7px] lg:rounded-full lg:bg-[#EEEEEE]">
                    Grand asosida o'qishga kirishga yordamlashish (bepul o'qish,
                    bepul yotoqxona)
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 w-[390px] -left-[97px] -top-[178px] h-[872px] blur-[100px] -rotate-[45deg] bg-[rgba(207,124,42,0.12)]"></div>
            </div>
          </div>
        </div>

        {/* Pul tejash  */}
        <div className="lg:max-w-[1140px] max-w-[375px] flex flex-col lg:flex-row font-poppins relative text-white z-50 mx-auto h-[558px] bg-[#202020] rounded-[44px]">
          <div className="mt-[40px] lg:pt-[57px] lg:ml-[79px]">
            <h1 className="lg:w-[504px] text-center font-extrabold text-[24px] leading-[34px] lg:px-0 px-9 lg:text-[42px] lg:leading-[57px]">
              Qancha pulni tejab qolasiz?
            </h1>
            <div className="mt-[27px] flex flex-col lg:hidden justify-center items-center text-center">
              <div>
                <p className="text-xs opacity-60">1. Yotoqxona xarajatlari</p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  1000$ dan 4 yil-4000$
                </h2>
              </div>
              <div className="">
                <p className="text-xs opacity-60">
                  2. Sifatli til kurslari 6oy
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  6 oy uchun - 1000 $
                </h2>
              </div>
              <div>
                <p className="text-xs opacity-60 w-[256px]">
                  3. Grand kafolatlanmaydi, kontraktda o'qisangiz
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  2000$ dan 4 yil-8000$
                </h2>
              </div>
              <div className="">
                <p className="text-xs opacity-60 w-[256px]">
                  4 Tibbiy xizmatlar va boshqa mayda xarajatlar
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  4 yil uchun - 1000$
                </h2>
              </div>
              <div>
                <p className="text-xs opacity-60 w-[243px]">
                  5. Ish bilan ta'minlash kafolati yo'q, yashashingiz uchun
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  3000$ dan 4 yil-12 000$
                </h2>
              </div>
            </div>
            <div className="mt-[27px] lg:flex hidden">
              <div>
                <p className="text-xs opacity-60">1. Yotoqxona xarajatlari</p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  1000$ dan 4 yil-4000$
                </h2>
              </div>
              <div className="ml-[54px]">
                <p className="text-xs opacity-60">
                  2. Sifatli til kurslari 6oy
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  6 oy uchun - 1000 $
                </h2>
              </div>
            </div>
            <div className="mt-[27px] lg:flex hidden">
              <div>
                <p className="text-xs opacity-60 w-[256px]">
                  3. Grand kafolatlanmaydi, kontraktda o'qisangiz
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  2000$ dan 4 yil-8000$
                </h2>
              </div>
              <div className="ml-[26px]">
                <p className="text-xs opacity-60 w-[256px]">
                  4 Tibbiy xizmatlar va boshqa mayda xarajatlar
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  4 yil uchun - 1000$
                </h2>
              </div>
            </div>
            <div className="mt-[27px] lg:flex hidden">
              <div>
                <p className="text-xs opacity-60 w-[243px]">
                  5. Ish bilan ta'minlash kafolati yo'q, yashashingiz uchun
                </p>
                <h2 className="text-xl leading-[30px] font-bold mt-1">
                  3000$ dan 4 yil-12 000$
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-[20px] w-[311px] mx-auto lg:mt-[92px] lg:ml-[67px] lg:w-[378px] lg:h-[372px] z-30 rounded-[44px] bg-white">
            <div className="my-[20px] py-4 flex flex-col justify-center font-poppins text-black">
              <p className="font-bold text-[56px] leading-relaxed text-[#161616] text-center">
                26 000$
              </p>
              <p className="text-[23px] leading-[34px] text-center">
                Tejab qolasiz
              </p>
              <a
                href="#contacts"
                className="w-[256px] text-center mt-4 lg:mt-[51px] mx-auto font-bold px-[67px] py-[23px] bg-[#E5BC18] rounded-[60px] lg:ml-[60px]"
              >
                foydalanish
              </a>
            </div>
          </div>
          <div className="lg:block hidden bg-econom bg-contain bg-no-repeat absolute mt-[318px] ml-[488px] z-20 w-[723px] h-[240px]"></div>
          <div className="lg:block hidden absolute ml-[488px] blur-[150px] opacity-40 rotate-12 z-10 mt-[119px] bg-white lg:w-[473px] h-[342px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
