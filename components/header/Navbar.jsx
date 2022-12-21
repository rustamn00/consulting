import React, { useState } from "react";
import Link from "next/link";
import logotip from "/public/logotip.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[100vh] bg-headerMobiBack lg:bg-headerBack bg-cover bg-no-repeat">
      <nav className="lg:py-0 py-4">
        <div className="container max-w-[375px] px-5 lg:px-0 lg:max-w-[1280px] mx-auto flex justify-between">
          <div className="flex mt-7">
            <Link
              href="/"
              className="flex cursor-pointer justify-center items-center"
            >
              <Image
                className="w-[64px] h-[56px] lg:w-auto lg:h-auto"
                src={logotip}
                alt="logo"
              />
              <div className="lg:ml-5 ml-2">
                <h2 className="font-normal text-white font-serif text-2xl lg:text-5xl text-orange">
                  LACHIN
                </h2>
                <h4 className="font-normal text-white font-sans text-sm lg:text-xl text-orange">
                  Consulting
                </h4>
              </div>
            </Link>
          </div>

          <div className="mt-8 lg:mt-5">
            <Button />
          </div>
        </div>

        <div className="container max-w-[1280px] mx-auto">
          <div className="lg:mt-40 mt-52 lg:w-[600px]">
            <p className="w-[360px] px-4 lg:px-0 lg:w-[510px] text-white font-sans lg:leading-[48px] font-[550] text-3xl lg:text-[46px]">
              Talabalik davridan boshlab 1000$ oylik olib, ishlashni boshlang
            </p>
            <p className="mt-6 px-4 lg:px-0 text-white font-sans leading-[32px] font-normal text-[20px]">
              O‘zbekistondan chiqmay turib, imtihon orqali TOP-1000 talikdan joy
              olgan, Xitoyning nufuzli Universitetlariga 100% grandga kirish
              imkoniyati
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

export const Button = () => {
  return (
    <a href="#Contacts" type="button" className="">
      <span className="text-white underline underline-offset-[12px] font-sans text-xl lg:text-3xl font-semibold">
        Bog’lanish
      </span>
    </a>
  );
};
