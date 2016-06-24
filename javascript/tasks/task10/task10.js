// Problem 1. Format with placeholders
// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype
console.log("Problem 1");
if (!String.prototype.format) {
String.prototype.format = function(options){
	var format=this;
 for (var key in options) {
       var regex=new RegExp('#{'+key+'}','gi');
            format = format.replace(regex, options[key]); 
    }
    return format;
}
};
var options = {fname: 'Johnnie',lname:"Walker",age: 50};
console.log('Hello, there! Are you #{fname} #{lname} ?'.format(options));


// Problem 2. HTML binding
// Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype

console.log("Problem 2");
if (!String.prototype.bind) {
    String.prototype.bind = function(options) {
        var output;
        var pattern1 = /data-bind-content="(.*?)".*?>/g;
        output = this.replace(pattern1, function(pattern, groupName){
            return  pattern + options[groupName];
        });

        var pattern2 = /data-bind-(.*?)="(.*?)"/g;
        output = output.replace(pattern2, function(pattern, groupType, groupName) {
            if (groupType === 'class') {
                var className = groupType + '="' + options[groupName] + '"';
            }
            if (groupType === 'href') {
                var hrefLink = groupType + '="' + options[groupName] + '"';
            }
            pattern = pattern + ' ' + hrefLink + className;
            pattern = pattern.replace(/undefined/g,'');
            return pattern;
        });
        return output;
    }
}

var string = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
string = string.bind({
    name: 'Elena',
    link: 'http://telerikacademy.com'
});
console.log(string);
