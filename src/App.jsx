import React, { useState } from "react";
import Scene from "./Scene";
import Slot from "./components/Slot";
import SelectOptions from "./components/SelectOptions";
import woodImage from "./assets/textureIcon.jpg";
import { texture } from "three/examples/jsm/nodes/Nodes.js";
const App = () => {
  const bodyMaterialOptions = [
    {
      label: "wood1",
      img: woodImage,
    },
    {
      label: "wood2",
      img: woodImage,
      texturePath: "./dsfnsd",
    },
    {
      label: "wood3",
      img: woodImage,
      texturePath: "",
    },
    ,
  ];

  const [selectedBodyMaterial, setSelectedBodyMaterial] = useState("wood1");
  const handleBodyMaterial = (option) => {
    // change global valtio state

    setSelectedBodyMaterial(option?.label);
    if (option?.hex) {
      console.log("color");
    } else if (option?.texturePath) {
      console.log("texture");
    } else {
      console.log("no change");
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-row overflow-hidden">
      <div className=" bg-gray-600 w-[70%]">
        <Scene></Scene>
      </div>

      <div className="controls w-[30%]">
        <Slot label={"Outer Body"} isOpen={true}>
          <SelectOptions
            options={bodyMaterialOptions}
            value={selectedBodyMaterial}
            onChange={handleBodyMaterial}
          ></SelectOptions>
        </Slot>
      </div>
    </div>
  );
};

export default App;
