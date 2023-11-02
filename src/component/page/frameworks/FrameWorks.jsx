import React,{useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PythonFramework,
  JavaFrameworks,
  JavaScriptFrameworks,
  CPlusPlusFrameWorks,
  CAashFrameWorks,
} from "../../api/Api";
import AboutFrame from "./AboutFrame";
import WhyFrame from "./WhyFrame";
import LibraryAndFrame from "./LibraryAndFrame";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

 function FrameWorks() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" mb-20 ">
      <AboutFrame />
      <div className="p-10 ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border-b-2 border-gray-800 shadow-lg pl-10"
          >
            Python
          </AccordionHeader>
          <AccordionBody className="bg-green-50 px-6">
            <ul className="text-lg overflow-y-scroll h-64">
              {PythonFramework.map((items) => (
                <li className="border-b p-2 border-black">{items}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="border-b-2 border-gray-800 shadow-lg pl-10"
          >
            Java
          </AccordionHeader>
          <AccordionBody className="bg-green-50 p-6">
            <ul className="text-lg overflow-y-scroll h-64">
              {JavaFrameworks.map((items) => (
                <li className="border-b p-2 border-black">{items}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="border-b-2 border-gray-800 shadow-lg pl-10"
          >
            JavaScript
          </AccordionHeader>
          <AccordionBody className="bg-green-50 p-6">
            <ul className="text-lg overflow-y-scroll h-64">
              {JavaScriptFrameworks.map((items) => (
                <li className="border-b p-2 border-black">{items}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="border-b-2 border-gray-800 shadow-lg pl-10"
          >
            C++
          </AccordionHeader>
          <AccordionBody className="bg-green-50 p-6">
            <ul className="text-lg overflow-y-scroll h-64">
              {CPlusPlusFrameWorks.map((items) => (
                <li className="border-b p-2 border-black">{items}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="border-b-2 border-gray-800 shadow-lg pl-10"
          >
            C#
          </AccordionHeader>
          <AccordionBody className="bg-green-50 p-6">
            <ul className="text-lg overflow-y-scroll h-64">
              {CAashFrameWorks.map((items) => (
                <li className="border-b p-2 border-black">{items}</li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
      <WhyFrame />
      <LibraryAndFrame />
    </div>
  );
}
export default FrameWorks


