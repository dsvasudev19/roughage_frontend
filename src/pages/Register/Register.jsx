import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as YUP from "yup";

const validationSchema = YUP.object().shape({
  firstName: YUP.string().required("First Name is Required"),
  lastName: YUP.string().required("Last Name is Required"),
  phone:YUP.string().required("Phone is Required"),
  email: YUP.string().email("Invalid email").required("Email is required"),
  password: YUP.string()
    .required("Password is Required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: YUP.string().oneOf(
    [YUP.ref("password"), null],
    "Passwords do not match"
  ),
  dob: YUP.string().required("DOB is required"),
  gender: YUP.string().required("Gender is required"),
  terms:YUP.boolean().oneOf([true], 'You must accept the terms and conditions')
});
const Register = () => {

    const [initialValues,setInitialValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        dob:'',
        gender:'',
        terms:false
    })
  const handleSubmit=(values,{resetForm})=>{
     console.log(values)
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, errors,touched }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div className="block md:flex justify-between gap-2">
                    <div className="text-left relative">
                      <Field
                        type="text"
                        id="floating_outlined"
                        name="firstName"
                        className={`block px-2.5 pb-2.0 pt-4 w-full mb-3 lg:mb-0 text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                        errors.firstName && touched.firstName ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                          errors.firstName && touched.firstName
                            ? "focus:border-red-600"
                            : "focus:border-cyan-600"
                        } peer`}
                        placeholder=""
                      />
                      <label
                        className={`absolute text-lg ${
                          errors.firstName && touched.firstName ? "text-red-700" : "text-gray-500"
                        } ${
                          errors.firstName && touched.firstName
                            ? "dark:text-red-700"
                            : "dark:text-gray-500"
                        } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                      >
                        First Name
                      </label>
                    </div>

                    <div className="text-left relative">
                      <Field
                        type="text"
                        id="floating_outlined"
                        name="lastName"
                        className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                          errors.lastName && touched.lastName ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                          errors.lastName && touched.lastName
                            ? "focus:border-red-600"
                            : "focus:border-cyan-600"
                        } peer`}
                        placeholder=""
                      />
                      <label
                        className={`absolute text-lg ${
                          errors.lastName && touched.lastName ? "text-red-700" : "text-gray-500"
                        } ${
                          errors.lastName && touched.lastName
                            ? "dark:text-red-700"
                            : "dark:text-gray-500"
                        } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="text-left relative">
                    <Field
                      type="text"
                      id="floating_outlined"
                      name="email"
                      className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                        errors.email && touched.email ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.email && touched.email
                          ? "focus:border-red-600"
                          : "focus:border-cyan-600"
                      } peer`}
                      placeholder=""
                    />
                    <label
                      className={`absolute text-lg ${
                        errors.email && touched.email ? "text-red-700" : "text-gray-500"
                      } ${
                        errors.email && touched.email
                          ? "dark:text-red-700"
                          : "dark:text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Email
                    </label>
                    {/* <ErrorMessage name="test" component="div" /> */}
                    {/* <p
                      id="outlined_error_help"
                      className="text-xs text-red-600 dark:text-red-400"
                    >
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>  */}
                  </div>
                  <div className="text-left relative">
                    <Field
                      type="text"
                      id="floating_outlined"
                      name="phone"
                      className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                        errors.phone && touched.phone ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.phone && touched.phone
                          ? "focus:border-red-600"
                          : "focus:border-cyan-600"
                      } peer`}
                      placeholder=""
                    />
                    <label
                      className={`absolute text-lg ${
                        errors.phone && touched.phone ? "text-red-700" : "text-gray-500"
                      } ${
                        errors.phone && touched.phone
                          ? "dark:text-red-700"
                          : "dark:text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Phone
                    </label>
                  </div>
                  <div className="text-left relative">
                    <Field
                      type="password"
                      id="floating_outlined"
                      name="password"
                      className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                        errors.password && touched.password ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.password && touched.password
                          ? "focus:border-red-600"
                          : "focus:border-cyan-600"
                      } peer`}
                      placeholder=""
                    />
                    <label
                      className={`absolute text-lg ${
                        errors.password && touched.password ? "text-red-700" : "text-gray-500"
                      } ${
                        errors.password && touched.password
                          ? "dark:text-red-700"
                          : "dark:text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Password
                    </label>
                  </div>
                  <div className="text-left relative">
                    <Field
                      type="password"
                      id="floating_outlined"
                      name="confirmPassword"
                      className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-700"
                          : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "focus:border-red-600"
                          : "focus:border-cyan-600"
                      } peer`}
                      placeholder=""
                    />
                    <label
                      className={`absolute text-lg ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "text-red-700"
                          : "text-gray-500"
                      } ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "dark:text-red-700"
                          : "dark:text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="block md:flex justify-between h-auto gap-2">
                    <div className="text-left relative w-full">
                      <Field
                        as="select"
                        name="gender"
                        // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 lg:mb-0"
                        className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                          errors.gender && touched.gender ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                          errors.gender && touched.gender
                            ? "focus:border-red-600"
                            : "focus:border-cyan-600"
                        } peer mb-3 lg:mb-0`}
                      >
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </Field>
                    </div>
                    <div className="text-left relative">
                      <Field
                        type="date"
                        id="floating_outlined"
                        name="dob"
                        className={`block px-2.5 pb-2.0 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 
                      ${
                          errors.dob && touched.dob ? "border-red-700" : "border-gray-300"
                      } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                          errors.dob && touched.dob
                            ? "focus:border-red-600"
                            : "focus:border-cyan-600"
                        } peer`}
                        placeholder=""
                      />
                      <label
                        className={`absolute text-lg ${
                          errors.dob && touched.dob ? "text-red-700" : "text-gray-500"
                        } ${
                          errors.dob && touched.dob
                            ? "dark:text-red-700"
                            : "dark:text-gray-500"
                        } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                      >
                        Date of Birth
                      </label>
                    </div>
                  </div>
                  <div className="block md:flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Field
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          name="terms"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Accept all Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <div className="text-left mt-1 text-sm text-gray-500 dark:text-gray-300">
                      Exitsting user? <a href="/login" className="text-cyan-600">Login</a>
                    </div>
                  </div>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-red-500 mt-2"
                  />
                  <button
                    type="submit"
                    className="w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>

            <div className="text-center w-full h-fit">
              <span>Or</span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full text-cyan-600 bg-white hover:bg-primary-700 ring-1 ring-slate-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2"
              >
                Sign Up With Google <FcGoogle size={20} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
