// XFACTORAPP ------------------------------------------------>

let link = 'https://xfactorapp.com/en/';
let role = 'Tester - Web Developer';
let description =
'<p><strong>Xfactorapp</strong> offers complex web services for companies in Romania and abroad.</p>' +
'<div className="m-font subnautica-content-font">' +
    '📍As a Tester, I served as both the primary and final checkpoint to ensure the client received a flawless product. I performed my duties following various testing methodologies:' +
'</div>' +
'<ul>' +
    '<li className="s-font">' +
        'Unit and performance testing: I wrote code that tests code, ensuring our in house large framework operates without unexpected errors, runs smoothly, efficient and effectively handles edge cases;' +
    '</li>' +
    '<li className="s-font">' +
        'Integration and acceptance testing: I conducted both manual and automated tests for various tech products, ranging from websites to mobile apps, ensuring the end user would not encounter any bugs;' +
    '</li>' +
'</ul>' +
    '<br>' +
'<div className="m-font subnautica-content-font">' +
    '📍As Web Developer, I was in charge of designing both the frontend and backend for different web products:' +
'</div>' +
'<ul>' +
    '<li className="s-font">' +
        'Frontend: I brought the client\'s vision to life, implementing designs according to web best practices for layout and frontend development. I created everything from simple landing pages and blogs to complex websites(insurance portals, Uber like solutions).' +
    '</li>' +
    '<li className="s-font">' +
        'Backend: I contributed to the development of the internal framework and numerous APIs and backend solutions for a diverse portfolio of clients. My work ranged from creating basic forms and database relationships to implementing complex data flows with robust data validations(solutions similar to Uber Eats, hospital app that manages patient records).' +
    '</li>' +
'</ul>';


const xfactorapp = '<h3 class="subnautica-font mt-2 text-center m-0">XFactorApp</h3>' +
    '<img src="./assets/img/cool_lines.svg" class="cool-separator" alt="separator-img" />' +

    '<a href="./assets/work_data/xfactorapp/front.png" data-lightbox="mygallery" class="showcase-img-container">' +
    '<div class="show-size-image">' +
    '<img src="./assets/img/icons/resize.gif" alt="resize" />' +
    '</div>' +
    '<img src="./assets/work_data/xfactorapp/front.png" class="img-responsive" alt="showcase-img" >' +
    '</a>' +

    '<div class="d-flex justify-content-start align-items-center inter-section-custom-margin">' +
    '<h3 style="margin: 0 1em 0 0;" class="subnautica-font d-inline">View comany website:</h3>' +
    '<a target="_blank" class="outer-link subnautica-rounded-btn" href="' + link + '" >' +
    '<img src="./assets/img/icons/eye.gif" alt="eye" class="img-responsive" />' +
    '</a>' +
    '</div>' +

    '<h3 class="subnautica-font inter-section-custom-margin d-flex">Role:' +
    '<span style="color: yellow; margin-left: 10px;" class="subnautica-content-font">' + role + '</span>' +
    '</h3>' +

    '<h3 class="subnautica-font inter-section-custom-margin">Description:</h3>' +
    '<p class="subnautica-content-font description">' + description + '</p>';


const workContent = [
    '<div class="row h-100">' +

    '<div class="p-0 col-md-3 display-tabs-container">' +
    '<div class="position-fixed">' +
    '<button onclick="smoothScroll()" class="subnautica-btn display-tab active">XFactorApp STR.</button>' +
    '</div>' +
    '</div>' +


    '<div class="p-0 col-md-9 display-content-container">' +
    '<div class="display-content">' +
    xfactorapp +
    '</div>' +
    '</div>' +

    '</div>'
];

const workBtn = $("#workBtn");

export {workContent, workBtn}