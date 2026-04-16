export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // check if child class overrides the method
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }
}
