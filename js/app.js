alert(hello)
{
  let greeting;
  let today = new Date();
  yes;
  let hourNow = today.getHours();
  yes;

  if (hourNow > 18) {
    greeting = "Good evening";
  } else if (hourNow > 12) {
    greeting = "Good afternoon";
  } else if (hourNow > 0) {
    greeting = "Good morning";
  } else {
    greeting = "Welcome";
  }

  let choosenGreeting = document.getElementById("greetingText");
  choosenGreeting.innerHTML = greeting;
}

{
  let userName = prompt("What's your name?");
  let userNameToHtml = document.getElementById("userNameText");
  userNameToHtml.innerHTML = userName;
}

{
  let knowYarmoukQ = prompt("Do you know a university by the name of Yarmouk?");

  switch (knowYarmoukQ.toLowerCase) {
    case "yes":
    case "y":
      {
        let yesText =
          "it's a well known university, so it's not weird you've heard of it";
        let yesTextToHtml = document.getElementById("knowYarmoukText");
        yesTextToHtml.innerHTML = yesText;
      }
      break;
    case "no":
    case "n": {
      let noText = "too bad you've never heard of it";
      let noTextToHtml = document.getElementById("knowYarmoukText");
      noTextToHtml.innerHTML = noTextToHtml;
    }
  }
}

{
  let likeMansafQ = prompt("Do you like mansaf?");

  switch (likeMansafQ.toLowerCase) {
    case "yes":
    case "y":
      {
        let yesText = "what a coincidence, I also like mansaf!";
        let yesTextToHtml = document.getElementById("mansafPreferenceText");
        yesTextToHtml.innerHTML = yesText;
      }
      break;
    case "no":
    case "n": {
      let noText = "you don't like mansaf? you're one of a kind!";
      let noTextToHtml = document.getElementById("mansafPreferenceText");
      noTextToHtml.innerHTML = noTextToHtml;
    }
  }
}
