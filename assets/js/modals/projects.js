

let sliderData = '';
for(let i=0; i < 11; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/ltt/res' + i + '.gif" class="img-responsive" alt="slider-img" />' +
        '</div>';
}

const projectsContent = [
    '<div class="row h-100">' +
        '<div class="p-0 col-md-3 display-tabs-container">' +
            '<div class="position-fixed">' +
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
        '</div>' +


        '<div class="p-0 col-md-9 display-content-container">' +
            '<div class="display-content">' +
                '<h3 class="subnautica-font mt-2 text-center">LTT Desk Configurator</h3>' +
                '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

                '<div class="showcase-img-container">' +
                    '<img src="./assets/projects_data/ltt/front.png" class="img-responsive" alt="showcase-img" >' +
                '</div>' +
                '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

                '<div class="display-slider-container">' +
                    '<div id="displaySliderContainer">' +
                        sliderData +
                    '</div>' +
                '</div>' +

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