'use strict';

var noCrampons = prompt('Do I ice climb?', 'Yes/no or y/n answer formats accepted.');
if(noCrampons === 'n' || noCrampons === 'no'){
  alert('You\'re right, ice climbing would be a slippery slope towards year-round dirtbagging');
}else{
  alert('Better luck next time!');
}

var goPanthers = prompt('Did I graduate from Redmond High School?', 'Take your best guess!');
if(goPanthers === 'y' || goPanthers === 'yes'){
  alert('You\'re right, let\'s go panthers!');
}else{
  alert('Better luck next time!');
}

var socrates = prompt('Do I know everything about software development?', 'Take your best guess!');
if(socrates === 'n' || socrates === 'no'){
  alert('You\'re right, I know just enough to get excited about how much I have to learn.');
}else{
  alert('Better luck next time!');
}

var excelWizard = prompt('Have I always wanted to be an accountant?', 'Take your best guess!');
if(excelWizard === 'n' || excelWizard === 'no'){
  alert('You\'re right, I never quite got interested.');
}else{
  alert('Better luck next time!');
}

var occidentalis = prompt('Was I born in New York before moving west?', 'Take your best guess!');
if(occidentalis === 'n' || occidentalis === 'no'){
  alert('You\'re right, west coast best coast!');
}else{
  alert('Better luck next time!');
}

// prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.
