import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";

import { Model } from "./Model";
import { useControls } from "leva";

function Scene() {
  return (
    <Canvas shadows>
      <ContactShadows
        resolution={1024}
        position={[0, -0.8, 0]}
        opacity={0.75}
        scale={10}
        blur={2}
        far={0.8}
      />
      <ambientLight intensity={0.3} />
      <Environment preset="apartment" />

      <meshStandardMaterial color={"white"} />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        intensity={1}
        angle={0.3}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />

      <Model
        position={[0, -1, 0.5]}
        rotation={[0, -Math.PI / 12, 0]}
        castShadow
        receiveShadow
      />
      {/* Add blue plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </Canvas>
  );
}

export default Scene;
