
const Calculator = require('./Calculator'); 
const operators = require('./operators/index');
const CLI = require('./interfaces/CLI');

const calculator = new Calculator(operators);
const cli = new CLI(calculator);
cli.start();