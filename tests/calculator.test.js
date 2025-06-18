const Calculator = require('../Calculator');

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  })

  test('Pushing elements to stack', () => {
    calc.push(5);
    calc.push('+');
    expect(calc.getStack().length).toBe(2);
  });
});