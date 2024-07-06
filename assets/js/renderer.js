import * as THREE from "three";
import $ from "jquery";

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

$("#Container").append(renderer.domElement);

// Clear background - used to set the bg via html bg
renderer.setClearColor( 0xffffff, 0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
// renderer.shadowMap.type = THREE.BasicShadowMap;

export { renderer }