class Operator {
  constructor(symbol, args = 2) {
    this.symbol = symbol;
    this.args = args;
  }

  apply(operands) {
    throw new Error('apply() method must be implemented');
  }
}

module.exports = Operator;