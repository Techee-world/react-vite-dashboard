import React from 'react'

function Chart({ hight }) {
  return (
    <div class="relative flex flex-col items-center flex-grow pb-5 group">
      <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
        $47,500
      </span>
      {/* <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
      <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div> */}
      <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
      <span class="absolute bottom-0 text-xs font-bold">Mar</span>
    </div>
  );
}

export default Chart