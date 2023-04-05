//Challenge 4:
// Start with an array of strings. Print only the words that include the letter combination "ing".
//Include comments showing:
// - The **overall goal** in your own words:
// 
// The overall goal of this challenge is to be able to print an array of strings that only include the letter sequence "ing".
// 
// - Your **pseudocode**,
// 
// create an array that has a mix of words that include the letter sequence "ing" and words that do not.
// create a for statement that inclues an if statement - the if statement needs to check each element of the array to see if they include the letter sequence, "ing" - to do this, I will use the "includes" method.
//console.log the array items (array[i]) that meet the crieteria of the if statement.
// 
// - Your **final solution**:

var actions = ["run", "boxing", "sing", "skating", "dance", "lifting", "clean"]
for (var i = 0; i < actions.length; i++) {
if (actions[i].includes("ing"))  console.log(actions[i]);
}