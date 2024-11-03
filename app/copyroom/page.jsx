"use client";

import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  // Load the GLTF model
  const { scene } = useGLTF("/copyroom.glb");

  // Load the texture you want to apply to the "Background_Environment" mesh
  const texture = useLoader(THREE.TextureLoader, "/texture.png");
  const background = useLoader(THREE.TextureLoader, "/scene.jpg");
  const curtain = useLoader(THREE.TextureLoader, "/texture2.jpg");
  const wall = useLoader(THREE.TextureLoader, "/texture3.jpg");

  // Correct the texture orientation and prevent repeating
  background.flipY = false; // Fix the upside-down issue
  background.mapping = THREE.EquirectangularReflectionMapping;
  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;
  wall.repeat.set(1, 1); // Adjust repeat values as needed to fit the mesh
  curtain.repeat.set(1, 1); // Adjust repeat values as needed to fit the mesh
  curtain.flipY = false; // Fix the upside-down issue
  curtain.wrapS = THREE.RepeatWrapping;
  curtain.wrapT = THREE.RepeatWrapping;

  // Traverse the scene to find the "Background_Environment" mesh and apply the texture
  scene.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true;
      child.castShadow = true;

      // Apply texture to the specific mesh
      if (child.name === "Background_Environment") {
        const backgroundMaterial = new THREE.MeshBasicMaterial({
          map: background,
          side: THREE.DoubleSide,
        });
        child.material = backgroundMaterial;
      }
      if (child.name === "Cube001") {
        const wallMaterial = new THREE.MeshBasicMaterial({
          map: wall,
          side: THREE.DoubleSide,
        });
        child.material = wallMaterial;
      }
      if (child.name === "Left_Curtain_Big" || child.name === "") {
        const curtainMaterial = new THREE.MeshBasicMaterial({
          map: curtain,
          side: THREE.DoubleSide,
        });
        child.material = curtainMaterial;
      }
    }
  });

  return <primitive object={scene} />;
};

const ThreeTesting = () => {
  const [lighting, setLighting] = useState({
    color: "white",
    intensity: 300,
    ambientIntensity: 0.5,
  });

  const handleMorning = () => {
    setLighting({ color: "yellow", intensity: 300, ambientIntensity: 0.5 });
  };

  const handleEvening = () => {
    setLighting({ color: "orange", intensity: 200, ambientIntensity: 0.4 });
  };

  const handleNight = () => {
    setLighting({ color: "blue", intensity: 100, ambientIntensity: 0.3 });
  };
  return (
    <>
      <Canvas
        shadows // Enable shadows on the renderer
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [10, 0, -10], fov: 60 }} // Set a good camera position and FOV
      >
        <ambientLight intensity={lighting.ambientIntensity} position={[-20, 2, 2]} />
        <LightSource1 lighting={lighting} />
        {/* <LightSource2 lighting={lighting} /> */}
        <Suspense fallback={null}>
          <group scale={[20, 20, 20]}>
            <Model />
          </group>
        </Suspense>

        <OrbitControls enableZoom={true} />
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
    </>
  );
};

export default ThreeTesting;

function LightSource1(lighting) {
  return (
    <group position={[-20, 0, 12]}>
      <Sphere scale={[0.4, 0.4, 0.4]} castShadow>
        <meshStandardMaterial color={"red"} />
        <pointLight intensity={lighting.intensity} distance={30} decay={1} color={lighting.color} castShadow />
      </Sphere>
    </group>
  );
}
function LightSource2(lighting) {
  return (
    <group position={[-20, 0, 13]}>
      <Sphere scale={[0.4, 0.4, 0.4]} castShadow>
        <meshStandardMaterial color={"green"} />
        <pointLight intensity={lighting.intensity} distance={30} decay={1} color={lighting.color} castShadow />
      </Sphere>
    </group>
  );
}
