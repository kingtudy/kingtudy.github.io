//Core
import * as THREE from 'three';
import $ from "jquery";
// import './mouse_magic.js';

//Project
import { camera } from './camera.js';
import { ambientLight, directionalLight } from './lighting.js';
import { scene } from './scene.js'
import { Scene } from './betterScene.js'
import { renderer } from './renderer.js';
import { sceneManipulator } from './orbit_controls.js';
import { objectManipulation } from './transform_controls.js';
import { objectLoader, objectInit } from './object_handler.js';

//The Creation
import { sky, sun } from './sky.js';
import { water } from './ocean.js';
import { smokeEngine } from './smoke.js';

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
    elevation: 15,
    azimuth: 222
};

function updateSun() {

    const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
    const theta = THREE.MathUtils.degToRad( parameters.azimuth );

    sun.setFromSphericalCoords( 1, phi, theta );

    sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
    water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

    if ( renderTarget !== undefined ) renderTarget.dispose();

    sceneEnv.add( sky );
    renderTarget = pmremGenerator.fromScene( sceneEnv );
    scene.add( sky );

    scene.environment = renderTarget.texture;

}

updateSun();

// sceneManipulator.enabled = false;


//Load Aurora
objectLoader('./assets/obj/aurora_crashed.fbx', ['./assets/img/textures/Tex_RGB_0.jpeg', './assets/img/textures/Tex_RGB_1.jpeg'], 0)
    .then((object) => {
        aurora = objectInit(object, "chair", 2, -1000, -54, -3622);
        aurora.rotation.x = 2.96;
        aurora.rotation.y = -1.04;
        aurora.rotation.z = 2.81;
        scene.add(aurora);
        // objectManipulation.setMode('rotate');
        // objectManipulation.attach(aurora);
    });

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

function animate() {

    //FPS stabilizer - 60
    const deltaTime = performance.now();

    //If not enough time has passed since the last render, skip this frame
    if (deltaTime < 1000 / 60) {
        requestAnimationFrame(animate);
        return;
    }

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
    particleScene.render();
    // sceneManipulator.update();

    var dt = clock.getDelta();
    // smokeEngine.update( dt * 0.5 );
}

//Goto the place where everything happens
animate();

console.log(THREE.REVISION);