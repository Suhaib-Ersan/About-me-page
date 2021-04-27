// let mansafQuestion = prompt('Do you like mansaf?').toLowerCase;

function askMansafQuestion (answer) {switch (mansafQuestion) {
case 'yes':
case 'y': {
  let LikeMansafOrNot = 'what a coincidence, I also like mansaf!';
  let mansafQuestionYes = document.getElementById('mansafPreference');
  mansafQuestionYes.innerHTML = LikeMansafOrNot;
}
  break;
case 'no':
case 'n': {
  let LikeMansafOrNot = 'you don\'t like mansaf? you\'re one of a kind!';
  let mansafQuestionYes = document.getElementById('mansafPreference');
  mansafQuestionYes.innerHTML = LikeMansafOrNot;
}
}
}

askMansafQuestion(mansafQuestion);




// {
//     var greeting;
//     var today = new Date();yes
//     var hourNow = today.getHours();yes

//     if (hourNow > 18) {
//         greeting = "Good evening";
//     } else if (hourNow > 12) {
//         greeting = "Good afternoon";
//     } else if (hourNow > 0) {
//         greeting = "Good morning";
//     } else {
//         greeting = "Welcome";
//     }

//     var greeting_space2 = document.getElementById("greetingSpace");
//     greeting_space2.innerHTML = greeting;
// }
