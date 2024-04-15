import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationMenu from './components/NavigationMenu'
import Banner from './components/Banners/Banner'
import NewsLetterBanner from './components/Banners/NewsLetterBanner'
import Poster from './components/Poster'
import DealsDay from './components/DealDay'
import Footer from './components/Footer/Footer'
import Swiper from './components/Swiper/Swiper'
import ShopCategory from './components/ShopCategory'
import './App.css'
function App() {

  return (
    <>
      <Banner />
      <NavigationMenu />
      <Poster /> 
      <DealsDay />
      <ShopCategory /> 
      <Footer />
    </>
  )
}

export default App
