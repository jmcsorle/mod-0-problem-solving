// 1. Given an array of strings, return only the words that begin with the letter "t".

// Include comments showing:
// - The **overall goal** in your own words:
// 
// The goal of this challenge is to create an array of Strings, return only the Strings that startWith() the letter "t" and print those Strings to the console.
// 
// - Your **pseudocode**,
// 
// var <arrayName> = [List of strings]
// for statement that looks at each element and contains an if statement to check if any elements start with "T"
// console.log(arrayName.includes("T"))
// 
// - Your **final solution**:
var friends = ["Teenya", "Scott", "Sharron", "Tim", "Tate", "Toya", "Butch", "Tanner", "Betty"];
for (var i = 0; i < friends.length; i++) {
    if (friends[i].includes("T")) {
        console.log(friends[i]);
    }
}