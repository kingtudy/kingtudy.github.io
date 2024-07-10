import { projectsContent, projectBtn } from './modals/projects.js';
import { aboutContent, aboutBtn } from './modals/about.js';
import { workContent, workBtn } from './modals/work.js';
import $ from "jquery";
import '../core/bootstrap/js/bootstrap.min.js';

window.Modal = bootstrap.Modal;

let myModal = bootstrap.Modal.getOrCreateInstance('#displayModal');
let modalLabel = $('#displayModalLabel');

// Trigger area - trigger warning

projectBtn.on('click', function() {
    myModal.show();
    modalLabel.text('MY PROJECTS');
});

aboutBtn.on('click', function() {
    myModal.show();
    modalLabel.text('ABOUT ME');
});

workBtn.on('click', function() {
    myModal.show();
    modalLabel.text('WORK EXPERIENCE');
});