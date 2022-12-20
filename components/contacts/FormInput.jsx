import axios from "axios";
import { useState } from "react";
import Country from "./countries.json";
import React from "react";
import { FormikConsumer, useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
// import { toast, Toaster } from "react-hot-toast";

const FormInput = () => {
  const phoneRegExp = /^[0-9]{9}$/;

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required("Username is required, at least 3 characters")
      .min(3, "Minimal 3 characters")
      .max(20, "Maximum 20 characters"),
    last_name: Yup.string()
      .required("Username is required, at least 3 characters")
      .min(3, "Minimal 3 characters")
      .max(20, "Maximum 20 characters"),
    email: Yup.string()
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
    last_name: "",
    email: "",
    phone_number: "",
    job_title: "",
    school_name: "",
    organization_type: "",
    country: "",
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
      name: "last_name",
      type: "text",
      placeholder: "Last name",
      //   errorMessage:
      //     "Name should be 3-16 charecters and shouldn't include any special character!",
      //   pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
      className: {
        style: " h-12 border",
      },
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      //   errorMessage: "It should be a valid email address!",
      required: true,
      className: {
        style: " h-12 border",
      },
    },

    {
      id: 4,
      name: "phone_number",
      type: "phone",
      placeholder: "Phone number",
      required: true,
      className: {
        style: " h-12 border",
      },
    },
    {
      id: 5,
      name: "job_title",
      type: "text",
      placeholder: "Job title",
      required: true,
      className: {
        style: " h-12 border",
      },
    },
    {
      id: 6,
      name: "school_name",
      type: "text",
      placeholder: "School name",
      required: true,
      className: {
        style: " h-12 border",
      },
    },
    {
      id: 7,
      name: "organization_type",
      type: "text",
      placeholder: "Organization type",
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

  const selectOption = [
    {
      id: 8,
      name: "country",
      placeholder: "Select country",
      require: true,
    },
  ];

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    job_title: "",
    text_area: "",
    organization_type: "",
    country: "",
    school_name: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // toast.success("Successfully sent!");

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL} Full name:${values?.first_name} %0ALast name: ${values?.last_name} %0AEmail: ${values?.email} %0APhone number: ${values?.phone_number} %0AJob title: ${values?.job_title} %0ASchool/University name: ${values?.school_name} %0AOrganisation type: ${values?.organization_type} %0ACountry: ${values?.country} %0AMessage: ${values?.text_area}`
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
    <>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e);
          // formik.values = initialValues;
        }}
        className="modal-form grid grid-cols-2"
      >
        <label className="text-base relative flex flex-col">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First name*"
            className={
              formik.touched.first_name && formik.errors.first_name
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
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
        <label className="text-base relative flex flex-col">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last name*"
            className={
              formik.touched.last_name && formik.errors.last_name
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("last_name")}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.last_name}
            </span>
          ) : null}
        </label>
        <label className="text-base relative flex flex-col mt-4">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Work email address*"
            className={
              formik.touched.email && formik.errors.email
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.email}
            </span>
          ) : null}
        </label>
        <label className="text-base relative flex flex-col mt-4">
          <input
            type="text"
            name="job_title"
            id="job_title"
            placeholder="Job title*"
            className={
              formik.touched.job_title && formik.errors.job_title
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("job_title")}
          />
          {formik.touched.job_title && formik.errors.job_title ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.job_title}
            </span>
          ) : null}
        </label>
        <label className="text-base relative flex flex-col mt-4">
          <input
            type="text"
            name="school_name"
            id="school_name"
            placeholder="School/University name*"
            className={
              formik.touched.school_name && formik.errors.school_name
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("school_name")}
          />
          {formik.touched.school_name && formik.errors.school_name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.school_name}
            </span>
          ) : null}
        </label>
        <label className="text-base relative flex flex-col mt-4">
          <input
            type="text"
            name="organization_type"
            id="organization_type"
            placeholder="School/University name*"
            className={
              formik.touched.organization_type &&
              formik.errors.organization_type
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("organization_type")}
          />
          {formik.touched.organization_type &&
          formik.errors.organization_type ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.organization_type}
            </span>
          ) : null}
        </label>
        <label className="relative flex flex-col mt-4">
          <div
            className={
              formik.touched.number && formik.errors.number
                ? " h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : " h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
          >
            <input
              type="number"
              name="number"
              id="number"
              placeholder="(90) 123 45 67"
              className=" outline-none w-full h-full "
              {...formik.getFieldProps("number")}
            />
            {formik.touched.number && formik.errors.number ? (
              <span className="text-red-600 text-xs absolute bottom-0 sm:-bottom-4  left-2">
                {formik.errors.number}
              </span>
            ) : null}
          </div>
        </label>
        {/* //Country */}
        <label className="text-base relative flex flex-col mt-4">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country*"
            className={
              formik.touched.country && formik.errors.country
                ? "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4 border-red-600"
                : "  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps("country")}
          />
          {formik.touched.country && formik.errors.country ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:-bottom-5 left-2">
              {formik.errors.country}
            </span>
          ) : null}
        </label>
        <label className="text-base relative flex flex-col mt-4">
          <textarea
            type="text"
            name="text_area"
            id="text_area"
            placeholder="text_area*"
            className="  h-12 border col-2  mt-2 outline-none rounded-md py-2 px-4"
            {...formik.getFieldProps("text_area")}
          />
        </label>
        <button
          className="w-full h-8 bg-blue-base rounded-xl border text-black mt-6"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default FormInput;
