const colorWheel = {
    'js' : '#f0db4f',
    'css' : '#2965f1',
    'html' : '#e44d26',
    'threejs' : '#ff0000',
    'jquery' : '#0769ad',
    'react' : '#61dafb',
    'reactnative' : '#282c34',
    'bootstrap' : '#563d7c',
    'wordpress' : '#21759b',
    'elementor' : '#7c3aed',
    'c' : '#00599c',
}

// LTT DESK CONFIGURATOR ------------------------------------------------>
let sliderData = '';
let link = 'https://sophirion.net/ltt-configurator/index.html';
let description =
    '<p class="s-font">The <strong>LTT Desk Configurator</strong> is a tool I designed for Linus Media Group(LMG) to help customers make better purchasing decisions.</p>' +
    '<div class="m-font subnautica-content-font">Key Features:</div>' +
    '<ul>' +
        '<li class="s-font"><strong>3D Environment</strong>: Users can create a virtual representation of their home desk setup.</li>' +
        '<li class="s-font"><strong>Customizable Measurements</strong>: Supports both metric and imperial units for precise desk building.</li>' +
        '<li class="s-font"><strong>Merchandise Integration</strong>: Decorate the virtual desk with items from the LMG store.</li>' +
        '<li class="s-font"><strong>Prop Placement</strong>: Add common desk items like monitors, PCs, and laptops.</li>' +
        '<li class="s-font"><strong>Undo and Redo</strong>: Experiment freely with setup changes.</li>' +
        '<li class="s-font"><strong>Custom Textures and Presets</strong>: Personalize the desk and background with various textures and presets. </li>' +
    '</ul>';

let techs = {
    'Three.js' : [41.9, colorWheel.threejs],
    'jQuery' : [30.2, colorWheel.jquery],
    'HTML' : [15.0, colorWheel.html],
    'CSS' : [12.9, colorWheel.css],
};

let techUsed = '<div class="progress-bar-container"><div class="progress custom-progress-bar">';
let textContainer = '<div class="progress-text-container">';
Object.entries(techs).forEach(([tech, val]) => {
    techUsed += '<div style="position:relative; width:'+ val[0] +'%; background-color: '+ val[1] +'" class="progress-bar subnautica-font" role="progressbar" style="width: '+ val[0] +'%" aria-valuenow="'+ val[0] +'" aria-valuemin="0" aria-valuemax="100">'+ val[0] +'%</div>';
    textContainer += '<span style="width:'+ val[0] +'%;">'+ tech +'</span>';
});

techUsed += '</div>';
techUsed += textContainer;
techUsed += '</div></div>';

for (let i = 0; i < 11; i++) {
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
    '<a target="_blank" class="outer-link subnautica-rounded-btn" href="'+ link +'" >' +
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
    '<div class="display-slider-container-inner" id="displaySliderContainer0">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Tech used:</h3>' +
    techUsed;


// MSV GLOBAL ------------------------------------------------>
sliderData = '';
link = 'https://msv.global';
description =
    '<p class="s-font">I created a website for MSV, a Romanian company offering premier outsourcing solutions. The site is built on a custom theme using WordPress and Elementor.</p>' +
    '<div class="m-font subnautica-content-font">Key Features:</div>' +
    '<ul>' +
    '<li class="s-font"><strong>Custom WordPress Theme</strong>: Tailored to MSV\'s branding and needs.</li>' +
    '<li class="s-font"><strong>Elementor Integration</strong>: Easy content management and page building.</li>' +
    '<li class="s-font"><strong>Responsive Design</strong>: Optimal viewing on all devices.</li>' +
    '<li class="s-font"><strong>SEO Optimized</strong>: Improved online visibility.</li>' +
    '<li class="s-font"><strong>User-Friendly Navigation</strong>: Intuitive and accessible layout.</li>' +
    '</ul>';

techs = {
    'Wordpress': [38.8, colorWheel.wordpress],
    'Elementor': [34.3, colorWheel.elementor],
    'HTML': [8.9, colorWheel.html],
    'JS': [9.9, colorWheel.js],
    'CSS': [8.1, colorWheel.css],
};

techUsed = '<div class="progress-bar-container"><div class="progress custom-progress-bar">';
textContainer = '<div class="progress-text-container">';
Object.entries(techs).forEach(([tech, val]) => {
    techUsed += '<div style="position:relative; width:'+ val[0] +'%; background-color: '+ val[1] +'" class="progress-bar subnautica-font" role="progressbar" style="width: '+ val[0] +'%" aria-valuenow="'+ val[0] +'" aria-valuemin="0" aria-valuemax="100">'+ val[0] +'%</div>';
    textContainer += '<span style="width:'+ val[0] +'%;">'+ tech +'</span>';
});

techUsed += '</div>';
techUsed += textContainer;
techUsed += '</div></div>';

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
    '<a target="_blank" class="outer-link subnautica-rounded-btn" href="'+ link +'" >' +
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
    '<div class="display-slider-container-inner" id="displaySliderContainer1">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Tech used:</h3>' +
    techUsed;

// ASGRA ------------------------------------------------>
sliderData = '';
link = 'https://asgra.ro';
description =
    '<p class="s-font">I created a website for the non-profit Association for the Study and Management of Avalanche Risk (Asociația pentru Studiul și Gestionarea Riscului de Avalanșă). The site aims to educate local communities in high-risk avalanche zones and tourists traveling to these areas, helping the association reach a broader audience.</p>' +
    '<div class="m-font subnautica-content-font">Key Features:</div>' +
    '<ul>' +
        '<li class="s-font"><strong>Educational Content</strong>: Provides valuable information on avalanche risk and safety measures.</li>' +
        '<li class="s-font"><strong>Responsive Design</strong>: Ensures accessibility across various devices and screen sizes.</li>' +
        '<li class="s-font"><strong>User-Friendly Navigation</strong>: Intuitive layout to easily find relevant information.</li>' +
        '<li class="s-font"><strong>Multilingual Support</strong>: Offers content in multiple languages to cater to a diverse audience.</li>' +
        '<li class="s-font"><strong>Engaging Visuals</strong>: Includes images and videos to enhance the learning experience.</li>' +
    '</ul>';

techs = {
    'Wordpress': [50.4, colorWheel.wordpress],
    'PHP': [26.1, colorWheel.php],
    'HTML': [15.9, colorWheel.html],
    'CSS': [7.6, colorWheel.CSS],
};

techUsed = '<div class="progress-bar-container"><div class="progress custom-progress-bar">';
textContainer = '<div class="progress-text-container">';
Object.entries(techs).forEach(([tech, val]) => {
    techUsed += '<div style="position:relative; width:'+ val[0] +'%; background-color: '+ val[1] +'" class="progress-bar subnautica-font" role="progressbar" style="width: '+ val[0] +'%" aria-valuenow="'+ val[0] +'" aria-valuemin="0" aria-valuemax="100">'+ val[0] +'%</div>';
    textContainer += '<span style="width:'+ val[0] +'%;">'+ tech +'</span>';
});

techUsed += '</div>';
techUsed += textContainer;
techUsed += '</div></div>';

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
    '<a target="_blank" class="outer-link subnautica-rounded-btn" href="'+ link +'" >' +
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
    '<div class="display-slider-container-inner" id="displaySliderContainer2">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Tech used:</h3>' +
    techUsed;

//Cafeteria ------------------------------------------------>
sliderData = '';
link = 'https://sophirion.net/cafeteria';
description =
    '<p class="s-font">Cafeteria was a temporary web management app I developed to manage a cafeteria business. The app featured two parts: one for the client and one for the admin. The admin could manage inventory, create menus, read reviews, post polls, and more. The client could view the daily menu, place orders, and provide feedback.</p>' +
    '<div class="m-font subnautica-content-font">Key Features:</div>' +
    '<ul>' +
        '<li class="s-font"><strong>Admin Interface</strong>: Manage inventory, create menus, read reviews, and post polls.</li>' +
        '<li class="s-font"><strong>Client Interface</strong>: View daily menu, place orders, and provide feedback.</li>' +
        '<li class="s-font"><strong>Inventory Management</strong>: Admins can track and manage stock levels.</li>' +
        '<li class="s-font"><strong>Menu Creation</strong>: Easily create and update menus.</li>' +
        '<li class="s-font"><strong>Customer Feedback</strong>: Collect and read customer reviews and feedback.</li>' +
        '<li class="s-font"><strong>Polling</strong>: Post polls to engage with customers and gather insights.</li>' +
    '</ul>';

techs = {
    'PHP': [45.8, colorWheel.php],
    'HTML': [35.6, colorWheel.html],
    'JS': [8.9, colorWheel.js],
    'CSS': [9.7, colorWheel.css],
};

techUsed = '<div class="progress-bar-container"><div class="progress custom-progress-bar">';
textContainer = '<div class="progress-text-container">';
Object.entries(techs).forEach(([tech, val]) => {
    techUsed += '<div style="position:relative; width:'+ val[0] +'%; background-color: '+ val[1] +'" class="progress-bar subnautica-font" role="progressbar" style="width: '+ val[0] +'%" aria-valuenow="'+ val[0] +'" aria-valuemin="0" aria-valuemax="100">'+ val[0] +'%</div>';
    textContainer += '<span style="width:'+ val[0] +'%;">'+ tech +'</span>';
});

techUsed += '</div>';
techUsed += textContainer;
techUsed += '</div></div>';

for(let i=0; i < 3; i++) {
    sliderData +=
        '<div class="slider-img-container">' +
        '<img src="./assets/projects_data/cafeteria/res' + i + '.gif" class="img-responsive" alt="slider-img-2" />' +
        '</div>';
}

const cafeteria = '<h3 class="subnautica-font mt-2 text-center m-0">Cafeteria</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/cafeteria/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/cafeteria/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '<a target="_blank" class="outer-link subnautica-rounded-btn" href="'+ link +'" >' +
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
    '<div class="display-slider-container-inner" id="displaySliderContainer3">' +
    sliderData +
    '</div>' +
    '<div id="slickNextCustom" class="slick-next">' +
    '<img class="slick-next-img" src="./assets/img/icons/next-alt.gif" alt="next-ico" />' +
    '</div>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Tech used:</h3>' +
    techUsed;

//Subnautica Interface ------------------------------------------------>
link = 'https://sophirion.net/portfolio';
description =
    '<p class="s-font">When I made my portfolio to showcase my projects, I wanted it to look cool. One of my favorite games of all time is Subnautica, and I wanted to experiment more with the Three JS library, which, coincidentally, has a built-in system for handling water simulations. And so this interface was born. <br><br>' +
    'I also stashed some Easter Eggs (<span style="color: yellow;">HINT:</span> see if you can click somewhere at the back of the crashed ship)</p>';

techs = {
    'Three.js' : [41.9, colorWheel.threejs],
    'jQuery' : [31.3, colorWheel.jquery],
    'HTML' : [16.8, colorWheel.html],
    'CSS' : [10.0, colorWheel.css],
};

techUsed = '<div class="progress-bar-container"><div class="progress custom-progress-bar">';
textContainer = '<div class="progress-text-container">';
Object.entries(techs).forEach(([tech, val]) => {
    techUsed += '<div style="position:relative; width:'+ val[0] +'%; background-color: '+ val[1] +'" class="progress-bar subnautica-font" role="progressbar" style="width: '+ val[0] +'%" aria-valuenow="'+ val[0] +'" aria-valuemin="0" aria-valuemax="100">'+ val[0] +'%</div>';
    textContainer += '<span style="width:'+ val[0] +'%;">'+ tech +'</span>';
});

techUsed += '</div>';
techUsed += textContainer;
techUsed += '</div></div>';

const subnautica = '<h3 class="subnautica-font mt-2 text-center m-0">Subnautica-Inspired Portfolio</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/projects_data/subnautica/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/projects_data/subnautica/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">Access project:</h3>' +
    '- you are already here -' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Tech used:</h3>' +
    techUsed;

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