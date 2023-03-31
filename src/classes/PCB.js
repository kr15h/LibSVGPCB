class PCB {
  static createLayer(name, type, color) {
    return new Layer(name, type, color);
  }

  static createShape(layer, type, data) {
    return new Shape(layer, type, data);
  }

  static createPad(name, shape, layers, x, y) {
    return new Pad(name, shape, layers, x, y);
  }

  static createFootprint(name, pads, description) {
    return new Footprint(name, pads, description);
  }

  static createComponent(name, footprints, description) {
    return new Component(name, footprints, description);
  }
}
  