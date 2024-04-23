"use client";

import Card2 from './../../components/Cards/Product/Card2'
import SideBar from './../../components/Sidebar/SideBar'
import SideBarMobile from './../../components/Sidebar/SideBarMobile'
import toast,{Toaster} from "react-hot-toast"
import {useSearch} from "../../SearchContext";
import {useEffect, useState} from "react";
import React from 'react'

export function Component() {
  const {products} = useSearch();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState({
    price: "",
    brand: "",
    category: ""
  })
  useEffect(()=>{
   
      const filtered = products.filter((product) => product.category === filter.category)
      console.log(filtered)
      setFilteredProducts((prev) => {
        return filtered;
      })
    
    
  },[filter])
  
  useEffect(()=>{
    setFilteredProducts((prev)=>{
      return products;
    })
  },[])
  
  return (
    <div className="justify-center">
    <Toaster position="top-right" reverseOrder={true}/>
      <div className="container">
        <div>
          <SideBarMobile onChange={setFilter}/>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <SideBar onChange={setFilter}/>

        <div className="container grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mb-10">
          {
            filteredProducts?.filter((_, i) => i < 41).map(
              (product) => {
                return <Card2 {...product} />
              }
            )
          }
        </div>
      </div>

    </div>
  );
}


export default Component;