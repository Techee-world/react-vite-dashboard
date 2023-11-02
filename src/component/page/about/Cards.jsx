import React from 'react'
import { ContentLanguage } from '../../api/Api';

function Cards() {

  return (
    <div className="">
      {ContentLanguage.map((data) => (
        <div className="p-10 max-w-6xl border-b-2 border-dotted ">
          <h1 className="text-2xl mb-6">{data.name}</h1>
          <p className="">{data.content}.</p>
          <table class="table-auto mt-6">
            <tbody>
              <tr>
                <td class="border px-4 py-2 font-semibold uppercase">
                  difficulty
                </td>
                <td class="border px-4 py-2">{data.difficulty}</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 font-semibold uppercase">pros</td>
                <td class="border px-4 py-2">{data.pros}</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 font-semibold uppercase">
                  used for
                </td>
                {data.usedFor.map((items) => (
                  <li class="border px-4 py-2">{items}</li>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Cards