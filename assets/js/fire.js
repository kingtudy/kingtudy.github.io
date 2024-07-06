import * as THREE from 'three';

const particleCount = 500;
const particles = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

const particleRadius = 1.5;
const particleHeight = 2;

for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const u = Math.random();
    const r = particleRadius * Math.sqrt(u);
    const x = r * Math.cos(angle);
    const y = Math.random() * particleHeight;
    const z = r * Math.sin(angle);

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;
}

particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: 0xff4500,
    size: 0.1,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
});

const particleSystem = new THREE.Points(particles, particleMaterial);

particleSystem.position.x = -30;
particleSystem.position.z = -3;
particleSystem.position.y = 14.9;

export { particleSystem, particles, particleRadius, particleHeight }