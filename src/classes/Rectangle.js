const Shape = require('./Shape');

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getOutline(position) {
    const x1 = position.x - this.width / 2;
    const y1 = position.y - this.height / 2;
    const x2 = position.x + this.width / 2;
    const y2 = position.y + this.height / 2;
    return `M ${x1} ${y1} L ${x2} ${y1} L ${x2} ${y2} L ${x1} ${y2} L ${x1} ${y1}`;
  }
}

module.exports = Rectangle;
