import { GraphPoint } from './point';

let pointA = new GraphPoint(2, 3);
let pointB = new GraphPoint(4, 1);

// draw the points
console.log('Point A is: ');
pointA.draw();
console.log('Point B is: ');
pointB.draw();

// calculate distance and print to screen
let PRECISION = 3;
let distance = pointA.getDistance(pointB).toPrecision(PRECISION);
console.log(`Distance between point A and point B is ${distance}`);