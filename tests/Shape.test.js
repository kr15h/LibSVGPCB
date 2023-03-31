const Shape = require('../src/classes/Shape');

describe('Shape class', () => {
  test('getOutline throws an error for abstract method', () => {
    const shape = new Shape();
    expect(() => shape.getOutline()).toThrow('Not implemented');
  });
});
