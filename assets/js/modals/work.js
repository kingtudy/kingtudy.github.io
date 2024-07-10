import $ from "jquery";

const workContent = [
    '<h6>WELCOME! What do you need to know?</h6>' +
    '<br>' +
    '<a class="index-btn s-font" onclick="jumpToPage(0);">1. Introduction</a>' +
    '<a class="index-btn s-font" onclick="jumpToPage(3);">2. General overview</a>' +
    '<a class="index-btn s-font" onclick="jumpToPage(21);">3. Object & camera controls</a>' +
    '<a class="index-btn s-font" onclick="jumpToPage(24);">4. Shortcut keys</a>' +
    '<a class="index-btn s-font" onclick="jumpToPage(25);">5. Credits</a>',
];

const workBtn = $("#workBtn");

export { workContent, workBtn }