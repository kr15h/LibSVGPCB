class DefaultLayers {
  #layers = Object.freeze({
    'F.Cu': new Layer('F.Cu', 'copper', '#FF0000'),
    'B.Cu': new Layer('B.Cu', 'copper', '#00FF00'),
    'F.Mask': new Layer('F.Mask', 'mask', '#0000FF'),
    'B.Mask': new Layer('B.Mask', 'mask', '#FFFF00'),
    'F.SilkS': new Layer('F.SilkS', 'silk', '#FF00FF'),
    'B.SilkS': new Layer('B.SilkS', 'silk', '#00FFFF'),
    'Edge.Cuts': new Layer('Edge.Cuts', 'cutout', '#000000')
  });

  getLayer(name) {
    return this.#layers[name];
  }

  listLayers() {
    
  }
}

const DEFAULT_LAYERS = new DefaultLayers();