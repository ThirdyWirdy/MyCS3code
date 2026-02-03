var num1 = prompt('Enter the first number:');
var num2 = prompt('Enter the second number:');
var quo = num1 / num2;

document.getElementById('decNum').innerHTML = 'Your numbers are ' + num1 + ' and ' + num2 + '.';
document.getElementById('line1').innerHTML = num1 + '^' + num2 + " is " + Math.pow(num1, num2) + '.';
document.getElementById('line2').innerHTML = 'round() of ' + num1 + " / " + num2 + ' is ' + Math.round(quo) + '.';
document.getElementById('line3').innerHTML = 'ceil() of ' + num1 + " / " + num2 + ' is ' + Math.ceil(quo) + '.';
document.getElementById('line4').innerHTML = 'floor() of ' + num1 + " / " + num2 + ' is ' + Math.floor(quo) + '.';

function letterAsk() {
    var word = "Scripted";
    let letter = prompt('Enter a letter:');
    let searchL;

    searchL = word.indexOf(letter);
    if (searchL !== -1) {
        searchL += 1;
        let suffix;
        if (searchL === 1) {
            suffix = "st";
        } else if (searchL === 2) {
            suffix = "nd";
        } else if (searchL === 3) {
            suffix = "rd";
        } else {
            suffix = "th";
        }

        document.getElementById('letterResult').innerHTML = letter + " is the " + searchL + suffix + " letter in the mystery word, which is composed of " + word.length + " letters!";
    } else {
        document.getElementById('letterResult').innerHTML = letter + " does not exist in the mystery word.";
    }
}

function sayName() {
    let name = prompt("What is your name?");
    document.getElementById('nameResult').innerHTML = "Your name is " + name.toUpperCase() + ".";
}