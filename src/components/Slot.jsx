import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

const Slot = ({ label, children, isOpen, onChange }) => {
  // i set the intial state from the parent component

  return (
    <div className="border-b border-slate-300">
      <header
        onClick={onChange}
        className="text-xl w-full bg-gray-100 cursor-pointer py-3 px-4 select-none flex justify-between items-center hover:bg-gray-200"
      >
        {label}

        {isOpen ? (
          <IoIosArrowDropdown className="text-3xl"></IoIosArrowDropdown>
        ) : (
          <IoIosArrowDropleft className="text-3xl"></IoIosArrowDropleft>
        )}
      </header>
      {isOpen && <section className=" p-2">{children}</section>}
    </div>
  );
};

export default Slot;
