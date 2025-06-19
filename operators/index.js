const Add = require('./Add');
const Multiply = require('./Multiply');
const Subtract = require('./Subtract');
const Division = require('./Division');

module.exports = {
'+': new Add(),
'-': new Subtract(),
'*': new Multiply(),
'/': new Division()
}