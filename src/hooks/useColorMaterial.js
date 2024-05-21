import * as THREE from "three";

function useColorMaterial(color) {
  const colorMaterial = new THREE.MeshStandardMaterial({
    color: color,
  });

  return colorMaterial;
}

export default useColorMaterial;
