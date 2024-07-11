import * as THREE from "three";

function meLoader() {
    return new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
            './assets/img/mefrfr.png',
            function(texture) {
                const geometry = new THREE.PlaneGeometry(80, 80);
                const material = new THREE.MeshBasicMaterial({
                    map: texture,
                    side: THREE.DoubleSide,
                    transparent: true,
                });
                const plane = new THREE.Mesh(geometry, material);

                // Position the plane
                plane.position.set(695, 705, -1405); // Adjust the position as needed

                // Add the plane to the scene
                resolve(plane);
            }
        );
    });
}

export { meLoader }


