'use strict';
var correctNumber = 63;
var numberGuessLoop = 1;
var numberGuessesAllowed = 4;
var answerAchieved = 0;

var username = prompt('What are you called?');
alert('Hello ' + username + ' ! Thank you for your interest in my site.');

// First Question Block
var noCrampons = prompt('Do I ice climb?', 'Yes/no or y/n answer formats accepted.');

if(noCrampons.toLowerCase() === 'n' || noCrampons.toLowerCase() === 'no'){
  alert('You\'re right, ice climbing would be a slippery slope towards year-round dirtbagging');
}else{
  alert('Better luck next time!');
}

if(noCrampons.toLowerCase() === 'n' || noCrampons.toLowerCase() === 'no'){
  console.log('You\'re right, ice climbing would be a slippery slope towards year-round dirtbagging');
}else{
  console.log('Better luck next time!');
}

// Second Question Block
var goPanthers = prompt('Did I graduate from Redmond High School?', 'Take your best guess!');

if(goPanthers.toLowerCase() === 'y' || goPanthers.toLowerCase() === 'yes'){
  alert('You\'re right, let\'s go panthers!');
}else{
  alert('Better luck next time!');
}

if(goPanthers.toLowerCase() === 'n' || goPanthers.toLowerCase() === 'no'){
  console.log('You\'re right, let\'s go panthers!');
}else{
  console.log('Better luck next time!');
}

// Third Question Block
var socrates = prompt('Do I know everything about software development?', 'Take your best guess!');
if(socrates.toLowerCase() === 'n' || socrates.toLowerCase() === 'no'){
  alert('You\'re right, I know just enough to get excited about how much I have to learn.');
}else{
  alert('Better luck next time!');
}

if(socrates.toLowerCase() === 'n' || socrates.toLowerCase() === 'no'){
  console.log('You\'re right, I know just enough to get excited about how much I have to learn.');
}else{
  console.log('Better luck next time!');
}

// Fourth Question Block
var excelWizard = prompt('Have I always wanted to be an accountant?', 'Take your best guess!');
if(excelWizard.toLowerCase() === 'n' || excelWizard.toLowerCase() === 'no'){
  alert('You\'re right, I never quite got interested.');
}else{
  alert('Better luck next time!');
}

if(excelWizard.toLowerCase() === 'n' || excelWizard.toLowerCase() === 'no'){
  console.log('You\'re right, I never quite got interested.');
}else{
  console.log('Better luck next time!');
}
// Fifth Question Block
var occidentalis = prompt('Was I born in New York before moving west?', 'Take your best guess!');
if(occidentalis.toLowerCase() === 'n' || occidentalis.toLowerCase() === 'no'){
  alert('You\'re right, west coast best coast ' + username + '!');
}else{
  alert('Better luck next time ' + username + '!');
}

if(occidentalis.toLowerCase() === 'n' || occidentalis.toLowerCase() === 'no'){
  console.log('You\'re right, west coast best coast!');
}else{
  console.log('Better luck next time!');
}

//   // Sixth Question Block
//   //    Standard solution
//   while(numberGuessLoop <= numberGuessesAllowed){
//     var numberGuess = prompt('Guess a number between 1 and 100!', 'Numeric characters only please.');
//     numberGuess = parseInt(numberGuess, 10);
//     if(numberGuess === correctNumber){
//       alert('Great guess, you got it.');
//       numberGuessLoop += numberGuessesAllowed;
//       console.log('correctAns');
//     } if(numberGuess > correctNumber){
//       alert('Too high!');
//       numberGuessLoop ++;
//       console.log('High');
//     } if(numberGuess < correctNumber){
//       alert('Too low.');
//       numberGuessLoop ++;
//       console.log('Low');
//     }
//   }
overengineeredSoup: {
  while(numberGuessLoop <= 4){
    var numberGuess = prompt('Guess a number between 1 and 100!', 'Numeric characters only please.');
    console.log(numberGuess);
    switch(Math.sign(correctNumber - numberGuess)) {
    case (0):
      alert('By George, you\'ve got it.');
      numberGuessLoop += numberGuessesAllowed;
      answerAchieved ++;
      break overengineeredSoup;
    case (-1):
      alert('Too high.');
      numberGuessLoop ++;
      console.log(numberGuessLoop);
      break;
    case(+1):
      alert('Too low.');
      numberGuessLoop ++;
      console.log(numberGuessLoop);
      break;
    default:
      alert('Numeric characters only please.');
      numberGuessLoop ++;
      console.log(numberGuessLoop);
      break;
    }
  }
}
if(numberGuessLoop > 4 && answerAchieved === 0){ alert('I\'m sorry, you\'ve ran out of tries. The correct answer was 63.');
}

