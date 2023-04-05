// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// Include comments showing:
// - The **overall goal** in your own words:
// 
// The overall goal of this challenge is to turn an array of strings comprised of both upper and lowercase letters, into an array of strings consisting only of lowercase letters.
// 
// - Your **pseudocode**,
// Set up an array of strings that has both upper and lowercase letters
//Write a for statement that will look at each element in the array and apply the code
//Change the elements in the array to lowercase: console.log(arrayName[i].toLowerCase())
// 
// 
// - Your **final solution**:
var petNames = ["Harley", "Wrigley", "Annie", "Tucker", "Piper", "Maggie"];
for (var i = 0; i < petNames.length; i++) {
  console.log(petNames[i].toLowerCase());
}