import React from 'react';

const CardList = () => {
  return (
      <div class="py-6">
          <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="w-1/2 bg-cover bg-center" style={{backgroundImage:"url('/visionPro.jpg')"}}>
              </div>
              <div class="w-2/3 p-4">
                  <h1 class="text-gray-900 font-bold text-2xl">Backpack</h1>
                  <p class="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
                  <div class="flex item-center mt-2">
                      <svg class="w-5 h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg class="w-5 h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg class="w-5 h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg class="w-5 h-5 fill-current text-gray-50" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg class="w-5 h-5 fill-current text-gray-50" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                  </div>
                  <div class="flex item-center justify-between mt-3">
                      <h1 class="text-gray-900 font-bold text-3xl">$220</h1>
                      <button class="px-3 py-2 bg-gray-800 text-white text-md font-bold uppercase rounded">Add to Card</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default CardList;