import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({
    antialias: !isMobile()
});

renderer.setSize(window.innerWidth, window.innerHeight);

$("#Container").append(renderer.domElement);

// Clear background - used to set the bg via html bg

if(isMobile()){
    renderer.setClearColor( 0xffffff, 0);
    renderer.shadowMap.type = THREE.BasicShadowMap;
    renderer.toneMappingExposure = 0.5;
} else {
    renderer.setClearColor( 0xffffff, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.setPixelRatio(window.devicePixelRatio);
}

export { renderer }