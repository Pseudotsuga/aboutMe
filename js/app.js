'use strict';

var noCrampons = prompt('Do I ice climb?', 'Take your best guess!');
var goPanthers = prompt('Did I graduate from Redmond High School?', 'Take your best guess!');
var socrates = prompt('Do I know everything about software development?', 'Take your best guess!');
var excelWizard = prompt('Have I always wanted to be an accountant?', 'Take your best guess!');
var occidentalis = prompt('Was I born in New York before moving west?', 'Take your best guess!');

// prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.