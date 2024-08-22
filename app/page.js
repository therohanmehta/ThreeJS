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
  const [texture, setTexture] = useState("text1");
  return (
    <div className="relative h-screen w-100">
      {/* <SphereModel /> */}

      <Canvas style={{ height: "100vh", width: "auto" }} className="">
        {/* <color attach="background" args={["red"]} /> */}
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
        {/* <group ref={groupRef} position={[0, -20, -10]} scale={[15, 15, 15]}> */}
        <group rotateOnAxis={true} position={[0, 0, 0]} scale={[1, 1, 1]}>
          <Room texture={texture} />
        </group>
        {/* </group> */}
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
