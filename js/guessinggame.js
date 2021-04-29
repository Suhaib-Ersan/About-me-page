"use strict";

function knowYarmoukQFunction() {
  switch (knowYarmoukQ.toLowerCase()) {
    case "yes":
    case "y":
      {
        let Question ="Did I study at a university by the name of Yarmouk?";
        let QuestionToHtml = document.getElementById(
          "Q1"
        );
        QuestionToHtml.innerHTML = Question;
        
        alert("that's correct");
      }
      break;
    case "no":
    case "n":
      {
        let knowYarmoukQnoText = "too bad you've never heard of it";
        let knowYarmoukQnoTextToHtml = document.getElementById(
          "knowYarmoukText"
        );
        knowYarmoukQnoTextToHtml.innerHTML = knowYarmoukQnoText;
        alert("that's wrong");
      }
      break;
    default:
      {
        let knowYarmoukQdefaultText = "it's a well known university";
        let knowYarmoukQdefaultTextToHtml = document.getElementById(
          "knowYarmoukText"
        );
        knowYarmoukQdefaultTextToHtml.innerHTML = knowYarmoukQdefaultText;
      }
      break;
  }
}

function likeMansafFunction() {
  switch (likeMansafQ) {
    case "yes":
    case "y":
      {
        let likeMansafQyesText = "what a coincidence, I also like mansaf!";
        let likeMansafQyesTextToHtml = document.getElementById(
          "ansafPreferenceText"
        );
        likeMansafQyesTextToHtml.innerHTML = likeMansafQyesText;
        alert("that's correct");
      }
      break;
    case "no":
    case "n":
      {
        let likeMansafQnoText = "you don't like mansaf? you're one of a kind!";
        let likeMansafQnoTextToHtml = document.getElementById(
          "mansafPreferenceText"
        );
        likeMansafQnoTextToHtml.innerHTML = likeMansafQnoText;
        alert("that's wrong");
      }
      break;
    default: {
      let mansafy = "mansaf is pretty good!";
      console.log(mansafy);
      document.getElementById("mansafPreferenceText").innerHTML = mansafy;
      // yesTextToHtml.innerHTML = yesText;
    }
  }
}

let knowYarmoukQ = prompt(
  "Did I study at a university by the name of Yarmouk?"
);
knowYarmoukQFunction(knowYarmoukQ);

let likeMansafQ = prompt("Do I like mansaf?").toLowerCase();
likeMansafFunction(likeMansafQ);
