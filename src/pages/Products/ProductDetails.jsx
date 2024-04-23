import { MinusCircleIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {HeartIcon} from "@heroicons/react/24/outline";
import React, { useState } from "react";


function ProductDetails(props) {
  const [product, setProduct] = useState({
    id: 16,
    title: "Classic White Tee - Timeless Style and Comfort",
    price: 73,
    description: "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    images: [
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
    variants:["SM","MD","LG","XL"],
    prices:[199,249,329,459],
    category: "Clothes"
  });
  const [loading,setLoading]=useState(false);
  const [variantIndex,setVariantIndex]=useState(0);

  return (
    <div className="container">
      <div class="font-[sans-serif]">
        <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="w-full lg:sticky top-0 text-center">
              <div class="lg:h-[600px]">
                <img src="https://readymadeui.com/images/product6.webp" alt="Product" class="lg:w-11/12 w-full h-full rounded-xl object-cover object-top" />
              </div>
              <div class="flex flex-wrap gap-x-8 gap-y-6 justify-center mx-auto mt-6">
                <img src="https://readymadeui.com/images/product6.webp" alt="Product1" class="w-20 cursor-pointer rounded-xl outline" />
                {

                }
              </div>
            </div>
            <div>
              <div class="flex flex-wrap items-start gap-4">
                <div>
                  <h2 class="text-2xl font-extrabold text-gray-800">Adjective Attire | T-shirt</h2>
                  <p class="text-sm text-gray-400 mt-2">Well-Versed Commerce</p>
                </div>
                <div class="ml-auto flex flex-wrap gap-4">
                  <button type="button" >
                    <HeartIcon class="h-6 w-6 text-pink-600"  />
                  </button>
                  <button type="button" class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0" data-original="#000000" />
                      <path d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0" data-original="#000000" />
                      <path d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0" data-original="#000000" />
                      <path d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0" data-original="#000000" />
                      <path d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0" data-original="#000000" />
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="my-6" />
              
              <div class="flex flex-wrap gap-4 mt-4">
                <p class="text-gray-800 text-5xl font-bold">$12</p>
                <p class="text-gray-400 text-lg"><strike>$16</strike> <span class="text-sm ml-1">Tax included</span></p>
              </div>
              <div class="flex space-x-2 mt-4">
                <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              <div className="my-8">
                <h3 class="text-lg font-bold text-gray-800">Choose a Size</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  
                  <button type="button" class="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
                  
                </div>
              </div>
              
              
              <div className="my-8">
                <h3 class="text-lg font-bold text-gray-800">Choose a Color</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button type="button" class="w-12 h-12 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                  <button type="button" class="w-12 h-12 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                  <button type="button" class="w-12 h-12 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                  <button type="button" class="w-12 h-12 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h4 className="text-base font-bold text-[#333]">Qty:</h4>
                <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                  <MinusCircleIcon className="h-6 w-6 text-black" strokeWidth={2} fontSize={20} />
                </button>
                <button type="button" className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                  {1}
                </button>
                <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                  <PlusCircleIcon className="h-6 w-6 text-black" strokeWidth={2} />
                </button>
              </div>
              <div class="flex flex-wrap gap-4 my-8">
                <button type="button" class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded">Buy now</button>
                <button type="button" class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded">Add to cart</button>
              </div>
            </div>
          </div>
          <div class="mt-24 max-w-4xl">
            <ul class="flex border-b">
              <li
                class="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                Description</li>
              <li class="text-gray-400 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">Reviews</li>
            </ul>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800">Product Description</h3>
              <p class="text-sm text-gray-400 mt-4">Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.</p>
            </div>
            <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400">
              <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
              <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
              <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
              <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
