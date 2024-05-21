import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Model } from "./Model";
import { useEffect, useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import textureImage from "./assets/textureIcon.jpg";
function Scene() {
  const texture = useLoader(TextureLoader, textureImage);

  return (
    <>
      <Canvas shadows>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Environment preset="city" />
        {/* Example Model */}
        <Model />

      
      </Canvas>
    </>
  );
}

export default Scene;
