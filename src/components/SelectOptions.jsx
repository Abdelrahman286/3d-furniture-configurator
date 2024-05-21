import React, { useRef, useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";

const SelectOptions = ({ value, onChange, options }) => {
  // options = label , texturePath , img

  const ref = useRef();

  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  const handleOptionClick = (option) => {
    onChange(option);
    ref.current.classList.remove("border-blue-400");
  };
  const handleColorChange = (color) => {
    const hexValue = hsvaToHex(hsva);
    setHsva({ ...hsva, ...color.hsva });
    onChange({ hex: hexValue });
  };

  const handleColorClick = () => {
    ref.current.classList.add("border-blue-400");
    // remove selection from the rest of options
    onChange(hsvaToHex(hsva));
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className={`border-2 p-1 mr-4 rounded-xl flex flex-col items-center pb-2 ${
          option?.label == value ? " border-blue-400" : ""
        }`}
        key={option.label}
        onClick={() => handleOptionClick(option)}
      >
        <span className="text-center text-lg mb-1 p-2 ">{option.label}</span>
        <div className="w-32 h-32 overflow-y-hidden">
          <img className="w-[100%]" src={option.img}></img>
        </div>
      </div>
    );
  });
  return (
    // overflow-auto ---> to display the scroll if it's nesscacry
    <div className="flex flex-row overflow-x-auto p-3  justify-between">
      {renderedOptions}

      <div
        ref={ref}
        className=" border-2  w-40 h-44  p-1 mr-4 rounded-xl flex flex-col items-center pb-2"
        onClick={handleColorClick}
      >
        <div className="w-32  mt-5 flex justify-center items-center">
          <Wheel
            width={120}
            height={120}
            color={hsva}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;
