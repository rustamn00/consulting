import Image from "next/image";
import React, { useState } from "react";

const Features = () => {
  const boxes = [
    {
      id: "chck1",
      inputId: "chck1",
      labelFor: "chck1",
      labelTitle: "for Teachers",
      content: [
        {
          num: 1,
          title: "Creating assignments and annuncements",
        },
        {
          num: 2,
          title: "Creating syllabus (yearly plan)",
        },
        {
          num: 3,
          title: "Weekly timetable and daily schedule",
        },
        {
          num: 4,
          title: "Accumulating all homework in one page with the",
        },
        {
          num: 5,
          title:
            "ability to download and assess them Inserting unique grading method for each teacher and choosing office hours",
        },
      ],
    },
    {
      id: "chck2",
      inputId: "chck2",
      labelFor: "chck2",
      labelTitle: "for Students",
      content: [
        {
          num: 1,
          title: "LMS for Students",
        },
        {
          num: 2,
          title: "Weekly timetable",
        },
        {
          num: 3,
          title: "Assignments with deadlines are comfortable and ease to use",
        },
        {
          num: 4,
          title: "User friendly mobile application",
        },
        {
          num: 5,
          title:
            "Students can track their attendance rate in two ways Grades from all subjects can be seen in one place",
        },
      ],
    },
    {
      id: "chck3",
      inputId: "chck3",
      labelFor: "chck3",
      labelTitle: "for Admin",
      content: [
        {
          num: 1,
          title: "LMS for Admins",
        },
        {
          num: 2,
          title:
            "Creating Branches Full statistics about finance, students, employees and etc",
        },
        {
          num: 3,
          title: "Assigning roles and permissions",
        },
        {
          num: 4,
          title:
            "Mass import functionality (users, courses, faculties) - using one universal excel template",
        },
      ],
    },
  ];
  const [item, setItem] = useState(0);
  const [itemMob, setItemMob] = useState(0);
  const toggleAccordion = (id) => {
    console.log(id);
    const inp1 = document.getElementById("chck1");
    const inp2 = document.getElementById("chck2");
    const inp3 = document.getElementById("chck3");
    if (id === "chck1") {
      inp2.checked = false;
      inp3.checked = false;
      setItem(0);
      setItemMob(0);
    } else if (id === "chck2") {
      inp1.checked = false;
      inp3.checked = false;
      setItem(500);
      setItemMob(300);
    } else if (id === "chck3") {
      inp1.checked = false;
      inp2.checked = false;
      setItem(1000);
      setItemMob(600);
    }
  };
  return (
    <div id="Features" className="lg:h-[100vh] min-h-[65vh]">
      <h2 className="lg:text-[40px] text-center text-2xl text-primary font-bold tracking-widest lg:mt-20 mt-10">
        Features
      </h2>
      <div className="container mx-auto lg:flex justify-between items-center h-[80%] relative mt-4">
        <div className="lg:w-[35%] flex lg:absolute lg:top-[25%] lg:left-10">
          <div className="col flex-[1] last:ml-[1em]">
            <div className="tabs rounded-md overflow-hidden">
              {boxes.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="tab w-full text-white overflow-hidden "
                  >
                    <input
                      onClick={() => toggleAccordion(item?.id)}
                      type="checkbox"
                      id={item?.inputId}
                      className="checkInput absolute opacity-0 -z-[1]"
                    />
                    <label
                      htmlFor={item?.labelFor}
                      className="lg:w-full w-[90%] mx-auto tab-label border-b-2 border-solid border-text flex justify-between py-[1em] bg-white lg:text-xl text-xs uppercase tracking-wider font-semibold cursor-pointer text-text"
                    >
                      {item?.labelTitle}
                    </label>
                    <div className="tab-content max-h-0 px-[1em] text-primary bg-white transition-all duration-200">
                      <ul className="list-disc text-primary px-6 capitalize font-medium text-sm lg:text-base">
                        {item?.content.map((text) => {
                          return (
                            <li key={text?.num} className="my-2">
                              {text?.title}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:block hidden w-1/2 h-[500px] absolute top-[10%] right-10">
          <div className="h-full overflow-hidden">
            <div
              style={{
                transform: `translateY(-${item}px)`,
                transition: "1s",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full flex relative">
                {/* <Image
                  // width={600}
                  // height={500}
                  layout="fill"
                  src="/assets/assig3.png"
                  alt="assignemt"
                /> */}
                {/* aditional image animation  */}
                <div className="animate-accord w-[2400px] h-full flex absolute -right-[1600px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex relative">
                {/* <Image
                  // width={600}
                  // height={500}
                  layout="fill"
                  src="/assets/assig4.png"
                  alt="assignemt"
                /> */}
                {/* aditional image animation  */}
                <div className="animate-accord w-[2400px] h-full flex absolute -right-[1600px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex relative">
                {/* <Image
                  // width={600}
                  // height={500}
                  layout="fill"
                  src="/assets/assig3.png"
                  alt="assignemt"
                /> */}
                {/* aditional image animation  */}
                <div className="animate-accord w-[2400px] h-full flex absolute -right-[1600px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={800}
                      height={500}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile image animation  */}
        <div className="lg:hidden w-full h-[300px] mt-10">
          <div className="h-full overflow-hidden">
            <div
              style={{
                transform: `translateY(-${itemMob}px)`,
                transition: "1s",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full flex relative">
                {/* aditional image animation  */}
                <div className="animate-accord_mob w-[1200px] h-full flex absolute -right-[830px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex relative">
                {/* aditional image animation  */}
                <div className="animate-accord_mob w-[1200px] h-full flex absolute -right-[830px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex relative">
                {/* aditional image animation  */}
                <div className="animate-accord_mob w-[1200px] h-full flex absolute -right-[830px]">
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                  <div className="w-full h-full relative">
                    <Image
                      width={350}
                      height={200}
                      // layout="fill"
                      src="/assets/assig4.png"
                      alt="assignemt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
