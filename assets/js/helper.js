import { projectsContent, projectBtn } from './modals/projects.js';
import { aboutContent, aboutBtn } from './modals/about.js';
import { workContent, workBtn } from './modals/work.js';

import '../core/bootstrap/js/bootstrap.min.js';
import { playSound } from "./audio_handler.js";

import '../core/slick-carousel/slick/slick.js';
// import '../core/lightbox/lightbox.min.js';

window.Modal = bootstrap.Modal;

let myModal = bootstrap.Modal.getOrCreateInstance('#displayModal');
let modalLabel = $('#displayModalLabel');
let modalBody = $('#displayBody');

$(document).ready(function() {

    // Trigger area - trigger warning

    projectBtn.on('click', function() {
        myModal.show();
        modalLabel.text('My projects');
        modalBody.html(projectsContent);
        // const nrChildren = $('#displayInsides').children('.subnautica-btn').length;

        let tabs = $('.display-tabs-container div').children('.display-tab');
        let contents = $('.display-content-container').children('.display-content');

        tabs.each(function(index) {
            $(this).attr('id', 'tab-id-' + index);
        });

        contents.each(function(index) {
            $(this).attr('id', 'content-id-' + index);
            if(index > 0) {
                $(this).hide();
            }
        });

        $('#displaySliderContainer').slick({
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            centerMode: false
        });
        $('#displaySliderContainer').slick('setPosition');
        $('.display-slider-container').addClass('open');

        setClickListeners(tabs, contents);
    });

    aboutBtn.on('click', function() {
        myModal.show();
        modalLabel.text('ABOUT ME');
        modalBody.html(aboutContent);
    });

    workBtn.on('click', function() {
        myModal.show();
        modalLabel.text('WORK EXPERIENCE');
        modalBody.html(workContent);
    });

    function setClickListeners(tabs, contents) {
        const modalTarget = $('#displayModal');
        modalTarget.off();
        modalTarget.children().off();

        tabs.each(function(index) {
            $(this).on('click', function(){
                $('.display-content').hide();
                $('#content-id-' + index).show();
                $('.display-tab').removeClass('active');
                $(this).addClass('active');
            });
        });

        $('.showcase-img-container').on('mouseenter', function () {
            playSound('menu-tick');
        });

        $('.showcase-img-container').on('click', function () {
            playSound('menu-select');
        });

        $('.display-tab').on('mouseenter', function () {
            playSound('menu-tick');
        });

        $('.display-tab').on('click', function () {
            playSound('menu-select');
        });

        $('#outerLink').on('mouseenter', function () {
            playSound('menu-tick');
        });

        $('#outerLink').on('click', function () {
            playSound('menu-link');
        });
    }


    //Sounds Shit

    $('.social-item').on('mouseenter', function () {
        playSound('menu-tick');
    });

    $('.social-item').on('click', function () {
        playSound('menu-link');
    });

    $('.menu-option-container').on('click', function () {
        playSound('menu-open');
    });

    $('.menu-option-container').on('mouseenter', function () {
        playSound('menu-tick');
    });

    $('.back-btn').on('mouseenter', function () {
        playSound('menu-tick');
    });

    $('.back-btn').on('click', function () {
        playSound('menu-close');
    });

    $('#contactBtn').on('mouseenter', function () {
        playSound('menu-tick');
    });

    $('#contactBtn').on('click', function () {
        playSound('menu-link');
    });

    // let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    //
    // if (audioContext.state === 'suspended') {
    //     audioContext.resume();
    // }

    // setTimeout(function() {
    //     var input = $('#email');
    //     console.log(input);
    //     input.focus();
    //
    //     var e = jQuery.Event('keydown', {
    //         key: 'a',       // The key that you want to simulate
    //         keyCode: 65,    // The keyCode for 'a'
    //         which: 65,      // The which property also represents the keyCode
    //         charCode: 65
    //     });
    //
    //     // Trigger the keydown event on the input field
    //     input.trigger(e);
    //
    //     // Optionally, handle the keydown event to see the effect
    //     input.on('keydown', function(event) {
    //         console.log('Key pressed:', event.key);
    //     });
    // }, 2000);
});