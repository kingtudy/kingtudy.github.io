let sliderData = '';
const link = 'https://sophirion.net/super_ultra_mega_secret_project/index.html';
const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

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
                '<h3 class="subnautica-font mt-2 text-center m-0">LTT Desk Configurator</h3>' +
                '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

                '<a href="./assets/projects_data/ltt/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
                    '<img src="./assets/projects_data/ltt/front.png" class="img-responsive" alt="showcase-img" >' +
                '</a>' +

                '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
                    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
                    '<a target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
                        '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
                    '</a>' +
                '</div>' +

                '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
                '<p class="subnautica-content-font">' + description + '</p>' +

                '<div class="display-slider-container">' +
                    '<div class="row" id="displaySliderContainer">' +
                        sliderData +
                    '</div>' +
                '</div>' +


            '</div>' +

            '<div class="display-content">' +
                'Fuck you' +
            '</div>' +
        '</div>' +
    '</div>'
];

const projectBtn = $("#projectsBtn");

export { projectsContent, projectBtn }