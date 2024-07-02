import * as THREE from "three";
import { scene } from "./scene.js";

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);

directionalLight.position.set(-15, 30, -15);
directionalLight.castShadow = true;

// remove the comment to reduce the texture on the mats(the texture is due to a shadow calculation bug)
// directionalLight.shadow.bias = -0.001;
directionalLight.shadow.mapSize.width = 5012;
directionalLight.shadow.mapSize.height = 5012;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -100;
directionalLight.shadow.camera.right = 100;
directionalLight.shadow.camera.top = 100;
directionalLight.shadow.camera.bottom = -100;

export { ambientLight, directionalLight};
