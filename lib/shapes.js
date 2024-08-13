class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render(shapeDetails) {
      return shapeDetails;
    }
  }
  
  class Circle extends Shape {
    render() {
      const shapeDetails = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
      return super.render(shapeDetails);
    }
  }
  
  class Triangle extends Shape {
    render() {
      const shapeDetails = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      return super.render(shapeDetails);
    }
  }
  
  class Square extends Shape {
    render() {
      const shapeDetails = `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
      return super.render(shapeDetails);
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  