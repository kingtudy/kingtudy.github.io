import * as THREE from 'three';
import { getRandomArbitrary } from './function.js';

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

function objectLoader(objPath, objTexture) {
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
                                    roughness: 1.0  // Low roughness for sharp reflections
                                });
                            } else {
                                child.material = new THREE.MeshStandardMaterial({
                                    map: textureArray[1]
                                });
                            }

                            child.castShadow = true;
                            child.receiveShadow = true;
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

//Aurora top light
const auroraLight = new THREE.PointLight(0xFF0000, 3000, 8000); // color, intensity, distance
auroraLight.position.set(18, 1845, -2630);

const auroraLightAnimation = function (t) {
    if((getRandomArbitrary(0, t) + getRandomArbitrary(0, t)) - getRandomArbitrary(0, t) < 0) {
        // console.log('changed');
        auroraLight.intensity = getRandomArbitrary(0, 100000);
        auroraLight.distance = getRandomArbitrary(5000, 10000);
    }
}


export { auroraLight, auroraLightAnimation, objectLoader, objectInit }