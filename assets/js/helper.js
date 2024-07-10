import { projectsContent, projectBtn } from './modals/projects.js';
import { aboutContent, aboutBtn } from './modals/about.js';
import { workContent, workBtn } from './modals/work.js';
import $ from "jquery";
import '../core/bootstrap/js/bootstrap.min.js';

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
});