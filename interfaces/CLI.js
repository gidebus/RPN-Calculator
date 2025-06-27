const readline = require('readline');

class CLI {
  constructor(calculator, parser) {
    this.calculator = calculator;
    this.parser = parser;
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
      const input = line.trim().toLowerCase();

      if(input === 'q') {
        this.exit();
        return;
      }

      if(input === 'clear') {
        this.calculator.clearStack();
        console.log('Stack cleared');
        this.lineReader.prompt();
        return;
      }

      if(input.length === 0) {
        this.lineReader.prompt();
        return;
      }

      let result = undefined;
      
      try {
        const symbols = this.parser.parse(input);
         result = this.calculator.calculate(symbols);

        if(result !== undefined) {
          console.log(this.calculator.getStack());
          console.log(result);
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