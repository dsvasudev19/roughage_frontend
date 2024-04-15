import React from 'react'
import Header1 from './Headers/Header1';
import Card from './Cards/CategoryCard/Card'

const categoryData=[
    {
        title:"Vegetables",
        img:"/Food/Vegetables/veg1.jpg",
        alt:"Vegetables",
        description:"Vegetables",
        status:"Available"
    },
    {
        title: "Fruits",
        img: "/Food/Fruits/one_seed_fruits.png",
        alt: "Fruits",
        description: "Fruits",
        status: "Available"
    },
    {
        title:"Meat",
        img:"/Food/Meat/meat1.jpg",
        alt:"Meat",
        description:"Meat",
        status:"Available"
    },
    {
        title:"Diary",
        img:"/Food/Milk Products/milk.jpg",
        alt:"Diary",
        description:"Diary",
        status:"Available"
    },
    {
        title:"Sea Foods",
        img:"/Food/Sea/sea-food.jpg",
        alt:"Sea Foods",
        description:"Sea Foods",
        status:"Available"
    },
    {
        title:"Grains",
        img:"/Food/Grains/grains.jpeg",
        alt:"Grains",
        description:"Grains",
        status:"Coming Soon"
    }
]
const ShopCategory = () => {
    return (
        <div className='justify-start text-left gap-3 h-fit mb-3 pl-3 pr-3'>
            <Header1 title='Shop By Category' />
            <div className='flex gap-3 overflow-x-auto mb-1'>
                {
                    categoryData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                img={item.img}
                                alt={item.alt}
                                description={item.description}
                                status={item.status}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ShopCategory;