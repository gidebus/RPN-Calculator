
const Calculator = require('./Calculator'); 
const operators = require('./operators/index');
const Parser = require('./helpers/Parser')
const CLI = require('./interfaces/CLI');

const calculator = new Calculator(operators);
const parser = new Parser(operators);
const cli = new CLI(calculator, parser);


cli.start();