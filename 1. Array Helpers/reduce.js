/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/

// Creates an array of numbers
var numbers = [10, 20, 30];
var sum = 0;

/*
  Reduce's second arg is 0, which is passed to
  the iterator function just like the array

  Array      Iterator Function (IF)         Reduce's second arg (0)
  10     ->         IF          <->         10
  20     ->         IF          <->         30
  30     ->         IF          <->         60
                                            ---------> Result
*/
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// Creates an array of numbers
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
// Results in ['red', 'yellow', 'blue']

// Balanced parenthesis
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0) { return previous; };
    if (char === '(') { return ++previous; };
    if (char === ')') { return --previous; };
    return previous;
  }, 0);
}

balancedParens("(((");
