import React, { Suspense, useEffect, useState } from "react";
import Scene from "./Scene";
import Slot from "./components/Slot";
import SelectOptions from "./components/SelectOptions";

import { useCustomization } from "./context/Customization";
import {
  bodyMaterialOptions,
  innerMaterialOptions,
  handlesMaterialOptions,
} from "./utils/options";

// loading element
import LoadingAlert from "./components/LoadingAlert";
const App = () => {
  const {
    outerMaterial,
    setOuterMaterial,
    innerMaterial,
    setInnerMaterial,
    handlesMaterial,
    setHandlesMaterial,
    isDoorOpen,
    setIsDoorOpen,
  } = useCustomization();
  //------------ outer body Material -------------

  const [isBodySlotOpen, setIsBodySlotOpen] = useState(true);
  const handleBodySlot = () => {
    setIsBodySlotOpen(!isBodySlotOpen);
  };

  const handleBodyMaterialChange = (option) => {
    setOuterMaterial(option.label);
  };

  //------------------- Interior-------------

  const handleDoorOpen = () => {
    setIsDoorOpen(!isDoorOpen);
  };

  const handleInnerMaterial = (option) => {
    setInnerMaterial(option.label);
  };

  //----------- Handles material -----------------
  const [handlesSlot, setHandlesSlot] = useState(true);
  const changeHandlesSLot = () => {
    setHandlesSlot(!handlesSlot);
  };

  return (
    <div className="w-full h-[100vh] flex flex-row overflow-hidden">
      <div className="w-[70%] rad-gradient">
        {/* <Suspense fallback={<h1>Loading....</h1>}> */}
        <Suspense fallback={<LoadingAlert></LoadingAlert>}>
          <Scene></Scene>
        </Suspense>
      </div>

      <div className="controls w-[30%]">
        <Slot
          label={"Outer Body"}
          isOpen={isBodySlotOpen}
          onChange={handleBodySlot}
        >
          <SelectOptions
            options={bodyMaterialOptions}
            value={outerMaterial}
            onChange={handleBodyMaterialChange}
          ></SelectOptions>
        </Slot>

        <Slot
          label={"Inner Lamination"}
          isOpen={isDoorOpen}
          onChange={handleDoorOpen}
        >
          <SelectOptions
            options={innerMaterialOptions}
            value={innerMaterial}
            onChange={handleInnerMaterial}
          ></SelectOptions>
        </Slot>

        <Slot
          label={"Handles Material"}
          isOpen={handlesSlot}
          onChange={changeHandlesSLot}
        >
          <SelectOptions
            options={handlesMaterialOptions}
            value={handlesMaterial}
            onChange={(option) => {
              setHandlesMaterial(option.label);
            }}
          ></SelectOptions>
        </Slot>
      </div>
    </div>
  );
};

export default App;
