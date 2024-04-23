import React, { useEffect, useState } from "react";
import * as YUP from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { MdEmail } from "react-icons/md";
import Password from "antd/es/input/Password";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "./../../axiosInstance";

const forgetValidationSchema = YUP.object().shape({
  email: YUP.string().required("Email is required").email("Email is not valid"),
  password: YUP.string().required("Password is required"),
  confirmPassword: YUP.string()
    .required("Confirm password is required")
    .oneOf([YUP.ref("password"), null], "Passwords must match"),
});

const App = () => {
  const [token, setToken] = useState ("");
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const location = useLocation();
  const validateTokenAndSetUser = async () => {
    try {
      const response = await axiosInstance.get("/validateResetToken", token);
      if (response.status === 200) {
        setInitialValues({ ...initialValues, email: response.data.user.email });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params);
    const token = params.get("token");
    console.log(token);
  }, []);

  useEffect(() => {
    validateTokenAndSetUser();
  }, [token]);
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset password
            </h1>
            <Formik
              initialValues={""}
              validationSchema={forgetValidationSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div className="text-left">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@ecommerce.com"
                      required=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>

                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="ABC.abc@123#"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm Password
                    </label>

                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 mt-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
