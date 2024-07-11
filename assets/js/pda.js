import * as THREE from "three";

function pdaLoader() {
    return new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
            './assets/img/pda.png',
            function(texture) {
                const geometry = new THREE.PlaneGeometry(1434, 1034);
                const material = new THREE.MeshStandardMaterial({
                    map: texture,
                    side: THREE.DoubleSide,
                    transparent: true,
                    castShadow: true,
                    receiveShadow: true
                });
                const plane = new THREE.Mesh(geometry, material);

                // Position the plane
                plane.position.set(0, 50, 0); // Adjust the position as needed
                const scalar = 0.04;
                plane.scale.set(scalar,scalar,1);
                // Add the plane to the scene
                resolve(plane);
            }
        );
    });
}

export { pdaLoader }


