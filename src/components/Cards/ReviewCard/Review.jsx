import React from "react";

const Review = (item) => {
  return (
    <div>
      <div class="bg-gray-200 rounded-lg p-4 m-4 w-full">
        <div className="flex justify-between items-center m-3">
          <div class="flex items-center justify-center space-x-2">
            {Array.from({ length: Math.ceil(item.rating) }).map((i) => (
              <svg
                class="text-yellow-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <p class="font-bold uppercase">{item?.user?.name}</p>
        </div>
        <p class="text-xl font-light italic text-gray-700">{item?.content}!</p>
      </div>
    </div>
  );
};

export default Review;
