export class GraphPoint {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log(`X: ${this._x} Y: ${this._y}`);
  };

  getDistance(otherPoint: GraphPoint) {
    let xSubValue = this._x - otherPoint._x;
    let ySubValue = this._y - otherPoint._y;
    return Math.sqrt(Math.pow(xSubValue, 2) + Math.pow(ySubValue, 2));
  };

  get x() {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }
}