import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineIcon } from "@heroicons/react/24/outline";
import reviews from "./../../data/review";
import "./ProductDetails.css";
import products from "./../../data/products";
import Review from "../../components/Cards/ReviewCard/Review";
import toast from "react-hot-toast";
import axios from "axios";

function ProductDetails({ ...props }) {
  const [review, setReview] = useState({
    rating: "",
    content: "",
    user: { name: "Darse" },
  });
  const [id, setId] = useState("");
  const [product, setProduct] = useState({
    id: 16,
    title: "Classic White Tee - Timeless Style and Comfort",
    price: 73,
    description:
      "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    images: [
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg",
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
    ],
    variants: ["SM", "MD", "LG", "XL"],
    prices: [199, 249, 329, 459],
    category: "Clothes",
  });

  const [loading, setLoading] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(5);
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  useEffect(() => {
    const searchURL = window.location.search;
    const urlParams = new URLSearchParams(searchURL);
    const productId = urlParams.get("productId");
    setId((prev) => {
      return productId;
    });
  }, []);

  useEffect(() => {
    // if (id) {
    //   const product = products?.find((i) => i.id == id);
    //   console.log(product);
    //   setProduct((prev) => {
    //     return {
    //       ...product,
    //       variants: ["SM", "MD", "LG", "XL"],
    //       prices: [199, 249, 329, 459],
    //     };
    //   });
    // }
    if (id) {
      getProductById();
    }
  }, [id]);

  const getProductById = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products/" + id
      );
      if (res.status === 200) {
        console.log(res.data)
        const product = res.data;
        setProduct((prev) => {
          return {
            ...product,
            variants: ["SM", "MD", "LG", "XL"],
            prices: [199, 249, 329, 459],
          };
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postReview = async () => {
    try {
      if (!review.rating || !review.content) {
        toast.error("Please provide rating and Review to post");
      } else {
        setFilteredReviews([...filteredReviews, review]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div class="font-[sans-serif]">
        <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="w-full lg:sticky top-0 text-center">
              <div class="lg:h-[600px]">
                <img
                  src={product?.images[imageIndex]}
                  alt="Product"
                  class="lg:w-11/12 w-full h-full rounded-xl object-cover object-top"
                />
              </div>
              <div class="flex gap-x-8 gap-y-6 justify-center mx-auto mt-6 overflow-x-scroll">
                {product?.images?.map((image, index) => (
                  <img key={index}
                    src={image}
                    alt="Product1"
                    class={`w-20 cursor-pointer rounded-xl ${
                      index === imageIndex ? "outline" : ""
                    }`}
                    onClick={() => {
                      setImageIndex((prev) => {
                        return index;
                      });
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <div class="flex flex-wrap items-start gap-4">
                <div>
                  <h2 class="text-2xl font-extrabold text-gray-800">
                    {product?.title} | {product?.category?.name}
                  </h2>
                  <p class="text-sm text-gray-400 mt-2">Roughage Commerce</p>
                </div>
                <div class="ml-auto flex flex-wrap gap-4">
                  <button type="button">
                    <HeartIcon class="h-6 w-6 text-pink-600" />
                  </button>
                  <button
                    type="button"
                    class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="my-6" />

              <div class="flex flex-wrap gap-4 mt-4">
                <p class="text-gray-800 text-5xl font-bold">₹{product.price}</p>
                <p class="text-gray-400 text-lg">
                  <strike>
                    ₹{Math.ceil(product.price + product.price * 0.1)}
                  </strike>{" "}
                  <span class="text-sm ml-1">Tax included</span>
                </p>
              </div>
              <div class="flex space-x-2 mt-4">
                <svg
                  class="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              <div className="my-8">
                <h3 class="text-lg font-bold text-gray-800">Choose a Size</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  {product?.variants.map((variant, index) => (
                    <button
                      type="button"
                      className={`w-12 h-12 border-2 hover:border-gray-800 ${
                        index === variantIndex ? "border-gray-800" : ""
                      } font-bold text-sm rounded-full flex items-center justify-center shrink-0`}
                      onClick={() => {
                        setVariantIndex((prev) => {
                          return index;
                        });
                      }}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-8">
                <h3 class="text-lg font-bold text-gray-800">Choose a Color</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    class="w-12 h-12 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-12 h-12 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-12 h-12 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-12 h-12 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <h4 className="text-base font-bold text-[#333]">Qty:</h4>
                <button
                  type="button"
                  className="bg-transparent py-2 font-semibold text-[#333]"
                  onClick={() => {
                    setQuantity((prev) => {
                      if (prev - 1 > 0) {
                        return prev - 1;
                      } else {
                        return 1;
                      }
                    });
                  }}
                >
                  <MinusCircleIcon
                    className="h-6 w-6 text-black"
                    strokeWidth={2}
                    fontSize={20}
                  />
                </button>
                <button
                  type="button"
                  className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                >
                  {quantity}
                </button>
                <button
                  type="button"
                  className="bg-transparent py-2 font-semibold text-[#333]"
                  onClick={() => {
                    setQuantity((prev) => {
                      if (prev + 1 <= 10) {
                        return prev + 1;
                      } else {
                        return prev;
                      }
                    });
                  }}
                >
                  <PlusCircleIcon
                    className="h-6 w-6 text-black"
                    strokeWidth={2}
                  />
                </button>
              </div>
              <div class="flex flex-wrap gap-4 my-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="mt-24 max-w-4xl">
            <ul class="flex border-b">
              <li class="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                Description
              </li>
            </ul>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800">
                Product Description
              </h3>
              <p class="text-sm text-gray-400 mt-4">{product.description}</p>
            </div>
            {/* <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400">
              <li>
                A gray t-shirt is a wardrobe essential because it is so
                versatile.
              </li>
              <li>
                Available in a wide range of sizes, from extra small to extra
                large, and even in tall and petite sizes.
              </li>
              <li>
                This is easy to care for. They can usually be machine-washed and
                dried on low heat.
              </li>
              <li>
                You can add your own designs, paintings, or embroidery to make
                it your own.
              </li>
            </ul> */}
          </div>
          <hr className="my-8" />

          <div className="gap-4 mt-8">
            <section class="bg-white pb-4">
              <div class="max-w-screen-xl mx-auto">
                {/* <h2 class="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">What our Customers
                  Are Saying</h2>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                  <div class="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p class="font-bold uppercase">John Doe</p>
                    <p class="text-xl font-light italic text-gray-700">This podcast is amazing! The storytelling and production
                      quality are top-notch. I can't wait for the next episode!</p>
                    <div class="flex items-center justify-center space-x-2 mt-4">
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p class="font-bold uppercase">Jane Smith</p>
                    <p class="text-xl font-light italic text-gray-700">This podcast kept me on the edge of my seat. It's a
                      must-listen for true crime enthusiasts!</p>
                    <div class="flex items-center justify-center space-x-2 mt-4">
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                    <p class="font-bold uppercase">Emily Johnson</p>
                    <p class="text-xl font-light italic text-gray-700">I can't get enough of this podcast! The host's voice is so
                      soothing, and the stories are gripping. Highly recommend!</p>
                    <div class="flex items-center justify-center space-x-2 mt-4">
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                      <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" stroke="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div> */}
                <h2 class="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
                  What our Customers Are Saying
                </h2>
                <div className="block md:flex gap-6">
                  <div className="w-full">
                    <h1 className="text-3xl font-bold m-4 ml-0">
                      Write a Review{" "}
                    </h1>
                    <div id="reviewSubmission" className="p-3 pl-0">
                      <label className="flex gap-1 my-3">
                        {Array.from({ length: 5 }).map((_, index) => {
                          const number = index + 1;
                          if (index <= rating) {
                            return (
                              <StarIcon
                                class="h-6 w-6 text-yellow-300"
                                onClick={() => {
                                  setRating((prev) => {
                                    return index;
                                  });
                                  setReview({ ...review, rating: number });
                                }}
                              />
                            );
                          }
                          return (
                            <OutlineIcon
                              class="h-6 w-6 text-gray-500"
                              onClick={() => {
                                setRating((prev) => {
                                  return index;
                                });
                                setReview({ ...review, rating: number });
                              }}
                            />
                          );
                        })}
                      </label>

                      <form class="max-w-xl my-3">
                        <div class="relative">
                          <textarea
                            type="text"
                            rows={5}
                            id="default-search"
                            class="block w-full p-4  text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write a Review"
                            onChange={(e) => {
                              setReview({ ...review, content: e.target.value });
                            }}
                            required
                          />
                        </div>
                        <button
                          // type="submit"
                          class="text-white mt-5 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                          onClick={(e) => {
                            e.preventDefault();
                            postReview();
                          }}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="w-full gap-y-6">
                    <div className="h-96 overflow-y-auto">
                      {filteredReviews?.map((item) => {
                        return <Review {...item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
