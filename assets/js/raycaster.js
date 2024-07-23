import * as THREE from "three";
import { camera } from "./camera.js";
import { scene } from "./scene.js";
import { sceneManipulator } from "./orbit_controls.js";
import { paralaxModifiers } from "./parallax.js";
import { initText } from "./me.js";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onObjMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //Raycast to detect objects under the mouse
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        intersects.forEach(intersect => {
            if(intersect.object.name === 'me') {
                paralaxModifiers.y = 700;
                paralaxModifiers.x = 700;

                camera.position.z = intersect.object.position.z + 100;
                camera.layers.enableAll();

                sceneManipulator.target.copy(intersect.object.position);
                sceneManipulator.update();

                $("#meTextbox").show();

                initText();

                window.removeEventListener('click', onObjMouseClick, false);
            }
        });
    }
}

window.onObjMouseClick = onObjMouseClick;
window.addEventListener('click', onObjMouseClick, false);