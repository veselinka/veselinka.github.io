console.log("Task 1");


var table,
    tableTemplateHtml,
    tableTemplate;
table = {
    headers: ['Vendor', 'Model', 'OS'],
    items: [{
        col1: 'Nokia',
        col2: 'Lumia 920',
        col3: 'Windows Phone'
    }, {
        col1: 'LG',
        col2: 'Nexus 5',
        col3: 'Android'
    }, {
        col1: 'Apple',
        col2: 'iPhone 6',
        col3: 'iOS'
    }]
};
tableTemplateHtml = document.getElementById('table-template').innerHTML;
tableTemplate = Handlebars.compile(tableTemplateHtml);
document.getElementById('tableDiv').innerHTML += tableTemplate(table);



console.log("Task 2");
var data,
    anchorsTemplateHtml,
    anchorsTemplate;

data = {
    animals: [{
        name: 'Lion',
        url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
    }, {
        name: 'Turtle',
        url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
    }, {
        name: 'Dog'
    }, {
        name: 'Cat',
        url: 'http://i.imgur.com/Ruuef.jpg'
    }, {
        name: 'Dog Again'
    }]
}
anchorsTemplateHtml = document.getElementById('anchors-template').innerHTML;
anchorsTemplate = Handlebars.compile(anchorsTemplateHtml);
document.getElementById('secondDiv').innerHTML += anchorsTemplate(data);



console.log("Task 3");
var listView = function() {
    var books,
        booksTemplateHtml,
        booksTemplate;
books= {
    list: [{
        id: 1,
        title: 'JavaScript: The Good Parts'
    }, {
        id: 2,
        title: 'Secrets of the JavaScript Ninja'
    }, {
        id: 3,
        title: 'Core HTML5 Canvas'
    }, {
        id: 4,
        title: 'JavaScript Patterns'
    }]
}
    booksTemplateHtml = document.getElementById('books-template').innerHTML;
    booksTemplate = Handlebars.compile(booksTemplateHtml);
    document.getElementById('books-list').innerHTML += booksTemplate(books);
};
listView();
