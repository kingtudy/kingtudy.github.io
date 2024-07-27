function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function isMobile() {
    if(window.matchMedia("(max-width: 767px)").matches) {
        return true;
    }
    return false;
}

function animationStart() {
    $('#preloader').hide();
    if(isMobile()) {
        lowerAnimation();
    } else {
        // lowerAnimation();
        animate();
    }
}

function smoothScroll() {
    $(".modal-dialog-scrollable .modal-body").animate({ scrollTop: 0 }, "slow");
    return false;
}

//Attach everything to the window context
window.animationStart = animationStart;
window.smoothScroll = smoothScroll;
window.isMobile = isMobile;
window.getRandomArbitrary = getRandomArbitrary;