// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;    // refers to the current instance of person
  this.lastName = lastName;
  this.birthday = new Date(dob); //full text string:

  //  The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
  //   // The getTime() method returns the number of milliseconds


} //Should start with a capital

// Calculate age

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return ageDate.getUTCFullYear() - 1970
}

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

const john = new Person("John", "Smith", "8-12-90");
const mary = new Person("Mary", "Doy", "8-12-98");

console.log(mary);
console.log(mary.getFullName());

mary.getsMarried("Smith");
console.log(mary.getFullName());

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

// Customer constructor

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // function to call some function
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person  prototype methods

Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', "Jonn", "333-322-355", "Standart");

console.log(customer1);
console.log(customer1);