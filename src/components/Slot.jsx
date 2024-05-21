import React, { useState } from "react";

const Slot = ({ label, children, isOpen }) => {
  // i set the intial state from the parent component
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const handleClick = () => {
    setIsOpenState(!isOpenState);
  };
  return (
    <div>
      <header
        onClick={handleClick}
        className="w-full bg-gray-400 cursor-pointer py-3 px-2 select-none"
      >
        {label}
      </header>
      {isOpenState && <section className=" p-2">{children}</section>}
    </div>
  );
};

export default Slot;
