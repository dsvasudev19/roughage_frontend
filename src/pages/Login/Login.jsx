import React, {useState} from 'react';
import {FcGoogle} from "react-icons/fc";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as YUP from 'yup';
import {axiosInstance} from './../../axiosInstance'

const loginValidationSchema=YUP.object().shape({
    email: YUP.string().required("Email is required"),
    password: YUP.string().required("Password is Required"),
    confirmPassword: YUP.string().oneOf([YUP.ref("password"), null], "Passwords must match")
})
const Login = () => {

    const [initialValues,setInitialValues] =useState({
        email:"",
        password:""
    })
    const handleSubmit=async (values,{resetForm})=>{
        console.log(values)
        try {
            const response = axiosInstance.post("/login",values);
            if(response.status===200){
                console.log("Successfully logged in")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleSubmit}
                        >
                        {
                            ({setFieldValue})=>(
                                <Form className="space-y-4 md:space-y-6" >
                                    <div className='text-left'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@ecommerce.com" required="" />
                                        <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
                                    </div>

                                    <div className='text-left'>

                                        <div className="flex items-start justify-between">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                        </div>
                                        <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        <ErrorMessage name="password" component="div" className="text-red-500 mt-2" />
                                    </div>
                                    <div className="flex items-center justify-between">


                                    </div>
                                    <button type="submit" className="w-full text-white bg-cyan-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>


                                </Form>
                            )
                        }
                        </Formik>
                        <div className='text-center w-full h-fit'>
                            <span>Or</span>
                        </div>
                        <div className='flex justify-center'>

                            <button type="submit" className="w-full text-cyan-600 bg-white hover:bg-primary-700 ring-1 ring-slate-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center gap-2">Sign in With Google <FcGoogle size={20} /> </button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;