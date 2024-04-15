
"use client";

import {Avatar, Dropdown, Navbar} from "flowbite-react";

function NavigationMenu() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://spackdigi.com">
                <img src="/2020-11-07.jpg" className="mr-3 h-6 sm:h-9" alt="Spack Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Commerce</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Spack User</span>
                        <span className="block truncate text-sm font-medium">spackUser@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Products</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default NavigationMenu;