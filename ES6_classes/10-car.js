const species = Symbol('species');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // this controls what cloneCar returns
  static get [species]() {
    return this;
  }

  cloneCar() {
    const Cls = this.constructor[species];
    return new Cls();
  }
}
