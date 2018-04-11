//creating the prompt to ask for first name and assigning the variable firstName
let fullName = prompt("Please enter your full name.");
//this variable is the amount of attempts it took the person to finally fill out he field
let attempts = 1;
//this makes use theat the variable is of the number type
parseInt(attempts);
//this makes sure that the popup re pops up if you hit cancel or leave it blank
while (fullName === "" || fullName == null) {
    fullName = prompt("You have to enter your name and click OK.");

    attempts = ++attempts;
}

//this is the first function
function output()
{
    //this is where most of the variables are created and there the use input is then stored
    let inputFood = document.getElementById('food').value;
    let inputNumber = document.getElementById('number').value;
    let inputMovie = document.getElementById('movie').value;

    let attemptsST = attempts.toString();

    //displays the paragraph to the user by using the data that was entered
    document.getElementById('result').innerHTML= 'Your favorite food is: ' + inputFood + ', The number you chose is ' + inputNumber + ', your favorite movie is ' + inputMovie + '.';

    //this is the if statement that says if the field is blank then call the first part if it is not call the second part
    if (attempts === 1) {

        document.getElementById('attemptsout').innerHTML = 'Good job you followed the instructions on the popup.';
    } else {
        document.getElementById('attemptsout').innerHTML = 'You are bad at reading instructions, it took you ' + attemptsST + ' attempts to finally fill in the popup field.';
    }
//this makes sure that the second part of the function is called
outputPT2()
}
//this is the second function because javascript did not like having one if statement right after another so i brock it up
function outputPT2() {
    //this grabs the data of the user input field work
    let inputWork = document.getElementById('work').value;

    //this is the if statement that says if the field is blank then call the first part if it is not call the second part
    if (inputWork === '') {

        document.getElementById('workout').innerHTML = 'You should get a job.';
    } else {
        document.getElementById('workout').innerHTML = 'Good for you, you work at ' + inputWork + '.';
    }
}