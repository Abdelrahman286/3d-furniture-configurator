import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Color } from "three";

const RotatingBox = () => {
  const boxRef = useRef();
  const [color, setColor] = useState(new Color("#ff0000"));

  // Rotate the box and change its color dynamically
  useFrame(({ clock }) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.05;
      boxRef.current.rotation.y += 0.05;

      // Change the color over time
      const elapsed = clock.getElapsedTime();
      const newColor = new Color(`hsl(${(elapsed * 100) % 360}, 100%, 50%)`); // HSL for smooth color transitions
      setColor(newColor);
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const CubeLoader = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100%",
        background: "radial-gradient(circle, #e6e5e5, rgb(105, 103, 103))",
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight color="#ff00ff" intensity={1} position={[5, 5, 5]} />
      <pointLight color="#00ffff" intensity={1} position={[-5, 5, 5]} />
      <pointLight color="#ffff00" intensity={1} position={[5, -5, 5]} />
      <pointLight color="#ff0000" intensity={1} position={[-5, -5, 5]} />

      {/* Rotating Box */}
      <RotatingBox />

      {/* Gradient Loading Text */}
      <Html center>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(90deg, #0000ff, #ff00ff)", // Blue to Pink
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          }}
        >
          Loading...
        </div>
      </Html>
    </Canvas>
  );
};

export default CubeLoader;
