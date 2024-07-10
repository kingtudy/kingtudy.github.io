import $ from "jquery";

const projectsContent = [
    '<div class="row h-100">' +
    '<div style="background-color: #00000000;" class="p-0 col-md-3 modal-left-side">' +
    '<button type="button" class="subnautica-btn modal-option active" data-bs-dismiss="modal">LTT Desk Configurator</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button type="button" class="subnautica-btn modal-option" data-bs-dismiss="modal">MSV.global</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button type="button" class="subnautica-btn modal-option" data-bs-dismiss="modal">ASGRA</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button type="button" class="subnautica-btn modal-option" data-bs-dismiss="modal">Cafeteria</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button type="button" class="subnautica-btn modal-option" data-bs-dismiss="modal">Subnautica Interface</button>' +
    '</div>' +
    '<div style="background-color: #00000000;" class="col-md-9"></div>' +
    '</div>'
];

const projectBtn = $("#projectsBtn");

export { projectsContent, projectBtn }