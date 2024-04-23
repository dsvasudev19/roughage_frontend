import React, { useEffect } from 'react'
// import './Navbar2.css'

function Navbar2() {

    useEffect(() => {
        const details = document.querySelectorAll('details');
        const overlayNavbar = document.getElementById('overlayNavbar');
        const sidebarNavbar = document.getElementById('sidebarNavbar');
        const sidebarCategories = document.getElementById('sidebarCategories');
        const openNavbarButton = document.getElementById('openNavbarButton');
        const categoriesBtn = document.getElementById('categoriesBtn');
        const closeButton = document.querySelectorAll('.closeButton');
    
        details.forEach((targetDetail) => {
          targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
              if (detail !== targetDetail) {
                detail.removeAttribute("open");
              }
            });
          });
        });
    
        overlayNavbar.addEventListener("click", closed);
        closeButton.forEach(button => button.addEventListener("click", closed));
    
        function closed() {
          sidebarNavbar.classList.remove("show");
          sidebarCategories.classList.remove("show");
          overlayNavbar.classList.remove("show");
        }
    
        openNavbarButton.addEventListener("click", openNavbar);
        function openNavbar() {
          sidebarNavbar.classList.add("show");
          overlayNavbar.classList.add("show");
        }
    
        categoriesBtn.addEventListener('click', openCategories)
        function openCategories() {
          sidebarCategories.classList.add("show");
          overlayNavbar.classList.add("show");
        }
      }, []);
    
  return (
    <>

<header className="header w-full">
  {/*! topHeader */}
  <div className="top-header w-screen flex flex-col items-center justify-between border-b">
    <div className="flex w-full items-center justify-between p-4 md:px-20 border-b">
      <div className="icons hidden lg:flex items-center gap-2">
        <a
          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
          href="#"
        >
          <ion-icon name="logo-instagram" />
        </a>
        <a
          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
          href="#"
        >
          <ion-icon name="logo-linkedin" />
        </a>
        <a
          className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"
          href="#"
        >
          <ion-icon name="logo-github" />
        </a>
      </div>
      <h3 className="text-gray-400 font-semibold text-xs">
        FREE SHIPPING THIS WEEK ORDER OVER - $55
      </h3>
      <div className="select hidden md:flex">
        <select className="mr-2 p-1 px-2 text-sm font-semibold" id="currency">
          <option value="USD">USD $</option>
          <option value="EUR">EUR €</option>
        </select>
        <select className="mr-2 p-1 px-2 text-sm font-semibold" id="language">
          <option value="Persian">English</option>
          <option value="English">Persian</option>
        </select>
      </div>
    </div>
    <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24">
      <h1 className="font-semibold text-4xl text-gray-600">Ecommerce</h1>
      <form className="relative w-full sm:w-3/5">
        <input
          className="w-full h-full p-2 border rounded-xl"
          placeholder="Enter Your Product Name..."
          id="search"
          type="text"
        />
        <label className="absolute right-2 top-2" htmlFor="search">
          <i className="fa-solid fa-magnifying-glass cursor-pointer" />
        </label>
      </form>
      <div className="icons hidden mr-2 text-3xl md:flex gap-8 text-gray-600">
        <div className="relative">
          <ion-icon name="person-outline" />
        </div>
        <div className="relative">
          <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
            0
          </span>
          <ion-icon name="heart-outline" />
        </div>
        <div className="relative">
          <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
            0
          </span>
          <ion-icon name="bag-handle-outline" />
        </div>
      </div>
    </div>
  </div>
  {/*! topHeader */}

  {/*? navbar */}

  {/*? mobile Navbar */}
  <div className="mobileNavbar">
    {/*? navbar button */}
    <div
      style={{ boxShadow: "0 0 0.3rem lightgray" }}
      className="z-10 bg-white w-96 lg:hidden flex justify-around items-center p-4 border rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-lg"
    >
      <button id="openNavbarButton" type="button">
        <ion-icon name="menu-outline" className=""/>
      </button>
      <button className="relative" type="button">
        <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
          0
        </span>
        <ion-icon name="bag-handle-outline" />
      </button>
      <button type="button">
        <ion-icon name="home-outline" />
      </button>
      <button className="relative" type="button">
        <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">
          0
        </span>
        <ion-icon name="heart-outline" />
      </button>
      <button id="categoriesBtn" type="button">
        <ion-icon name="grid-outline" />
      </button>
    </div>
    {/** overlay */}
    <div
      id="overlayNavbar"
      className="hidden fixed top-0 left-0 w-screen h-screen bg-gray-500/30 z-10"
    />
    {/*! sidebarNavbar */}
    <div
      className="fixed top-0 w-72 h-screen bg-white p-4 shadow-lg hidden flex-col justify-start gap-4 text-lg font-semibold overflow-auto z-20"
      id="sidebarNavbar"
    >
      <div className="flex justify-between border-b-2 py-4">
        <h3 className="text-red-400">Menu</h3>
        <button className="closeButton hover:text-red-500">
          <ion-icon name="close-circle-outline" />
        </button>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">Home</div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <a href="#">Shirt</a>
          <a href="#">Shorts &amp; Jeans</a>
          <a href="#">Safety Shoes</a>
          <a href="#">Wallet</a>
          <summary>Men's</summary>
        </details>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <a href="#">Dress &amp; Frock</a>
          <a href="#">Earrings</a>
          <a href="#">Necklace</a>
          <a href="#">Makeup Kit</a>
          <summary>Women's</summary>
        </details>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <a href="#">Earrings</a>
          <a href="#">Couple Rings</a>
          <a href="#">Necklace</a>
          <a href="#">Bracelets</a>
          <summary>Jewelry</summary>
        </details>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <a href="#">Clothes Perfume</a>
          <a href="#">Deodorant</a>
          <a href="#">Flower Fragrance</a>
          <a href="#">Air Freshener</a>
          <summary>Perfume</summary>
        </details>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <a href="#">Blog</a>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <a href="#">Hot Offers</a>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <div className="border rounded-xl shadow-xl flex flex-col items-start">
            <a className="border-b w-full pb-2" href="#">
              English
            </a>
            <a className="border-b w-full pb-2" href="#">
              Persian
            </a>
          </div>
          <summary>Language</summary>
        </details>
      </div>
      <div className="mobile_navbar_item border-b pb-3 text-gray-600">
        <details>
          <div className="border rounded-xl shadow-xl flex flex-col items-start">
            <a className="border-b w-full pb-2" href="#">
              USD $
            </a>
            <a className="border-b w-full pb-2" href="#">
              EUR €
            </a>
          </div>
          <summary>Currency</summary>
        </details>
      </div>
      <div className="icons flex items-center justify-center gap-4">
        <a
          className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
          href="#"
        >
          <ion-icon name="logo-instagram" />
        </a>
        <a
          className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
          href="#"
        >
          <ion-icon name="logo-linkedin" />
        </a>
        <a
          className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"
          href="#"
        >
          <ion-icon name="logo-github" />
        </a>
      </div>
    </div>
    {/*todo sidebarCategories */}
    <div
      id="sidebarCategories"
      className="fixed top-0 w-80 h-screen bg-white p-6 shadow-lg hidden flex-col justify-start gap-4 font-semibold overflow-auto z-20"
    >
      <div className="categories w-full h-auto">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg font-semibold mb-4">CATEGORY</h1>
          <button className="closeButton text-xl hover:text-red-500">
            <ion-icon name="close-circle-outline" />
          </button>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Shirt</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Shorts &amp; Jeans</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Jacket</a>
              <span>50</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Dress &amp; Frock</a>
              <span>120</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Clothes
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/dress.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Sports</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Formal</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Casual</a>
              <span>50</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Safety Shoes</a>
              <span>120</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Footwear
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/shoes.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Earrings</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Couple Rings</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Necklace</a>
              <span>50</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Jewelry
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/jewelry.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Clothes Perfume</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Deodorant</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Jacket</a>
              <span>50</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Dress &amp; Frock</a>
              <span>120</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Perfume
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/perfume.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Shampoo</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Sunscreen</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Body Wash</a>
              <span>50</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Makeup Kit</a>
              <span>120</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Cosmetics
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/cosmetics.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Sunglasses</a>
              <span>23</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Lenses</a>
              <span>53</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Glasses
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/glasses.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
        <div className="border-b pb-3 text-lg text-gray-600">
          <details>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Wallet</a>
              <span>300</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Purse</a>
              <span>30</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Gym Backpack</a>
              <span>50</span>
            </div>
            <div className="flex justify-between items-baseline text-sm">
              <a href="#">Shopping Bag</a>
              <span>120</span>
            </div>
            <summary>
              <div className="flex items-center gap-2">
                Bags
                <img
                  className="w-4 h-4"
                  src="./assets/images/icons/bag.svg"
                  alt="productPicture"
                />
              </div>
            </summary>
          </details>
        </div>
      </div>
      <div className="bestsellers w-full h-auto mt-2 flex flex-col items-start justify-start gap-4">
        <h2 className="text-lg font-semibold">BEST SELLERS</h2>
        <div className="flex items-center justify-start gap-2">
          <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
            <img
              className="w-full h-full"
              src="./assets/images/products/1.jpg"
              alt=""
            />
          </div>
          <div className="text-gray-700">
            <h4 className="text-gray-900">Baby Fabric Shoes</h4>
            <div className="stars text-yellow-500">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-half-outline" />
            </div>
            <div className="flex items-center justify-start gap-4">
              <s className="text-gray-500">$14.00</s> <strong>$7.00</strong>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
            <img
              className="w-full h-full"
              src="./assets/images/products/2.jpg"
              alt=""
            />
          </div>
          <div className="text-gray-700">
            <h4 className="text-gray-900">Men's Hoodies T-Shirt</h4>
            <div className="stars text-yellow-500">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-half-outline" />
              <ion-icon name="star-outline" />
            </div>
            <div className="flex items-center justify-start gap-4">
              <s className="text-gray-500">$5.00</s> <strong>$2.00</strong>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
            <img
              className="w-full h-full"
              src="./assets/images/products/3.jpg"
              alt=""
            />
          </div>
          <div className="text-gray-700">
            <h4 className="text-gray-900">Girls T-Shirt</h4>
            <div className="stars text-yellow-500">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-half-outline" />
              <ion-icon name="star-outline" />
              <ion-icon name="star-outline" />
            </div>
            <div className="flex items-center justify-start gap-4">
              <s className="text-gray-500">$10.00</s> <strong>$5.00</strong>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="w-20 h-20 p-2 border shadow-lg bg-gray-300/20 rounded-md">
            <img
              className="w-full h-full"
              src="./assets/images/products/4.jpg"
              alt=""
            />
          </div>
          <div className="text-gray-700">
            <h4 className="text-gray-900">Woolen Hat For Men</h4>
            <div className="stars text-yellow-500">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-half-outline" />
            </div>
            <div className="flex items-center justify-start gap-4">
              <s className="text-gray-500">$24.00</s> <strong>$17.00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*? Navbar */}
</header>
    </>

  )
}

export default Navbar2
