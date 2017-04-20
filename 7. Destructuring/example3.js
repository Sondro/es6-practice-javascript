// Destructuring arrays
const companies = [
  'Google',
  'Facebook',
  'Microsoft'
];

// This only gets the first name
const [ name ] = companies;

// Using Rest operator to get all names
const [ ...name ] = companies;
