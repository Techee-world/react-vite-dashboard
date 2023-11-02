import React from "react";
import jsonData from '../../admin-home.json';
import TableSearch from "./TableSearch";
import { WebsiteData } from "./api/Api";

function Box() {
  const orderList = jsonData.result.top_order_list;
  console.log(WebsiteData, "data in all");
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col mt-2">
        <div className="py-2  overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-0 lg:px-1">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <TableSearch />
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Number
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    website
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    frontend
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    backend
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    database
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    note
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {WebsiteData.map((items, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm  leading-5 text-gray-500">
                        {items.id}
                      </div>
                    </td>

                    <td className="px-6 py-4  whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {items.website}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {items.frontend}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {items.backend}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {items.database}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {items.note}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
