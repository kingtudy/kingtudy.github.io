import { ParticleEngine } from "../lib/ParticleEngine.js";
import { Examples } from '../lib/SmokeEngine.js';

let smokeEngine = new ParticleEngine();
smokeEngine.setValues( Examples.smoke );
smokeEngine.initialize();

export { smokeEngine }