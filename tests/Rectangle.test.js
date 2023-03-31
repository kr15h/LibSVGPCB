const Rectangle = require('../src/classes/Rectangle');

describe('Rectangle class', () => {
  test('getOutline returns an SVG path string', () => {
    const rectangle = new Rectangle(10, 20);
    const pathString = rectangle.getOutline({ x: 0, y: 0 });
    expect(pathString).toBe('M -5 -10 L 5 -10 L 5 10 L -5 10 L -5 -10');
  });
});
