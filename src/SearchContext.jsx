import React,{ useContext, useEffect, useState } from "react";
import productsData from './data/products'
import categoriesData from './data/categories.js'

const SearchContext=React.createContext(undefined)

export const SearchProvider=({children})=>{ 
    const [category,setCategory]=useState("");
    const [search,setSearch]=useState("");
    const [filteredProducts,setFilteredProducts]=useState([])
    const [categories, setCategories] = useState(categoriesData);
    const [products, setProducts] = useState(productsData);
    const [filter,setFilter]=useState({
        price:"",
        brand:"",
        category:""
    })
    const [cart,setCart]=useState([]);
    
    
    useEffect(()=>{
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