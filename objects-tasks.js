
// ========================================
// Exercise 1: Hello, object
// ========================================

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log("Exercise 1:", user);


// ========================================
// Exercise 2: Check for emptiness
// ========================================

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log("Exercise 2:", isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log("Exercise 2:", isEmpty(schedule)); // false


// ========================================
// Exercise 3: Sum object properties
// ========================================

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log("Exercise 3:", sum); // 390


// ========================================
// Exercise 4: Multiply numeric values by 2
// ========================================

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log("Exercise 4:", menu);
