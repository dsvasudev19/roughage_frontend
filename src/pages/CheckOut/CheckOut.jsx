import {Input} from '@material-tailwind/react'
import React from 'react'

function CheckOut() {
  return (
<div className="container font-[sans-serif] bg-white">
  <div className="max-lg:max-w-xl mx-auto w-full">
    <div className="grid lg:grid-cols-3 gap-6">
    <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
        <div className="relative h-full">
          <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)] max-lg:mb-8">
            <h2 className="text-2xl font-extrabold text-[#333]">
              Order Summary
            </h2>
            <div className="space-y-6 mt-10">
              <div className="grid sm:grid-cols-2 items-start gap-6">
                <div className="max-w-[190px] px-4 py-6 shrink-0 bg-gray-200 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product10.webp"
                    className="w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#333]">
                    Naruto: Split Sneakers
                  </h3>
                  <ul className="text-xs text-[#333] space-y-2 mt-2">
                    <li className="flex flex-wrap gap-4">
                      Size <span className="ml-auto">37</span>
                    </li>
                    <li className="flex flex-wrap gap-4">
                      Quantity <span className="ml-auto">2</span>
                    </li>
                    <li className="flex flex-wrap gap-4">
                      Total Price <span className="ml-auto">$40</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 items-start gap-6">
                <div className="max-w-[190px] px-4 py-6 shrink-0 bg-gray-200 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product11.webp"
                    className="w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#333]">VelvetGlide Boots</h3>
                  <ul className="text-xs text-[#333] space-y-2 mt-2">
                    <li>
                      Size <span className="float-right">37</span>
                    </li>
                    <li>
                      Quantity <span className="float-right">2</span>
                    </li>
                    <li>
                      Total Price <span className="float-right">$40</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 items-start gap-6">
                <div className="max-w-[190px] px-4 py-6 shrink-0 bg-gray-200 rounded-md">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    className="w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#333]">Echo Elegance</h3>
                  <ul className="text-xs text-[#333] space-y-2 mt-2">
                    <li>
                      Size <span className="float-right">37</span>
                    </li>
                    <li>
                      Quantity <span className="float-right">2</span>
                    </li>
                    <li>
                      Total Price <span className="float-right">$40</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 bg-gray-200 w-full p-4">
            <h4 className="flex flex-wrap gap-4 text-base text-[#333] font-bold">
              Total <span className="ml-auto">$240.00</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 max-lg:order-1 p-6 max-w-4xl mx-auto w-full">
        <div className="text-center max-lg:hidden">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
            Checkout
          </h2>
        </div>
        <form className="lg:mt-12">
          <div>
            <h2 className="text-2xl font-extrabold text-[#333]">
              Shipping info
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Input
                type="text"
                placeholder="Name"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <Input
                type="email"
                placeholder="Email address"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <Input
                type="text"
                placeholder="Street address"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <Input
                type="text"
                placeholder="City"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <Input
                type="text"
                placeholder="State"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              <Input
                type="number"
                placeholder="Postal code"
                className="px-2 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-between">
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200"
            >
              Back
            </button>
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]"
            >
              Confirm payment $240
            </button>
          </div>
        </form>
      </div>
  
    </div>
  </div>
</div>




  )
}

export default CheckOut
