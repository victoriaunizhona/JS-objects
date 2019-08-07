//JavaScript Object Literal. A JavaScript object literal is //a comma-separated list of name-value pairs wrapped in //////curly braces.

// Object literal
var myObject = {
  sProp: 'some string value',
  numProp: 2,
  bProp: false
};

// Person constructor

function Person(name, dob) {
  this.name = name;    // refers to the current instance of person
  this.birthday = new Date(dob); //full text string:
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime(); //The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    // The getTime() method returns the number of milliseconds


    const ageDate = new Date(diff);

    console.log(ageDate.getUTCFullYear());
    return ageDate.getUTCFullYear() - 1970


  }
} //Should start with a capital

const brad = new Person("Brad", "9-10-1981");

console.log(brad.calculateAge());

