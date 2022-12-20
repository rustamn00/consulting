import axios from "axios";
import { useState } from "react";
import Country from "./countries.json";
import React from "react";
import { FormikConsumer, useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
// import { toast, Toaster } from "react-hot-toast";

const FormInput = () => {
  const phoneRegExp = /^[+]{0,1}[0-9]{9,12}$/;

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

  const [values, setValues] = useState({
    first_name: "",
    phone_number: "",
    text_area: "",
  });
  const inputs = [
    {
      id: 1,
      name: "first_name",
      type: "text",
      placeholder: "First name",
      //   errorMessage:
      //     "Name should be 3-16 charecters and shouldn't include any special character!",
      //   pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
      className: {
        style: " h-12 border col-2",
      },
    },

    {
      id: 2,
      name: "phone_number",
      type: "phone",
      placeholder: "Phone number",
      required: true,
      className: {
        style: " h-12 border",
      },
    },
  ];

  const textArea = [
    {
      id: 1,
      name: "text_area",
      placeholder: "Text area",
      require: true,
    },
  ];

  const initialValues = {
    first_name: "",
    number: "",
    text_area: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // toast.success("Successfully sent!");

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL} Full name:${values?.first_name} %0APhone number: ${values?.number} %0AMessage: ${values?.text_area}`
      )
      .then(function (response) {})
      .catch(function (error) {
        toast.error("Internal error");
      });
    values.name = "";
    resetForm({ values: "" });
  };

  // function postData() {}

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="">
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e);
          // formik.values = initialValues;
        }}
        className="modal-form"
      >
        <div className="flex bg-[#DFAF24]">
          <div className="flex flex-col">
            <label className="text-base w-[540px] relative flex flex-col">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Ism - sharifingiz"
                className={
                  formik.touched.first_name && formik.errors.first_name
                    ? "  h-12 border col-2 text-black outline-none rounded-md py-2 px-4 border-red-600"
                    : "  h-12 text-black outline-none rounded-md py-2 px-4"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("first_name")}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
                  {formik.errors.first_name}
                </span>
              ) : null}
            </label>

            <label className="relative flex flex-col mt-4">
              <div
                className={
                  formik.touched.number && formik.errors.number
                    ? " h-12 border col-2 bg-white text-black mt-2 outline-none rounded-md px-4 py-2 border-red-600"
                    : " h-12 border col-2 bg-white text-black mt-2 outline-none rounded-md px-4 py-2"
                }
              >
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Telefon raqamingiz"
                  className="w-full outline-none h-full "
                  {...formik.getFieldProps("number")}
                />
                {formik.touched.number && formik.errors.number ? (
                  <span className="text-red-600 text-xs absolute bottom-0 sm:-bottom-4  left-2">
                    {formik.errors.number}
                  </span>
                ) : null}
              </div>
            </label>

            <button
              className="w-[540px] bg-white h-12 text-lg font-sans font-semibold rounded-sm text-[#CF9102] mt-6"
              type="submit"
            >
              Yuborish
            </button>
          </div>

          <label className="text-base w-[594px] relative flex flex-col">
            <textarea
              type="text"
              name="text_area"
              id="text_area"
              placeholder="Qo’shimcha fikr - mulohazalaringiz"
              className="h-[194px] text-black border col-2 ml-10 outline-none rounded-md py-2 px-4"
              {...formik.getFieldProps("text_area")}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
