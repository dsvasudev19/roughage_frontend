import React from 'react';

const CartCard = () => {
    return (
        <div class="p-2 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
            <div class="grid sm:grid-cols-2 items-center gap-4">
                <div class="w-full h-full p-4 shrink-0 bg-gray-100">
                    <img src='https://readymadeui.com/images/product10.webp' class="w-full h-full object-contain" />
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-extrabold text-[#333]">Naruto: Split Sneakers</h3>
                    <div class="flex items-center justify-between flex-wrap gap-4 mt-6">
                        <div class="flex items-center gap-4">
                            <h4 class="text-base font-bold text-[#333]">Qty:</h4>
                            <button type="button" class="bg-transparent py-2 font-semibold text-[#333]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 124 124">
                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                </svg>
                            </button>
                            <button type="button" class="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                                1
                            </button>
                            <button type="button" class="bg-transparent py-2 font-semibold text-[#333]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-[#333]">$70.00</h4>
                        </div>
                    </div>
                    <div class="divide-x border-y mt-6 grid grid-cols-2 text-center items-center">
                        <button type="button" class="bg-transparent font-semibold  text-gray-500 text-sm">
                            View Product
                        </button>
                        <button type="button" class="bg-transparent font-semibold text-gray-500 text-sm">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default CartCard;