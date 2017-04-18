/*
  Note: This section will not make use of const/let or other
  ES6 syntax and/or features such as Arrow functions
*/

// Creates an array of cars
var cars = [
  { model: 'Buick', price: 'Cheap' },
  { model: 'Camaro', price: 'Expensive' }
];

// Maps the cars array to display available prices
var prices = cars.map(function (car) {
  return car.price;
});

/*
  Or a Pluck function for a little more complexity:
  Passes an array and a property and returns the property's value
*/
function pluck(cars, property) {
	return cars.map(function(car) {
    return car[property];
  });
}

pluck(cars, 'price');
