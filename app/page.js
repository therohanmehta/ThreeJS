"use client";
import Image from "next/image";
// import SphereModel from "./components/Model";
import { Environment, OrbitControls, Sky, Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Room } from "./components/Room";
import { LightShadow } from "three";
import { UpdatedRoom } from "./components/UpdatedRoom";

export default function Home() {
  const groupRef = useRef();
  const [texture, setTexture] = useState("text1");
  return (
    <div className="relative h-screen w-100">
      {/* <SphereModel /> */}

      <Canvas style={{ height: "100vh", width: "auto" }} className="">
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
        <group position={[0, 0, 0]} scale={[1, 1, 1]}>
          <UpdatedRoom />
        </group>
      </Canvas>
      <div className="absolute top-0 flex flex-col bg-purple-500 border border-red-400 h-36 w-36">
        <button
          onClick={() => {
            setTexture("text1");
          }}
          className="p-3 border"
        >
          Texture 1
        </button>
        <button
          onClick={() => {
            setTexture("text2");
          }}
          className="p-3 border"
        >
          Texture 2
        </button>
      </div>
    </div>
  );
}
