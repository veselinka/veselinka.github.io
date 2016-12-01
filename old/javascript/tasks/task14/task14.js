// Task 1

// Create a dropdown list by a given select

// For clearance, check the example and the unit tests

// Example:

// By given the HTML:

// <select id="the-select">
//   <option value="value-1">Option 1</option>
//   <option value="value-2">Option 2</option>
//   <option value="value-3">Option 3</option>
//   <option value="value-4">Option 4</option>
//   <option value="value-5">Option 5</option>
// </select>
// And JavaScript:
// dropdownList('#the-select');
// Generate the following and attaches the events:
// <div class="dropdown-list">
//   <select style="display: none;">
//     <option value="value-1">Option 1</option>
//     <option value="value-2">Option 2</option>
//     <option value="value-3">Option 3</option>
//     <option value="value-4">Option 4</option>
//     <option value="value-5">Option 5</option>
//   </select>
//   <div class="current" data-value="">Option 1</div>
//   <div class="options-container" style="position: absolute; display: none;">
//     <div class="dropdown-item" data-value="value-1" data-index="0">Option1</div>
//     <div class="dropdown-item" data-value="value-2" data-index="1">Option 2</div>
//     <div class="dropdown-item" data-value="value-3" data-index="2">Option 3</div>
//     <div class="dropdown-item" data-value="value-4" data-index="3">Option 4</div>
//     <div class="dropdown-item" data-value="value-5" data-index="4">Option 5</div>
//   </div>
// </div>

(function($) {
    $.fn.dropdownList = function() {
        var $this = this;
        var $div = $('<div>').addClass("dropdown-list");
        $div.prependTo("body");
        $this.appendTo(".dropdown-list");
        $this.css({ 'display': 'none' });
        $this.removeAttr("id");
        var $second = $('<div>').addClass("current").text("Dropdown Menu").attr("data-value", " ");
        $second.appendTo(".dropdown-list");
        var $third = $('<div>').addClass("options-container").css({ 'position': 'absolute', 'display': 'none' });
        $third.appendTo(".dropdown-list");
        for (var i = 0; i < $this.children().length; i++) {
            var $dropdownDiv = $('<div>').addClass("dropdown-item").attr("data-value", ($this.children()[i]).getAttribute('value')).text(($this.children()[i]).text);
            $dropdownDiv.appendTo(".options-container");
        }

        $('.current').click(function() {
            if ($('.options-container').css('display') === 'none') {
                $('.options-container').css('display', '');
            } else {
                $('.options-container').css('display', 'none');
            }
        });
    }
}(jQuery));
$("#the-select").dropdownList();
