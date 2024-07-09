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

let moonGeometry = new THREE.SphereGeometry(1, 32, 32);
const texture = new THREE.TextureLoader(textureLoader.load('path_to_your_texture.jpg'));

export { sky, sun, moon }