import React, {useEffect, useState} from 'react'
import Header1 from './Headers/Header1';
import Card from './Cards/CategoryCard/Card'
import Card2 from './Cards/DealCard/Card4'
import {axiosInstance} from '../axiosInstance';
import axios from 'axios'
import {Link} from 'react-router-dom';

const categoryData = [
    {
        title: "Vegetables",
        img: "/Food/Vegetables/veg1.jpg",
        alt: "Vegetables",
        description: "Vegetables",
        status: "Available"
    },
    {
        title: "Meat",
        img: "/Food/Meat/meat1.jpg",
        alt: "Meat",
        description: "Meat",
        status: "Available"
    },
    {
        title: "Diary",
        img: "/Food/Milk Products/milk.jpg",
        alt: "Diary",
        description: "Diary",
        status: "Available"
    },
    {
        title: "Sea Foods",
        img: "/Food/Sea/sea-food.jpg",
        alt: "Sea Foods",
        description: "Sea Foods",
        status: "Available"
    },
    {
        title: "Grains",
        img: "/Food/Grains/grains.jpeg",
        alt: "Grains",
        description: "Grains",
        status: "Coming Soon"
    }
]
const PopularProducts = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
            console.log(response)
            if (response.status === 200) {
                const data = response.data;
                setCategories((prev) => {
                    return data;
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className='justify-start text-left gap-3 h-fit mb-5'>
            <Header1 title='Popular Products' />
            <div className='flex gap-3 overflow-x-auto mb-1 overflow-y-hidden'>
                {
                    categoryData?.map((item, index) => {
                        return (
                            
                                <Card2
                                    key={index}
                                    title={item.title}
                                    img={item.img}
                                    alt={item.alt}
                                    description={item?.description}
                                    status={item?.status === 1 ? "Available" : item.status === -1 ? "Out of Stock" : "Coming Soon"}
                                />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default PopularProducts;