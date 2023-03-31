const Layer = require('../src/classes/Layer');

describe('Layer class', () => {
  test('getLayer returns the correct layer', () => {
    const layers = [new Layer('F.Cu'), new Layer('B.Cu'), new Layer('F.Mask')];
    const fCuLayer = Layer.getLayer('F.Cu', layers);
    expect(fCuLayer).toBeInstanceOf(Layer);
    expect(fCuLayer.name).toBe('F.Cu');
  });

  test('getLayer throws an error for an invalid layer name', () => {
    const layers = [new Layer('F.Cu'), new Layer('B.Cu'), new Layer('F.Mask')];
    expect(() => Layer.getLayer('InvalidLayer', layers)).toThrow();
  });
});
