import {EyeIcon, TrashIcon} from "@heroicons/react/24/solid";
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {EyeSlashIcon} from "@heroicons/react/20/solid";

import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CartCard = (props) => {

    return (
        <div className="p-2 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
            <div className="grid sm:grid-cols-2 items-center gap-4">
                <div className="w-full h-full p-4 shrink-0 bg-gray-100">
                    <img src={'https://readymadeui.com/images/product10.webp'} className="w-full h-full object-contain" />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-extrabold text-[#333]">{props.title}</h3>
                    <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                        <div className="flex items-center gap-4">
                            <h4 className="text-base font-bold text-[#333]">Qty:</h4>
                            <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                                <MinusCircleIcon className="h-6 w-6 text-black" strokeWidth={2} fontSize={20} />
                            </button>
                            <button type="button" className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                                {props.quantity}
                            </button>
                            <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                                <PlusCircleIcon className="h-6 w-6 text-black" strokeWidth={2} fontSize={20} />
                            </button>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-[#333]">₹{props.price}</h4>
                        </div>
                    </div>
                    <div className="divide-x border-y mt-6 grid grid-cols-2 text-center items-center">
                        <button type="button" className="bg-transparent font-semibold py-3 text-gray-500 text-sm hover:bg-gray-300 ">
                            <Link to={"/products"} className="flex items-center gap-3 justify-center"><EyeSlashIcon className="h-6 w-6 text-gray-500" /> View Product</Link>
                        </button>
                        <button type="button" className="bg-transparent font-semibold py-3 text-gray-500 text-sm hover:bg-gray-300 flex items-center gap-3 justify-center">
                            <TrashIcon className="h-6 w-6 text-gray-500" />Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Cart = () => {
    const [cartProducts, setCartProducts] = useState([{
        "id": 35,
        "title": "Futuristic Holographic Soccer Cleats",
        "price": 39,
        "quantity":1,
        "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
        "images": [
            "https://i.imgur.com/qNOjJje.jpeg",
            "https://i.imgur.com/NjfCFnu.jpeg",
            "https://i.imgur.com/eYtvXS1.jpeg"
        ],
        "creationAt": "2024-04-18T20:15:40.000Z",
        "updatedAt": "2024-04-18T20:15:40.000Z",
        "category": "Shoes"
    },
    {
        "id": 36,
        "title": "Rainbow Glitter High Heels",
        "price": 39,
        "quantity": 2,
        "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
        "images": [
            "https://i.imgur.com/62gGzeF.jpeg",
            "https://i.imgur.com/5MoPuFM.jpeg",
            "https://i.imgur.com/sUVj7pK.jpeg"
        ],
        "creationAt": "2024-04-18T20:15:40.000Z",
        "updatedAt": "2024-04-18T20:15:40.000Z",
        "category": "Shoes"
    },
    {
        "id": 37,
        "title": "Chic Summer Denim Espadrille Sandals",
        "price": 33,
        "quantity": 2,
        "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
        "images": [
            "https://i.imgur.com/9qrmE1b.jpeg",
            "https://i.imgur.com/wqKxBVH.jpeg",
            "https://i.imgur.com/sWSV6DK.jpeg"
        ],
        "creationAt": "2024-04-18T20:15:40.000Z",
        "updatedAt": "2024-04-18T20:15:40.000Z",
        "category": "Shoes"
    },
    {
        "id": 38,
        "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
        "price": 27,
        "quantity": 3,
        "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
        "images": [
            "https://i.imgur.com/hKcMNJs.jpeg",
            "https://i.imgur.com/NYToymX.jpeg",
            "https://i.imgur.com/HiiapCt.jpeg"
        ],
        "creationAt": "2024-04-18T20:15:40.000Z",
        "updatedAt": "2024-04-18T20:15:40.000Z",
        "category": "Shoes"
    },
    {
        "id": 39,
        "title": "Vibrant Pink Classic Sneakers",
        "price": 84,
        "quantity": 7,
        "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
        "images": [
            "https://i.imgur.com/mcW42Gi.jpeg",
            "https://i.imgur.com/mhn7qsF.jpeg",
            "https://i.imgur.com/F8vhnFJ.jpeg"
        ],
        "creationAt": "2024-04-18T20:15:40.000Z",
        "updatedAt": "2024-04-18T20:15:40.000Z",
        "category": "Shoes"
    }])
    return (
        <div>
            <div className="font-[sans-serif] bg-gray-100 h-full">
                <div className="max-w-7xl mx-auto p-6">
                    <h2 className="text-3xl font-extrabold text-[#333]">Your shopping bag</h2>
                    <div className="grid lg:grid-cols-3 gap-12 relative mt-10">
                        <div className="lg:col-span-2 space-y-6">
                            {
                                cartProducts.map((product,index)=>(
                                    <CartCard key={index} {...product}/>
                                ))
                            }
                        </div>
                        <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
                            <h3 className="text-xl font-extrabold [#333] border-b pb-3">Order Summary</h3>
                            <ul className="text-[#333] text-sm divide-y mt-6">
                                <li className="flex flex-wrap gap-4 py-3">Subtotal <span className="ml-auto font-bold">$70.00</span></li>
                                <li className="flex flex-wrap gap-4 py-3">Shipping <span className="ml-auto font-bold">Free</span></li>
                                <li className="flex flex-wrap gap-4 py-3">Tax <span className="ml-auto font-bold">$4.00</span></li>
                                <li className="flex flex-wrap gap-4 py-3 font-bold">Total <span className="ml-auto">$74.00</span></li>
                            </ul>
                            <button type="button" className="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-md"><a href="/checkout"></a>
                                Proceed to Checkout
                            </button>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h4 className="text-base font-bold [#333] mb-2">Secure payment</h4>
                                    <p className="text-sm text-[#333]">Experience peace of mind with our secure payment options, ensuring your transactions are protected and reliable.</p>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold [#333] mb-2">Free delivery</h4>
                                    <p className="text-sm text-[#333]">Enjoy the convenience of free delivery on all your orders, providing a cost-effective and seamless shopping experience.</p>
                                </div>
                                <div>
                                    <h4 className="text-base font-bold [#333] mb-2">Easy to return</h4>
                                    <p className="text-sm text-[#333]">Simplify your shopping experience with hassle-free returns. Our easy return process ensures convenience and customer satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;