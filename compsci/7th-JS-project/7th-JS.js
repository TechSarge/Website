//this initialises the variable that stores the musician names
let musicians = ['Trans-Siberian Orchestra', 'Ludwig van Beethoven', 'Hippocampus', 'Pentatonix', 'The piano guys'];
//this function is the function that outputs the contents of the array to the user and to the console
function musicianOutput() {
    //this displays the contents of the array musicians to the user
    document.getElementById('musiciansNames').innerHTML = musicians;
    //this outputs the array and more informantion to the console
    console.log("Musicians array informantion " + musicians);
    //this ouptuts the last item in the array to the console
    console.log('The last name entered into the array is - ' + musicians[musicians.length -1]);
}
//this function is called for the user to enter another musician name that they like.
function addFav() {
    //this makes a new variable with the name the person enters in it
    let newName = prompt('Type your favorite musician or group of musicians here.');
    //this adds the name to the array
    musicians.push(newName);
    //this calls the above finction to ouput the array to the screen and to the console.
    musicianOutput();
}