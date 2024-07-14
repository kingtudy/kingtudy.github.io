import { scene } from './scene.js';
import { Water } from 'three/addons/objects/Water.js';
// import { Water2 } from 'three/addons/objects/Water2.js';
import * as THREE from 'three';

const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

let water = new Water(
    waterGeometry,
    {
        textureWidth: 1024,
        textureHeight: 1024,
        waterNormals: new THREE.TextureLoader().load( './assets/img/textures/water-normals.jpg', function ( texture ) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffff00,
        alpha: 1.0,
        // sunColor: 0xffffff,
        waterColor: 0x121A4A,
        flowDirection: new THREE.Vector2( 1, 1 ),
        // waterColor: 0x001e0f,
        distortionScale: 8,
        fog: scene.fog !== undefined
    }
);

water.rotation.x = - Math.PI / 2;

water.material.onBeforeCompile = (shader) => {


        shader.vertexShader = shader.vertexShader.replace(
            '#include <common>',
            `
            #include <common>

            `
        );

        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>
            transformed.z += sin(position.x * 0.1 + time) * 2.0;
            transformed.z += sin(position.y * 0.1 + time) * 2.0;
            `
        );

        water.material.userData.shader = shader;
};

export { water }