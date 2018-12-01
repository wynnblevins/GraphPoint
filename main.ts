import { GraphPoint } from './point';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is point A's x value? ", (pointAXRes) => {
  rl.question("What is point A's y value? ", (pointAYRes) => {
    rl.question("What is point B's x value? ", (pointBXRes) => {
      rl.question("What is point B's y value? ", (pointBYRes) => {
        let pointA = new GraphPoint(pointAXRes, pointAYRes);
        let pointB = new GraphPoint(pointBXRes, pointBYRes);
        
        // calculate distance and print to screen
        let distance: any = pointA.getDistance(pointB);
        
        // check to make sure our input was valid
        if (isNaN(distance as any)) {
          console.log("ERROR: bad input values detected! :-(");
        } else {
          console.log(`Distance is ${distance.toFixed(2)}`);
        }

        rl.close();
      });
    }); 
  });
});