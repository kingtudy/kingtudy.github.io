//Core
import * as THREE from 'three';
// import './mouse_magic.js';

//Project
import { camera } from './camera.js';
import { ambientLight, directionalLight } from './lighting.js';
import { scene } from './scene.js'
import { renderer } from './renderer.js';
import { sceneManipulator } from './orbit_controls.js';
import { objectManipulation } from './transform_controls.js';

//The Creation
import { sky, sun } from './sky.js';
import { water } from './ocean.js';

const pointer = new THREE.Vector2();
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

scene.add(directionalLight);
scene.add(ambientLight);
scene.add( objectManipulation );
objectManipulation.addEventListener( 'change', animate );

scene.add( water );
scene.add( sky );

const pmremGenerator = new THREE.PMREMGenerator( renderer );
const sceneEnv = new THREE.Scene();

let renderTarget;

const parameters = {
    elevation: 2,
    azimuth: 180
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

sceneManipulator.enabled = false;

function animate() {

    //FPS stabilizer - 60
    const deltaTime = performance.now();

    //If not enough time has passed since the last render, skip this frame
    if (deltaTime < 1000 / 60) {
        requestAnimationFrame(animate);
        return;
    }

    requestAnimationFrame(animate);

    water.material.uniforms['time'].value += 1.0 / 60.0;

    renderer.render(scene, camera);
    // sceneManipulator.update();
}

//Goto the place where everything happens
animate();