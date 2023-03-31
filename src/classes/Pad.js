class Pad {
  constructor(x, y, diameter) {
    this.x = x; // x coordinate of center
    this.y = y; // y coordinate of center
    this.diameter = diameter; // width/height of pad
    this.shape = "round"; // default shape is round
    this.drill = diameter; // default drill size is the same as diameter
    this.mask = true; // default is to add solder mask
    this.clearance = diameter / 2; // default clearance is half the diameter
  }

  setShape(shape) {
    this.shape = shape;
  }

  setDrill(drill) {
    this.drill = drill;
  }

  setMask(mask) {
    this.mask = mask;
  }

  setClearance(clearance) {
    this.clearance = clearance;
  }

  draw() {
    // code to draw pad on PCB layout
  }
}
