// Include comments for Challenge 6 showing:
// - The **overall goal** in your own words:
// Change the first letter of each word in a sentence to uppercase. The original sentence will be contained in a string and will be in all lowercase.
// 
// 
// - Your **pseudocode**,
//Originally, I thought I would need to create a variable that contained the original sentence, typed in all lowercase. I was not even thinking about how a function could help. I did some research and found a solution at (https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php). The following steps outline the psuedocode for that solution:
//Create a function called `firstLetterCap` that contains one parameter called `sentence`. Later in the code, the argument for `sentence` will be the original sentence printed in all lowercase letters.
//Create an array called `arraySplit` that will split the parameter, `sentence` into separate words and place them into arraySplit as separate elements.
//Create another empty array called `arrayCap` that will take each of the elements in arraySplit, capitalize the first letter of each element, slice the remaining letters of each element so that the entire word can then be copied as a single element into `arrayCap. To do this, I need to use a for statement and several methods.
//the for statement will look at each element in "arraySplit" and within the for statement, the following methods will be executed:
//the push method will add a modified version of each element from arraySplit to arrayCap
//to modify each element in arraySplit, I will use the `charAt()` method to find the character at index 0. The next step will be to change the character at index 0 to uppercase with the `toUpperCase()` method. After the first character is changed to uppercase, the add operator will need to be used to concatenate the charater at index[0] with the remaining characters in the element - to do this, I will need to use `+`, followed by the slice() method. The syntax for the slice method will need to take each element in `arraySplit` and slice it from `index 1` to the end of the element as follows: `arraySplit[i].slice(1)`. The newly capitalized and concatenated element will then be added to `arrayCap`.
// The function will return `arrayCap` and join all of the elements into one string by using the join() method: `return arrayCap.join(" "). This is the last step in the function.
//Outside of the funtion, I will need to use console.log() to call the funtion `firstLetterCap`: console.log(firstLetterCap(the argument for the parameter, "sentence"))
// 
// - Your **final solution**:

function firstLetterCap(sentence) {
    var arraySplit = sentence.split(" ");
    var arrayCap = []; 
      for (var i = 0; i < arraySplit.length; i++) {
        arrayCap.push(arraySplit[i].charAt(0).toUpperCase() + arraySplit[i].slice(1));
      } 
    return arrayCap.join(" ")
  }
  console.log(firstLetterCap("a dog is the only thing on earth that loves you more than he loves himself."));
  