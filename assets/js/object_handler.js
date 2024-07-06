import * as THREE from 'three';

import { FBXLoader } from 'three/addons/loaders/fbxLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { scene } from './scene.js';

function objectLoader(objPath, objTexture, textureType) {
    return new Promise((resolve, reject) => {
        const fbxLoader = new FBXLoader();
        const mtlLoader = new MTLLoader();
        const textureLoader = new THREE.TextureLoader();

        let textureArray = [];
        objTexture.forEach((texturePath) => {
            // console.log(texturePath);
            textureArray.push(textureLoader.load(texturePath));
        });

        let i = 0;
        fbxLoader.load(
            objPath,
            (object) => {
                object.traverse((child) => {
                    if (child.isMesh) {
                        objTexture.forEach((textureUrl) => {
                            // console.log(child.material.type);
                            if(child.material.type === 'MeshStandardMaterial') {
                                child.material = new THREE.MeshStandardMaterial({
                                    map: textureArray[0],
                                    metalness: 1.0, // High metalness for reflective surfaces
                                    roughness: 0.1  // Low roughness for sharp reflections
                                });
                            } else {
                                child.material = new THREE.MeshStandardMaterial({
                                    map: textureArray[1],
                                    emissive: 0xffffff,      // Emissive color (glowing color)
                                    emissiveIntensity: 1     // Intensity of the emissive effect
                                });
                            }
                            child.material.needsUpdate = true;
                        });
                    }
                });
                resolve(object);
            },
            undefined,
            (error) => {
                reject('Error loading OBJ file: ' + error);
            }
        );

    });
}

function objectInit(obj, objName, dim, posX=0, posY=0, posZ=0) {
    obj.name = objName;
    obj.scale.set(
        dim,
        dim,
        dim
    );
    obj.position.set(posX, posY, posZ);

    return obj;
}

export { objectLoader, objectInit }