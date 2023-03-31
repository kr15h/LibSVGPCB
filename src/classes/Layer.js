class Layer {
  constructor(name) {
    this.name = name;
  }

  static getLayer(name, layers) {
    const layer = layers.find(layer => layer.name === name);
    if (!layer) {
      throw new Error(`Layer not found: ${name}`);
    }
    return layer;
  }
}

module.exports = Layer;
  