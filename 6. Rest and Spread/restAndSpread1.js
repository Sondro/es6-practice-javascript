/*
  What about using both Rest and Spread operators together?
  Capture all items in the shopping list
*/
function validateShoppingList(...items) {
  // If milk is not on the shoppping list, return milk with the rest of the items
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }
  // If milk is already there, just return items
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');
