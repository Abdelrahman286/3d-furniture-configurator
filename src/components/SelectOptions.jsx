import React, { useRef, useState } from "react";
import { SketchPicker } from "react-color";
const SelectOptions = ({ value, onChange, options }) => {
  // options = label , texturePath , img

  const ref = useRef();

  const [color, setColor] = useState("#fff");

  const handleClick = (option) => {
    onChange(option);
    ref.current.classList.remove("border-blue-600");
  };
  const handleColorChange = (inColor) => {
    ref.current.classList.add("border-blue-600");
    onChange(inColor);
    setColor(inColor);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className={`border-4 w-40  mr-4 rounded ${
          option.label == value ? " border-blue-600" : ""
        }`}
        key={option.label}
        onClick={() => handleClick(option)}
      >
        <span>{option.label}</span>
        <div className="w-32 h-32 bg-red-300 overflow-y-hidden">
          <img className="w-[100%]" src={option.img}></img>
        </div>
      </div>
    );
  });
  return (
    // overflow-auto ---> to display the scroll if it's nesscacry
    <div className="flex flex-row overflow-x-auto p-3">
      {renderedOptions}
      <div ref={ref} className="border-4 p-4 bg-red-300">
        <SketchPicker color={color} onChange={handleColorChange}></SketchPicker>
      </div>
    </div>
  );
};

export default SelectOptions;
