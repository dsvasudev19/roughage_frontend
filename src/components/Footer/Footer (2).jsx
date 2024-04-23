"use client";
import React from "react";
import './Footer.css'
import { GrLocation } from "react-icons/gr";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function Component() {
  return (
<footer className="footer bg-[#212121]">
  <div className="container px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div>
        <h2 className="font-bold text-md text-white">POPULAR CATEGORIES</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex flex-col justify-start text-gray-500 gap-2">
          <li>
            <a href="#">Fashion</a>
          </li>
          <li>
            <a href="#">Electronic</a>
          </li>
          <li>
            <a href="#">Cosmetic</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Watches</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-md text-white">PRODUCTS</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex flex-col justify-start text-gray-500 gap-2">
          <li>
            <a href="#">Prices Drop</a>
          </li>
          <li>
            <a href="#">New Products</a>
          </li>
          <li>
            <a href="#">Best Sales</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-md text-white">OUR COMPANY</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex flex-col justify-start text-gray-500 gap-2">
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Legal Notice</a>
          </li>
          <li>
            <a href="#">Terms And Conditions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Secure Payment</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-md text-white">SERVICES</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex flex-col justify-start text-gray-500 gap-2">
          <li>
            <a href="#">Prices Drop</a>
          </li>
          <li>
            <a href="#">New Products</a>
          </li>
          <li>
            <a href="#">Best Sales</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-md text-white">CONTACT</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex flex-col justify-start text-gray-500 gap-2">
          <li>
            <ion-icon className="text-lg" name="location-outline" />
            <a href="#">
              419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
            </a>
          </li>
          <li>
            <ion-icon className="text-lg" name="call-outline" />
            <a href="#">(607) 936-8058</a>
          </li>
          <li>
            <ion-icon className="text-lg" name="mail-outline" />
            <a href="#">Example@Gmail.Com</a>
          </li>
        </ul>
      </div>
      <div >
        <h2 className="font-bold text-md text-white">FOLLOW US</h2>
        <hr className="title w-16 mb-4 mt-2" />
        <ul className="flex justify-start text-gray-500 gap-2 text-lg">
          <li>
            <a href="#">
            <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
            <ion-icon name="logo-whatsapp" />
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"/>
            </a>
          </li>
          <li>
            <a href="#">
            <ion-icon name="logo-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr />
  <div className="mx-auto flex items-center justify-center flex-col gap-4 py-10 pb-20 lg:pb-10">
    {/* <img className="w-80" src="./assets/images/payment.png" alt="payment" /> */}
    <h4 className="text-gray-500 text-md lg:text-lg font-semibold">
      Copyright © Ecommerce All Rights Reserved.
    </h4>
  </div>
</footer>

  );
}

export default Component;
