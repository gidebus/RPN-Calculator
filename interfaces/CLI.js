const readline = require('readline');

class CLI {
  constructor(calculator) {
    this.calculator = calculator;
    this.lineReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });
  }

  exit() {
    console.log('Exiting calculator.');
    process.exit(0);
  }

  start() {
    console.log('Welcome to CLI RPN Calculator. Type "q" to quit or "clear" to reset the stack');
    this.lineReader.prompt();

    this.lineReader.on('line', (line) => {
      const trimmed = line.trim();

      if(trimmed.toLowerCase() === 'q') {
        this.exit();
        return;
      }

      if(trimmed.toLocaleLowerCase() === 'clear') {
        this.calculator.clearStack();
        console.log('Stack cleared');
        this.lineReader.prompt();
        return;
      }

      if(trimmed.length === 0) {
        this.lineReader.prompt();
        return;
      }

      const symbols = trimmed.split(' ').filter(symbol => symbol !== '');
      let lastResult = undefined;

      try {
        for(const symbol of symbols) {
          if(!isNaN(symbol) && symbol.trim() !== '') {
            lastResult = this.calculator.push(Number(symbol));
          } else if(this.calculator.operators.hasOwnProperty(symbol)) {
            lastResult = this.calculator.applyOperator(symbol);
          } else {
            throw new Error(`Invalid input ${symbol}`);
          }
        }

        if(lastResult !== undefined) {
          console.log(lastResult);
        }

      } catch(err) {
        console.log('Error: ', err.message);
      }

      this.lineReader.prompt();
    });

    this.lineReader.on('close', () => this.exit());
  }
}

module.exports = CLI;