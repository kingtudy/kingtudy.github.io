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

function animate() {

    //FPS stabilizer - 60
    const deltaTime = performance.now();

    //If not enough time has passed since the last render, skip this frame
    if (deltaTime < 1000 / 60) {
        requestAnimationFrame(animate);
        return;
    }

    requestAnimationFrame(animate);
    sceneManipulator.update();

}

//Goto the place where everything happens
animate();