import React from 'react'
import { ContentLanguage } from "../../api/Api";

function About() {
  return (
    <div className="max-w-6xl p-10">
      <div className=" ">
        <h1 className="text-3xl font-bold pb-4">
          What is Programming Language?
        </h1>
        <p>
          A programming language is a computer language coders use to develop
          software programs, scripts, or other instructions for computers to
          execute. Many languages share similarities; however, each has its
          syntax. Once a programmer familiarizes with the language’s rules,
          syntax, and structure, they write the source code in IDE (integrated
          development environment) or a text editor. Later, the programmer often
          compiles the code into machine language that the computer can
          understand.
          <br />
          <br />
          <span className="text-lg font-semibold">
            {" "}
            Importance of Programming Language ::
          </span>{" "}
          Programming languages innovate and create eco-friendly solutions for
          global problems. It enhances and increases the power of computers and
          the Internet daily. Moreover, it speeds up a machine’s input and
          output processes and is vital to automating, collecting, managing,
          calculating, and accurately analyzing data processing and information.
          Programming language helps create software and applications that help
          computer and mobile users daily.
        </p>
      </div>
      <ul className="flex gap-3 mt-10 md:flex-row flex-col ">
        {ContentLanguage.map((items) => (
          <li
            onClick={() =>
              alert(
                `Name: ${items.name}\n \n difficulty:  ${items.difficulty}\n \n  Content:  ${items.content} \n\n pros:   ${items.pros} \n\n platform:   ${items.Platform} \n\n used for:   ${items.usedFor}`
              )
            }
            className="px-4 py-1 rounded-xl border-double border-2 border-yellow-400 bg-gray-700 text-white cursor-pointer hover:bg-gray-500 duration-700"
          >
            {items.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About