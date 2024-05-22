import React, { useRef, useState } from "react";

const SelectOptions = ({ value, onChange, options }) => {
  // options = label , texturePath , img

  const handleOptionClick = (option) => {
    onChange(option);
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
          <img className="w-[100%]" src={option.imgIcon}></img>
        </div>
      </div>
    );
  });
  return (
    // overflow-auto ---> to display the scroll if it's nesscacry
    <div className="flex flex-row overflow-x-auto p-3  justify-between">
      {renderedOptions}
    </div>
  );
};

export default SelectOptions;
