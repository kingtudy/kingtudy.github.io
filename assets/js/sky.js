import { Sky } from 'three/addons/objects/Sky.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import * as THREE from 'three';
let sun = new THREE.Vector3();

// SKY COOKING

const sky = new Sky();
sky.scale.setScalar( 10000 );

const skyUniforms = sky.material.uniforms;

// skyUniforms[ 'turbidity' ].value = 10;
// skyUniforms[ 'rayleigh' ].value = 2;
// skyUniforms[ 'mieCoefficient' ].value = 0.005;
// skyUniforms[ 'mieDirectionalG' ].value = 0.8;

skyUniforms[ 'turbidity' ].value = 10;
skyUniforms[ 'rayleigh' ].value = 4;
skyUniforms[ 'mieCoefficient' ].value = 0.013;
skyUniforms[ 'mieDirectionalG' ].value = 0.68;

// MOON COOKING

const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
const moonTexture = new THREE.TextureLoader().load('./assets/img/textures/moon/moon.jpg');
const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
    emissive: 0x000000,
    emissiveIntensity: 0.5
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
let moonScale = 100;
moon.scale.set(moonScale,moonScale,moonScale);

function updateMoonPosition(t) {
    const centerX = 0;
    const centerY = (4200 + 100 - 3000) / 2 - 100;

    // Define the radii of the oval
    const radiusX = 3500;
    const radiusY = (4200 + 100) / 2;

    // Calculate the position of the point on the oval
    const xMoon = centerX + radiusX * Math.cos(-t);
    const yMoon = centerY + radiusY * Math.sin(-t);

    moon.position.set(xMoon, yMoon,-3000);
}

// STARS COOKING

const starGeometry = new THREE.BufferGeometry();
const vertices = [];

const sprite = new THREE.TextureLoader().load( './assets/img/textures/disc.png' );
sprite.colorSpace = THREE.SRGBColorSpace;

for ( let i = 0; i < 10000; i ++ ) {

    const x = 12000 * Math.random() - 6000;
    const y = 10000 * Math.random() - 1000;
    const z = 1000 * Math.random() - 5000;

    vertices.push( x, y, z );

}

starGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

let starMaterial = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
starMaterial.color.setHSL( 1.0, 0.3, 0.7, THREE.SRGBColorSpace );

const stars = new THREE.Points( starGeometry, starMaterial );
stars.name = 'stars';

// 2ND PLANET COOKING
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
const planetTexture = new THREE.TextureLoader().load('./assets/img/textures/planet.png');
const planetMaterial = new THREE.MeshStandardMaterial({
    map: planetTexture
});
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
let planetScale = 1800;
planet.scale.set(planetScale, planetScale, planetScale);

function updatePlanetPosition(t) {
    const centerZ = 0;
    const centerY = 1100;

    // Define the radii of the oval
    const radiusZ = 11000;
    const radiusY = 5200;

    // Calculate the position of the point on the oval
    const zPlanet = centerZ + radiusZ * Math.cos(-t);
    const yPlanet = centerY + radiusY * Math.sin(-t);

    planet.position.set(0, yPlanet, zPlanet);
}

export { sky, sun, moon, updateMoonPosition, stars, planet, updatePlanetPosition }