"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/cd.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
};

const Base = () => {
  return (
    <Box args={[10, 0.1, 10]} position={[0, -0.05, 0]} castShadow receiveShadow>
      <meshStandardMaterial color={"white"} />
    </Box>
  );
};

const ThreeTesting = () => {
  const [lighting, setLighting] = useState({
    color: "white",
    intensity: 1,
    ambientIntensity: 0.5,
  });

  const handleMorning = () => {
    setLighting({ color: "yellow", intensity: 1.5, ambientIntensity: 0.7 });
  };

  const handleEvening = () => {
    setLighting({ color: "orange", intensity: 1, ambientIntensity: 0.4 });
  };

  const handleNight = () => {
    setLighting({ color: "blue", intensity: 0.5, ambientIntensity: 0.2 });
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Canvas style={{ width: "100%", height: "100vh" }} shadows camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={lighting.ambientIntensity} />
        <group position={[0, 1, 1]}>
          <pointLight castShadow intensity={lighting.intensity} distance={10} decay={1} color={lighting.color} />
          <Sphere scale={[0.2, 0.2, 0.2]}>
            <meshStandardMaterial color={lighting.color} />
          </Sphere>
        </group>
        <Suspense fallback={null}>
          <group position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <Model />
          </group>
        </Suspense>
        <Base />
        <OrbitControls />
      </Canvas>
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}>
        <button onClick={handleMorning} style={{ marginRight: 10 }}>
          Morning
        </button>
        <button onClick={handleEvening} style={{ marginRight: 10 }}>
          Evening
        </button>
        <button onClick={handleNight}>Night</button>
      </div>
    </div>
  );
};

export default ThreeTesting;
