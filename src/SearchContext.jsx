import React,{ useContext, useEffect, useState } from "react";
import productsData from './data/products'
import categoriesData from './data/categories.js'
import axios from "axios";

const SearchContext=React.createContext(undefined)

//all products request
//https://api.escuelajs.co/api/v1/products

// single product getting axios request
//https://api.escuelajs.co/api/v1/products/4


export const SearchProvider=({children})=>{ 
    const [category,setCategory]=useState("");
    const [search,setSearch]=useState("");
    const [filteredProducts,setFilteredProducts]=useState([])
    const [categories, setCategories] = useState(categoriesData);
    const [products, setProducts] = useState([]);
    const [filter,setFilter]=useState({
        price:"",
        brand:"",
        category:""
    })
    const [cart,setCart]=useState([]);
    const addToCart=async(productId,quantity)=>{
        try {
            const res=await axios.get("")
        } catch (error) {
            console.log(error)
        }
    }
    
    const getAllProducts=async()=>{
        try {
            const res = await axios.get("https://api.escuelajs.co/api/v1/products")
            if(res.status===200){
                setProducts(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getAllProducts()
        setCategories(categoriesData)
    },[])

    return (
        <SearchContext.Provider value={{
            categories,products,setFilter
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch=()=>{
    const context=useContext(SearchContext)
    if(!context){
        throw new Error("useSearch must be used within a SearchProvider")
    }
    return context
}