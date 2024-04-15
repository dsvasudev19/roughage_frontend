
"use client";

import { Carousel } from "flowbite-react";

const data=[
  {
    img: "Food/Fruit,_Vegetables_and_Grain_NCI_Visuals_Online.jpg",
    alt: "Food Four",
    title: "Food four Title",
    description: "",
    price: ""
  },
  {
    img:"/Food/avacado.webp",
    alt:"Food One",
    title:"Food one title",
    description:"",
    price:""
  },
  {
    img:"Food/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
    alt:"Food Two",
    title:"Food Two title",
    description:"",
    price:""
  },
  {
    img:"Food/food.jpg",
    alt:"Food Three",
    title:"Food Three title",
    description:"",
    price:""
  },
  
  {
    img:"Food/image.jpg",
    alt:"Food Five",
    title:"Food five title",
    description:"",
    price:""
  },
  {
    img: "Food/world-food-day-2020.png",
    alt:"Food Six",
    title:"Food Six title",
    description:"",
    price:""
  },
]

function Component() {
  return (
    <div className="h-full">
      <Carousel className="">
        {
          data?.map((item)=>(
            <img src={item.img} alt={item.title} className="h-full w-full"/>
          ))
        }
      </Carousel>
    </div>
  );
}

export default Component;