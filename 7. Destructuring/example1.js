const expense = {
  type: 'Business',
  amount: '$45 USD'
};
/*
  ES5
  var type = expense.type;
  var amount = expense.amount;
*/

/*
  This is not creating an object
  We are declaring variables and referencing expanse's properties;

  The name of the variable must be the same as the property we are
  referencing.
*/
const { type, amount } = expense;
