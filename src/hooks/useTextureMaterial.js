import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function useTextureMaterial(path) {
  const imgTexture = useTexture(path);
  const finalMaterial = new THREE.MeshStandardMaterial({ map: imgTexture });
  return finalMaterial;
}

export default useTextureMaterial;
