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

  test('Subtraction of two elements', () => {
    calc.push(6);
    calc.push(3);
    expect(calc.calculate('-')).toBe(3);
  })

  test('Multiplication of two elements', () => {
    calc.push(5);
    calc.push(5);
    expect(calc.calculate('*')).toBe(25);
  })

  test('Division of two elements', () => {
    calc.push(25);
    calc.push(5);
    expect(calc.calculate('/')).toBe(5);
  })
});