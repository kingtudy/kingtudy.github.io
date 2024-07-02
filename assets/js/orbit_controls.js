import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { objectManipulation } from './transform_controls.js';

import { camera } from './camera.js';
import { renderer } from './renderer.js';

const sceneManipulator = new OrbitControls(camera, renderer.domElement);

sceneManipulator.enableDamping = true;
sceneManipulator.dampingFactor = 0.25;

sceneManipulator.target.set(0, 5, 0);
sceneManipulator.update();

// Disable OrbitControls while using TransformControls
objectManipulation.addEventListener( 'dragging-changed', function ( event ) {
    sceneManipulator.enabled = ! event.value;
} );

export { sceneManipulator };