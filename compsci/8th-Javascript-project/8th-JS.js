//this is the array where
let heights = [68,72,63,74,60];
//this is used for the average
let avg = 0;
//this variable holds the average of the heights
let sum = 0;
function heightsOut() {
    heightAvg();
    document.getElementById('heights').innerHTML = heights;
    document.getElementById('avgHeight').innerHTML ='This is the height average is ' + avg;
    console.log('This is whats in the array ' + heights)
}
//this is the function that allows the user to add a height
function addHeight() {
    //this prompts the user for there height
    let newHeight = prompt('enter the new height below in inches');
    //this adds the new height to the array
    heights.push(parseInt(newHeight));
    //this displays the averages and heights in the console
    console.log("this is how may items there are in the array " + heights.length);
    console.log('the new number added is ' + newHeight);
    //this calls the function to display the numbers to the user
    heightsOut();
}
//this function just averages out the numbers in the array heights
function heightAvg() {
    //this loop averages all the heights
    for (i=0;i < heights.length; i++) {
        sum += heights[i];
        avg = sum/(heights.length);
    }
    console.log('the height average is ' + avg);
}