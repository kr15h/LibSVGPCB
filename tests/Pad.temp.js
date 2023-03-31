// Import the Pad class from the file where it is defined
const Pad = require('../src/classes/Pad');

describe('Pad', () => {
  let pad;

  beforeEach(() => {
    pad = new Pad(10, 20, 30);
  });

  describe('constructor', () => {
    it('should set the x coordinate of the center', () => {
      expect(pad.x).toBe(10);
    });

    it('should set the y coordinate of the center', () => {
      expect(pad.y).toBe(20);
    });

    it('should set the width/height of the pad', () => {
      expect(pad.diameter).toBe(30);
    });

    it('should set the default shape to round', () => {
      expect(pad.shape).toBe('round');
    });

    it('should set the default drill size to the same as diameter', () => {
      expect(pad.drill).toBe(30);
    });

    it('should set solder mask to true by default', () => {
      expect(pad.mask).toBe(true);
    });

    it('should set the default clearance to half the diameter', () => {
      expect(pad.clearance).toBe(15);
    });
  });

  describe('setShape', () => {
    it('should set the shape of the pad', () => {
      pad.setShape('rectangular');
      expect(pad.shape).toBe('rectangular');
    });
  });

  describe('setDrill', () => {
    it('should set the drill size of the pad', () => {
      pad.setDrill(20);
      expect(pad.drill).toBe(20);
    });
  });

  describe('setMask', () => {
    it('should set the solder mask property of the pad', () => {
      pad.setMask(false);
      expect(pad.mask).toBe(false);
    });
  });

  describe('setClearance', () => {
    it('should set the clearance property of the pad', () => {
      pad.setClearance(10);
      expect(pad.clearance).toBe(10);
    });
  });
});