/*
  Implicit return
  ES5
  var add = function(a, b) {
    return a + b;
  }
*/
const add = (a, b) => a + b;

/*
  Single argument in Arrow Function
  ES5
  const double = function(number) {
    return 2 * number;
  };
*/
const double = number => 2 * number;

/*
  ES5
  numbers.map(function(number) {
    return 2 * number;
  });
*/
const numbers = [1, 2, 3];
numbers.map(number => 2 * number);

/*
  Lexical this
*/
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'TeamName',
  teamSummary: function () {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
