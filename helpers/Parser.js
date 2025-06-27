
class Parser {
  constructor(operators) {
    this.operators = operators;
  }

  parse(input) {
    let numbers = [];
    let operators = [];

    const symbols = input.split(' ').filter(symbol => symbol !== '');
    for(const symbol of symbols) {
      if(!isNaN(symbol) && symbol.trim() !== '') {
        numbers.push(Number(symbol));
      } else if(this.operators.hasOwnProperty(symbol)) {
        operators.push(symbol);
      } else {
        throw new Error(`Invalid input: ${symbol}`);
      }
    }
    return numbers.concat(operators);
  }
}

module.exports = Parser;