"use strict";

let userNamePrompt = prompt("What's your name?");
if (userNamePrompt === "null") {
  console.log("user cancelled the questions");
} else {
  let scoreCount = 0;
  function correctOrWrongAndCount(x) {
    if (x === "correctAnswer") {
      ;
      scoreCount++;
      console.log("scoreCount = " + scoreCount);
      return '<span style="color:#1ee270">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that\'s correct&nbsp;&nbsp;<img src="img/correct.png" style="display:inlineclock;position:relative;top:3px;width:20px"></img></span>'
    } else if (x === "wrongAnswer") {
      return '<span style="color:#e02a51">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that\'s wrong&nbsp;&nbsp;<img src="img/wrong.png" style="display:inlineclock;position:relative;top:4px;width:20px"></img></span>';
    }
  }

  userNameFunction(userNamePrompt);

  let knowYarmoukQ = "Did I study at a university by the name of Yarmouk?";
  let knowYarmoukA = prompt(knowYarmoukQ);
  qYesIscorrectAnswer("Q1", "A1", "correctOrNot1", knowYarmoukQ, knowYarmoukA);

  let likeMansafQ = "Do I like mansaf?";
  let likeMansafA = prompt(likeMansafQ);
  qYesIscorrectAnswer("Q2", "A2", "correctOrNot2", likeMansafQ, likeMansafA);

  let LikeCatsQ = "Do I hate cats?";
  let LikeCatsA = prompt(LikeCatsQ);
  qNoIscorrectAnswer("Q3", "A3", "correctOrNot3", LikeCatsQ, LikeCatsA);

  let allergicQ = "Am I allergic to cats?";
  let allergicA = prompt(allergicQ);
  qYesIscorrectAnswer("Q4", "A4", "correctOrNot4", allergicQ, allergicA);

  let likePcsQ = "Do I hate computers";
  let likePcsA = prompt(likePcsQ);
  qNoIscorrectAnswer("Q5", "A5", "correctOrNot5", likePcsQ, likePcsA);

  fingersNumQFunction(); //this is Q6

  let favSeasonArray = ["spring", "summer", "fall", "winter"]; // this is Q7
  let favSeasonQ = "What's my favorite season?\noptions are: spring, summer, fall, and winter.";
  let favSeasonA = "";
  arrayCheck(favSeasonArray, "Q7", "A7", "correctOrNot7", favSeasonQ, favSeasonA, favSeasonArray[3]);

  alert("You got " + scoreCount + " out of 7");
  document.getElementById("scoreCountHtml").innerHTML = scoreCount + " / 7";

  alert("You finished the questions, " + userNamePrompt, '!');

  function lowerCaseAllAndCapitalizeFirstLetter(string1) {
    return string1.toLowerCase(), string1.charAt(0).toUpperCase() + string1.slice(1);
  }

  function userNameFunction(userName) {
    {
      if (userName) {
        let userNameToHtml = document.getElementById("userNameText");
        userNameToHtml.innerHTML = lowerCaseAllAndCapitalizeFirstLetter(userName);
      } else {
        let userNameToHtml = document.getElementById("userNameText");
        userNameToHtml.innerHTML = "person of earth";
      }
    }
  }

  function fingersNumQFunction() {
    var i1 = 0;
    for (i1 = 0; i1 < 4; i1++) {
      var fingersNumQ = "How many fingers do I have?";
      var fingersNumA = prompt(fingersNumQ);

      if (fingersNumA === "10") {
        document.getElementById("Q6").innerHTML = fingersNumQ;
        document.getElementById("A6").innerHTML = fingersNumA;
        document.getElementById("correctOrNot6").innerHTML = correctOrWrongAndCount("correctAnswer");
        alert("that's correct");
        break;
      } else if (fingersNumA > 10) {
        alert("that's too high");
      } else if (fingersNumA < 10) {
        alert("that's too low");
      } else {
        alert("Please enter a number");
      }
    }
    if (fingersNumA !== "10") {
      document.getElementById("Q6").innerHTML = fingersNumQ;
      document.getElementById("A6").innerHTML = fingersNumA;
      document.getElementById("correctOrNot6").innerHTML = correctOrWrongAndCount("wrongAnswer");
      alert("Out of tries!");
    }
  }

  function qYesIscorrectAnswer(QHtml, AHtml, correctOrNotHtml, QPrompt, AToPrompt) {
    switch (AToPrompt.toLowerCase()) {
      case "yes":
      case "y":
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("correctAnswer");
          alert("that's correct");
        }
        break;
      case "no":
      case "n":
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("wrongAnswer");
          alert("that's wrong");
        }
        break;
      default:
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("wrongAnswer");
          alert("that's wrong");
        }
        break;
    }
  }

  function qNoIscorrectAnswer(QHtml, AHtml, correctOrNotHtml, QPrompt, AToPrompt) {
    switch (AToPrompt.toLowerCase()) {
      case "yes":
      case "y":
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("wrongAnswer");
          alert("that's correct");
        }
        break;
      case "no":
      case "n":
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("correctAnswer");
          alert("that's correct");
        }
        break;
      default:
        {
          document.getElementById(QHtml).innerHTML = QPrompt;
          document.getElementById(AHtml).innerHTML = AToPrompt;
          document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("wrongAnswer");
          alert("that's wrong");
        }
        break;
    }
  }

  function arrayCheck(array, QHtml, AHtml, correctOrNotHtml, QPrompt, AToPrompt, correctItemFromArray) {
    var i2;
    for (i2 = 0; i2 < 6; i2++) {
      var AToPrompt = prompt(QPrompt).toLowerCase();
      if (AToPrompt === correctItemFromArray) {
        document.getElementById(QHtml).innerHTML = QPrompt;
        document.getElementById(AHtml).innerHTML = AToPrompt;
        document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("correctAnswer");
        alert("that's correct");
        break;
      } else {
        alert("that's wrong");
      }
    }
    if (AToPrompt != correctItemFromArray) {
      document.getElementById(QHtml).innerHTML = QPrompt;
      document.getElementById(AHtml).innerHTML = AToPrompt;
      document.getElementById(correctOrNotHtml).innerHTML = correctOrWrongAndCount("wrongAnswer");
      alert("Out of tries!");
    }
  }
}
