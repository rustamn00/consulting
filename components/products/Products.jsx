import React, { useState } from "react";
import Image from "next/image";
const Products = () => {
  const [active, setActive] = useState(1);

  const tab = [
    {
      num: 1,
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.875 4.00001V4.62501C18.875 4.70789 18.8421 4.78738 18.7835 4.84598C18.7249 4.90459 18.6454 4.93751 18.5625 4.93751H17.625V5.40626C17.625 5.66513 17.4151 5.87501 17.1562 5.87501H1.84375C1.58488 5.87501 1.375 5.66513 1.375 5.40626V4.93751H0.4375C0.35462 4.93751 0.275134 4.90459 0.216529 4.84598C0.157924 4.78738 0.125 4.70789 0.125 4.62501V4.00001C0.125 3.93819 0.143339 3.87775 0.177695 3.82635C0.212052 3.77495 0.260882 3.7349 0.318008 3.71126L9.38051 0.273761C9.45702 0.24208 9.54298 0.24208 9.61949 0.273761L18.682 3.71126C18.7391 3.7349 18.7879 3.77495 18.8223 3.82635C18.8567 3.87775 18.875 3.93819 18.875 4.00001ZM17.9375 15.875H1.0625C0.544727 15.875 0.125 16.2947 0.125 16.8125V17.4375C0.125 17.5204 0.157924 17.5999 0.216529 17.6585C0.275134 17.7171 0.35462 17.75 0.4375 17.75H18.5625C18.6454 17.75 18.7249 17.7171 18.7835 17.6585C18.8421 17.5999 18.875 17.5204 18.875 17.4375V16.8125C18.875 16.2947 18.4553 15.875 17.9375 15.875ZM3.25 6.50001V14H1.84375C1.58488 14 1.375 14.2099 1.375 14.4688V15.25H17.625V14.4688C17.625 14.2099 17.4151 14 17.1562 14H15.75V6.50001H13.25V14H10.75V6.50001H8.25V14H5.75V6.50001H3.25Z"
            fill={`${active === 1 ? `#FF6B35` : `#BBBBBB`}`}
          />
        </svg>
      ),
      title: "University",
    },
    {
      num: 2,
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 20"
          fill={`${active === 2 ? `#FF6B35` : `none`}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6V0M0 19.3333H20M2 19.3333V11.3333H4.66667M18 19.3333V11.3333H15.3333M8.66667 19.3333V15.3333H11.3333V19.3333M10 0.666667H14V3.33333H10M10 6L15.3333 8.66667V19.3333H4.66667V8.66667L10 6ZM10 12.6667C9.64638 12.6667 9.30724 12.5262 9.05719 12.2761C8.80714 12.0261 8.66667 11.687 8.66667 11.3333C8.66667 10.9797 8.80714 10.6406 9.05719 10.3905C9.30724 10.1405 9.64638 10 10 10C10.3536 10 10.6928 10.1405 10.9428 10.3905C11.1929 10.6406 11.3333 10.9797 11.3333 11.3333C11.3333 11.687 11.1929 12.0261 10.9428 12.2761C10.6928 12.5262 10.3536 12.6667 10 12.6667Z"
            stroke="#BBBBBB"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "School",
    },
    {
      num: 3,
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99992 0.666626L0.833252 2.74996V4.13885L9.99992 2.05551L19.1666 4.13885V2.74996L9.99992 0.666626ZM5.76915 4.83329C3.4937 4.83329 1.27396 5.7451 1.27396 5.7451L0.833252 5.93954V16.6388H8.7878C9.03319 17.0541 9.47883 17.3333 9.99992 17.3333C10.5203 17.3333 10.9667 17.0541 11.212 16.6388H19.1666V5.94024L18.7259 5.7451C18.7259 5.7451 16.5061 4.83329 14.2307 4.83329C12.1731 4.83329 10.3666 5.51385 9.99992 5.65829C9.63325 5.51385 7.82671 4.83329 5.76915 4.83329ZM5.76915 6.22218C7.13287 6.22218 8.58966 6.65621 9.29479 6.8951V14.6208C8.50998 14.3659 7.22101 14.0132 5.76915 14.0132C4.28697 14.0132 3.0805 14.3493 2.24351 14.6208V6.8951C2.78646 6.70135 4.21787 6.22218 5.76915 6.22218ZM14.2307 6.22218C15.782 6.22218 17.2134 6.70204 17.7563 6.8951V14.6208C16.9186 14.35 15.7129 14.0132 14.2307 14.0132C12.7788 14.0132 11.4899 14.3659 10.705 14.6208V6.8951C11.4102 6.65621 12.867 6.22218 14.2307 6.22218Z"
            fill={`${active === 3 ? `#FF6B35` : `#BBBBBB`}`}
          />
        </svg>
      ),
      title: "Education center",
    },
  ];
  const productDescription = [
    {
      id: 1,
      content: "All-in-one integrated platform (LMS, ERP & CRM)",
    },
    {
      id: 2,
      content: "Full monitoring of student & teacher performance",
    },
    {
      id: 3,
      content: "E-admin",
    },
    {
      id: 4,
      content: "Personal cabinet for each admin staff, teacher & learner",
    },
    {
      id: 5,
      content: "Adaptive and Customizable (for any types of institutions)",
    },
    {
      id: 6,
      content: "HRM and Admission",
    },
    {
      id: 7,
      content: "7 External Apps Integration (zoom, smart timetable, etc.",
    },
    {
      id: 8,
      content: "Affordability (cloud-based storage)",
    },
    {
      id: 9,
      content: "Accounting and Audit",
    },
  ];
  const handleClick = (num) => {
    setActive(num);
  };
  return (
    <div
      id="Products"
      className="lg:min-h-[1000px] min-h-[130vh] bg-primary lg:pb-10"
    >
      <div className="w-full h-full container text-center mx-auto lg:pt-20 pt-9 text-black bg-transparent">
        <h2 className="lg:text-[40px] text-xl text-white font-bold tracking-widest my-8">
          Products
        </h2>
        <div className="flex lg:justify-center justify-around">
          {tab.map((item) => (
            <div
              onClick={() => handleClick(item?.num)}
              key={item?.num}
              className={`lg:w-1/4 w-[10%] h-[10%] border-b border-solid flex justify-center items-center cursor-pointer pb-2 ${
                item?.num === active ? `border-orange` : `border-white`
              }`}
            >
              {item.svg}
              <p
                className={`lg:block hidden text-lg font-medium tracking-wider mx-4 ${
                  item?.num === active ? `text-orange` : `text-white`
                }`}
              >
                {item?.title}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-transparent w-[75%] lg:h-[550px] h-[150px] mx-auto rounded-md my-6 overflow-hidden">
          <div className="w-full h-full animate-spin_images relative">
            <Image
              width={1200}
              height={500}
              // layout="fill"
              src="/assets/Home.png"
              alt="first-product"
            />
          </div>
        </div>
        <div className="lg:w-[70%] w-[90%] mx-auto lg:mt-20 mt-10 lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-10">
          {productDescription.map((item) => (
            <div key={item?.id} className="flex justify-start lg:my-0 my-10">
              <div className="w-[10%]">
                <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3238 1.23208C12.5657 1.00051 12.8877 0.872496 13.2217 0.875037C13.5557 0.877578 13.8757 1.01048 14.1141 1.2457C14.3525 1.48092 14.4907 1.80005 14.4995 2.13577C14.5084 2.47148 14.3871 2.79752 14.1614 3.04507L7.309 11.6611C7.19117 11.7887 7.04895 11.8911 6.89086 11.9622C6.73277 12.0333 6.56205 12.0716 6.3889 12.0748C6.21575 12.078 6.04373 12.0461 5.88313 11.9809C5.72253 11.9158 5.57665 11.8188 5.4542 11.6956L0.909958 7.1269C0.783408 7.00834 0.681906 6.86538 0.611507 6.70652C0.541107 6.54767 0.503252 6.37619 0.5002 6.20231C0.497149 6.02843 0.528964 5.85572 0.593746 5.69447C0.658528 5.53322 0.754951 5.38674 0.877262 5.26377C0.999573 5.1408 1.14527 5.04385 1.30565 4.97872C1.46604 4.91359 1.63783 4.8816 1.81077 4.88467C1.98372 4.88774 2.15428 4.9258 2.31228 4.99658C2.47028 5.06736 2.61248 5.16941 2.7304 5.29664L6.32664 8.91054L12.2912 1.27007C12.3019 1.25677 12.3134 1.24409 12.3255 1.23208H12.3238Z"
                      fill="#002F5F"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-medium tracking-wider text-white ml-2 text-left">
                {item?.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
