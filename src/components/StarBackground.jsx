import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React from "react";

export default function StarBackground() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ position: "fixed", overflow: "hidden" }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stars
          radius={100} // Radius of the star field
          depth={50} // Depth of the star field
          count={5000} // Number of stars
          factor={4} // Size factor
          saturation={0} // Star color saturation
          fade // Fading effect
        />
      </Canvas>
    </div>
  );
}