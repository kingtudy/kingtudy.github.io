import { TransformControls } from "three/addons/controls/TransformControls.js";
import { camera } from "./camera.js";
import { renderer } from "./renderer.js";

const objectManipulation = new TransformControls( camera, renderer.domElement );

export { objectManipulation }