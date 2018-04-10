//creating the prompt to ask for first name and assigning the variable firstName
let fullName = prompt("Please enter your full name.");

let attempts = 1;

parseInt(attempts);

while (fullName === "" || fullName == null) {
    fullName = prompt("You have to enter your name and click OK.");

    attempts = ++attempts;
}


//calling function
function output()
{


    let inputFood = document.getElementById('food').value;
    let inputNumber = document.getElementById('number').value;
    let inputMovie = document.getElementById('movie').value;
    let inputWork = document.getElementById('work').value;


    let attemptsST = attempts.toString();

    //displays the paragraph to the user by using the data that was entered
    document.getElementById('result').innerHTML= 'Your favorite food is: ' + inputFood + ', The number you chose is ' + inputNumber + ', your favorite movie is ' + inputMovie + '.';

/*    if (inputWork === '') {

        document.getElementById('workout').innerHTML = 'You should get a job';
    } else {
        document.getElementById('workout').innerHTML = 'Good for you, you work at ' + inputWork;
    }*/


    if (attempts === 1) {

        document.getElementById('attemptsout').innerHTML = 'Good job you followed the instructions on the popup.';
    } else {
        document.getElementById('attemptsout').innerHTML = 'You are bad at reading instructions, it took you ' + attemptsST + ' attempts to finally fill in the popup field.';
    }
}