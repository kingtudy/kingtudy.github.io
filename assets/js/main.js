//Core
import * as THREE from 'three';
import './mouseMagic.js';

//Project
import { camera } from './camera.js';
import { ambientLight, directionalLight } from './lighting.js';
import { scene, fog } from './scene.js'
import { Scene } from './betterScene.js'
import { renderer } from './renderer.js';
import { sceneManipulator } from './orbit_controls.js';
import { objectManipulation } from './transform_controls.js';
import { objectLoader, objectInit } from './object_handler.js';
import { effect, paralaxModifiers } from "./parallax.js";
import "./raycaster.js";
import { initMeLight, flow, meLoader, mePosition } from "./me.js";

//The Creation
import { sky, sun, moon, updateMoonPosition, stars, planet, updatePlanetPosition } from './sky.js';
import { water } from './ocean.js';
import { cloudMaterials, animateClouds, planesMesh, planesMeshA } from './cumulonimbus.js';
// import { smokeEngine } from './smoke.js';
// import { pdaLoader } from './pda.js';
import './audio_handler.js';

//Vars
let aurora, particleScene;
const pointer = new THREE.Vector2();
const particleCount = 500;
let clock = new THREE.Clock();

function onWindowResize() {
    //Set aspect ratio
    const aspect = window.innerWidth / window.innerHeight;

    //Reset camera types
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    //Reset renderer
    renderer.setSize( window.innerWidth, window.innerHeight );

    //Reset Effect
    effect.setSize( window.innerWidth, window.innerHeight );
}

function onPointerMove( event ) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

document.addEventListener( 'mousemove', onPointerMove );
window.addEventListener( 'resize', onWindowResize );

// scene.add(directionalLight);
// scene.add(ambientLight);
scene.add( objectManipulation );
objectManipulation.addEventListener( 'change', animate );

scene.add( water );
scene.add( sky );
// const lightHelper = new THREE.CameraHelper( directionalLight.shadow.camera );
// scene.add( lightHelper );
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const pmremGenerator = new THREE.PMREMGenerator( renderer );
const sceneEnv = new THREE.Scene();

let renderTarget;

const parameters = {
    elevation: 46,
    azimuth: 40,
    elevationCenter: 0,    // y-coordinate of the center
    azimuthCenter: 181  // x-coordinate of the center
};

let xVariator, yVariator, t= 0, t2=0;

function updateSunPosition(t) {
    xVariator = parameters.azimuth * Math.cos(t) + parameters.azimuthCenter;
    yVariator = parameters.elevation * Math.sin(t) + parameters.elevationCenter;
}

function updateSun() {

    const phi = THREE.MathUtils.degToRad( 90 - yVariator );
    const theta = THREE.MathUtils.degToRad( xVariator );

    sun.setFromSphericalCoords( 1, phi, theta );

    sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
    water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();
    // water.material.uniforms[ 'fireDirection' ].value.copy( particleScene ).normalize();

    if(sun.y < 0){
        if(!scene.getObjectByName('stars')) {
            scene.add(stars);
            fog.value = new THREE.Fog( 0xffffff, 100000, 100000 );
            scene.fog = fog.value;
            cloudMaterials.forEach(material => {
                material.uniforms.fogNear.value = -100;
                material.uniforms.fogFar.value = 8000;
                material.uniforms.opacity.value = 0.2;
            });
        }
        // sun.intensity = 0;
        // renderer.toneMappingExposure = 0.3;
        // sky.material.uniforms[ 'turbidity' ].value = 0;
        // sky.material.uniforms[ 'rayleigh' ].value = 0.1;
        // sky.material.uniforms[ 'mieCoefficient' ].value = 0;
        // sky.material.uniforms[ 'mieDirectionalG' ].value = 0.99;
    } else {
        if(scene.getObjectByName('stars')) {
            scene.remove(stars);
            fog.value = new THREE.Fog( 0x757575, - 100, 5000 );
            scene.fog = fog.value;
            cloudMaterials.forEach(material => {
                material.uniforms.fogNear.value = 8000;
                material.uniforms.fogFar.value = 10000;
                material.uniforms.opacity.value = 0.5;
            });
        }
        // sun.intensity = 1;
        // renderer.toneMappingExposure = 1;
        // sky.material.uniforms[ 'turbidity' ].value = 10;
        // sky.material.uniforms[ 'rayleigh' ].value = 4;
        // sky.material.uniforms[ 'mieCoefficient' ].value = 0.013;
        // sky.material.uniforms[ 'mieDirectionalG' ].value = 0.68;
    }

    if ( renderTarget !== undefined ) renderTarget.dispose();

    sceneEnv.add( sky );
    renderTarget = pmremGenerator.fromScene( sceneEnv );
    if(sun.y > 0)
        scene.add( sky );
    scene.environment = renderTarget.texture;

}
updateSunPosition(0);
updateSun();

sceneManipulator.enabled = false;

//Load Aurora
objectLoader('./assets/obj/aurora_crashed.fbx', ['./assets/img/textures/Tex_RGB_0.jpeg', './assets/img/textures/Tex_RGB_1.jpeg'], 0).then((object) => {
    aurora = objectInit(object, "aurora", 2, -1000, -54, -3622);
    aurora.rotation.x = 2.96;
    aurora.rotation.y = -1.04;
    aurora.rotation.z = 2.81;
    scene.add(aurora);

    // sceneManipulator.target.y(aurora.position.y);
    // sceneManipulator.update();

    // objectManipulation.setMode('rotate');
    // objectManipulation.attach(aurora);
});

scene.add(moon);
scene.add(planet);

meLoader().then((me) => {
    const textElem = $('#meTextbox')[0];
    // console.log(textElem);
    let canvas = document.querySelector('canvas');
    let canvasWidthHalf = canvas.width / 2;
    let canvasHeightHalf = canvas.height / 2;
    me.name = 'me';
    scene.add(me);
    mePosition.setFromMatrixPosition(me.matrixWorld);
    mePosition.project(camera);
    mePosition.x = (mePosition.x * canvasWidthHalf) + canvasWidthHalf + 100;
    mePosition.y = - (mePosition.y * canvasHeightHalf) + canvasHeightHalf - 850;
    textElem.style.top = `${mePosition.y}px`;
    textElem.style.left = `${mePosition.x}px`;
});

initMeLight();

// pdaLoader().then((pda) => {
//     scene.add(pda);
// });

// let switcher = 1;

// window.addEventListener('keydown', function(event) {
//     if (event.key === 'r') {
//         if(switcher === 1) {
//             objectManipulation.setMode('translate');
//             switcher=0;
//         } else {
//             objectManipulation.setMode('rotate');
//             switcher=1;
//         }
//     }
// });



// renderer.domElement.addEventListener('mousedown', (event) => {
//     console.log(aurora.position);
//     console.log(aurora.rotation);
// });

particleScene = new Scene(scene, camera, renderer);
particleScene.build();


const tiltAngle = Math.PI / 6; // Tilt by 30 degrees
const rotationSpeed = 0.005; // Adjust the rotation speed as needed
const rotationSpeed2 = 0.002; // Adjust the rotation speed as needed

// Apply the tilt
moon.rotation.z = tiltAngle;
planet.rotation.z = tiltAngle;

let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) / 100;
    mouseY = ( event.clientY - windowHalfY ) / 100;

}

document.addEventListener( 'mousemove', onDocumentMouseMove );

let cameraPositionY = 1000;
let cameraPositionZ = 2000;


//Clouds
scene.add(planesMesh);
scene.add(planesMeshA);

function animate() {
    //FPS stabilizer - 60
    // const deltaTime = performance.now();
    //
    // //If not enough time has passed since the last render, skip this frame
    // if (deltaTime < 1000 / 60) {
    //     requestAnimationFrame(animate);
    //     return;
    // }

    requestAnimationFrame(animate);

    // const elapsedTime = performance.now() / 1000;
    // if (water.material.userData.shader) {
    //     water.material.userData.shader.uniforms.time.value = elapsedTime;
    // }

    water.material.uniforms['time'].value += 1.0 / 60.0;

    // water.rotation.x += 0.00;
    // water.rotation.y += 0.00;
    // water.rotation.z += 0.01;

    particleScene.update();
    renderer.render(scene, camera);

    // effect.render( scene, camera );

    camera.position.x += ( paralaxModifiers.x - mouseX - camera.position.x ) * .05;
    if(cameraPositionY > 50) {
        cameraPositionY = cameraPositionY - 6;
        camera.position.y = cameraPositionY;
    } else {
        camera.position.y += ( paralaxModifiers.y - mouseY - camera.position.y ) * .05;
    }

    if(cameraPositionZ > 100) {
        cameraPositionZ = cameraPositionZ - 11;
        camera.position.z = cameraPositionZ;
    }

    particleScene.render();

    sceneManipulator.update();

    // var dt = clock.getDelta();
    // smokeEngine.update( dt * 0.5 );
    t += 0.003;
    t2 += 0.003;
    updateSunPosition(t);
    updateSun();
    updateMoonPosition(t);
    updatePlanetPosition(t2);

    moon.rotation.y += rotationSpeed;
    planet.rotation.y += rotationSpeed2;
    // console.log(sunPos);

    //Animate lantern text
    if ( flow ) {
        flow.moveAlongCurve( 0.004 );
    }

    animateClouds();
}

// camera.position.x += ( paralaxModifiers.x - mouseX - camera.position.x ) * .05;
// camera.position.y += ( paralaxModifiers.y - mouseY - camera.position.y ) * .05;
// camera.updateProjectionMatrix();

//Goto the place where everything happens
$(window).on("load", function() {
    animate();
});


//Check THREE.js version
// console.log(THREE.REVISION);