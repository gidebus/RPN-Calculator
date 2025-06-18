const Calculator = require('../Calculator');
const operators = require('../operators/index');

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator(operators);
  })

  test('Pushing elements to stack', () => {
    calc.push(5);
    calc.push('+');
    expect(calc.getStack().length).toBe(2);
  });

  test('Addition of two elements', () => {
    calc.push(7);
    calc.push(13);
    expect(calc.calculate('+')).toBe(20);
  })
});