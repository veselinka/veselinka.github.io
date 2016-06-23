// Problem 1. Reverse string
// Write a JavaScript function that reverses a string and returns it.
console.log("Problem 1");

function reverseString(input) {
    var outputTemp = [];
    for (var i = 0; i < input.length; i++) {
        outputTemp[i] = input[input.length - 1 - i];
    }
    var output = outputTemp.join('');
    return output;
}
console.log(reverseString("sample"));


// Problem 2. Correct brackets
// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
console.log("Problem 2");


function correctBrackets(input) {
    var leftBracket = "(";
    var rightBracket = ")";
    var counter = 0;
    var i;
    if (input.indexOf(")") < input.indexOf("(")) {
        return false;
    }
    for (i = 0, len = input.length; i < len; i++) {
        if (input[i] == leftBracket) {
            counter++;
        } else if (input[i] == rightBracket) {
            counter--;
        }
    }
    if (!counter) {
        return true;
    } else {
        return false;
    }
}
console.log(correctBrackets("(p – 1)x + 4(p + 3)x = 2(p – 1)"));
console.log(correctBrackets("((a+b)/5-d)"));
console.log(correctBrackets(")(a+b))"));


// Problem 3. Sub-string in text
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
console.log("Problem 3");


function substring(input, searched) {
    var counter = 0;
    var i;
    for (i = 0, len = input.length; i < len; i++) {
        var sub = input.substr(i, searched.length);
        if (sub.toLowerCase() === searched.toLowerCase()) {
            counter++;
        }

    }
    return counter;
}
var input = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days";
var searched = "in";
console.log(substring(input, searched));

// Problem 4. Parse tags
// You are given a text. Write a function that changes the text in all regions:
// <upcase>text</upcase> to uppercase.
// <lowcase>text</lowcase> to lowercase
// <mixcase>text</mixcase> to mix casing(random)


var upcase = '<upcase>';
var lowcase = '<lowcase>';
var mixcase = '<mixcase>';
var output = '';
function parseTags(text) {
    for (var i = 0; i < text.length; i += 1) {
        if (text[i] === '<' && text.substr(i, 8) === upcase) {
            i += 8;
            while (true) {
                if (text[i] === '<') {
                    i += 8;
                    break;
                }
                output = output + text[i].toUpperCase();
                i++;
            }
        }
         else if (text[i] === '<' && text.substr(i, 9) === lowcase) {
            i += 9;
            while (true) {
                if (text[i] === '<') {
                    i += 9;
                    break;
                }
                output = output + text[i].toLowerCase();
                i++;
            }
        } 
        else if (text[i] === '<' && text.substr(i, 9) === mixcase) {
            i += 9;
            while (true) {
                if (text[i] === '<') {
                    i += 9;
                    break;
                }
                var randomNumber = Math.random();
                if (randomNumber <= 0.5) {
                    output = output + text[i].toUpperCase();
                } else {
                    output = output + text[i].toLowerCase();
                }
                i++;
            }
        } 






        else {
            output += text[i];
        }
    }
    return output;
}
var text = "<mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase>";
console.log(parseTags(text));


// Problem 5. nbsp
// Write a function that replaces non breaking white-spaces in a text with &nbsp;
console.log("Problem 5");

function replaceWhiteSpaces(input) {
    var result = input.replace(/ /g, '&nbsp');
    return result;
}
var input = "This is a text with spaces"
console.log(replaceWhiteSpaces(input));


// Problem 6. Extract text from HTML
// Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags.
console.log("Problem 6");

function htmlTextExtract(input) {
    var i;
    var outOfTag;
    var result = "";
    for (var len = input.length, i = 0; i < len; i++) {
        if (input[i] === '>') {
            outOfTag = true;
        }
        if (input[i] === '<') {
            outOfTag = false;
        }
        while (outOfTag) {
            i++;
            if (input[i] === '<' || input[i] === undefined) {
                outOfTag = false;
                break;
            }
            result = result + input[i];
        }
    }
    return result;
};
var input = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(htmlTextExtract(input));

// Problem 7. Parse URL
// Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
// Return the elements in a JSON object.



function parseURL(url) {

    var index = url.indexOf(':');
    var protocol = url.substring(0, index);
    url = url.replace(protocol + '://', '');
    index = url.indexOf('/');
    var server = url.substring(0, index);
    url = url.replace(server, '');
    var resource = url;

    function buildJSON(protocol, server, resources) {
        return {
            protocol: protocol,
            server: server,
            resource: resources
        }
    }

    var urlJSON = buildJSON(protocol, server, resource);

    return urlJSON;
}

console.log(parseURL("http://telerikacademy.com/Courses/Courses/Details/239"));


// Problem 8. Replace tags
// Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

console.log("Problem 8 - s regular expressions");
var start = '[URL';
var end = ']';
var close = '[/URL]';

function replaceTag(input) {
    var result = input.replace(/<a href/g, start);
    var nextResult = result.replace(/<\/a>/g, close);
    var final = nextResult.replace(/">/g, end);
    return final;
}
var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log(replaceTag(input));


console.log("Problem 8 - sus substr");

function replaceTags(input) {


    var i;
    for (var len = input.length, i = 0; i < len; i += 1) {
        if (input.substr(i, 7) === '<a href') {
            input = input.replace(/<a href/g, start);
        }
        if (input.substr(i, 2) === '">') {
            input = input.replace(/">/g, end);
        }
        if (input.substr(i, 4) === '</a>') {
            input = input.replace(/<\/a>/g, close);
        }
    }
    return input;
}
var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log(replaceTags(input));


// Problem 9. Extract e-mails
// Write a function for extracting all email addresses from given text.
// All sub-strings that match the format @… should be recognized as emails.
// Return the emails as array of strings.
console.log("Problem 9");

function extractEmails() {
    var input = "This is a text with email likes this firstmail@abv.bg and this one secondmail@gmail.com";
    var mailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-])+)/gi;;
    var result = input.match(mailRegex);
    return result;

}
console.log(extractEmails());


// Problem 10. Find palindromes
// Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

console.log("Problem 10");

function palindrome(word) {
    var len = word.length;
    if (len < 2) {
        return true;
    }
    var start = 0;
    var end = len - 1;
    while (start < end) {
        if (word[start] != word[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
}
console.log(palindrome("alenafanela"));
console.log(palindrome("ABBA"));
console.log(palindrome("lamal"));
console.log(palindrome("exe"));
console.log(palindrome("ehennne"));



// Problem 11. String format
// Write a function that formats a string using placeholders.
// The function should work with up to 30 placeholders and all types.
console.log("Problem 11");
var format = '{0}, {1}, {0} text {2}';

function stringFormat(format) {
    var placeholder = '';
    for (var i = 0; i < arguments.length; i += 1) {
        placeholder = '{' + (i - 1) + '}';
        for (var j = 0; j < arguments.length; j += 1) {
            format = format.replace(placeholder, arguments[i]);
        }
    }
    return format;
}
console.log(stringFormat(format, 1, 'Pesho', 'Gosho', '1245'));
