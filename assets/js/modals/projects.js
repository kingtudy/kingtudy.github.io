// LTT DESK CONFIGURATOR ------------------------------------------------
let sliderData = '';
let link = 'https://sophirion.net/super_ultra_mega_secret_project/index.html';
let description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

for(let i=0; i < 11; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/ltt/res' + i + '.gif" class="img-responsive-2" alt="slider-img" />' +
        '</div>';
}

const ltt = '<h3 class="subnautica-font mt-2 text-center m-0">LTT Desk Configurator</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/ltt/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/ltt/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a id="outerLink" target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<div class="display-slider-container">' +
    '<h3 class="subnautica-font inter-section-custom-margin">Gallery:</h3>' +

    '<div id="slickPrevCustom" class="slick-prev">' +
    '<img class="slick-prev-img" src="./assets/img/icons/prev-alt.gif" alt="prev-ico" />' +
    '</div>' +
    '<div class="display-slider-container-inner" id="displaySliderContainer">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>';

// MSV GLOBAL ------------------------------------------------
sliderData = '';
link = 'https://msv.global';
description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

for(let i=0; i < 1; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/msv/res' + i + '.gif" class="img-responsive-2" alt="slider-img" />' +
        '</div>';
}

const msv = '<h3 class="subnautica-font mt-2 text-center m-0">MSV.GLOBAL</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/msv/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/msv/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a id="outerLink" target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<div class="display-slider-container">' +
    '<h3 class="subnautica-font inter-section-custom-margin">Gallery:</h3>' +

    '<div id="slickPrevCustom" class="slick-prev">' +
    '<img class="slick-prev-img" src="./assets/img/icons/prev-alt.gif" alt="prev-ico" />' +
    '</div>' +
    '<div class="display-slider-container-inner" id="displaySliderContainer">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>';

// ASGRA ------------------------------------------------
sliderData = '';
link = 'https://asgra.ro';
description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

for(let i=0; i < 4; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/asgra/res' + i + '.gif" class="img-responsive" alt="slider-img-2" />' +
        '</div>';
}

const asgra = '<h3 class="subnautica-font mt-2 text-center m-0">ASGRA</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/asgra/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/asgra/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a id="outerLink" target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<div class="display-slider-container">' +
    '<h3 class="subnautica-font inter-section-custom-margin">Gallery:</h3>' +

    '<div id="slickPrevCustom" class="slick-prev">' +
    '<img class="slick-prev-img" src="./assets/img/icons/prev-alt.gif" alt="prev-ico" />' +
    '</div>' +
    '<div class="display-slider-container-inner" id="displaySliderContainer">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>';

//Cafeteria ------------------------------------------------
sliderData = '';
link = 'https://sophirion.net/super_ultra_mega_secret_project/index.html';
description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

for(let i=0; i < 11; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/ltt/res' + i + '.gif" class="img-responsive" alt="slider-img-2" />' +
        '</div>';
}

const cafeteria = '<h3 class="subnautica-font mt-2 text-center m-0">LTT Desk Configurator</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/ltt/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/ltt/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a id="outerLink" target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<div class="display-slider-container">' +
    '<h3 class="subnautica-font inter-section-custom-margin">Gallery:</h3>' +

    '<div id="slickPrevCustom" class="slick-prev">' +
    '<img class="slick-prev-img" src="./assets/img/icons/prev-alt.gif" alt="prev-ico" />' +
    '</div>' +
    '<div class="display-slider-container-inner" id="displaySliderContainer">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>';

//Subnautica Interface ------------------------------------------------
sliderData = '';
link = 'https://sophirion.net/super_ultra_mega_secret_project/index.html';
description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum enim. Mauris eu urna ut ex euismod posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vehicula eleifend nisi sed facilisis. Nullam laoreet urna vel turpis dictum, sagittis facilisis eros feugiat. Donec eget augue felis. Aliquam eget elementum nulla.' +
    '<br><br>' +
    'Nunc dignissim sodales ante, vitae vulputate elit semper sed. Morbi sed pulvinar lectus. Cras lectus mauris, porttitor non cursus ac, hendrerit at libero. Curabitur rutrum pharetra dignissim. Donec at pellentesque dolor. Suspendisse et lorem posuere, pulvinar urna nec, auctor diam. Nullam a congue nisl, in efficitur ipsum. Mauris maximus, nisl vel egestas porttitor, nunc leo commodo leo, sit amet euismod purus justo eu elit. Nam quis blandit lorem, sit amet pellentesque nisl. Donec ut elementum magna. Nulla tincidunt egestas lacus. Cras vitae odio sapien. Proin turpis nibh, sollicitudin nec ligula nec, luctus rutrum nibh.' +
    '<br><br>' +
    'Etiam arcu est, volutpat sit amet lorem vitae, viverra volutpat enim. Ut non dignissim erat. Vestibulum egestas mauris ultricies pellentesque ornare. Sed non nisi lacus. Nullam vehicula maximus ultricies. Pellentesque dignissim commodo quam, eu euismod nunc ornare vel. Praesent non sapien cursus, varius felis vitae, faucibus nibh. Duis elementum neque in rutrum eleifend.';

for(let i=0; i < 11; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/ltt/res' + i + '.gif" class="img-responsive" alt="slider-img-2" />' +
        '</div>';
}

const subnautica = '<h3 class="subnautica-font mt-2 text-center m-0">LTT Desk Configurator</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/ltt/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/ltt/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a id="outerLink" target="_blank" class="subnautica-rounded-btn" href="'+ link +'" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<div class="display-slider-container">' +
    '<h3 class="subnautica-font inter-section-custom-margin">Gallery:</h3>' +

    '<div id="slickPrevCustom" class="slick-prev">' +
    '<img class="slick-prev-img" src="./assets/img/icons/prev-alt.gif" alt="prev-ico" />' +
    '</div>' +
    '<div class="display-slider-container-inner" id="displaySliderContainer">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>';

// -------------------------------------------------------------------------
const projectsContent = [
    '<div class="row h-100">' +
        '<div class="p-0 col-md-3 display-tabs-container">' +
            '<div class="position-fixed">' +
                '<button onclick="smoothScroll()" class="subnautica-btn display-tab active">LTT Desk Configurator</button>' +
                '<div class="menu-option-separator"></div>' +
                '<button onclick="smoothScroll()" class="subnautica-btn display-tab">MSV.global</button>' +
                '<div class="menu-option-separator"></div>' +
                '<button onclick="smoothScroll()" class="subnautica-btn display-tab">ASGRA</button>' +
                '<div class="menu-option-separator"></div>' +
                '<button onclick="smoothScroll()" class="subnautica-btn display-tab">Cafeteria</button>' +
                '<div class="menu-option-separator"></div>' +
                '<button onclick="smoothScroll()" class="subnautica-btn display-tab">Subnautica Interface</button>' +
            '</div>' +
        '</div>' +


        '<div class="p-0 col-md-9 display-content-container">' +
            '<div class="display-content">' +
                ltt +
            '</div>' +

            '<div class="display-content">' +
                msv +
            '</div>' +

            '<div class="display-content">' +
                asgra +
            '</div>' +

            '<div class="display-content">' +
                cafeteria +
            '</div>' +

            '<div class="display-content">' +
                subnautica +
            '</div>' +
        '</div>' +
    '</div>'
];



const projectBtn = $("#projectsBtn");

export { projectsContent, projectBtn }