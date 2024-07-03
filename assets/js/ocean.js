import { scene } from './scene.js';
import { Water } from 'three/addons/objects/Water.js';
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
        sunColor: 0xffffff,
        waterColor: 0x121A4A,
    flowDirection: new THREE.Vector2( 1, 1 ),
        // waterColor: 0x001e0f,
        distortionScale: 8,
        fog: scene.fog !== undefined
    }
);

water.rotation.x = - Math.PI / 2;

export { water }