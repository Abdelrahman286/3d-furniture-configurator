import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { handleDoorAnimation } from "./utils/doorAnimation";
import { useCustomization } from "./context/Customization";

export function Model(props) {
  const { outerMaterial, isDoorOpen, innerMaterial, handlesMaterial } =
    useCustomization();
  const group = useRef();
  const ref = useRef();

  const { nodes, materials, animations } = useGLTF("/console.glb");
  const { actions, names } = useAnimations(animations, group);

  const wood1 = useTexture({
    map: "./wood_textures/Wood_022_SD/Wood_022_basecolor.jpg",
    displacementMap: "./wood_textures/Wood_022_SD/Wood_022_height.png",
    aoMap: "./wood_textures/Wood_022_SD/Wood_022_ambientOcclusion.jpg",
    normalMap: "./wood_textures/Wood_022_SD/Wood_022_normal.jpg",
    roughnessMap: "./wood_textures/Wood_022_SD/Wood_022_roughness.jpg",
  });
  const wood2 = useTexture({
    map: "./wood_textures/Wood_024_SD/Wood_024_basecolor.jpg",
    displacementMap: "./wood_textures/Wood_024_SD/Wood_024_height.jpg",
    aoMap: "./wood_textures/Wood_024_SD/Wood_024_ambientOcclusion.jpg",
    normalMap: "./wood_textures/Wood_024_SD/Wood_024_normal.jpg",
    roughnessMap: "./wood_textures/Wood_024_SD/Wood_024_roughness.jpg",
  });

  const wood3 = useTexture({
    map: "./wood_textures/Wood_027_SD/Wood_027_basecolor.jpg",
    displacementMap: "./wood_textures/Wood_027_SD/Wood_027_height.png",
    aoMap: "./wood_textures/Wood_027_SD/Wood_027_ambientOcclusion.jpg",
    normalMap: "./wood_textures/Wood_027_SD/Wood_027_normal.jpg",
    roughnessMap: "./wood_textures/Wood_027_SD/Wood_027_roughness.jpg",
  });

  const gold = useTexture("./textures/gold.jpg");

  // door animation
  useEffect(() => {
    handleDoorAnimation(actions, names, isDoorOpen);
  }, [isDoorOpen]);

  console.log(handlesMaterial);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-0.99, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="32bb1015bd034047a1d0f548e687867ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group
                name="livros"
                position={[-1.539, 0.589, -0.501]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.016}
              >
                <mesh
                  name="livros_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.livros_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="Movel_low" position={[0, 0.531, 0]} scale={0.01}>
                <group name="Merged">
                  <mesh
                    name="door-1"
                    castShadow
                    receiveShadow
                    geometry={nodes["door-1"].geometry}
                    material={materials.lambert1}
                    position={[294.226, 6.125, 100.004]}
                    rotation={[0, -0.012, 0]}
                  />
                  <mesh
                    name="door-2"
                    castShadow
                    receiveShadow
                    geometry={nodes["door-2"].geometry}
                    material={materials.lambert1}
                    position={[175.332, 6.485, 98.97]}
                  />
                  <mesh
                    name="handle-1"
                    castShadow
                    receiveShadow
                    geometry={nodes["handle-1"].geometry}
                    // material={materials.lambert1}
                    position={[294.226, 6.125, 100.004]}
                    rotation={[0, -0.012, 0]}
                  >
                    {handlesMaterial === "Black" && (
                      <meshStandardMaterial
                        color={"black"}
                        roughness={0}
                        metalness={1}
                      ></meshStandardMaterial>
                    )}
                    {handlesMaterial === "White" && (
                      <meshStandardMaterial
                        {...materials.lambert1}
                      ></meshStandardMaterial>
                    )}
                    {handlesMaterial === "Gold" && (
                      <meshStandardMaterial
                        map={gold}
                        metalness={1}
                        roughness={0}
                      ></meshStandardMaterial>
                    )}
                  </mesh>
                  <mesh
                    name="handle-2"
                    castShadow
                    receiveShadow
                    geometry={nodes["handle-2"].geometry}
                    material={materials.lambert1}
                    position={[175.332, 6.485, 98.97]}
                  >
                    {handlesMaterial === "Black" && (
                      <meshStandardMaterial
                        color={"black"}
                        roughness={0}
                        metalness={1}
                      ></meshStandardMaterial>
                    )}
                    {handlesMaterial === "White" && (
                      <meshStandardMaterial
                        {...materials.lambert1}
                      ></meshStandardMaterial>
                    )}
                    {handlesMaterial === "Gold" && (
                      <meshStandardMaterial
                        map={gold}
                        metalness={1}
                        roughness={0}
                      ></meshStandardMaterial>
                    )}
                  </mesh>
                </group>
                <group name="movel">
                  <mesh
                    name="all-interiror"
                    castShadow
                    receiveShadow
                    geometry={nodes["all-interiror"].geometry}
                    // material={materials["Material.002"]}
                    // interior / inner
                  >
                    {innerMaterial == "Oak" && (
                      <meshStandardMaterial
                        {...materials.lambert1}
                      ></meshStandardMaterial>
                    )}

                    {innerMaterial == "White" && (
                      <meshStandardMaterial
                        color={"white"}
                      ></meshStandardMaterial>
                    )}
                  </mesh>

                  <mesh
                    ref={ref}
                    name="movel_lambert1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.movel_lambert1_0.geometry}
                    // outer
                    // material={material === "Oak" ? materials.lambert1 : ""}
                  >
                    {outerMaterial === "Oak" && (
                      <meshStandardMaterial
                        {...materials.lambert1}
                      ></meshStandardMaterial>
                    )}

                    {outerMaterial === "Teak" && (
                      <meshStandardMaterial {...wood1}></meshStandardMaterial>
                    )}
                    {outerMaterial === "Mahogany" && (
                      <meshStandardMaterial {...wood2}></meshStandardMaterial>
                    )}
                    {outerMaterial === "Pine" && (
                      <meshStandardMaterial {...wood3}></meshStandardMaterial>
                    )}
                  </mesh>
                </group>
                <group name="pe">
                  <mesh
                    name="legs"
                    castShadow
                    receiveShadow
                    geometry={nodes.legs.geometry}
                    material={materials.lambert1}
                  />
                </group>
                <group name="porta">
                  <group name="Porta">
                    <mesh
                      name="door-3"
                      castShadow
                      receiveShadow
                      geometry={nodes["door-3"].geometry}
                      material={materials.lambert1}
                      position={[-93.597, 6.166, 97.262]}
                      rotation={[0, 0.568, 0]}
                    />
                    <mesh
                      name="handle-3"
                      castShadow
                      receiveShadow
                      geometry={nodes["handle-3"].geometry}
                      material={materials.lambert1}
                      position={[-93.597, 6.166, 97.262]}
                      rotation={[0, 0.568, 0]}
                    >
                      {handlesMaterial === "Black" && (
                        <meshStandardMaterial
                          color={"black"}
                          roughness={0}
                          metalness={1}
                        ></meshStandardMaterial>
                      )}
                      {handlesMaterial === "White" && (
                        <meshStandardMaterial
                          {...materials.lambert1}
                        ></meshStandardMaterial>
                      )}
                      {handlesMaterial === "Gold" && (
                        <meshStandardMaterial
                          map={gold}
                          metalness={1}
                          roughness={0}
                        ></meshStandardMaterial>
                      )}
                    </mesh>
                  </group>
                  <group name="puxadora" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/console.glb");
