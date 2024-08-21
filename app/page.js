"use client";
import Image from "next/image";
// import SphereModel from "./components/Model";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useRef, useState } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Room } from "./components/Room";

export default function Home() {
  const groupRef = useRef();
  return (
    <div className="h-screen w-100">
      {/* <SphereModel /> */}

      <Canvas style={{ height: "100vh", width: "100%" }} className="" shadows camera={{ position: [1, 1, 40], fov: 30 }}>
        {/* <color attach="background" args={["red"]} /> */}
        <Environment preset="sunset" />
        <group ref={groupRef} position={[0, -20, -10]} scale={[15, 15, 15]}>
          <Room />
        </group>
      </Canvas>
    </div>
  );
}
