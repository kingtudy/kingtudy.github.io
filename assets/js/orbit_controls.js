import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { objectManipulation } from './transform_controls.js';

import { camera } from './camera.js';
import { renderer } from './renderer.js';

const sceneManipulator = new OrbitControls(camera, renderer.domElement);

sceneManipulator.control.enableDamping = true;
sceneManipulator.control.dampingFactor = 0.25;

sceneManipulator.control.target.set(0, 5, 0);
sceneManipulator.control.update();

// Disable OrbitControls while using TransformControls
objectManipulation.control.addEventListener( 'dragging-changed', function ( event ) {
    sceneManipulator.control.enabled = ! event.value;
} );

export { sceneManipulator };