// src/model.jsx
"use client";
import React, { useEffect } from "react";
import * as THREE from "three";

const SphereModel = ({ targetElementId }) => {
  useEffect(() => {
    const container = document.getElementById(targetElementId);
    if (!container) {
      console.error(`Element with ID '${targetElementId}' not found.`);
      return;
    }

    // Initialize Three.js components
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Append renderer's canvas to the target element
    container.appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Position camera
    camera.position.z = 50;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate(); // Start animation loop

    // Cleanup function
    return () => {
      container.removeChild(renderer.domElement); // Remove renderer's canvas on unmount
    };
  }, [targetElementId]);

  return <div id={targetElementId} />; // Render an empty div with the specified ID
};

export default SphereModel;
