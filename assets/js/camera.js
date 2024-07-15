import * as THREE from "three";

const aspect = window.innerWidth / window.innerHeight;

const camera = new THREE.PerspectiveCamera(
    60,
    aspect,
    0.1,
    10000
);

// Position and orient the camera
camera.position.set(0, 40, 100);
// camera.rotation.y = 145 * (Math.PI / 180);
camera.layers.enableAll();

camera.updateProjectionMatrix();

export { camera }