mansafQuestion = prompt('Do you like mansaf?').toLocaleLowerCase;

switch (mansafQuestion) {
    case 'yes':
    case 'y':
        let alsoLikeMansaf = 'what a coincidence, I also like mansaf!';
        let mansafQuestionYes = document.getElementById("mansafPreference");
        mansafQuestionYes.innerHTML = alsoLikeMansaf;
    break;
    case 'no':
        case 'n':
};

// {
//     var greeting;
//     var today = new Date();
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