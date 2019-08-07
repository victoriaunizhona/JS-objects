
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);


// checking if the object is empty
alert(isEmpty(user));

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

//Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log("The sum of salaries is", countSum(salaries));

function countSum(obj) {
  let summ = 0;
  for (let key in obj) {
    summ += obj[key];
  }
  return summ;
}

// Multiply numeric properties by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if ((typeof obj[key]) === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(menu);

//garbage collection
let user1 = {
  name: "John"
};

user1.map = "hoy hey";
let admin1 = user1;

user1 = null;

console.log(admin1)
