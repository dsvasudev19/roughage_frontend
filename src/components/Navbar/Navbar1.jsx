import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import DropDown from "./../DropDown";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./Navbar.css";
import { CircleUserRound } from "lucide-react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import axios from "axios";

const Navbar1 = () => {
  // const {user,loading}=useAuth();\
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // setTimeout(() => {
  //   setLoading(false);
  //   setUser(true);
  // }, 1500);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
    }
  }, [loading, user]);

  const getAllCategories = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      console.log(res);
      if (res.state === 200) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div class="bg-white">
      <div class="border py-3 px-6">
        <div class="flex justify-between">
          <div class="flex items-center">
            <a href="/">
              {/* <span class="ml-2 font-semibold text-[#252C32] text-xl lg:block">
                Ecommerce
              </span> */}
              <img src="/roughage-logo-png.png" alt="roughage-logo" />
            </a>
          </div>

          {/* <div class="ml:0 md:ml-6 flex flex-1 gap-x-3">
            <div className="relative w-full hidden md:block items-center rounded-lg">
              <input
                type="text"
                class="w-full h-full rounded-md  border border-[#DDE2E4] px-3 py-2 text-2xl hidden md:block "
                placeholder="Search"
                style={{borderRadius: "5px"}}
              />
              <img
                src="/search-interface.png"
                alt="search"
                className="w-7 h-6 absolute right-3 bottom-0 top-3"
              />
            </div>
         </div> */}
          {/* <div class="ml:0 md:ml-6 flex flex-1 gap-x-3">
            <div class="flex cursor-pointer select-none items-center gap-x-2 rounded-md border py-2 px-4 text-black hover:bg-cyan-500 dropdown">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span class="text-xl font-medium lg:block">
                Categories
                <ul class="dropdown-menu">
                  {
                    categories?.map((item)=>(
                      <li>
                        <a href="#" className="dropdown">
                          <span className="flex items-center justify-center">
                            {item?.name}
                          </span>
                        </a>
                      </li>
                    ))
                  }
                  <li>
                    <a href="#" className="dropdown">
                      <span className="flex items-center justify-center">
                        Category 1
                      </span>
                    </a>
                  </li>
                  
                </ul>
              </span>
            </div>

            <div className="relative w-full hidden md:block items-center rounded-lg">
              <input
                type="text"
                class="w-full h-full rounded-md  border border-[#DDE2E4] px-3 py-2 text-2xl hidden md:block "
                placeholder="Search"
                style={{ borderRadius: "5px" }}
              />
              <img
                src="/search-interface-symbol.png"
                alt="search"
                className="w-7 h-6 absolute right-3 bottom-0 top-3"
              />
            </div>
          </div> */}

          <div class="ml-2 flex">
            <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-7 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fill-rule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sm:text-sm md:text-md lg:text-lg  font-medium  hidden lg:block">
                Orders
              </span>
            </div>

            <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-7 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl font-medium  hidden lg:block">
                Favorites
              </span>
            </div>

            <div
              class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
              onClick={() => {window.location.href="/cart"}}
            >
              <div class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-7 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                {/* <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  3
                </span> */}
              </div>
              <a href="/cart">
                <span class="text-xl font-medium hidden lg:block">Cart</span>
              </a>
            </div>

            {user ? (
              <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md  py-2 px-1 hidden lg:block text-purple-400 hover:text-cyan-600">
                <CircleUserRound size={30} strokeWidth={1.5} />
              </div>
            ) : (
              <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100  hidden lg:block">
                <span class="text-lg font-normal">
                  {user ? (
                    <HiOutlineUserCircle />
                  ) : (
                    <a href="/login">Sign in</a>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between md:hidden relative">
          <input
            type="text"
            class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-xl"
            placeholder="Search"
          />
          <img
            src="/search-interface-symbol.png"
            alt="search"
            className="w-7 h-6 absolute right-3 bottom-0 top-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
