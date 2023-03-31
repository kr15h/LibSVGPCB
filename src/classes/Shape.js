class Shape {
  constructor() {
    // No properties are defined in the base class.
    // Derived classes will define their own properties.
  }

  // The getOutline method must be implemented by derived classes.
  getOutline(position) {
    throw new Error('Not implemented');
  }
}

module.exports = Shape;
  