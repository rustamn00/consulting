import Image from "next/image";
import React from "react";

import Link from "next/link";

const Pricing = () => {
  return (
    <div id="Pricing" className="bg-primary pt-8 lg:pt-16">
      <div className="container max-w-[1280px] mx-auto pb-14 lg:pb-20">
        <h1 className="text-center text-white font-bold text-[30px] lg:text-[40px] leading-[49px] tracking-[0.8px] uppercase pb-6 lg:pb-16">
          Pricing
        </h1>
        <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-[350px] lg:w-[400px] h-[700px] flex flex-col justify-between bg-[#EDEDED] p-8 my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div>
              <h2 className="text-primary text-2xl font-semibold tracking-[0.8px] pb-6">
                Free
              </h2>
              <h3 className="flex pb-10 text-3xl text-[rgba(0,47,95,0.3)] font-medium">
                $ <p className="text-primary font-medium">0</p> / Year
              </h3>
              <div className="flex flex-col">
                <div className="flex pb-6">
                  <p className="pl-[10px]">Course management</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Define roles and permissions</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Entrance attendance tracking</p>
                </div>
                <div className="flex pb-6 items-center">
                  <p className="pl-[10px] text-[14px] leading-[130%] -tracking-tighter">
                    Creating notifications and announcements
                  </p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Branch management</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Mobile application</p>
                </div>
              </div>
            </div>
            <Link href="#Contacts">
              <button className="group w-[190px] hover:bg-[#0F6AC7] py-3 px-4 mx-auto flex items-center rounded-lg bg-primary">
                <span className="text-white text-base leading-5 tracking-[0.8px]">
                  Start trial
                </span>
                <div className="flex pl-4">
                  <div className="group-hover:translate-x-6 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-[#0F6AC7]"
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                        fill="#002F5F"
                        stroke="white"
                      />
                      <path
                        d="M6.94995 5.2002L9.74995 8.0002L6.94995 10.8002"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* <Image
                    
                    src={buttonIcon}
                    width={26}
                    height={14}
                    alt="tick icon"
                  /> */}
                </div>
              </button>
            </Link>
          </div>
          <div className="w-[350px] lg:w-[400px] h-[700px] flex flex-col justify-between bg-[#EDEDED] p-8 my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div>
              <h2 className="text-primary text-2xl font-semibold tracking-[0.8px] pb-6">
                Basic
              </h2>
              <h3 className="flex pb-10 text-3xl text-[rgba(0,47,95,0.3)] font-medium">
                $ <p className="text-primary font-medium">9</p> / Year
              </h3>
              <div className="flex flex-col">
                <div className="flex pb-[26px]">
                  <p className="pl-[10px]">Features of Free version</p>
                </div>
                <div className="flex pb-[26px]">
                  <p className="pl-[10px]">External apps integration</p>
                </div>
                <div className="flex pb-[26px]">
                  <p className="pl-[10px]">Request management</p>
                </div>
                <div className="flex pb-[26px] items-center">
                  <p className="pl-[10px] text-[14px] leading-[130%] -tracking-tighter">
                    Email Communication
                  </p>
                </div>
                <div className="flex pb-[26px]">
                  <p className="pl-[10px]">Video conferencing</p>
                </div>
                <div className="flex pb-[26px]">
                  <p className="pl-[10px]">Statistics and reporting</p>
                </div>
              </div>
            </div>
            <Link href="#Contacts">
              <button className="group w-[190px] hover:bg-[#0F6AC7] py-3 px-4 mx-auto flex items-center rounded-lg bg-primary">
                <span className="text-white text-base leading-5 tracking-[0.8px]">
                  Start trial
                </span>
                <div className="flex pl-4">
                  <div className="group-hover:translate-x-6 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-[#0F6AC7]"
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                        fill="#002F5F"
                        stroke="white"
                      />
                      <path
                        d="M6.94995 5.2002L9.74995 8.0002L6.94995 10.8002"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* <Image
                    
                    src={buttonIcon}
                    width={26}
                    height={14}
                    alt="tick icon"
                  /> */}
                </div>
              </button>
            </Link>
          </div>
          <div className="w-[350px] lg:w-[400px] h-[700px] flex flex-col justify-between bg-[#EDEDED] p-8 my-4 lg:my-0 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div>
              <h2 className="text-primary flex text-2xl font-semibold tracking-[0.8px] pb-6">
                Premium
              </h2>
              <h3 className="flex pb-10 text-3xl text-[rgba(0,47,95,0.3)] font-medium">
                $ <p className="text-primary font-medium">14</p> / Year
              </h3>
              <div className="flex flex-col">
                <div className="flex pb-6">
                  <p className="pl-[10px]">Features of Basic version</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Self-customization</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Gamification</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Statistics with AI implementation</p>
                </div>
                <div className="flex pb-6 items-center">
                  <p className="pl-[10px] text-[14px] leading-[130%] -tracking-tighter">
                    Advanced attendance tracking
                  </p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">
                    Security through two-way verification
                  </p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Human Resource Management</p>
                </div>
                <div className="flex pb-6">
                  <p className="pl-[10px]">Accounting system</p>
                </div>
              </div>
            </div>
            <Link href="#Contacts">
              <button className="group w-[190px] hover:bg-[#0F6AC7] py-3 px-4 mx-auto flex items-center rounded-lg bg-primary">
                <span className="text-white text-base leading-5 tracking-[0.8px]">
                  Start trial
                </span>
                <div className="flex pl-4">
                  <div className="group-hover:translate-x-6 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                    >
                      <path
                        className="group-hover:fill-[#0F6AC7]"
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                        fill="#002F5F"
                        stroke="white"
                      />
                      <path
                        d="M6.94995 5.2002L9.74995 8.0002L6.94995 10.8002"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* <Image
                    
                    src={buttonIcon}
                    width={26}
                    height={14}
                    alt="tick icon"
                  /> */}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
