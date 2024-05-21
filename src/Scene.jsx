import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  ContactShadows,
} from "@react-three/drei";
import { useControls } from "leva";
import { Model } from "./Model";
import { useEffect, useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import textureImage from "./assets/textureIcon.jpg";

function Scene() {
  return (
    <>
      <Canvas shadows>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <Environment preset="apartment" blur={1} />
        <spotLight
          intensity={1}
          angle={0.3}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.6}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ContactShadows
          resolution={1024}
          position={[0, -0.8, 0]}
          opacity={0.75}
          scale={10}
          blur={2}
          far={0.8}
        />
        {/* Example Model */}
        <Model
          castShadow
          receiveShadow
          
        />
        <mesh
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.034, 0]}
          scale={[1.5, 1.5, 1.5]}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </Canvas>
    </>
  );
}

export default Scene;
