import * as THREE from 'three';

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
let tLoader = new THREE.TextureLoader()

function cloudLoader(textureLink) {
    return new Promise((resolve, reject) => {
        tLoader.load(
            textureLink,
            (t) => {
                t.colorSpace = THREE.SRGBColorSpace
                resolve(t);
            }
        );
    });
}

export { cloudShader, cloudLoader }