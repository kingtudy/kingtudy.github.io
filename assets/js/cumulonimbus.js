import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import { fog } from './scene.js';

//Le custom cloud shader
const cloudShader = {
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
    fragmentShader: `
        uniform sampler2D map;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        uniform float opacity;
        
        varying vec2 vUv;

        void main() {
    
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep( fogNear, fogFar, depth );
        
        gl_FragColor = texture2D( map, vUv );
        gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
        gl_FragColor.w *= opacity;
        gl_FragColor = mix( gl_FragColor, vec4( fogColor , gl_FragColor.w ), fogFactor );
        
        
        }
    `
}

//Prepping the cloud formation

//Cloud textures cooking
let cloudTextureLoader = new THREE.TextureLoader();
let cloudTextures = [
    cloudTextureLoader.load(
        "./assets/img/textures/cloud/cloud1.png",
        ( tex )=>{
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
        }
    ),
    cloudTextureLoader.load(
        "./assets/img/textures/cloud/cloud2.png",
        ( tex )=>{
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
        }
    ),
    cloudTextureLoader.load(
        "./assets/img/textures/cloud/cloud4.png",
        ( tex )=>{
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
        }
    )
];

//Cloud materials cooking
const cloudMaterials = cloudTextures.map(
    texture => new THREE.ShaderMaterial({
        uniforms: {
            "map": {type: "t", value: texture},
            "fogColor": {type: "c", value: fog.value.color},
            "fogNear": {type: "f", value: 8000},
            "fogFar": {type: "f", value: 10000},
            "opacity": { type: "f", value: 0.5 }
        },
        vertexShader: cloudShader.vertexShader,
        fragmentShader: cloudShader.fragmentShader,
        depthWrite: false,
        depthTest: true,
        transparent: true
    })
);


const planeGeo = new THREE.PlaneGeometry(64, 64);
let planeObj = new THREE.Object3D();
const geometries = [];

for (let i = 0; i < 80; i++) {
    planeObj.position.x = getRandomArbitrary(-10000, 10000);
    planeObj.position.y = -Math.random() * Math.random() * 400 + 3500;
    planeObj.position.z = Math.random() * 4000 - 6000;

    // planeObj.rotation.z = Math.random() * Math.PI;
    planeObj.scale.y = planeObj.scale.x = getRandomArbitrary(10, 50);
    planeObj.updateMatrix();

    const clonedPlaneGeo = planeGeo.clone();
    clonedPlaneGeo.applyMatrix4(planeObj.matrix);

    // geometries.push(clonedPlaneGeo);
    clonedPlaneGeo.userData = {
        materialIndex: Math.floor(Math.random() * cloudMaterials.length)
    };
    geometries.push(clonedPlaneGeo);
}


let mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);

const mergedGeometryGroups = mergedGeometry.groups;
mergedGeometryGroups.length = 0; // Clear existing groups

let offset = 0;
geometries.forEach((geo, index) => {
    const count = geo.index.count;
    mergedGeometry.addGroup(offset, count, geo.userData.materialIndex);
    offset += count;
});

const planesMesh = new THREE.Mesh(mergedGeometry, cloudMaterials);
planesMesh.renderOrder = 0;

const planesMeshA = planesMesh.clone();
planesMeshA.position.z = -2000;
planesMeshA.renderOrder = 0;







//To animate cloud movement
const animateClouds = function () {
    const positions = mergedGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += 2; // Move along X-axis
        if (positions[i] > 10000) { // Reset position to create looping effect
            positions[i] = -10000;
        }
    }
    mergedGeometry.attributes.position.needsUpdate = true; // Mark the attribute for update
};

export { cloudMaterials, animateClouds, planesMesh, planesMeshA }




// let tLoader = new THREE.TextureLoader()
//
// function cloudLoader(textureLink) {
//     return new Promise((resolve, reject) => {
//         tLoader.load(
//             textureLink,
//             (t) => {
//                 t.colorSpace = THREE.SRGBColorSpace
//                 resolve(t);
//             }
//         );
//     });
// }

// export { cloudShader, cloudLoader }