const defaultColors = ['red', 'green'];
const userFavorites = ['blue', 'black'];

/*
  Instead of concatenating both arrays like this:
  defaultColors.concat(userFavorites);

  This results in:
  ['red', 'green', 'blue', 'black']

  We could use the Spread operator:
  First we create a new array, then inside of it we reference
  an existing array with a spread operator
*/
[ ...defaultColors, ...userFavorites ];

/*
  Now what if we want to include another array of colors inside
  our color palette?
*/
const fallColors = ['fire red', 'fall orange'];

// We could simply add it using a spread operator just like before:
[ ...fallColors, ...defaultColors, ...userFavorites ];

/*
  What about adding only a single color?
  One benefit of using a spread operator instead of concat is that we can
  add as many single elements (together with Arrays) just like this:
*/
[ 'yellow', ...fallColors, ...defaultColors, ...userFavorites ];
