function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function detectMobile() {
    if(window.matchMedia("(max-width: 767px)").matches) {
        return true;
    }
    return false;
}

function animationStart() {
    $('#preloader').hide();
    animate();
}

function smoothScroll() {
    $(".modal-dialog-scrollable .modal-body").animate({ scrollTop: 0 }, "slow");
    return false;
}

//Attach everything to the window context
window.animationStart = animationStart;
window.smoothScroll = smoothScroll;
window.detectMobile = detectMobile;
window.getRandomArbitrary = getRandomArbitrary;