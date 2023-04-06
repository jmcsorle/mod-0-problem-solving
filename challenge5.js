// Challenge 5:
// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"
// Include comments showing:
// - The **overall goal** in your own words:
// 
// Use interpolation to embed travel destinations from an array into custom sentences about those destinations and to print the sentences in alphabetical order by travel destination.
// 
// - Your **pseudocode**,
// create an array called travel with several travel locations.
//sort the array alphabetically
//create a for statement that will contain several separate if statements. The for statement will loop until it reaches the length of the array travel.
//Create if statements that check to see if travel[i] is strictly equal to a specific destination.
//for each if statement, console log a custom sentence that matches the location in the if statement and use interpolation that calls the value of "travel[i]" into the sentence.
// 
// 
// - Your **final solution**:

var travel = ["Mexico", "Portland, Oregon", "Yellow Stone National Park", "New York City", "Austin, TX"];
travel.sort();
for (var i = 0; i < travel.length; i++) {
  if (travel[i] === "Austin, TX"){
    console.log(`Howdy from ${travel[i]}! I am a native Texan and am looking forward to some summer travel.`);
  }
  else if (travel[i] === "Mexico"){
    console.log(`I really want to visit ${travel[i]} because I am learning to speak Spanish!`);
  }
  else if (travel[i] === "Portland, Oregon"){
    console.log(`${travel[i]} is a beautiful city that has a similar vibe to Austin, but they have Voo Doo Donuts!`);
  }
  else if (travel[i] === "Yellow Stone National Park"){
    console.log(`Our Girl Scout troop is thinking about going to ${travel[i]} because our girls are all graduating from high school. Traveling to ${travel[i]} would be a great way to celebrate!`);
  }
  else if (travel[i] === "New York City"){
    console.log(`Traveling to ${travel[i]} is on my bucket list. I don't know when or how I will get there, but I hope to go and see Central Park and watch a Broadway Play.`);
  }
}