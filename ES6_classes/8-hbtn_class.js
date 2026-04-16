export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // when cast to Number
  valueOf() {
    return this._size;
  }

  // when cast to String
  toString() {
    return this._location;
  }
}
