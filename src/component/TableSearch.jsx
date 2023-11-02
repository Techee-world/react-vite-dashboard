import React, { useState } from "react"; 
import { WebsiteData } from "./api/Api";
 
function TableSearch() {
  function handleSelectChange(event) {
    alert(`select item`)
  }

  return (
    <div>
      <div className="bg-slate-300 h-[50px] min-w-full flex pl-20 gap-2 items-center">
        <div className="flex items-center"></div>
        <div>
          <select
            name=""
            id=""
            className="appearance-none bg-transparent py-1 px-3 mr-5 text-sm font-medium outline-none border-2 border-gray-500 rounded cursor-pointer"
            onChange={handleSelectChange}
            >
            <option value="">Items List : </option>
            {WebsiteData.map((item, index) => 
              <option key={index} value={item.website}>
                {item.website}
              </option>
              )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TableSearch;
