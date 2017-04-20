const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];
/*
  ES5
  Getting the Google's location using ES5
  var location = companies[0].location;
*/

// Using Destructuring
const [{ location }] = companies;
