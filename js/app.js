"use strict";

function lowerCaseAllAndCapitalizeFirstLetter(string1) {
  return (
    string1.toLowerCase(), string1.charAt(0).toUpperCase() + string1.slice(1)
  );
}

function greetingFunction() {
  let greeting;
  let today = new Date();
  let hourNow = today.getHours();
  {
    if (hourNow > 18) {
      greeting = "Good evening";
    } else if (hourNow > 12) {
      greeting = "Good afternoon";
    } else if (hourNow > 0) {
      greeting = "Good morning";
    } else {
      greeting = "Welcome";
    }
    return greeting;
  }
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

function knowYarmoukQFunction() {
  switch (knowYarmoukQ.toLowerCase()) {
    case "yes":
    case "y":
      {
        let knowYarmoukQyesText =
          "it's a well known university, so it's not weird you've heard of it";
        let knowYarmoukQyesTextToHtml = document.getElementById(
          "knowYarmoukText"
        );
        knowYarmoukQyesTextToHtml.innerHTML = knowYarmoukQyesText;
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

let userNamePrompt = prompt("What's your name?");
userNameFunction(userNamePrompt);

let choosenGreeting = document.getElementById("greetingText");
choosenGreeting.innerHTML = greetingFunction();

let knowYarmoukQ = prompt("Do you know a university by the name of Yarmouk?");
knowYarmoukQFunction(knowYarmoukQ);

let likeMansafQ = prompt("Do you like mansaf?").toLowerCase();
console.log("likeMansafQ = " + likeMansafQ);
{
  switch (likeMansafQ) {
    case "yes":
    case "y":
      {
        let likeMansafQyesText = "what a coincidence, I also like mansaf!";
        let likeMansafQyesTextToHtml = document.getElementById(
          "mansafPreferenceText"
        );
        likeMansafQyesTextToHtml.innerHTML = likeMansafQyesText;
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
