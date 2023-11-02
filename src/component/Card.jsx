import React, { useState } from "react";
import jsonData from "../../admin-home.json";
import ProgressBar from "./ProgressBar";

function Card() {
  const timeRange = jsonData.result.statistics_tab_1;
 
  const [value, setValue] = useState(60);
  const [circle , setCircle ] = useState(false)
  const [color1, setColor1] = useState('bg-gray-500 text-white');
  const [color2, setColor2] = useState('bg-green-100');
  const [color3, setColor3] = useState('bg-green-100');
  

  function ItBased() {
      setValue(60);
        setColor1('bg-gray-500 text-white')
        setColor2('bg-green-100')
        setColor3('bg-green-100')
  }
  function NonItBased() {
    setValue(30);
      setColor2('bg-gray-500 text-white')
      setColor1('bg-green-100')
      setColor3('bg-green-100')
  }
  function Others() {
    setValue(10);
      setColor3('bg-gray-500 text-white')
      setColor1('bg-green-100')
      setColor2('bg-green-100')
  }

  return (
    <div className="flex gap-2  flex-col md:flex-row">
      <div class="grid gap-4 lg:grid-cols-2 mt-2 w-full">
        <div class=" px-4 py-6 bg-white rounded-md shadow-md">
          <div className="flex items-center gap-2 ">
            <div class="p-1 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-2xl font-semibold text-gray-700">700+</h4>
          </div>
          <div class="mx-2 mt-2">
            <div class="text-gray-500 uppercase text-xs">
              {" "}
              Total programming languages
            </div>
          </div>
        </div>

        <div class=" px-4 py-6 bg-white rounded-md shadow-md">
          <div className="flex items-center gap-2 ">
            <div class="p-1 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-2xl font-semibold text-gray-700">200+</h4>
          </div>
          <div class="mx-2 mt-2">
            <div class="text-gray-500 uppercase text-xs">
              using programming languages
            </div>
          </div>
        </div>

        <div class=" px-4 py-6 bg-white rounded-md shadow-md">
          <div className="flex items-center gap-2 ">
            <div class="p-1 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-2xl font-semibold text-gray-700">200+</h4>
          </div>
          <div class="mx-2 mt-2">
            <div class="text-gray-500 uppercase text-xs">
              Outdated programming languages
            </div>
          </div>
        </div>

        <div class=" px-4 py-6 bg-white rounded-md shadow-md">
          <div className="flex items-center gap-2 ">
            <div class="p-1 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 class="text-2xl font-semibold text-gray-700">
              10 languages
            </h4>
          </div>
          <div class="mx-2 mt-2">
            <div class="text-gray-500 uppercase"> 80% used </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-1/2 w-full h-[15rem] mt-2 flex flex-col items-center justify-center gap-5 rounded-md shadow-md">
        <ProgressBar value={value} />

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={ItBased}
            className={`px-2 text-xs rounded-full border ${color1} transition ease-in-out duration-700  hover:bg-gray-300`}
          >
            IT based
          </button>

          <button
            onClick={NonItBased}
            className={`px-2 text-xs rounded-full border ${color2} transition ease-in-out duration-700  hover:bg-gray-300`}
          >
            Non IT based
          </button>

          <button
            onClick={Others}
            className={`px-2 text-xs rounded-full border ${color3} transition ease-in-out duration-700  hover:bg-gray-300`}
          >
            Others
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
