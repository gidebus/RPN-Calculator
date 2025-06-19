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

  test('Invalid operator is used', () => {
    calc.push(3);
    expect(() => calc.applyOperator('$')).toThrow('Unknown operator: $');
  })

  test('Not enough operands given', () => {
    calc.push(3);
    expect(() => calc.applyOperator('+')).toThrow('Not enough operands');
  })

  test('Clearing stack', () => {
    calc.push(4);
    calc.push(3);
    expect(calc.getStack().length).toBe(2);
    calc.clearStack();
    expect(calc.getStack().length).toBe(0);
  })

  describe('Addition', () => {
    test('Addition of two elements', () => {
      calc.push(7);
      calc.push(13);
      expect(calc.applyOperator('+')).toBe(20);
    })

    test('Add negative and positive', () => {
      calc.push(5);
      calc.push(-4);
      expect(calc.applyOperator('+')).toBe(1);
    })

    test('Add two negatives', () => {
      calc.push(-5);
      calc.push(-4);
      expect(calc.applyOperator('+')).toBe(-9);
    })    

    test('Add Zeros', () => {
      calc.push(0);
      calc.push(0);
      expect(calc.applyOperator('+')).toBe(0);
    })
  })

  describe('Subtraction', () => {
    test('Subtraction of two elements', () => {
      calc.push(6);
      calc.push(3);
      expect(calc.applyOperator('-')).toBe(3);
    })

    test('Subtraction positive and negative', () => {
      calc.push(6);
      calc.push(-3);
      expect(calc.applyOperator('-')).toBe(9);
    })

    test('Subtraction of two negatives', () => {
      calc.push(-6);
      calc.push(-3);
      expect(calc.applyOperator('-')).toBe(-3);
    })  

    test('Subtraction from zero', () => {
      calc.push(0);
      calc.push(3);
      expect(calc.applyOperator('-')).toBe(-3);
    })  
  })

  describe('Multiplication', () => {
    test('Multiplication of two elements', () => {
      calc.push(5);
      calc.push(5);
      expect(calc.applyOperator('*')).toBe(25);
    })

    test('Multiplication by 0', () => {
      calc.push(5);
      calc.push(0);
      expect(calc.applyOperator('*')).toBe(0);
    })

    test('Multiplication of negatives', () => {
      calc.push(-5);
      calc.push(5);
      expect(calc.applyOperator('*')).toBe(-25);
    })
  })
  

  describe('Division', () => {
    test('Division of two elements', () => {
      calc.push(25);
      calc.push(5);
      expect(calc.applyOperator('/')).toBe(5);
    })

    test('Division by zero', () => {
      calc.push(25);
      calc.push(0);
      expect(() => calc.applyOperator('/')).toThrow('Division by zero is not allowed');
    })

    test('Division zero by an element', () => {
      calc.push(0);
      calc.push(5);
      expect(calc.applyOperator('/')).toBe(0);
    })
  })
});