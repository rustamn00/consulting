import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React from "react";
import logotip from "/public/logotip.svg";
import Slider from "react-slick";
import * as Yup from "yup";
import { FormikConsumer, useFormik } from "formik";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        ` z-50 absolute top-[397px] -left-[403px] px-8 w-[89px] h-[89px] bg-right hover:bg-right hover:bg-no-repeat hover:bg-center bg-no-repeat bg-center bg-white  hover:bg-white border-2 border-red border-solid rounded-full`
      }
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        ` z-50 absolute top-[352px] -left-[503px] px-8 w-[89px] h-[89px] rotate-180 bg-right hover:bg-right hover:bg-no-repeat hover:bg-center bg-no-repeat bg-center bg-white  hover:bg-white border-2 border-red border-solid rounded-full`
      }
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrowTel(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        ` absolute -top-[40px] left-[84px] px-8 w-[64px] h-[64px] bg-right hover:bg-right hover:bg-no-repeat hover:bg-center bg-no-repeat bg-center bg-white  hover:bg-white border-2 border-red border-solid rounded-full`
      }
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowTel(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        ` absolute -top-[72px] left-[4px] px-8 rotate-180 w-[64px] h-[64px] bg-right hover:bg-right hover:bg-no-repeat hover:bg-center bg-no-repeat bg-center bg-white  hover:bg-white border-2 border-red border-solid rounded-full`
      }
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const Footer = () => {
  const phoneRegExp = /^[+]{0,1}[0-9]{9,12}$/;
  const initialValues = {
    first_name: "",
    number: "",
    text_area: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required("Username is required, at least 3 characters")
      .min(3, "Minimal 3 characters")
      .max(20, "Maximum 20 characters"),

    number: Yup.string("Must be only number")
      .matches(phoneRegExp, {
        message: "Phone number is not valid.",
        excludeEmptyString: true,
      })
      .required("Required phone number"),
  });

  const onSubmit = (values, { resetForm }) => {
    // toast.success("Successfully sent!");

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL} Full name:${values?.first_name} %0APhone number: ${values?.number} %0AMessage: ${values?.text_area}`
      )
      .then(function (response) {
        alert("Surovingiz yuborildi");
        // values.first_name = "";
        // values.number = "";
        // values.text_area = "";
      })
      .catch(function (error) {
        console.log("Internal error");
      });
    values.name = "";

    resetForm({ values: "" });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settingss = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrowTel />,
    prevArrow: <SamplePrevArrowTel />,
  };
  return (
    <footer className="relative bg-foote bg-cover bg-no-repeat mt-[175px] lg:mt-[115px]">
      <div className="container relative mx-auto px-auto pb-10 lg:mx-auto max-w-[375px] lg:max-w-[1480px]">
        <div className="absolute -top-[151px] left-7 w-[492px] h-[1400px] bg-[#B9B5C0] opacity-20 blur-[150px] -rotate-[27deg]"></div>
        <div className="absolute top-[348px] h-[275px] w-[1460px] bg-discount bg-cover bg-no-repeat"></div>
        <div
          id="izoh"
          className="flex flex-col w-[343px] lg:flex-row mx-auto lg:w-[1108px] h-[605px] font-poppins"
        >
          <div className=" relative">
            <p className="text-[17px] leading-[32px] text-[#161616] w-[265px] lg:text-[28px] lg:w-[410px] mt-[58px] lg:leading-[42px]">
              Xitoy ta’limi haqida xalqaro talabalarning fikri
            </p>
            <div className="z-10 font-bold text-[24px] lg:text-[56px] mt-[25px] leading-[34px] lg:leading-[72px]">
              <p className="bg-white rounded-[5px] lg:w-[547px] w-[277px]">
                Xitoyda yashab{" "}
              </p>
              <p className="z-10 bg-white rounded-[5px] lg:w-[458px] w-[199px] mt-1">
                qolaman deb
              </p>
              <p className="z-10 bg-white rounded-[5px] lg:w-[554px] w-[220px] mt-1">
                o’ylamagandim
              </p>
            </div>
          </div>

          <div className="lg:w-[639px] w-[343px] mx-auto h-[260px] mt-20 lg:mt-0 lg:-ml-16 lg:h-[565px] lg:p-6 lg:bg-black bg-white rounded-[32px] lg:rounded-[70px] z-0">
            <Slider className="relative lg:block hidden" {...settings}>
              <div className="w-[585px] h-[515px]">
                <iframe
                  className="rounded-[50px] "
                  width="585"
                  height="515"
                  src="https://www.youtube.com/embed/muyA5bc8Djw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[585px] h-[515px]">
                <iframe
                  className="rounded-[50px] "
                  width="585"
                  height="515"
                  src="https://www.youtube.com/embed/oZ5pPHlfnNg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[585px] h-[515px]">
                <iframe
                  className="rounded-[50px] "
                  width="585"
                  height="515"
                  src="https://www.youtube.com/embed/h9dh6V9v_Sk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Slider>
            <Slider className="relative lg:hidden block" {...settingss}>
              <div className="w-[327px] h-[240px]">
                <iframe
                  className="lg:rounded-[50px] rounded-[32px] mx-auto my-3"
                  width="327"
                  height="240"
                  src="https://www.youtube.com/embed/muyA5bc8Djw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[327px] h-[240px]">
                <iframe
                  className="lg:rounded-[50px] rounded-[32px] mx-auto my-3"
                  width="327"
                  height="240"
                  src="https://www.youtube.com/embed/oZ5pPHlfnNg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-[327px] h-[240px]">
                <iframe
                  className="lg:rounded-[50px] rounded-[32px] mx-auto my-3"
                  width="327"
                  height="240"
                  src="https://www.youtube.com/embed/h9dh6V9v_Sk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Slider>
          </div>
        </div>

        <div className="flex relative my-10 mb-20 mx-auto lg:max-w-[1197px] h-[550px] font-poppins">
          <div className="absolute -top-[478px] -z-50 -left-[58px] w-[493px] h-[973px] bg-[#E5BC18] opacity-20 blur-[150px] -rotate-[27deg]"></div>
          <div className="absolute -top-[265px] -z-50 left-[361px] w-[493px] h-[973px] bg-[#E5BC18] opacity-20 blur-[150px] -rotate-[27deg]"></div>
          <div className="absolute -top-[216px] -z-50 left-[20px] w-[493px] max-h-[1800px] bg-[#B9B5C0] opacity-20 blur-[150px] -rotate-[27deg]"></div>

          <div
            id="contacts"
            className="lg:w-[767px] w-[343px] ml-4 h-[510px] z-10 bg-white rounded-[50px] font-poppins"
          >
            <form
              onSubmit={(e) => {
                formik.handleSubmit(e);
                // formik.values = initialValues;
              }}
              className="mt-[25px] lg:mt-[53px] lg:ml-[70px]"
            >
              <h1 className="font-bold mb-6 text-[24px] leading-[36px] lg:text-[40px] lg:leading-[60px] text-center">
                Biz bilan bog’lanish
              </h1>

              <div className="flex lg:flex-row flex-col items-center">
                <div></div>
                <div className="mb-5 lg:mb-0">
                  <h3 className="text-[12px] leading-4">Ismi sharifingiz:</h3>
                  <input
                    name="first_name"
                    id="first_name"
                    minLength="3"
                    maxLength="25"
                    className={
                      formik.touched.first_name && formik.errors.first_name
                        ? "  focus:outline-none py-2 mt-2 opacity-70 w-[288px] text-[20px] leading-[30px] font-bold border-b border-solid  border-red-600"
                        : "  focus:outline-none py-2 mt-2 opacity-70 w-[288px] text-[20px] leading-[30px] font-bold border-b border-solid border-black"
                    }
                    // className=""
                    type="text"
                    placeholder="Ismi sharifingiz"
                    {...formik.getFieldProps("first_name")}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
                      {formik.errors.first_name}
                    </span>
                  ) : null}
                </div>
                <div className="lg:ml-[35px] mb-5 lg:mb-0">
                  <h3 className="text-[12px] leading-4">Telefon raqamingiz:</h3>
                  <input
                    name="number"
                    id="number"
                    className={
                      formik.touched.number && formik.errors.number
                        ? " focus:outline-none py-2 mt-2 opacity-70 text-[20px] leading-[30px] font-bold w-[288px] border-b border-solid border-red-600"
                        : " focus:outline-none py-2 mt-2 opacity-70 text-[20px] leading-[30px] font-bold w-[288px] border-b border-solid border-black"
                    }
                    // className=""
                    type="text"
                    placeholder="+998"
                    {...formik.getFieldProps("number")}
                    // value=""
                  />
                </div>
                <div className="lg:hidden">
                  <h3 className="text-[12px] leading-4">
                    Qo’shimcha fikr - mulohazalar
                  </h3>
                  <textarea
                    name="text_area"
                    id="text_area"
                    maxLength={200}
                    className="lg:max-h-32 max-h-20 min-h-[40px] focus:outline-none py-2 mt-2 opacity-70 w-[288px] text-[20px] leading-[30px] font-bold lg:w-[611px] border-b border-solid border-black"
                    type="text"
                    placeholder="Matn"
                    {...formik.getFieldProps("text_area")}
                    // value=""
                  />
                </div>
              </div>
              <div className="mt-7 lg:block hidden">
                <h3 className="text-[12px] leading-4">
                  Qo’shimcha fikr - mulohazalar
                </h3>
                <textarea
                  name="text_area"
                  id="text_area"
                  maxLength={200}
                  className="max-h-32 min-h-[40px] focus:outline-none py-2 mt-2 opacity-70 text-[20px] leading-[30px] font-bold w-[611px] border-b border-solid border-black"
                  type="text"
                  placeholder="Matn"
                  {...formik.getFieldProps("text_area")}
                  // value=""
                />
              </div>
              <button
                type="submit"
                className="w-[236px] ml-14 lg:ml-0 mt-5 lg:mt-10 h-[76px] py-[23px] px-[72px] bg-[#121212] rounded-[20px] text-white"
              >
                Yuborish
              </button>
            </form>
          </div>
          <div className="lg:w-[550px] lg:h-[550px] z-10 absolute lg:top-0 top-[500px] right-0">
            <img src="/mail.png" alt="mail" />
          </div>
          <div className="absolute lg:-left-[35px] -bottom-[343px] h-[421px] -z-10 w-[1365px] bg-footer bg-contain bg-no-repeat"></div>
        </div>

        <div className="mx-auto lg:mt-0 mt-80 lg:w-[1140px] lg:h-[232px] lg:rounded-[24px] bg-white">
          <div className="flex lg:flex-row flex-col justify-between pt-4 lg:pt-[50px] lg:mx-[48px]">
            <div className="flex justify-between items-center px-4">
              <div className="flex">
                <Image
                  className="w-[40px] h-[36px] lg:w-[60px] lg:h-[54px]"
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
              </div>
              <span className="lg:hidden block text-black py-2 px-2 rounded-full border-2 border-solid border-[#D19506] font-sans text-sm lg:text-xl font-semibold">
                +91 774-45-49
              </span>
            </div>
            <div className="flex lg:mt-0 justify-evenly mt-4 items-center font-poppins">
              <a className="text-[15px] leading-[22px]" href="">
                Instagram
              </a>
              <a className="ml-[30px] text-[15px] leading-[22px]" href="">
                Facebook
              </a>
              <a className="ml-[30px] text-[15px] leading-[22px]" href="">
                Telegram
              </a>
              <span className="lg:block hidden text-black ml-[42px] py-3 px-5 rounded-full border-2 border-solid border-[#D19506] font-sans text-xl lg:text-xl font-semibold">
                +91 774-45-49
              </span>
            </div>
          </div>
          <div className="border-b w-[95%] mx-auto border-solid border-black mt-[29px]"></div>
          <div className="flex mt-4 lg:mt-[26px] px-3 lg:px-[53px] items-center justify-between font-poppins">
            <div>
              <a className="text-[15px] leading-[22px]" href="">
                &copy; Copyright
              </a>
              <a
                className="lg:ml-[30px] ml-5 text-[15px] leading-[22px]"
                href=""
              >
                Privacy & Policy
              </a>
              <a
                className="lg:ml-[30px] ml-5 text-[15px] leading-[22px]"
                href=""
              >
                Terms of Use
              </a>
            </div>
            <span className="text-[15px] hidden lg:block leading-[22px]">
              Designed by: <b>Lachin Consulting</b>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
