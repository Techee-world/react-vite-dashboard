import React, { useState } from 'react'
import { LanguageRating , JobRating ,TrendingChart } from "./api/Api";
import './style.css'

function ColumnChart() {
  const [color1, setColor1] = useState("spectrum");
  const [rating, setRating] = useState([...LanguageRating]);

  function clickHandle(data,buttonID){
     setRating(data);
     setColor1(buttonID);
  }
  
  return (
    <div className="py-10  ">
      <div className="flex flex-col items-center w-full  max-w-full p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
        <h2 className="text-xl font-bold mb-7">
          Popular Language <span className="font-bold">2023</span>
        </h2>
        <div className="flex gap-1">
          <button
            onClick={() => clickHandle(LanguageRating, "spectrum")}
            className={`border-double border-4 border-sky-500 ${
              color1 === "spectrum" ? "bg-green-200" : "bg-white"
            } duration-700 px-4 py-1 rounded-lg`}
          >
            Spectrum
          </button>
          <button
            onClick={() => clickHandle(JobRating, "job")}
            className={`border-double border-4 border-sky-500 ${
              color1 === "job" ? "bg-green-200" : "bg-white"
            } duration-700 px-4 py-1 rounded-lg`}
          >
            Jobs
          </button>
          <button
            onClick={() => clickHandle(TrendingChart, "trending")}
            className={`border-double border-4 border-sky-500 ${
              color1 === "trending" ? "bg-green-200" : "bg-white"
            } duration-700 px-4 py-1 rounded-lg`}
          >
            Trending
          </button>
        </div>
        <div className="flex items-end flex-grow  w-full mt-2 space-x-1 sm:space-x-2">
          {rating.map((items) => {
            return (
              <>
                <div className="relative flex flex-col items-center flex-grow pb-5 group">
                  <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                    {items.rating}
                  </span>
                  <div
                    style={{ height: items.hight }}
                    className={`relative flex justify-center w-full  bg-indigo-400`}
                  ></div>
                  <span className="absolute bottom-6 text-[8px] md:text-xs font-bold  vertical-text">
                    {items.name}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColumnChart