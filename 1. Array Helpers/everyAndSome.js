/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/
// Creates an array of computers
var computers = [
  { name: 'Apple', ram: 8 },
  { name: 'Dell', ram: 32 },
  { name: 'HP', ram: 16 }
];

// Returns true if every computer has more than 16gb of ram
computers.every(function(computer) {
  return computer.ram > 16;
});

// Returns true if any computer has more than 16gb of ram
computers.some(function(computer) {
  return computer.ram > 16;
})

// Field "Class"
function Field(value) {
  this.value = value;
}

// Field validation
Field.prototype.validate = function () {
  return this.value.length > 0;
}

var username = new Field("Username");
var password = new Field("Password");
var birthdate = new Field("10/10/2010");
var fields = [username, password, birthdate];

// Return trues if every field is valid
var formIsValid = fields.every(function(field) {
  return field.validate();
});
