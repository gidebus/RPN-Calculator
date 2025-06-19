const Operator = require('./Operator');

class Division extends Operator {
  constructor() {
    super('/');
  }

  apply(operands) {
    if (operands.length === 0) throw new Error('Not enough operands');
    return operands.slice(1).reduce((a, b) => {
      if(b === 0) throw new Error('Division by zero is not allowed');
      return a / b;
    }, operands[0]);
  }
}

module.exports = Division;