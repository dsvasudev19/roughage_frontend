import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import "./ExpandSearch.css";
import { BsCart2 } from "react-icons/bs";
function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          E-Commerce
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <div className="flex m-auto justify-between items-center">
          <form action="" role="search" className="search-form me-5">
            <input
              type="search"
              className="search-text"
              placeholder="Search..."
              autoComplete="off"
            />
          </form>

          {/* <IoIosSearch size={25} className="me-5" /> */}
          <FaRegHeart size={25} strokeWidth={1.1} className="me-5" />
          <BsCart2 size={25} className="me-5" />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/" className="font-bold">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="font-bold">About</Navbar.Link>
        <Navbar.Link href="#" className="font-bold">Services</Navbar.Link>
        <Navbar.Link href="#" className="font-bold">Pricing</Navbar.Link>
        <Navbar.Link href="/contact" className="font-bold">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
