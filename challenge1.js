// 1. Given an array of strings, return only the strings that have exactly 4 characters.

// Include comments showing:
// - The **overall goal** in your own words:
//  
// The goal of Challenge 1 is to create an array of strings with different lengths, some of which will be 4 characters long. Write code to review the array and return only the elements with exactly 4 characters
// 
// - Your **pseudocode**,
// 
// var arrayName = [list of array string elements with different string lengths - some of which need to be 4 characters long]
// for statement to look at each element in the array
//if statement with the for statement to check the length of each element and return only elements that are exactly 4 characters - will use string.length and strictly equal to 4
// 
// - Your **final solution**:
var drinks = ["soda", "tea", "milk", "water", "beer", "lemonade", "wine"];
for (var i = 0; i < drinks.length; i++) {
    if (drinks[i].length === 4) {
        console.log(drinks[i]);
    }
}