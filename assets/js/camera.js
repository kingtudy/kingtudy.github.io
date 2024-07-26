import * as THREE from "three";

const aspect = window.innerWidth / window.innerHeight;

let fov;
if(isMobile()) {
    fov = 120;
} else {
    fov = 60;
}


const camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    0.1,
    10000
);

// Position and orient the camera
camera.position.set(0, 1000, 1500);
// camera.position.set(0, 50, 100);
// camera.rotation.y = 145 * (Math.PI / 180);
// camera.layers.enableAll();

camera.updateProjectionMatrix();

export { camera }