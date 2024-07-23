import { ParallaxBarrierEffect } from 'three/addons/effects/ParallaxBarrierEffect.js';
import { renderer } from "./renderer.js";

let effect = new ParallaxBarrierEffect( renderer );
const width = window.innerWidth || 2;
const height = window.innerHeight || 2;

effect.setSize( width, height );

let paralaxModifiers = {
    x: 0,
    y: 40
}

export { effect, paralaxModifiers }