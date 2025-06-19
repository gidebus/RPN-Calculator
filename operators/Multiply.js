const Operator = require('./Operator');

class Multiply extends Operator {
  constructor() {
    super('*');
  }

  apply(operands) {
    if (operands.length === 0) throw new Error('Not enough operands');
    return operands.reduce((a, b) => a * b, 1);
  }
}

module.exports = Multiply;