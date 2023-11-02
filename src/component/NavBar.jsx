import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuIcon, setMenuIcon] = useState("hidden");
  const [close, setClose] = useState(false);
  const [buttons, setButtons] = useState(Array(5).fill(""));

  function menuHandle() {
    if (menuIcon) {
      setMenuIcon("");
      setClose(!close);
    } else {
      setMenuIcon("hidden");
      setClose(false);
    }
  }

  function btnHandle(index) {
    const newButtons = buttons.map((btn, i) =>
      i === index ? "bg-gray-700" : ""
    );
    setButtons(newButtons);
  }

  return (
    <div className="px-4 py-2 bg-slate-800 lg:w-1/4">
      {close ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={menuHandle}
          className="inline w-8 h-8 text-white lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={menuHandle}
          className="inline w-8 h-8 text-white lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}

      <div className={`${menuIcon} lg:block`}>
        <div className="my-2 mb-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>
        <ul>
          <li className="mb-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="search"
                className="w-full px-4 py-2 pl-12 rounded shadow outline-none"
                placeholder="Search..."
              />
            </div>
          </li>
          <Link to="/">
            {" "}
            <li
              onClick={() => btnHandle(0)}
              className={`mb-2 rounded hover:shadow ${buttons[0]}`}
            >
              <a
                href="#"
                className="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={() => btnHandle(1)}
              className={`mb-2 rounded hover:shadow ${buttons[1]}`}
            >
              <a
                href="#"
                className="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6 mr-2 -mt-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  />
                </svg>
                About
              </a>
            </li>
          </Link>
          <Link to="/frameworks">
            <li
              onClick={() => btnHandle(2)}
              className={`mb-2 rounded hover:shadow ${buttons[2]}`}
            >
              <a
                href="#"
                className="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                FrameWorks
              </a>
            </li>
          </Link>
          <Link to="/founders">
            <li
              onClick={() => btnHandle(3)}
              className={`mb-2 rounded hover:shadow ${buttons[3]}`}
            >
              <a
                href="#"
                className="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Founders
              </a>
            </li>
          </Link>
          <Link to="history">
            <li
              onClick={() => btnHandle(4)}
              className={`mb-2 rounded hover:shadow ${buttons[4]}`}
            >
              <a
                href="#"
                className="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                History
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
