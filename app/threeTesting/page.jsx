"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  // Load the GLTF model
  const { scene } = useGLTF("/updatedRoom.glb");

  // Load the texture you want to apply to the "TV" mesh
  const texture = useLoader(THREE.TextureLoader, "/texture.png");

  // Traverse the scene to find the "TV" mesh and apply a unique material with the texture
  scene.traverse((child) => {
    if (child.isMesh && child.name === "TV") {
      // Create a unique material for the "TV" mesh
      const tvMaterial = new THREE.MeshBasicMaterial({ map: texture });
      child.material = tvMaterial;
    }
  });

  return <primitive object={scene} />;
};

const ThreeTesting = () => {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeTesting;
