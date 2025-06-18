
class Calculator {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
    return val;
  }

  getStack() {
    return Array.from(this.stack);
  }
}

module.exports = Calculator;