//  Not in use often

const name1 = "Jeff";
const name2 = new String("Jeff"); //Object

//typeof name1 - string, name2 - Object(not a primitive value)
// if name2 === "Jeff" does not work (== works fine)

// Number

const num1 = 5;
const num2 = new Number(5);

// Boolean

const bool = true;
const bool1 = new Boolean(true);

// Functions
const getSum1 = function (x, y) {
  return x + y;
}

const getSum2 = new Function("x", "y", "return 1+1");

// Objects
const john = { name: "John" };
const john2 = new Object({ name: "John" });

// Array
const arr = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions

const re1 = /\w+/;
const re2 = new RegExp("\\w+")