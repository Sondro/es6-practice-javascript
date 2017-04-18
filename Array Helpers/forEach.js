/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/

// Creates an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Creates a variable to hold the sum
var sum = 0;

/*
  Loops over the array, incremeting the sum variable
  Note: the inner function in this forEach doesn't need
  to be an anonymous function:

  function adder(number) {
    sum += number;
  }

  number.forEach(adder);
*/
numbers.forEach(function (number) {
	sum += number;
});

// Prints the sum variable
console.log(sum)
