import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import Slot from "./components/Slot";
import SelectOptions from "./components/SelectOptions";

import { texture } from "three/examples/jsm/nodes/Nodes.js";
import state from "./store/index";
import { useSnapshot } from "valtio";
import { useControls } from "leva";

const App = () => {
  const snap = useSnapshot(state);
  const bodyMaterialOptions = [
    {
      label: "Oak",
      img: "./texture1.png",
    },
    {
      label: "Teak",
      img: "./texture2.png",
      texturePath: "./textureMap1.jpg",
    },
    {
      label: "Mahogany",
      img: "./texture3.png",
      texturePath: "./textureMap2.jpg",
    },
    ,
  ];

  const [selectedBodyMaterial, setSelectedBodyMaterial] = useState("Oak");
  const [isDoorOpen, setIsDoorOpen] = useState(snap.isDoorOpen);
  const [isBodyMaterialOpen, setIsBodyMaterialOpen] = useState(true);
  const handleBodyMaterialOpen = () => {
    setIsBodyMaterialOpen(!isBodyMaterialOpen);
  };
  const handleDoorOpen = () => {
    setIsDoorOpen(!isDoorOpen);
    state.isDoorOpen = !state.isDoorOpen;
  };
  const handleBodyMaterial = (option) => {
    if (option?.label) {
      setSelectedBodyMaterial(option.label);
      state.bodyMaterial = option.label;
    }
    // if (option?.hex?.startsWith("#")) {
    //   console.log(option.hex);
    //   state.bodyMaterial = option.hex;
    // } else if (option?.texturePath) {
    //   state.bodyMaterial = option.texturePath;
    // } else {
    //   state.bodyMaterial = "0";
    // }
  };

  return (
    <div className="w-full h-[100vh] flex flex-row overflow-hidden">
      <div className="w-[70%] rad-gradient">
        <Scene></Scene>
      </div>

      <div className="controls w-[30%]">
        <Slot
          label={"Outer Body"}
          isOpen={isBodyMaterialOpen}
          onChange={handleBodyMaterialOpen}
        >
          <SelectOptions
            options={bodyMaterialOptions}
            value={selectedBodyMaterial}
            onChange={handleBodyMaterial}
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
