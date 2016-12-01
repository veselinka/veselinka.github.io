// Task 1
// Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:
// The UL must have a class items-list
// Each of the LIs must:
// have a class list-item
// content "List item #INDEX"
// The indices are zero-based
// If the provided selector does not selects anything, do nothing
// Throws if
// COUNT is a Number, but is less than 1
// COUNT is missing, or not convertible to Number
// Example:
// Valid COUNT values:
// 1, 2, 3, '1', '4', '1123'
// Invalid COUNT values:
// '123px' 'John', {}, []
console.log("Task 1");

function createList(selector, count) {
    try {
        if (typeof count === 'number' && count < 1) {
            throw new Error('Error!');
        }
        if (isNaN(parseFloat(count))) {
            throw new Error('NaN!'); 
        }
    } catch (e) {
        console.log(e);
    }
    var $li = $('<li/>')
        .addClass("list-item");
        var $ul = $('<ul/>')
        .addClass("items-list");
        var i;
        var $selectedEl = $(selector);
    for (i = 0; i < count; i++) {
        $newLi = $li.clone(true);
        $newLi.html('List item ' + i);
        $ul.append($newLi);
    }
    $selectedEl.append($ul);
}
createList("#add", 5);
createList("#add", "10");
createList("#add", -8);
createList("#add", "gfbhgfbgdfbv");
createList("#add", {});
createList("#add", []);

console.log("Task 2");


function showHide(selector) {
    var $button = $(".button").text("Hide"),
        $content = $(".content");

    $button.click(function() {
        var $this = $(this);
       $this.nextAll(".content").first().toggleClass("hidden"); 
if ($content.hasClass("hidden")){
            $this.text("Show");
        }
        else{
            $this.text("Hide");
        }
    });
}
showHide("#container"); 


