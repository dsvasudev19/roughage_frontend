import React from "react";
import Login from './pages/Login/Login'
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgetPassword/Page";
import ResetPassword from "./pages/ForgetPassword/ResetPassword";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TwoFactor from "./pages/Two-Factor/TwoFactor";
import Layout from "./components/Layout/Layout";
import Contact from './pages/Site Pages/Contact'
import BackUp from './pages/Site Pages/BackUp'
import Home from "./pages/Home/Home";
import About from "./pages/Site Pages/About";
import ProductLayout from "./pages/Products/Layout/Layout";
import Cart from './pages/Cart/Cart'
import ProductDetails from "./pages/Products/ProductDetails";
import TermsAndCondition from "./pages/Site Pages/TermsAndCondition";
import CheckOut from './pages/CheckOut/CheckOut'
import HomePage from './pages/Home'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    <Route path="/twofactor" element={<TwoFactor />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/products" element={<BackUp />} />
                    
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/product' element={<ProductDetails />} />
                    <Route path='/TermsAndConditions' element={<TermsAndCondition />} />
                    <Route path="/checkout" element={<CheckOut />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
