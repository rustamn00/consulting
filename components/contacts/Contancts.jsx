import Image from "next/image";
import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";

const Contancts = () => {
  const contacts = [
    {
      id: 1,
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6481 14.397L16.7059 12.4547C16.3544 12.1034 15.9141 11.8541 15.432 11.7334C14.9499 11.6126 14.4441 11.625 13.9685 11.7691C13.4929 11.9133 13.0654 12.1839 12.7315 12.5519C12.3976 12.92 12.1698 13.3718 12.0725 13.8592C8.86976 13.2603 5.75476 10.1581 5.56087 7.3853C6.10536 7.28514 6.60646 7.02161 6.99754 6.62975C7.51246 6.11476 7.80173 5.41633 7.80173 4.68808C7.80173 3.95983 7.51246 3.2614 6.99754 2.74641L5.05587 0.80419C4.54089 0.289272 3.84246 0 3.11421 0C2.38596 0 1.68753 0.289272 1.17254 0.80419C-4.65301 6.62975 12.8225 24.1053 18.6481 18.2797C19.1627 17.7647 19.4518 17.0664 19.4518 16.3384C19.4518 15.6103 19.1627 14.912 18.6481 14.397Z"
            fill="white"
          />
        </svg>
      ),
      image: "/assets/contactPhone.svg",
      text: "+998 99 638 99 00",
    },
    {
      id: 2,
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 0.5C2.44928 0.5 1.60143 0.858213 0.976311 1.49584C0.351189 2.13346 0 2.99826 0 3.9V4.2417L10 9.7344L20 4.2434V3.9C20 2.99826 19.6488 2.13346 19.0237 1.49584C18.3986 0.858213 17.5507 0.5 16.6667 0.5H3.33333ZM20 6.1729L10.395 11.448C10.2736 11.5147 10.1379 11.5496 10 11.5496C9.86212 11.5496 9.7264 11.5147 9.605 11.448L0 6.1729V14.1C0 15.0017 0.351189 15.8665 0.976311 16.5042C1.60143 17.1418 2.44928 17.5 3.33333 17.5H16.6667C17.5507 17.5 18.3986 17.1418 19.0237 16.5042C19.6488 15.8665 20 15.0017 20 14.1V6.1729Z"
            fill="white"
          />
        </svg>
      ),
      image: "/assets/contactMessage.svg",
      text: "ssolutuionuz@gmail.com",
    },
    {
      id: 3,
      svg: (
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C6.61392 0.00270323 4.32637 0.914156 2.63915 2.53442C0.951939 4.15468 0.0028245 6.35146 9.57508e-06 8.64286C-0.00284824 10.5154 0.634084 12.3371 1.8131 13.8286C1.8131 13.8286 2.05855 14.1389 2.09864 14.1837L9 22L15.9046 14.1798C15.9406 14.1381 16.1869 13.8286 16.1869 13.8286L16.1877 13.8262C17.3661 12.3354 18.0028 10.5145 18 8.64286C17.9972 6.35146 17.0481 4.15468 15.3608 2.53442C13.6736 0.914156 11.3861 0.00270323 9 0ZM9 11.7857C8.35272 11.7857 7.71997 11.6014 7.18177 11.256C6.64358 10.9107 6.2241 10.4199 5.9764 9.84558C5.72869 9.27129 5.66388 8.63937 5.79016 8.02972C5.91644 7.42006 6.22814 6.86006 6.68583 6.42052C7.14353 5.98098 7.72668 5.68166 8.36152 5.56039C8.99637 5.43912 9.6544 5.50136 10.2524 5.73924C10.8504 5.97711 11.3616 6.37994 11.7212 6.89678C12.0808 7.41362 12.2727 8.02126 12.2727 8.64286C12.2716 9.47608 11.9265 10.2749 11.313 10.864C10.6994 11.4532 9.86765 11.7847 9 11.7857Z"
            fill="white"
          />
        </svg>
      ),
      image: "/assets/contactLocation.svg",
      text: "Tashkent, Uzbekistan",
    },
  ];

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contancts;
