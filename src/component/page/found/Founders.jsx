import React from 'react'
import { programFounders } from '../../api/Api';
function Founders() {
  return (
    <div className="max-w-6xl">
      <div className="p-6  ">
        <div class="flex items-center justify-center min-h-screen ">
          <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible ">
              <table class="table text-gray-400 border-separate space-y-6 text-sm ml-4 md:ml-40">
                <thead class="bg-gray-800 text-gray-100 ">
                  <tr className="">
                    <th class="p-3 text-left">number</th>
                    <th class="p-3"></th>
                    <th class="p-3 text-left">language</th>
                    <th class="p-3 text-left">founder</th>
                  </tr>
                </thead>
                {programFounders.map((items) => (
                  <tbody>
                    <tr class="bg-gray-700  ">
                      <td class="p-3">{items.id}</td>
                      <td class="p-1 md:p-4">
                        <div class=" ">
                          <img
                            class="rounded-full w-40 md:w-12  "
                            src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                            alt="unsplash image"
                          />
                        </div>
                      </td>
                      <td class="p-3 font-bold text-gray-200">{items.name}</td>
                      <td class="p-3">
                        <span class=" text-gray-200  ">{items.founder}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders