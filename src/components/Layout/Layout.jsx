import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './../Footer/Footer'
import Navbar1 from '../Navbar/Navbar1'
import Banner from './../Banners/Banner'

function Layout() {
  return (
    <>
      <div>
        <Banner />
        <Navbar1 />
      </div>
      <Outlet />
      <Footer className="z-5" />
    </>
  )
}

export default Layout
