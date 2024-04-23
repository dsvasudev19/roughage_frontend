
import NavigationMenu from './components/NavigationMenu'
import Banner from './components/Banners/Banner'
import Poster from './components/Poster'
import DealsDay from './components/DealDay'
import Footer from './components/Footer/Footer'
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
