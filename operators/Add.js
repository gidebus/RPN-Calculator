const Operator = require("./Operator");

class Add extends Operator {
  constructor() {
    super('+');
  }

  apply(operands) {
    return operands.reduce((a, b) => a + b, 0);
  }
}

module.exports = Add;