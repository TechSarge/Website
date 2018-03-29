function output() {
    //this grabs the input from the first name field so I cam use it in javascript
    let firstname = document.getElementById('inputfirstname').value;
    //this grabs the last name data so it can be manipulated by javascript
    let lastname = document.getElementById('inputlastname').value;
    //this grabs the first number to be added later
    let inputnumber = document.getElementById('inputnumber').value;
    //this grabs the second number to be manipulated later
    let inputnumber2 = document.getElementById('inputnumber2').value;

    //this sections purpose is to make sure that javascript thinks the the number input fields are numbers!!!!!!!!!!!!!
    inputnumber = inputnumber*2/2;
    inputnumber2 = inputnumber2*2/2;


    //this adds the two numbers together
    let numtotal = inputnumber + inputnumber2;
    //this finds the square root of the previous number
    let sqrtnumber = Math.sqrt(numtotal);


    //this prints the output to the screen of all the inputs and some static content
    document.getElementById('result').innerHTML='Your name is ' + firstname + ' ' + lastname + ' those two numbers added together = ' + numtotal + ' the square root of those numbers is ' + sqrtnumber;
}