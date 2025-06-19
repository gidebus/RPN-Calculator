class Calculator {
  constructor(operators) {
    this.stack = [];
    this.operators = operators;
  }

  push(val) {
    this.stack.push(val);
    return val;
  }

  getStack() {
    return Array.from(this.stack);
  }

  applyOperator(operatorSymbol) {
    const operator = this.operators[operatorSymbol];
    if(!operator) throw new Error(`Unknown operator: ${operatorSymbol}`);
    if(this.stack.length < operator.args) throw new Error("Not enough operands");
    const operands = [];
    for(let i = 0; i < operator.args; i++) {
      operands.unshift(this.stack.pop());
    } 
    const result = operator.apply(operands);
    this.stack.push(result);
    return result;
  }
}

module.exports = Calculator;