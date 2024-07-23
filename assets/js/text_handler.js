import { Flow } from 'three/addons/modifiers/CurveModifier.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const ACTION_SELECT = 1, ACTION_NONE = 0;
const curveHandles = [];

let action = ACTION_NONE;

const initialPoints = [
    { x: 10, y: 10, z: - 10 },
    { x: 10, y: 10, z: 10 },
    { x: - 10, y: 10, z: 10 },
    { x: - 10, y: 10, z: - 10 },
];

for ( const handlePos of initialPoints ) {

    const handle = new THREE.Mesh( boxGeometry, boxMaterial );
    handle.position.copy( handlePos );
    curveHandles.push( handle );
    scene.add( handle );

}

const curve = new THREE.CatmullRomCurve3(
    curveHandles.map( ( handle ) => handle.position )
);
curve.curveType = 'centripetal';
curve.closed = true;

const points = curve.getPoints( 50 );
const line = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints( points ),
    new THREE.LineBasicMaterial( { color: 0x00ff00 } )
);

scene.add( line );

const loader = new FontLoader();
loader.load( './assets/fonts/days_one_regular.json', function ( font ) {

    const geometry = new TextGeometry( 'Welcome to my portfolio!', {
        font: font,
        size: 0.2,
        depth: 0.05,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 5,
    } );

    geometry.rotateX( Math.PI );

    const material = new THREE.MeshStandardMaterial( {
        color: 0x99ffff
    } );

    const objectToCurve = new THREE.Mesh( geometry, material );

    flow = new Flow( objectToCurve );
    flow.updateCurve( 0, curve );
    scene.add( flow.object3D );

} );