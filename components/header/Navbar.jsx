import React, { useState } from "react";
import Link from "next/link";
import logotip from "/public/logotip.svg";
import Image from "next/image";
import NavbarBurger from "../burger/navbar";

const Navbar = () => {
  return (
    <div className="">
      <div className="lg:py-0 py-4">
        <div className="container max-w-[375px] pl-5 pr-10 lg:px-0 lg:max-w-[1280px] mx-auto flex items-center justify-between mt-4">
          <div className="flex">
            <Link
              href="/"
              className="flex cursor-pointer justify-center items-center"
            >
              <Image
                className="w-[40px] h-[36px] lg:w-auto lg:h-auto"
                src={logotip}
                alt="logo"
              />
              <div className="lg:ml-3 ml-2">
                <h2 className="font-normal text-black font-serif text-xl lg:text-2xl tracking-wider text-orange">
                  LACHIN
                </h2>
                <h4 className="font-normal text-black font-sans text-sm lg:text-base text-orange">
                  Consulting
                </h4>
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="flex font-poppins text-base font-normal w-[434px] justify-between">
              <li>
                <a
                  className="font-bold underline decoration-[3px] decoration-[#CC8D03] underline-offset-8"
                  href="#about_us"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a className="" href="#tarifs">
                  Tariflar
                </a>
              </li>
              <li>
                <a className="" href="#izoh">
                  Izohlar
                </a>
              </li>
              <li>
                <a className="" href="#contacts">
                  Savol-Javoblar
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <Button />
          </div>

          <div className="block lg:hidden z-10">
            <NavbarBurger />
          </div>
        </div>

        <div className="container lg:max-w-[1380px] max-w-[375px] bg-head lg:bg-hero_pattern h-[376px] lg:h-[660px] bg-contain bg-no-repeat mx-auto lg:mt-14">
          <div className="hidden lg:block">
            <div className="relative top-[120px] left-[110px] font-poppins font-bold text-[54px] leading-[70px]">
              <p className="bg-white w-[587px]">Chet elda grandda</p>
              <p className="bg-white w-[528px] mt-1">o'qish - ushalmas</p>
              <p className="bg-white w-[314px] mt-1">orzu emas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const Button = () => {
  return (
    <a href="#contacts" type="button" className="">
      <span className="text-black py-3 px-5 rounded-full border-2 border-solid border-[#D19506] font-sans text-xs lg:text-xl font-semibold">
        +91 774-45-49
      </span>
    </a>
  );
};
