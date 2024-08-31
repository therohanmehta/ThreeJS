"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

export function WindowR2f(props) {
  const { nodes } = useGLTF("/window.glb");
  return (
    <group {...props} dispose={null}>
      {/* Window Meshes with shadows */}
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 1, 0]}
        scale={[1, 1, 0.1]}
      />
      <mesh
        name="Cube001"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, -0.2, 0]}
        scale={[2.7, 0.2, 2.5]}
      />
    </group>
  );
}

useGLTF.preload("/window.glb");
