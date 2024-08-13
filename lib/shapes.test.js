const { Circle, Triangle, Square } = require('./shapes');

const shapes = [
  {
    instance: new Circle('green'),
    expected: '<circle cx="150" cy="100" r="80" fill="green" />'
  },
  {
    instance: new Triangle('blue'),
    expected: '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  },
  {
    instance: new Square('yellow'),
    expected: '<rect x="50" y="50" width="200" height="200" fill="blue" />'
  }
];

shapes.forEach(({ instance, expected }) => {
  test(`${instance.constructor.name} render method returns correct SVG string`, () => {
    expect(instance.render()).toBe(expected);
  });
});
