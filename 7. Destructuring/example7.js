const points = [
  [4, 5],
  [5, 1],
  [0, 3]
];
/*
  Destructuring the points array so it looks like:
  [
    { x: 4, y: 5 },
    { x: 5, y: 1 },
    { x: 0, y: 3 }
  ]
*/

points.map(([ x, y ]) => {
  return { x, y };
});
