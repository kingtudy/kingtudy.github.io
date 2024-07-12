const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const audioBuffers = {};
let gainNode = audioContext.createGain();

function loadSound(key, url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            audioBuffers[key] = audioBuffer;
        });
}

function playSound(key) {
    const soundSource = audioContext.createBufferSource();
    soundSource.buffer = audioBuffers[key];
    soundSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 0.5; // Set volume (range is 0.0 to 1.0)
    soundSource.start(0);
}

Promise.all([
    loadSound('menu-open', './assets/audio/nier_menu.ogg'),
    loadSound('menu-close', './assets/audio/nier_menu_close.ogg'),
    loadSound('menu-select', './assets/audio/nier_menu_select.ogg'),
    loadSound('menu-tick', './assets/audio/nier_menu_tick.ogg')
]).then(() => {
    console.log('All sounds loaded');
}).catch(error => {
    console.error('Error loading sounds', error);
});

export { playSound };