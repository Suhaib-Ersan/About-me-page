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

let userNamePrompt = prompt("What's your name?");
userNameFunction(userNamePrompt);

let choosenGreeting = document.getElementById("greetingText");
choosenGreeting.innerHTML = greetingFunction();
