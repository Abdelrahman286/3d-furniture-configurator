import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import Slot from "./components/Slot";
import SelectOptions from "./components/SelectOptions";

import { useCustomization } from "./context/Customization";

const App = () => {
  const { material, setMaterial, isDoorOpen, setIsDoorOpen } =
    useCustomization();
  //------------ Body Material Stuff
  const bodyMaterialOptions = [
    {
      label: "Oak",
      imgIcon: "./woodIcon4.jpg",
    },
    {
      label: "Teak",
      imgIcon: "./woodIcon2.png",
    },
    {
      label: "Mahogany",
      imgIcon: "./woodIcon3.png",
    },
    {
      label: "Pine",
      imgIcon: "./woodIcon.png",
    },
    ,
  ];

  const [selectedBodyMaterial, setSelectedBodyMaterial] = useState(material);
  const [isBodySlotOpen, setIsBodySlotOpen] = useState(true);

  const handleBodySlot = () => {
    setIsBodySlotOpen(!isBodySlotOpen);
  };

  const handleBodyMaterialChange = (option) => {
    if (option?.label) {
      setSelectedBodyMaterial(option.label);
      setMaterial(option.label);
    }
  };

  //------------------- Interior

  const handleDoorOpen = () => {
    setIsDoorOpen(!isDoorOpen);
  };

  return (
    <div className="w-full h-[100vh] flex flex-row overflow-hidden">
      <div className="w-[70%] rad-gradient">
        <Scene></Scene>
      </div>

      <div className="controls w-[30%]">
        <Slot
          label={"Outer Body"}
          isOpen={isBodySlotOpen}
          onChange={handleBodySlot}
        >
          <SelectOptions
            options={bodyMaterialOptions}
            value={selectedBodyMaterial}
            onChange={handleBodyMaterialChange}
          ></SelectOptions>
        </Slot>

        <Slot
          label={"Inner Lamination"}
          isOpen={isDoorOpen}
          onChange={handleDoorOpen}
        >
          put Lamination here
        </Slot>
      </div>
    </div>
  );
};

export default App;
