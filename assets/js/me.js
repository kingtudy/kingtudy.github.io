import * as THREE from "three";
import { Flow } from 'three/addons/modifiers/CurveModifier.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import {paralaxModifiers} from './parallax.js';
import {camera} from './camera.js';
import {scene} from './scene.js';
import {sceneManipulator} from "./orbit_controls.js";

function meLoader() {
    return new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
            './assets/img/mefrfr.png',
            function (texture) {
                const geometry = new THREE.PlaneGeometry(80, 100, 10, 10);
                const material = new THREE.MeshStandardMaterial({
                    map: texture,
                    side: THREE.DoubleSide,
                    transparent: true,
                    castShadow: true,
                    receiveShadow: true
                });
                const plane = new THREE.Mesh(geometry, material);

                // Position the plane
                plane.position.set(695, 705, -1395); // Adjust the position as needed

                // Add the plane to the scene
                resolve(plane);
            }
        );
    });
}


// Stuff I have to say
let index = 0;
const mePrev = $("#mePrev");
const meNext = $("#meNext");
const meText = $("#meText");
const mePosition = new THREE.Vector3();
const meData = [
    "Oh umm.. hi ! So you found me.",
    "I'm the developer.",
    "How am I doing ? Thanks for asking, I'm just chilling here.",
    "I hope you find interesting what I've managed to build so far.",
    "If you need help with something, fell free to contact me",
    "Have a wonderful day !"
];
let forItShallOnlyHappenOnce = false;
let meLight;

//Lamp cool text cooking
const curveHandles = [];
const initialPoints = [
    { x: 700, y: 740, z: -1375 },
    { x: 695, y: 725, z: -1355 },
    { x: 675, y: 720, z: -1355 },
    { x: 680, y: 735, z: -1375 },
];

const boxGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );

let i = 0;
let pos = 0;
let color = [
    0xF25022,
    0x7FBA00,
    0x00A4EF,
    0xFFB900
]
for ( const handlePos of initialPoints ) {
    const boxMaterial = new THREE.MeshStandardMaterial({
        color: color[pos]
    });
    const handle = new THREE.Mesh( boxGeometry, boxMaterial );
    handle.position.copy( handlePos );
    handle.rotation.y = THREE.MathUtils.degToRad(i);
    curveHandles.push( handle );
    scene.add( handle );
    pos++;
}

const curve = new THREE.CatmullRomCurve3(
    curveHandles.map( ( handle ) => handle.position )
);
curve.curveType = 'centripetal';
curve.closed = true;

const points = curve.getPoints( 500 );
const line = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial( { color: 0x00ff00 } )
);

scene.add( line );

let flow;
const loader = new FontLoader();
loader.load( './assets/fonts/Aller_Regular.json', function ( font ) {

    const geometry = new TextGeometry('//obj.lamp', {
        font: font,
        size: 5,
        height: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.02,
        bevelSegments: 50
    });

    const textMaterial  = new THREE.MeshStandardMaterial({
        color: 0x166AAB,
        transparent: true,
        side: THREE.DoubleSide
    } ); // white color for the bevel

    const bevelMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFC029,
        transparent: true,
        side: THREE.DoubleSide
    } ); // white color for the bevel

    geometry.rotateX( Math.PI );

    const objectToCurve = new THREE.Mesh( geometry, [textMaterial, bevelMaterial] );

    const bevelFaceCount = geometry.parameters.options.bevelSegments * geometry.parameters.options.bevelSize * 2;
    geometry.groups.forEach(group => {
        if (group.materialIndex === 1) {
            group.materialIndex = 1; // Bevel
        } else {
            group.materialIndex = 0; // Main text
        }
    });

    objectToCurve.frustumCulled = false;

    flow = new Flow( objectToCurve );
    flow.updateCurve( 0, curve );
    scene.add( flow.object3D );
} );

function jumpToPage(pageNr) {
    index = pageNr;
    displayText();
}

function nextText() {
    index = (index + 1) % meData.length;
    displayText();
}

function prevText() {
    index = (index - 1 + meData.length) % meData.length;
    displayText();
}

function displayText() {
    meText.html(meData[index]);
    // console.log(meData.length - 1);
    if (index === meData.length - 1) {
        mePrev.hide();
        meNext.css('display', 'flex');
    } else if (index === 0) {
        mePrev.hide();
        meNext.css('display', 'flex');
    } else {
        mePrev.css('display', 'flex');
        meNext.css('display', 'flex');
    }
}

function initMeLight() {
    if (!scene.getObjectByName('meLamp')) {
        meLight = new THREE.PointLight(0xffffff, 1000, 1500); // color, intensity, distance
        meLight.name = 'meLamp';
        meLight.position.set(685, 730, -1365);
        scene.add(meLight);
        const pointLightHelper = new THREE.PointLightHelper(meLight, 3);
        scene.add(pointLightHelper);
    }
}

function initText() {
    if(forItShallOnlyHappenOnce === false) {
        $('#goBackToWhereIWas').on('click', () => {
            paralaxModifiers.y = 40;
            paralaxModifiers.x = 0;

            camera.position.set(0, 50, 100);
            // camera.updateProjectionMatrix();

            sceneManipulator.target.set(0, 50, 0);
            sceneManipulator.update();

            $("#meTextbox").hide();

            window.addEventListener('click', onObjMouseClick, false);
        });

        meNext.on('click', () => {
            nextText();
        });
        mePrev.on('click', () => {
            prevText();
        });

        window.jumpToPage = jumpToPage;

        forItShallOnlyHappenOnce = true;
    }

    jumpToPage(0);
}

export {meLoader, mePosition, meText, initText, initMeLight, flow}


