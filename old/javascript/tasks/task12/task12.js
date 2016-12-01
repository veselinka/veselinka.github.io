//  Task 1
// Create a function that takes an id or DOM element and:
// If an id is provided, select the element
// Finds all elements with class button or content within the provided element
// Change the content of all .button elements with "hide"
// When a .button is clicked:
// Find the topmost .content element, that is before another .button and:
// If the .content is visible:
// Hide the .content
// Change the content of the .button to "show"
// If the .content is hidden:
// Show the .content
// Change the content of the .button to "hide"
// If there isn't a .content element after the clicked .button and before other .button, do nothing
// Throws if:
// The provided DOM element is non-existant
// The id is either not a string or does not select any DOM element
var cont = document.getElementById('container');

function throws(cont) {

    var buttons = document.getElementsByClassName('button');
    var contents = document.getElementsByClassName('content');
    try {
        if (typeof cont !== 'string' && typeof cont !== 'object') {
            throw new Error('Invalid content type!');
        }
        if (!(cont)) {
            throw new Error('Invalid dom element or id');
        }
        if (!(cont instanceof HTMLElement)) {
            throw new Error('DOM element is non-existant');
        }
    } catch (e) {
        console.log(e);
    }

    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].innerHTML = 'Hide';
        buttons[i].addEventListener('click', function(ev) {
            var nextElement = (ev.target).nextElementSibling;
            var content;
            while (nextElement) {
                if (nextElement.className === 'button') {
                    return 0;
                }
                if (nextElement.className === 'content') {
                    content = nextElement;
                    break;
                } else {
                    nextElement = nextElement.nextElementSibling;
                }
            }
            if (typeof(content) !== undefined) {
                if (content.style.display === '') {
                    (ev.target).innerHTML = 'Show';
                    content.style.display = 'none';
                } else {
                    (ev.target).innerHTML = 'Hide';
                    content.style.display = '';
                }
            }
        }, false);
    }
}
throws(cont);