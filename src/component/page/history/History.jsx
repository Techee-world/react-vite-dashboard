import React from 'react'
import { HistoryProgram } from "../../api/Api";

function History() {
  return (
    <div>
      <div className="md:p-10 max-w-6xl p-4">
        <h1 className="text-3xl font-bold  mb-6">programming history </h1>
        <p className="mb-4 w-full">
          Listed below is a timeline of the history of programming languages.
          The first known programming languages were complicated machine codes
          that were manually inputted into early computing machines. As you’ll
          discover, computer programming developed quickly from machine codes to
          fully automated human-readable code.
        </p>
        {HistoryProgram.map((items) => (
          <div className=" border-2 p-6">
            <h1 className="text-xl font-bold mb-3"> ---> {items.head}: </h1>
            <div className="flex gap-6 md:flex-row flex-col">
              <img className=" md:h-20 mb-3" src={items.img} alt="" />
              <p className="md:w-1/2 w-full">{items.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History