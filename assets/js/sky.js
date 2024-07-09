import { Sky } from 'three/addons/objects/Sky.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import * as THREE from 'three';
let sun = new THREE.Vector3();

const sky = new Sky();
sky.scale.setScalar( 10000 );

const skyUniforms = sky.material.uniforms;

// skyUniforms[ 'turbidity' ].value = 10;
// skyUniforms[ 'rayleigh' ].value = 2;
// skyUniforms[ 'mieCoefficient' ].value = 0.005;
// skyUniforms[ 'mieDirectionalG' ].value = 0.8;

skyUniforms[ 'turbidity' ].value = 7.5;
skyUniforms[ 'rayleigh' ].value = 4;
skyUniforms[ 'mieCoefficient' ].value = 0.013;
skyUniforms[ 'mieDirectionalG' ].value = 0.68;

const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
const moonTexture = new THREE.TextureLoader().load('./assets/img/textures/moon/moon.jpg');
const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    emissive: 0xffffff,
    emissiveIntensity: 0.1
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
let moonScale = 100;
moon.scale.set(moonScale,moonScale,moonScale);
// moon.position.set(3280,-100,-4000);

function updateMoonPosition(t) {
    const centerX = 0;
    const centerY = (4200 + 100 - 3000) / 2 - 100;

    // Define the radii of the oval
    const radiusX = 3500;
    const radiusY = (4200 + 100) / 2;

    // Calculate the position of the point on the oval
    const xMoon = centerX + radiusX * Math.cos(-t);
    const yMoon = centerY + radiusY * Math.sin(-t);

    moon.position.set(xMoon, yMoon,-4000);
}

export { sky, sun, moon, updateMoonPosition }