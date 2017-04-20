// using Rest operator to capture an unknown number of arguments and putting them into a single array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => { return sum + number }, 0);
}

addNumbers(1, 2, 3, 4, 5);
