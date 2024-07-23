import * as THREE from 'three';
import * as BufferGeometryUtils from 'addons/utils/BufferGeometryUtils.js';

//Le custom cloud shader
const cloudShader = {
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
    fragmentShader: `
        uniform sampler2D map;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;

        void main() {
    
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep( fogNear, fogFar, depth );
        
        gl_FragColor = texture2D( map, vUv );
        gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
        gl_FragColor = mix( gl_FragColor, vec4( fogColor , gl_FragColor.w ), fogFactor );
    
        }
    `
}

//Prepping the cloud formation
let mesh, geometry, material;
let position;

var mouseX = 0, mouseY = 0;
var start_time = Date.now();

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var tLoader = new THREE.TextureLoader()

tLoader.load('https://mrdoob.com/lab/javascript/webgl/clouds/cloud10.png', (t) => {
    t.colorSpace = THREE.SRGBColorSpace
    init(t)
})


function init(t) {

    var canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = window.innerHeight;

    var context = canvas.getContext('2d');

    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#1e4877");
    gradient.addColorStop(0.5, "#4584b4");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
    container.style.backgroundSize = '32px 100%';

    geometry = new THREE.BufferGeometry();

    var texture = t
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;


    material = new THREE.ShaderMaterial({

        uniforms: {

            "map": {type: "t", value: texture},
            "fogColor": {type: "c", value: fog.color},
            "fogNear": {type: "f", value: fog.near},
            "fogFar": {type: "f", value: fog.far},

        },
        vertexShader: cloudShader.vertexShader,
        fragmentShader: cloudShader.fragmentShader,
        depthWrite: false,
        depthTest: false,
        transparent: true,
    });

    const planeGeo = new THREE.PlaneGeometry(64, 64)
    var planeObj = new THREE.Object3D()
    const geometries = []

    for (var i = 0; i < 8000; i++) {

        planeObj.position.x = Math.random() * 1000 - 500;
        planeObj.position.y = -Math.random() * Math.random() * 200 - 15;
        planeObj.position.z = i;
        planeObj.rotation.z = Math.random() * Math.PI;
        planeObj.scale.x = planeObj.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
        planeObj.updateMatrix();

        const clonedPlaneGeo = planeGeo.clone();
        clonedPlaneGeo.applyMatrix4(planeObj.matrix);

        geometries.push(clonedPlaneGeo)

    }

    const planeGeos = BufferGeometryUtils.mergeBufferGeometries(geometries)
    const planesMesh = new THREE.Mesh(planeGeos, material)
    planesMesh.renderOrder = 2

    const planesMeshA = planesMesh.clone();
    planesMeshA.position.z = -8000;
    planesMeshA.renderOrder = 1

    scene.add(planesMesh);
    scene.add(planesMeshA);

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
}