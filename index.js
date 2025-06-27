
const Calculator = require('./Calculator'); 
const Parser = require('./helpers/Parser')
const CommandLineHandler = require('./handlers/CommandLineHandler');
const operators = require('./operators/index');

const calculator = new Calculator(operators);
const parser = new Parser(operators);
const cli = new CommandLineHandler(calculator, parser);


cli.start();