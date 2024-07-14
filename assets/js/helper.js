import { projectsContent, projectBtn } from './modals/projects.js';
import { aboutContent, aboutBtn } from './modals/about.js';
import { workContent, workBtn } from './modals/work.js';

import '../core/bootstrap/js/bootstrap.min.js';
import { playSound } from "./audio_handler.js";

import '../core/slick-carousel/slick/slick.js';

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

        let tabs = $('.display-tabs-container').children('.display-tab');
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

        setClickListeners(tabs, contents);

        $('#displaySliderContainer').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true
        });
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

        $('.display-tab').on('mouseenter', function () {
            playSound('menu-tick');
        });

        $('.display-tab').on('click', function () {
            playSound('menu-select');
        });
    }


    //Sounds Shit

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
});