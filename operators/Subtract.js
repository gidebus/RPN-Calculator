const Operator = require('./Operator');

class Subtract extends Operator {
  constructor() {
    super('-');
  }

  apply(operands) {
    if (operands.length === 0) throw new Error('Not enough operands');
    return operands.slice(1).reduce((a, b) => a - b, operands[0]);
  }
}

module.exports = Subtract;
