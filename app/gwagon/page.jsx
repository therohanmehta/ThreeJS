"use client";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import GUI from "lil-gui";
import * as THREE from "three";

const Gwagon = () => {
  const baseRef = React.useRef();
  const lightRef = React.useRef();
  const lightHelperRef = React.useRef();
  const carRef = React.useRef();

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 10 }} className="" style={{ width: "100vw", height: "100vh" }} shadows>
      <CarComponent carRef={carRef} />
      {/* <Environment preset="city" /> */}
      <ambientLight intensity={0.5} />
      <directionalLight ref={lightRef} position={[20, 20, 20]} intensity={3} color={"white"} castShadow />
      <OrbitControls />

      {/* <GradientBackground /> */}
    </Canvas>
  );
};
export default Gwagon;

function CarComponent() {
  const { scene } = useGLTF("/gwagon.glb");
  const { camera } = useThree();
  const positionCarRef = React.useRef();
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name === "body") {
        // child.material.color.set("red");
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  const meshRef = React.useRef();
  const bodyColorRef = React.useRef({ color: "red" });

  useEffect(() => {
    const gui = new GUI();

    const meshFolder = gui.addFolder("Mesh");
    meshFolder.add(positionCarRef.current.position, "x", -50, 50, 0.1).name("Position X");
    meshFolder.add(positionCarRef.current.position, "y", -50, 50, 0.1).name("Position Y");
    meshFolder.add(positionCarRef.current.position, "z", -50, 50, 0.1).name("Position Z");
    meshFolder.add(positionCarRef.current.rotation, "x", -Math.PI, Math.PI, 0.1).name("Rotation X");
    meshFolder.add(positionCarRef.current.rotation, "y", -Math.PI, Math.PI, 0.1).name("Rotation Y");
    meshFolder.add(positionCarRef.current.rotation, "z", -Math.PI, Math.PI, 0.1).name("Rotation Z");
    meshFolder
      .addColor(bodyColorRef.current, "color")
      .name("Body Color")
      .onChange((value) => {
        scene.traverse((child) => {
          if (child.isMesh && child.name === "body") {
            child.material.color.set(value);
          }
        });
      });
    meshFolder
      .addColor(bodyColorRef.current, "color")
      .name("Rims")
      .onChange((value) => {
        scene.traverse((child) => {
          if (child.isMesh && child.name === "rims") {
            child.material.color.set(value);
          }
        });
      });
    meshFolder.open();

    return () => {
      gui.destroy();
    };
  }, [camera, scene]);

  useEffect(() => {
    const animateRims = () => {
      scene.traverse((child) => {
        // if (child.isMesh && child.name === "tyre") {
        //   child.rotation.y += 0.01; // Rotate on the y-axis
        // }
      });
      requestAnimationFrame(animateRims);
    };
    animateRims();
  }, [scene]);

  return (
    <mesh ref={positionCarRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.5} castShadow receiveShadow>
      <primitive object={scene} />
      <mesh castShadow receiveShadow ref={meshRef} position={[0, -0.6, 0]} rotation={[Math.PI / 2, -Math.PI, 0]} scale={1}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="red" roughness={0.1} metalness={0.1} />
      </mesh>
    </mesh>
  );
}

function GradientBackground() {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.style.background = "linear-gradient(pink, green)";
  }, [gl]);

  return null;
}
