var div = document.getElementById('el');
var array = ["divOne", "divTwo", "divThree", "divFour"];

function domOperations(element, array) {
    div.innerHTML = ' ';

    var dFrag = document.createDocumentFragment();
    for (var i = 0, len = array.length; i < len; i+=1) {
        try {

            if (typeof(array[i]) !== 'string' && typeof(array[i]) !== 'number') {
                throw Error('Error!Any of the contents is neither string nor number.');
            }
        } catch (e) {
            console.log(e);
        }

        var newElement = document.createElement('div');
        var currentElement = newElement.cloneNode(true);
        currentElement.innerHTML = array[i];
        dFrag.appendChild(currentElement);
    }
    div.appendChild(dFrag);
}

domOperations(div, array);