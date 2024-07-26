import { Sky } from 'three/addons/objects/Sky.js';
import '../core/simplex-noise/simplex-noise.min.js';


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
    emissive: 0xffffff, // Emissive color of the sphere
    emissiveIntensity: 0.05 // Adjust the brightness of the emissive color
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
let moonScale = 200;
moon.scale.set(moonScale,moonScale,moonScale);

function updateMoonPosition(t) {
    const centerX = 0;
    const centerY = 1100;

    // Define the radii of the oval
    const radiusX = 7000;
    const radiusY = 4300;

    // Calculate the position of the point on the oval
    const xMoon = centerX + radiusX * Math.cos(-t);
    const yMoon = centerY + radiusY * Math.sin(-t);

    moon.position.set(xMoon, yMoon,-6000);
}

// STARS COOKING

const starGeometry = new THREE.BufferGeometry();
const vertices = [];
const sizes = [];
const starCount = 10000;
const radius = 10000;
const simplex = new SimplexNoise();


const sprite = new THREE.TextureLoader().load( './assets/img/textures/disc.png' );
sprite.colorSpace = THREE.SRGBColorSpace;

for ( let i = 0; i < starCount; i ++ ) {

    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    vertices.push(x, y, z);
    sizes.push(getRandomArbitrary(20, 60));
}

starGeometry.setAttribute('position',
    new THREE.Float32BufferAttribute(vertices, 3)
);
starGeometry.setAttribute('size',
    new THREE.Float32BufferAttribute(sizes, 1)
);

//Shader for the stars
const vertexShader = `
      attribute float size;
      varying float vSize;

      void main() {
        vSize = size;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

// Fragment shader
const fragmentShader = `
      uniform sampler2D map;
      varying float vSize;

      void main() {
        gl_FragColor = texture2D(map, gl_PointCoord);
        gl_FragColor.a *= vSize / 30.0;
      }
    `;

let starMaterial = new THREE.ShaderMaterial({
    uniforms: {
        map: { value: sprite },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
});

const stars = new THREE.Points(starGeometry, starMaterial);
stars.name = 'stars';

const animateStars = function () {
    const time = Date.now() * 0.0001;
    const sizes = starGeometry.attributes.size.array;
    for (let i = 0; i < starCount; i++) {
        sizes[i] = 20 + 40 * (0.5 + 0.5 * simplex.noise2D(i, time));
    }
    starGeometry.attributes.size.needsUpdate = true;
};





// 2ND PLANET COOKING
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
const planetTexture = new THREE.TextureLoader().load('./assets/img/textures/planet.png');
const planetMaterial = new THREE.MeshStandardMaterial({
    map: planetTexture,
    emissive: 0xFF4300, // Emissive color of the sphere
    emissiveIntensity: 0.1 // Adjust the brightness of the emissive color
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

export { sky, sun, moon, updateMoonPosition, animateStars, stars, planet, updatePlanetPosition }