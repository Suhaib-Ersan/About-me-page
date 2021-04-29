"use strict";

let rightAnswer = "<span style='color:#1ee270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that's correct&nbsp;&nbsp;<img src='img/right.png' style='display:inlineclock;position:relative;top:3px;width:20px'></img></span>";
let wrongAnswer = "<span style='color:#e02a51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that's wrong&nbsp;&nbsp;<img src='img/wrong.png' style='display:inlineclock;position:relative;top:4px;width:20px'></img></span>";

let knowYarmoukQ = prompt("Did I study at a university by the name of Yarmouk?");
knowYarmoukQFunction(knowYarmoukQ);

// let likeMansafQ = prompt("Do I like mansaf?");
// likeMansafFunction(likeMansafQ);

function knowYarmoukQFunction() {
  switch (knowYarmoukQ.toLowerCase()) {
    case "yes":
    case "y":
      {
        document.getElementById("Q1").innerHTML = "Did I study at a university by the name of Yarmouk?";
        document.getElementById("A1").innerHTML = knowYarmoukQ;
        document.getElementById("correctOrNot1").innerHTML = rightAnswer; 
        alert('that\'s correct');
      }
      break;
    case "no":
    case "n":
      {
        document.getElementById("Q1").innerHTML = "Did I study at a university by the name of Yarmouk?";
        document.getElementById("A1").innerHTML = knowYarmoukQ;
        document.getElementById("correctOrNot1").innerHTML = wrongAnswer;
        alert("that's wrong");
      }
      break;
    default:
      {
        document.getElementById("Q1").innerHTML = "Did I study at a university by the name of Yarmouk?";
        document.getElementById("A1").innerHTML = knowYarmoukQ;
        document.getElementById("correctOrNot1").innerHTML = wrongAnswer;
        alert("that's wrong");
      }
      break;
  }
}

// function likeMansafFunction() {
//   switch (likeMansafQ.toLowerCase()) {
//     case "yes":
//     case "y":
//       {
//         let likeMansafQyesText = "what a coincidence, I also like mansaf!";
//         let likeMansafQyesTextToHtml = document.getElementById("ansafPreferenceText");
//         likeMansafQyesTextToHtml.innerHTML = likeMansafQyesText;
//         alert("that's correct");
//       }
//       break;
//     case "no":
//     case "n":
//       {
//         let likeMansafQnoText = "you don't like mansaf? you're one of a kind!";
//         let likeMansafQnoTextToHtml = document.getElementById("mansafPreferenceText");
//         likeMansafQnoTextToHtml.innerHTML = likeMansafQnoText;
//         alert("that's wrong");
//       }
//       break;
//     default: {
//       let mansafy = "mansaf is pretty good!";
//       console.log(mansafy);
//       document.getElementById("mansafPreferenceText").innerHTML = mansafy;
//       // yesTextToHtml.innerHTML = yesText;
//     }
//   }
// }
