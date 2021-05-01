'use strict';

let correctAnswer = '<span style="color:#1ee270">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that\'s correct&nbsp;&nbsp;<img src="img/correct.png" style="display:inlineclock;position:relative;top:3px;width:20px"></img></span>';
let wrongAnswer = '<span style="color:#e02a51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that\'s wrong&nbsp;&nbsp;<img src="img/wrong.png" style="display:inlineclock;position:relative;top:4px;width:20px"></img></span>';

function lowerCaseAllAndCapitalizeFirstLetter(string1) {
  return string1.toLowerCase(), string1.charAt(0).toUpperCase() + string1.slice(1);
}

function userNameFunction(userName) {
  {
    if (userName) {
      let userNameToHtml = document.getElementById('userNameText');
      userNameToHtml.innerHTML = lowerCaseAllAndCapitalizeFirstLetter(userName);
    } else {
      let userNameToHtml = document.getElementById('userNameText');
      userNameToHtml.innerHTML = 'person of earth';
    }
  }
}

let userNamePrompt = prompt('What\'s your name?');
userNameFunction(userNamePrompt);

let knowYarmoukQ = 'Did I study at a university by the name of Yarmouk?';
let knowYarmoukA = prompt(knowYarmoukQ);
qYesIscorrectAnswer('Q1','A1','correctOrNot1',knowYarmoukQ,knowYarmoukA);

let likeMansafQ = 'Do I like mansaf?';
let likeMansafA = prompt(likeMansafQ);
qYesIscorrectAnswer('Q2','A2','correctOrNot2',likeMansafQ,likeMansafA);

let LikeCatsQ = 'Do I hate cats?';
let LikeCatsA = prompt(LikeCatsQ);
qNoIscorrectAnswer('Q3','A3','correctOrNot3',LikeCatsQ,LikeCatsA);

let allergicQ = 'Am I allergic to cats?';
let allergicA = prompt(allergicQ);
qYesIscorrectAnswer('Q4','A4','correctOrNot4',allergicQ,allergicA);

let likePcsQ = 'Do I hate computers';
let likePcsA = prompt(likePcsQ);
qYesIscorrectAnswer('Q5','A5','correctOrNot5',likePcsQ,likePcsA);

alert('You finished the questions, '+userNamePrompt);


function qYesIscorrectAnswer(QHtml,AHtml,correctOrNotHtml,QPrompt,AToPrompt) {
  switch (AToPrompt.toLowerCase()) {
  case 'yes':
  case 'y':
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = correctAnswer;
      alert('that\'s correct');
    }
    break;
  case 'no':
  case 'n':
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = wrongAnswer;
      alert('that\'s wrong');
    }
    break;
  default:
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = wrongAnswer;
      alert('that\'s wrong');
    }
    break;
  }
}

function qNoIscorrectAnswer(QHtml,AHtml,correctOrNotHtml,QPrompt,AToPrompt) {
  switch (AToPrompt.toLowerCase()) {
  case 'yes':
  case 'y':
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = wrongAnswer;
      alert('that\'s correct');
    }
    break;
  case 'no':
  case 'n':
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = correctAnswer;
      alert('that\'s correct');
    }
    break;
  default:
    {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = wrongAnswer;
      alert('that\'s wrong');
    }
    break;
  }
}
