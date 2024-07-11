import $ from "jquery";

const projectsContent = [
    '<div class="row h-100">' +

    '<div class="p-0 col-md-3 display-tabs-container">' +
    '<button class="subnautica-btn display-tab active">LTT Desk Configurator</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button class="subnautica-btn display-tab">MSV.global</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button class="subnautica-btn display-tab">ASGRA</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button class="subnautica-btn display-tab">Cafeteria</button>' +
    '<div class="menu-option-separator"></div>' +
    '<button class="subnautica-btn display-tab">Subnautica Interface</button>' +
    '</div>' +


    '<div class="p-0 col-md-9 display-content-container">' +
    '<div class="display-content">' +
    '<h3 class="subnautica-font">LTT Desk Configurator</h3>' +
    '<p class="subnautica-content-font">My Projects</p>' +
    '</div>' +

    '<div class="display-content">' +
    'Fuck you' +
    '</div>' +

    '</div>' +
    '</div>'
];

const projectBtn = $("#projectsBtn");

export { projectsContent, projectBtn }