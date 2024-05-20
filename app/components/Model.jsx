// src/model.jsx
"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const SphereModel = () => {
  useEffect(() => {
    const mount = document.getElementById("model");

    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const loader = new GLTFLoader();

    // Load the model
    loader.load(
      "/shiba.glb",
      function (glb) {

        scene.add(glb.scene);
        console.log(glb.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // Add directional light to the scene
    const directionalLight = new THREE.DirectionalLight("yellow", 1);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Add a 3D sphere
    // const geometry = new THREE.SphereGeometry(10, 32, 32);
    // const material = new THREE.MeshPhongMaterial({ color: 0xff0f90 }); // Red color
    // const sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    renderer.render(scene, camera);
    function animate() {}

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="model">{/* <div id="info">Description</div> */}</div>;
};

export default SphereModel;
