import React, { useState } from "react";
import Link from "next/link";
import logotip from "/public/logotip.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(false);
  const ToggleSidebar = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (isOpen) {
      document.body.style.overflow = "scroll";
    }
    setIsOpen(!isOpen);
    setIcon(!icon);
  };

  return (
    <div className="h-[100vh] bg-headerBack bg-cover bg-no-repeat">
      <nav className="lg:block hidden h-[80px] py-4">
        <div className="container max-w-[1280px] mx-auto flex justify-between">
          <div className="flex mt-7">
            <Link
              href="/"
              className="flex cursor-pointer justify-center items-center"
            >
              <Image src={logotip} alt="logo" />
              <div className="ml-5">
                <h2 className="font-normal text-white font-serif text-5xl text-orange">
                  LACHIN
                </h2>
                <h4 className="font-normal text-white font-sans text-xl text-orange">
                  Consulting
                </h4>
              </div>
            </Link>
          </div>

          <div className="mt-5">
            <Button />
          </div>
        </div>

        <div className="container max-w-[1280px] mx-auto">
          <div className="mt-40 w-[600px]">
            <p className="w-[510px] text-white font-sans leading-[48px] font-[550] text-[46px]">
              Talabalik davridan boshlab 1000$ oylik olib, ishlashni boshlang
            </p>
            <p className="mt-6 text-white font-sans leading-[32px] font-normal text-[20px]">
              O‘zbekistondan chiqmay turib, imtihon orqali TOP-1000 talikdan joy
              olgan, Xitoyning nufuzli Universitetlariga 100% grandga kirish
              imkoniyati
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile navbar  */}
      <nav className="lg:hidden bg-white py-4 fixed top-0 right-0 left-0 z-20">
        <div className="container mx-auto justify-between flex items-center">
          <div className="flex cursor-pointer justify-center items-center">
            <svg
              width="80"
              height="40"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.71 65.3201C58.7789 65.3201 65.32 58.779 65.32 50.7101C65.32 42.6412 58.7789 36.1001 50.71 36.1001C42.6411 36.1001 36.1 42.6412 36.1 50.7101C36.1 58.779 42.6411 65.3201 50.71 65.3201Z"
                fill="#FF6B35"
              />
              <path
                d="M51.06 29.35C43.2783 29.3421 35.8176 26.2473 30.3151 20.7448C24.8127 15.2423 21.7179 7.78167 21.71 0L32.06 0C32.06 5.03911 34.0617 9.87184 37.6249 13.435C41.1881 16.9982 46.0208 19 51.06 19C56.0991 19 60.9318 16.9982 64.495 13.435C68.0582 9.87184 70.06 5.03911 70.06 0H80.41C80.3994 7.78085 77.3038 15.24 71.8019 20.7419C66.3 26.2438 58.8408 29.3394 51.06 29.35Z"
                fill="#002F5F"
              />
              <path
                d="M101.42 79.7098C93.6358 79.7098 86.1706 76.6175 80.6664 71.1133C75.1622 65.6092 72.0699 58.1439 72.0699 50.3598C72.0699 42.5757 75.1622 35.1104 80.6664 29.6062C86.1706 24.102 93.6358 21.0098 101.42 21.0098V31.3598C96.3808 31.3598 91.5481 33.3615 87.9849 36.9247C84.4217 40.4879 82.4199 45.3207 82.4199 50.3598C82.4199 55.3989 84.4217 60.2316 87.9849 63.7948C91.5481 67.358 96.3808 69.3598 101.42 69.3598V79.7098Z"
                fill="#002F5F"
              />
              <path
                d="M80.41 101.42H70.06C70.06 96.3807 68.0582 91.548 64.495 87.9848C60.9318 84.4216 56.0991 82.4198 51.06 82.4198C46.0208 82.4198 41.1881 84.4216 37.6249 87.9848C34.0617 91.548 32.06 96.3807 32.06 101.42H21.71C21.71 93.6357 24.8022 86.1704 30.3064 80.6662C35.8106 75.162 43.2759 72.0698 51.06 72.0698C58.8441 72.0698 66.3094 75.162 71.8135 80.6662C77.3177 86.1704 80.41 93.6357 80.41 101.42V101.42Z"
                fill="#002F5F"
              />
              <path
                d="M0 79.71V69.37C5.03911 69.37 9.87184 67.3682 13.435 63.805C16.9982 60.2418 19 55.4091 19 50.37C19 45.3309 16.9982 40.4982 13.435 36.935C9.87184 33.3718 5.03911 31.37 0 31.37L0 21C7.78259 21.0106 15.2432 24.1076 20.7454 29.6116C26.2476 35.1157 29.3421 42.5774 29.35 50.36C29.3421 58.1417 26.2473 65.6023 20.7448 71.1048C15.2423 76.6073 7.78167 79.7021 0 79.71H0Z"
                fill="#002F5F"
              />
            </svg>
            <h2 className="font-semibold text-xl text-orange">WiseSpace</h2>
          </div>
          <div
            onClick={ToggleSidebar}
            className={`sidebarButton lg:hidden block cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] ${
              icon ? `close` : ``
            }`}
          >
            <span className="absolute block bg-primary w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
              toggle
            </span>
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
      <span className="text-white underline underline-offset-[12px] font-sans text-3xl font-semibold">
        Bog’lanish
      </span>
    </a>
  );
};
