import * as Photons from '../lib/photons.module.js';
import { FogMaterial } from '../lib/FogMaterial.js';
import { GLTFLoader } from '../lib/GltfLoader.js';
import { LoadingSpinner } from '../lib/LoadingSpinner.js';
import * as THREE from 'three';

export class Scene {

    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.particleSystems = [];
        this.manager = new Photons.Manager();
        this.jsonTypeStore = new Photons.JSONTypeStore();
        this.jsonTypeStore.addNamespace('THREE', THREE);
        this.jsonTypeStore.addNamespace('Photons', Photons);
        this.instancedParticleSystems = true;
    }

    build() {
        const loadingSpinner = new LoadingSpinner();
        loadingSpinner.show();
        this.setupSceneComponents().then(() => {
            loadingSpinner.hide();
            this.setupParticleSystems();
        });
    }

    update() {
        this.manager.update();
    }

    render() {
        this.manager.render(this.renderer, this.camera);
    }

    static traverseScene(node, onVisit, visited) {
        visited = visited || {};
        if (!visited[node.uuid]) {
            visited[node.uuid] = true;
            onVisit(node);
            if (node.children) {
                for (let child of node.children) {
                    Scene.traverseScene(child, onVisit, visited);
                }
            }
        }
    }

    setupParticleSystems() {
        let scale = 135;
        let flamePosition = new THREE.Vector3(130, 580, -1582);
        let smokeScale = 500;
        let smokePosition = new THREE.Vector3(130, 680, -1582);
        this.manager.addParticleSystem(this.setupBaseSmoke(smokeScale, smokePosition));
        // this.manager.addParticleSystem(this.setupSmoke(smokeScale, flamePosition));
        this.manager.addParticleSystem(this.setupEmbers(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBaseFlame(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBrightFLame(scale, flamePosition));

        scale = 80;
        flamePosition = new THREE.Vector3(-150, 50, -1800);
        smokeScale = 320;
        smokePosition = new THREE.Vector3(-150, 60, -1800);
        this.manager.addParticleSystem(this.setupBaseSmoke(smokeScale, smokePosition));
        this.manager.addParticleSystem(this.setupEmbers(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBaseFlame(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBrightFLame(scale, flamePosition));

        scale = 50;
        flamePosition = new THREE.Vector3(-460, 1100, -2975);
        smokeScale = 120;
        smokePosition = new THREE.Vector3(-460, 1150, -2975);
        this.manager.addParticleSystem(this.setupBaseSmoke(smokeScale, smokePosition));
        this.manager.addParticleSystem(this.setupEmbers(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBaseFlame(scale, flamePosition));
        this.manager.addParticleSystem(this.setupBrightFLame(scale, flamePosition));
    }

    setupBaseSmoke(scale,position) {
        const baseSmokeRoot = new THREE.Object3D();
        baseSmokeRoot.position.copy(position);

        const texturePath = './assets/img/textures/base_smoke.png';
        const baseSmokeTexture = new THREE.TextureLoader().load(texturePath);
        const baseSmokeAtlas = new Photons.Atlas(baseSmokeTexture, texturePath);
        baseSmokeAtlas.addFrameSet(16, 0.0, 0.0, 0.166, 0.2);
        const baseSmokeRenderer = new Photons.AnimatedSpriteRenderer(this.instancedParticleSystems, baseSmokeAtlas, true);

        const baseSmokeParticleSystem = new Photons.ParticleSystem(baseSmokeRoot, baseSmokeRenderer, this.renderer);
        baseSmokeParticleSystem.init(500);

        baseSmokeParticleSystem.setEmitter(new Photons.ConstantParticleEmitter(60));

        baseSmokeParticleSystem.addParticleSequence(0, 35); //was 16
        const baseSmokeParticleSequences = baseSmokeParticleSystem.getParticleSequences();

        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.LifetimeInitializer(10.0, 0.0, 0.0, 0.0, false));
        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.RotationInitializer(new Photons.RandomGenerator(0, Math.PI / 2.0, -Math.PI / 2.0, 0.0, 0.0, false)));
        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.RotationalSpeedInitializer(0.5, -0.5, 0.0, 0.0, false));

        baseSmokeParticleSystem.addParticleStateInitializer(
            new Photons.SizeInitializer(
                new Photons.RandomGenerator(THREE.Vector2,
                    new THREE.Vector2(0.0, 0.0),
                    new THREE.Vector2(0.15 * scale, 0.15 * scale),
                    0.0, 0.0, false)
            )
        );

        // baseSmokeParticleSystem.addParticleStateInitializer(
        //     new Photons.SizeInitializer(
        //         new Photons.RandomGenerator(
        //             THREE.Vector2,
        //         new THREE.Vector2(0.25 * scale, 0.25 * scale),
        //         new THREE.Vector2(0.5 * scale, 0.5 * scale),
        //         0.0, 0.0, false
        //         )
        //     )
        // );

        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.BoxPositionInitializer(
            new THREE.Vector3(0.05 * scale, 0.0, 0.05 * scale),
            new THREE.Vector3(-0.025 * scale, 0.0, -0.025 * scale)));


        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
            new THREE.Vector3(-110.4, -110.5, -110.4),
            new THREE.Vector3(-100.2, -100.8, -100.2),
            -100, -100.8));


        // baseSmokeParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
        //     new THREE.Vector3(0.05 * scale, 0.5 * scale, 0.4 * scale),
        //     new THREE.Vector3(-0.2 * scale, 0.8 * scale, -0.2 * scale),
        //     0.35 * scale, 0.5 * scale, false));





        baseSmokeParticleSystem.addParticleStateInitializer(new Photons.SequenceInitializer(baseSmokeParticleSequences));

        baseSmokeParticleSystem.addParticleStateOperator(new Photons.SequenceOperator(baseSmokeParticleSequences, 0.02, false));

        const baseSmokeOpacityOperator = baseSmokeParticleSystem.addParticleStateOperator(new Photons.OpacityInterpolatorOperator());
        baseSmokeOpacityOperator.addElements([
            [0.0, 0.0],
            [0.3, 0.25],
            [0.3, 0.5],
            [0.0, 1.0]
        ]);

        const baseSmokeSizeOperator = baseSmokeParticleSystem.addParticleStateOperator(new Photons.SizeInterpolatorOperator(true));
        baseSmokeSizeOperator.addElementsFromParameters([
            [[0.6, 0.6], 0.0],
            [[1.0, 1.0], 0.4],
            [[1.0, 1.0], 1.0]
        ]);

        const baseSmokeColorOperator = baseSmokeParticleSystem.addParticleStateOperator(new Photons.ColorInterpolatorOperator(true));
        baseSmokeColorOperator.addElementsFromParameters([
            [[0.0, 0.0, 0.0], 0.0],
            [[0.0, 0.0, 0.0], 0.5],
            [[0.0, 0.0, 0.0], 1.0]
        ]);




        baseSmokeParticleSystem.addParticleStateOperator(
            new Photons.AccelerationOperator(
                new Photons.SphereRandomGenerator(
                    Math.PI * 2.0, 0.0, Math.PI,
                    -Math.PI / 2, 20.0, -8,
                    1.0, 1.0, 1.0,
                    5.0 * scale, 1.5 * scale, 5.0 * scale),
            )
        );

        // baseSmokeParticleSystem.addParticleStateOperator(
        //     new Photons.AccelerationOperator(
        //         new Photons.RandomGenerator(
        //             THREE.Vector3,
        //         new THREE.Vector3(0.0, 0.0, 0.0),
        //         new THREE.Vector3(5.0 * scale, 1.5 * scale, 5.0 * scale),
        //         0.0, 0.0, false
        //         )
        //     )
        // );









        baseSmokeParticleSystem.setSimulateInWorldSpace(true);
        baseSmokeParticleSystem.start();

        return baseSmokeParticleSystem;
    }

    // setupSmoke(scale,position) {
    //     const smokeRoot = new THREE.Object3D();
    //     smokeRoot.position.copy(position);
    //
    //     const texturePath = './assets/img/textures/smoke.png';
    //     const smokeTexture = new THREE.TextureLoader().load(texturePath);
    //     const smokeAtlas = new Photons.Atlas(smokeTexture, texturePath);
    //     smokeAtlas.addFrameSet(18, 0.0, 0.0, 1.0, 1.0);
    //     const smokeRenderer = new Photons.AnimatedSpriteRenderer(this.instancedParticleSystems, smokeAtlas, true, THREE.AdditiveBlending);
    //
    //     const smokeParticleSystem = new Photons.ParticleSystem(smokeRoot, smokeRenderer, this.renderer);
    //     smokeParticleSystem.init(5000);
    //
    //     smokeParticleSystem.setEmitter(new Photons.ConstantParticleEmitter(60));
    //
    //     const sizeInitializerGenerator = new Photons.RandomGenerator(THREE.Vector2,
    //         new THREE.Vector2(0.0, 0.0),
    //         new THREE.Vector2(scale * 0.15, scale * 0.15),
    //         0.0, 0.0, false);
    //     smokeParticleSystem.addParticleStateInitializer(new Photons.LifetimeInitializer(10.0, 1.0, 0.0, 0.0, false));
    //     smokeParticleSystem.addParticleStateInitializer(new Photons.SizeInitializer(sizeInitializerGenerator));
    //     smokeParticleSystem.addParticleStateInitializer(new Photons.BoxPositionInitializer(
    //         new THREE.Vector3(0.05 * scale, 0.0, 0.05 * scale),
    //         new THREE.Vector3(-0.025 * scale, 0.0, -0.025 * scale)));
    //     smokeParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
    //         new THREE.Vector3(0.4 * scale, 0.5 * scale, 0.4 * scale),
    //         new THREE.Vector3(-0.2 * scale, 0.8 * scale, -0.2 * scale),
    //         3.6 * scale, 0.8 * scale, false));
    //
    //     const smokeOpacityOperator = smokeParticleSystem.addParticleStateOperator(new Photons.OpacityInterpolatorOperator());
    //     smokeOpacityOperator.addElements([
    //         [0.0, 0.0],
    //         [0.7, 0.25],
    //         [0.9, 0.75],
    //         [0.0, 1.0]
    //     ]);
    //
    //     const smokeColorOperator = smokeParticleSystem.addParticleStateOperator(new Photons.ColorInterpolatorOperator(true));
    //     smokeColorOperator.addElementsFromParameters([
    //         [[0.0, 0.0, 0.0], 0.0],
    //         [[0.0, 0.0, 0.0], 0.5],
    //         [[0.0, 0.0, 0.0], 1.0]
    //     ]);
    //
    //     const acceleratorOperatorGenerator = new Photons.SphereRandomGenerator(Math.PI * 2.0, 0.0, Math.PI,
    //         -Math.PI / 2, 20.0, -8,
    //         scale, scale, scale,
    //         0.0, 0.0, 0.0);
    //
    //     smokeParticleSystem.addParticleStateOperator(new Photons.AccelerationOperator(acceleratorOperatorGenerator));
    //
    //     smokeParticleSystem.setSimulateInWorldSpace(true);
    //     smokeParticleSystem.start();
    //
    //     return smokeParticleSystem;
    // }

    setupEmbers(scale, position) {
        const embersRoot = new THREE.Object3D();
        embersRoot.position.copy(position);

        const texturePath = './assets/img/textures/ember.png';
        const embersTexture = new THREE.TextureLoader().load(texturePath);
        const embersAtlas = new Photons.Atlas(embersTexture, texturePath);
        embersAtlas.addFrameSet(1, 0.0, 0.0, 1.0, 1.0);
        const embersRenderer = new Photons.AnimatedSpriteRenderer(this.instancedParticleSystems, embersAtlas, true, THREE.AdditiveBlending);

        const embersParticleSystem = new Photons.ParticleSystem(embersRoot, embersRenderer, this.renderer);
        embersParticleSystem.init(150);

        embersParticleSystem.setEmitter(new Photons.ConstantParticleEmitter(20));

        const sizeInitializerGenerator = new Photons.RandomGenerator(THREE.Vector2,
            new THREE.Vector2(0.0, 0.0),
            new THREE.Vector2(scale * 0.15, scale * 0.15),
            0.0, 0.0, false);
        embersParticleSystem.addParticleStateInitializer(new Photons.LifetimeInitializer(3.0, 1.0, 0.0, 0.0, false));
        embersParticleSystem.addParticleStateInitializer(new Photons.SizeInitializer(sizeInitializerGenerator));
        embersParticleSystem.addParticleStateInitializer(new Photons.BoxPositionInitializer(
            new THREE.Vector3(0.05 * scale, 0.0, 0.05 * scale),
            new THREE.Vector3(-0.025 * scale, 0.0, -0.025 * scale)));
        embersParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
            new THREE.Vector3(0.4 * scale, 0.5 * scale, 0.4 * scale),
            new THREE.Vector3(-0.2 * scale, 0.8 * scale, -0.2 * scale),
            0.6 * scale, 0.8 * scale, false));

        const embersOpacityOperator = embersParticleSystem.addParticleStateOperator(new Photons.OpacityInterpolatorOperator());
        embersOpacityOperator.addElements([
            [0.0, 0.0],
            [0.7, 0.25],
            [0.9, 0.75],
            [0.0, 1.0]
        ]);

        const embersColorOperator = embersParticleSystem.addParticleStateOperator(new Photons.ColorInterpolatorOperator(true));
        embersColorOperator.addElementsFromParameters([
            [[1.0, 0.7, 0.0], 0.0],
            [[1.0, 0.6, 0.0], 0.5],
            [[1.0, 0.4, 0.0], 1.0]
        ]);

        const acceleratorOperatorGenerator = new Photons.SphereRandomGenerator(Math.PI * 2.0, 0.0, Math.PI,
            -Math.PI / 2, 20.0, -8,
            scale, scale, scale,
            0.0, 0.0, 0.0);

        embersParticleSystem.addParticleStateOperator(new Photons.AccelerationOperator(acceleratorOperatorGenerator));

        embersParticleSystem.setSimulateInWorldSpace(true);
        embersParticleSystem.start();

        return embersParticleSystem;
    }

    setupBaseFlame(scale, position) {
        const baseFlameRoot = new THREE.Object3D();
        baseFlameRoot.position.copy(position);

        const texturePath = './assets/img/textures/base_flame.png';
        const baseFlameTexture = new THREE.TextureLoader().load(texturePath);
        const baseFlameAtlas = new Photons.Atlas(baseFlameTexture, texturePath);
        baseFlameAtlas.addFrameSet(18, 0.0, 0.0, 128.0 / 1024.0, 128.0 / 512.0);
        const baseFlameRenderer = new Photons.AnimatedSpriteRenderer(this.instancedParticleSystems, baseFlameAtlas, true);

        const baseFlameParticleSystem = new Photons.ParticleSystem(baseFlameRoot, baseFlameRenderer, this.renderer);
        baseFlameParticleSystem.init(50);

        baseFlameParticleSystem.setEmitter(new Photons.ConstantParticleEmitter(10));

        baseFlameParticleSystem.addParticleSequence(0, 18);
        const baseFlameParticleSequences = baseFlameParticleSystem.getParticleSequences();

        baseFlameParticleSystem.addParticleStateInitializer(new Photons.LifetimeInitializer(0.0, 0.0, 0.0, 0.0, false));
        baseFlameParticleSystem.addParticleStateInitializer(new Photons.RotationInitializer(new Photons.RandomGenerator(0, Math.PI / 2.0, -Math.PI / 2.0, 0.0, 0.0, false)));
        baseFlameParticleSystem.addParticleStateInitializer(new Photons.RotationalSpeedInitializer(1.0, -1.0, 0.0, 0.0, false));
        baseFlameParticleSystem.addParticleStateInitializer(new Photons.SizeInitializer(
            new Photons.RandomGenerator(THREE.Vector2,
                new THREE.Vector2(0.25 * scale, 0.25 * scale),
                new THREE.Vector2(0.5 * scale, 0.5 * scale),
                0.0, 0.0, false)));

        baseFlameParticleSystem.addParticleStateInitializer(new Photons.BoxPositionInitializer(
            new THREE.Vector3(0.05 * scale, 0.0, 0.05 * scale),
            new THREE.Vector3(-0.025 * scale, 0.0, -0.025 * scale)));
        baseFlameParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
            new THREE.Vector3(0.05 * scale, 0.4 * scale, 0.05 * scale),
            new THREE.Vector3(-0.025 * scale, 0.8 * scale, -0.025 * scale),
            0.35 * scale, 0.5 * scale, false));
        baseFlameParticleSystem.addParticleStateInitializer(new Photons.SequenceInitializer(baseFlameParticleSequences));

        baseFlameParticleSystem.addParticleStateOperator(new Photons.SequenceOperator(baseFlameParticleSequences, 0.07, false));

        const baseFlameOpacityOperator = baseFlameParticleSystem.addParticleStateOperator(new Photons.OpacityInterpolatorOperator());
        baseFlameOpacityOperator.addElements([
            [0.0, 0.0],
            [0.3, 0.25],
            [0.3, 0.5],
            [0.0, 1.0]
        ]);

        const baseFlameSizeOperator = baseFlameParticleSystem.addParticleStateOperator(new Photons.SizeInterpolatorOperator(true));
        baseFlameSizeOperator.addElementsFromParameters([
            [[0.6, 0.6], 0.0],
            [[1.0, 1.0], 0.4],
            [[1.0, 1.0], 1.0]
        ]);

        const baseFlameColorOperator = baseFlameParticleSystem.addParticleStateOperator(new Photons.ColorInterpolatorOperator(true));
        baseFlameColorOperator.addElementsFromParameters([
            [[1.0, 1.0, 1.0], 0.0],
            [[1.5, 1.5, 1.5], 0.5],
            [[1.0, 1.0, 1.0], 1.0]
        ]);

        baseFlameParticleSystem.addParticleStateOperator(new Photons.AccelerationOperator(
            new Photons.RandomGenerator(THREE.Vector3, new THREE.Vector3(0.0, 0.0, 0.0),
                new THREE.Vector3(0.0, 1.5 * scale, 0.0),
                0.0, 0.0, false)));

        baseFlameParticleSystem.setSimulateInWorldSpace(true);
        baseFlameParticleSystem.start();

        return baseFlameParticleSystem;
    }

    setupBrightFLame(scale, position) {
        const brightFlameRoot = new THREE.Object3D();
        brightFlameRoot.position.copy(position);

        const texturePath = './assets/img/textures/bright_flame.png';
        const brightFlameTexture = new THREE.TextureLoader().load(texturePath);
        const brightFlameAtlas = new Photons.Atlas(brightFlameTexture, texturePath);
        brightFlameAtlas.addFrameSet(16, 0.0, 0.0, 212.0 / 1024.0, 256.0 / 1024.0);
        const brightFlameRenderer = new Photons.AnimatedSpriteRenderer(this.instancedParticleSystems, brightFlameAtlas, true);

        const brightFlameParticleSystem = new Photons.ParticleSystem(brightFlameRoot, brightFlameRenderer, this.renderer);
        brightFlameParticleSystem.init(20);

        brightFlameParticleSystem.setEmitter(new Photons.ConstantParticleEmitter(5));

        brightFlameParticleSystem.addParticleSequence(0, 16);
        const brightFlameParticleSequences = brightFlameParticleSystem.getParticleSequences();

        brightFlameParticleSystem.addParticleStateInitializer(new Photons.LifetimeInitializer(0.0, 0.0, 0.0, 0.0, false));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.RotationInitializer(new Photons.RandomGenerator(0, Math.PI, -Math.PI / 2.0, 0.0, 0.0, false)));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.RotationalSpeedInitializer(Math.PI / 2.0, -Math.PI / 4.0, 0.0, 0.0, false));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.SizeInitializer(
            new Photons.RandomGenerator(THREE.Vector2,
                new THREE.Vector2(0.0, 0.0),
                new THREE.Vector2(0.0, 0.0),
                0.2 * scale, 0.65 * scale, false)));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.BoxPositionInitializer(
            new THREE.Vector3(0.1 * scale, 0.0, 0.1 * scale),
            new THREE.Vector3(-0.05 * scale, 0.0, -0.05 * scale)));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.RandomVelocityInitializer(
            new THREE.Vector3(0.02 * scale, 0.4 * scale, 0.02 * scale),
            new THREE.Vector3(-0.01 * scale, 0.4 * scale, -0.01 * scale),
            0.1 * scale, .2 * scale, false));
        brightFlameParticleSystem.addParticleStateInitializer(new Photons.SequenceInitializer(brightFlameParticleSequences));

        brightFlameParticleSystem.addParticleStateOperator(new Photons.SequenceOperator(brightFlameParticleSequences, 0.1, false));

        const brightFlameOpacityOperator = brightFlameParticleSystem.addParticleStateOperator(new Photons.OpacityInterpolatorOperator());
        brightFlameOpacityOperator.addElements([
            [0.0, 0.0],
            [0.6, 0.2],
            [0.5, 0.75],
            [0.0, 1.0]
        ]);

        const brightFlameSizeOperator = brightFlameParticleSystem.addParticleStateOperator(new Photons.SizeInterpolatorOperator(true));
        brightFlameSizeOperator.addElementsFromParameters([
            [[0.3, 0.3], 0.0],
            [[1.0, 1.0], 0.4],
            [[1.0, 1.0], 0.55],
            [[0.65, 0.65], 0.75],
            [[0.1, 0.1], 1.0]
        ]);

        const brightFlameColorOperator = brightFlameParticleSystem.addParticleStateOperator(new Photons.ColorInterpolatorOperator(true));
        brightFlameColorOperator.addElementsFromParameters([
            [[1.0, 1.0, 1.0], 0.0],
            [[2.0, 2.0, 2.0], 0.3],
            [[2.0, 2.0, 2.0], 0.4],
            [[0.9, 0.6, 0.3], 0.65],
            [[0.75, 0.0, 0.0], 1.0]
        ]);

        brightFlameParticleSystem.addParticleStateOperator(new Photons.AccelerationOperator(
            new Photons.RandomGenerator(THREE.Vector3,
                new THREE.Vector3(0.0, 0.0, 0.0),
                new THREE.Vector3(0.0, 1.5 * scale, 0.0),
                0.0, 0.0, false)));

        brightFlameParticleSystem.setSimulateInWorldSpace(true);

        brightFlameParticleSystem.start();
        return brightFlameParticleSystem;
    }

    setupSceneComponents() {
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
        // this.scene.add(directionalLight);
        // directionalLight.position.set(130, 780, -1382);
        // directionalLight.target(new THREE.Vector3(130, 580, -1582));
        //
        //
        // const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
        // this.scene.add( helper );

        return Promise.all([])
            .then(([]) => {
                const fogParent = new THREE.Object3D();
                // const fogGeometry = new THREE.PlaneGeometry(50, 50);
                const fogGeometry = new THREE.CylinderGeometry( 100, 100, 100, 64 );
                fogGeometry.openEnded = true;
                const fogMaterial = new FogMaterial();
                fogMaterial.transparent = true;
                fogMaterial.depthWrite = false;
                const fogPlane = new THREE.Mesh(fogGeometry, fogMaterial);
                // fogPlane.scale.set(32, 32, 0);
                // fogPlane.rotateX(-Math.PI / 2);
                fogParent.add(fogPlane);
                fogParent.position.y += 1.0;
                // this.scene.add(fogParent);

                //FIRE
                const lightParent = new THREE.Object3D();
                this.scene.add(lightParent);
                lightParent.position.set(0,0,0);
                lightParent.position.add(new THREE.Vector3(130, 580, -1582));

                const lightParent2 = new THREE.Object3D();
                this.scene.add(lightParent2);
                lightParent2.position.set(0,0,0);
                lightParent2.position.add(new THREE.Vector3(-150, 50, -1800));

                const lightParent3 = new THREE.Object3D();
                this.scene.add(lightParent3);
                lightParent3.position.set(0,0,0);
                lightParent3.position.add(new THREE.Vector3(-460, 1100, -2975));

                const flickerLightShadows = {
                    'mapSize': 1024,
                    'cameraNear': 0.5,
                    'cameraFar': 500,
                    'bias': .000009,
                    'edgeRadius': 3
                };

                this.manager.addComponent(new Photons.FlickerLight(lightParent, 500, 3, new THREE.Color().setRGB(1, .8, .4), 0, 1.0, flickerLightShadows));
                this.manager.addComponent(new Photons.FlickerLight(lightParent2, 100, 10, new THREE.Color().setRGB(1, .8, .4), 0, 1.0, flickerLightShadows));
                this.manager.addComponent(new Photons.FlickerLight(lightParent3, 200, 5, new THREE.Color().setRGB(1, .8, .4), 0, 1.0, flickerLightShadows));

                const lightParent4 = new THREE.Object3D();
                this.scene.add(lightParent4);
                lightParent4.position.set(0,0,0);
                lightParent4.position.add(new THREE.Vector3(-300, 250, -1850));

                const lightParent5 = new THREE.Object3D();
                this.scene.add(lightParent5);
                lightParent5.position.set(0,0,0);
                lightParent5.position.add(new THREE.Vector3(-1380, 120, -2200));

                const flickerLightShadows2 = {
                    'mapSize': 1024,
                    'cameraNear': 0.5,
                    'cameraFar': 500,
                    'bias': .000009,
                    'edgeRadius': 10
                };

                const flickerLightShadows3 = {
                    'mapSize': 1024,
                    'cameraNear': 0.5,
                    'cameraFar': 500,
                    'bias': .000009,
                    'edgeRadius': 3
                };

                this.manager.addComponent(new Photons.FlickerLight(lightParent4, 200, 5, new THREE.Color( 0x8DE3FF ), 0, 1.0, flickerLightShadows2));
                this.manager.addComponent(new Photons.FlickerLight(lightParent5, 100, 1, new THREE.Color( 0x8DE3FF ), 0, 0.8, flickerLightShadows3));
            });
    }
}