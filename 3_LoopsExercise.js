// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter1 = 1;

while (counter1 <= 5) {
  console.log(counter1);
  counter1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter2 = 1;

do {
  console.log(counter2);
  counter2++;
} while (counter2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// while loop
let counter4 = 10;

while (counter4 >= 1) {
  console.log(counter4);
  counter4--;
}

// do while loop
let counter4b = 10;

do {
  console.log(counter4b);
  counter4b--;
} while (counter4b >= 1);

// for loop
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// while loop
let counter5 = 7;

while (counter5 <= 27) {
  console.log(counter5);
  counter5++;
}

// do while loop
let counter5b = 7;

do {
  console.log(counter5b);
  counter5b++;
} while (counter5b <= 27);

// for loop
for (let i = 7; i <= 27; i++) {
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// while loop
let counter6 = 10;

while (counter6 <= 100) {
  console.log(counter6);
  counter6 += 10;
}

// do while loop
let counter6b = 10;

do {
  console.log(counter6b);
  counter6b += 10;
} while (counter6b <= 100);

// for loop
for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The original loop is infinite because counterFour starts at 1
// and keeps decreasing, so it will always be less than 2.
// We fix it by stopping when counterFour reaches -100.

let counterFour = 1;

while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteNumber8 = 7;

for (let i = 0; i <= favoriteNumber8; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favoriteNumber9 = 7;

for (let i = 0; i <= 100; i++) {
  if (i === favoriteNumber9) {
    console.log(i, "my favorite number!");
  } else {
    console.log(i, "not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
// I would use a for loop when I know how many times
// I want to repeat something.
//
// I would use a while loop when I want to keep repeating
// something until a condition becomes false.
//
// I would use a do while loop when I need the code
// to run at least once before checking the condition.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);

  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }

  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
// I found nested loops more challenging than simple loops.
// I learned how to use while, do while, and for loops.
// I also learned how to avoid infinite loops.
// Commit your file to GitHub.
