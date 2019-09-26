'use strict';
var correctNumber = 63;
var numberGuessLoop = 1;
var numberGuessesAllowed = 4;
var answerAchieved = 0;
var arrayAnswers = ['triangle','hexagon','octagon','dodecahedron'];
var arrayGuessesAllowed = 6;
var arrayLoopTracker = 0;
var arrayAchievement = 0;
var totalScore = 0;

var username = prompt('What are you called?');
alert('Hello ' + username + ' ! Thank you for your interest in my site.');
console.log(username);
// First Question Block
var noCrampons = prompt('Do I ice climb?', 'Yes/no or y/n answer formats accepted.');
console.log(noCrampons);
if(noCrampons.toLowerCase() === 'n' || noCrampons.toLowerCase() === 'no'){
  alert('You\'re right, ice climbing would be a slippery slope towards year-round dirtbagging');
  totalScore ++;
}else{
  alert('Better luck next time!');
}
// Second Question Block
var goPanthers = prompt('Did I graduate from Redmond High School?', 'Take your best guess!');
console.log(goPanthers);
if(goPanthers.toLowerCase() === 'y' || goPanthers.toLowerCase() === 'yes'){
  alert('You\'re right, let\'s go panthers!');
  totalScore ++;
}else{
  alert('Better luck next time!');
}
// Third Question Block
var socrates = prompt('Do I know everything about software development?', 'Take your best guess!');
console.log(socrates);
if(socrates.toLowerCase() === 'n' || socrates.toLowerCase() === 'no'){
  alert('You\'re right, I know just enough to get excited about how much I have to learn.');
  totalScore ++;
}else{
  alert('Better luck next time!');
}
// Fourth Question Block
var excelWizard = prompt('Have I always wanted to be an accountant?', 'Take your best guess!');
console.log(excelWizard);
if(excelWizard.toLowerCase() === 'n' || excelWizard.toLowerCase() === 'no'){
  alert('You\'re right, I never quite got interested.');
  totalScore ++;
}else{
  alert('Better luck next time!');
}
// Fifth Question Block
var occidentalis = prompt('Was I born in New York before moving west?', 'Take your best guess!');
console.log(occidentalis);
if(occidentalis.toLowerCase() === 'n' || occidentalis.toLowerCase() === 'no'){
  alert('You\'re right, west coast best coast ' + username + '!');
  totalScore ++;
}else{
  alert('Better luck next time ' + username + '!');
}
// Sixth Question Block
//    Standard solution
while(numberGuessLoop <= numberGuessesAllowed){
  var numberGuess = prompt('Guess a number between 1 and 100!', 'Numeric characters only please.');
  console.log(numberGuess);
  numberGuess = parseInt(numberGuess, 10);
  if(numberGuess === correctNumber){
    alert('Great guess, you got it.');
    totalScore ++;
    numberGuessLoop += numberGuessesAllowed;
  } if(numberGuess > correctNumber){
    alert('Too high!');
    numberGuessLoop ++;
  } if(numberGuess < correctNumber){
    alert('Too low.');
    numberGuessLoop ++;
  }
}
//Switch Case Solution
// overengineeredSoup: {
//   while(numberGuessLoop <= 4){
//     var numberGuess = prompt('Guess a number between 1 and 100!', 'Numeric characters only please.');
//     console.log(numberGuess);
//     switch(Math.sign(correctNumber - numberGuess)) {
//     case (0):
//       alert('By George, you\'ve got it.');
//       numberGuessLoop += numberGuessesAllowed;
//       answerAchieved ++;
//       totalScore ++;
//       break overengineeredSoup;
//     case (-1):
//       alert('Too high.');
//       numberGuessLoop ++;
//       break;
//     case(+1):
//       alert('Too low.');
//       numberGuessLoop ++;
//       break;
//     default:
//       alert('Numeric characters only please.');
//       numberGuessLoop ++;
//       break;
//     }
//   }
// }
// if(numberGuessLoop > 4 && answerAchieved === 0){ alert('I\'m sorry, you\'ve ran out of tries. The correct answer was 63.');
// }

//7th Question
while(arrayLoopTracker <= arrayGuessesAllowed){
  var shapeReturn = prompt('Which shapes do I prefer?');
  console.log(shapeReturn);
  if(arrayAnswers.includes(shapeReturn.toLowerCase())){
    alert(shapeReturn + ' is correct. All possible answers include:' + arrayAnswers);
    totalScore ++;
    arrayLoopTracker += arrayGuessesAllowed;
  } else {
    alert('I\'m sorry, that wasn\'t quite correct.');
    arrayLoopTracker++;
  }
}

if(arrayLoopTracker > arrayGuessesAllowed && arrayAchievement === 0){
  alert('You ran out of attempts. Correct answers were ' + arrayAnswers);
}

//Total Score Declaration
alert('You answered ' + totalScore + 'out of 7 questions correctly.');
if(totalScore === 7){
  alert('A righteous conorisseur I see.');
}
