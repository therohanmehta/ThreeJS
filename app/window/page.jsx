"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { WindowR2f } from "../components/Window";

function Window() {
  return (
    <Canvas style={{ height: "100vh", width: "auto" }} className="">
      <OrbitControls enableZoom={false} />
      {/* <Environment preset="sunset" /> */}
      {/* <ambientLight intensity={30} /> */}

      {/* <ambientLight intensity={0.5} /> */}

      <pointLight castShadow intensity={2} position={[0.24, 0.88, 1.6]} color={"white"} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      {/* Red Cube for reference */}
      <mesh position={[0.12, 0.60, 1]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      {/* Cube to observe lighting */}
      {/* <mesh position={[0.24, 0.88, 1.6]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={"red"} />
      </mesh> */}

      <group castShadow receiveShadow position={[0, 0, 0]} scale={[1, 1, 1]}>
        <WindowR2f />
      </group>
    </Canvas>
  );
}

export default Window;
