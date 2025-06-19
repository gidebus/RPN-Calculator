# RPN-Calculator

## Overview
RPN Calculator is a modular CLI calculator for basic arithmetic calculations using the Reverse Polish Notation method. 


## Instructions

### Requirements
- Node.js v14+
- npm (for package management)
- Jest (for written tests)

### Installation
Download from GitHub:
```
  git clone https://github.com/your-org/rpn-calculator-service.git
  cd <project folder>
  npm install
```

### Running the program
```
  node index.js
```

## Running Tests
Tests are written in `Jest`, to run them run the command `npm test` from the main program directory.
```
  npm test
```

### Example Usage
```
  > 5 7 2 * +
  19
  > clear
  Stack cleared
  > 3 0 /
  Error: Division by zero is not allowed
  > q
  Exiting calculator
```

## High-Level Description
RPN Calculator allows the user to use basic arithmetic. It currently only supports addition, subtraction, multiplication, and division, as well as quitting the program through `q`, clearing the stack through `clear`, and providing useful error messages to aid in their calculators. It is also modular, allowing developers to easily understand, and add, new operators, and interfaces in the future.

## Technical Choice & Architecture 
My solution tries to follow a modular object oriented programming design. By keeping classes simple, and encapsulated as well as using dependency injection when possible to make scalability easier. 

`index.js`
This is the entry point of the program. It instantiates a CLI class and passes a new instance of Calculator.

`Calculator.js`
In order to make the calculator scalable without forcing it to change every time we added a new operation. I decided to encapsulate it separate from the operators and just allow it to have a reference of each operation separate from its logic. The calculator only holds the stack, retrieves it without allowing for tampering with the stack, and requeues operations into the stack.
I was not proud of `.unshifting` as this adds elements to the front of the array causing a bigO(n) readjustment upon every insertion. In future iterations I 
could consider other data structures like a linked list, or perhaps implementing a stack of our own (I do not believe JS has one out of the box). 

`operators/`
Each operation is encapsulated on its own (Ex. `Add.js`, `Multiply.js` etc), inherit from an abstract `Operator` class, and then pass them to the Calculator class through dependency injection through the `operators/index.js` file. This keeps the calculator class from changing while making the operations scalable as we implement new features. Each operator requires its symbol identifier Ex. '+' for addition, and the number of arguments it needs Ex. addition requires 2: 4 + 2.
Although modular, the encapsulation could also be seen as over engineered. There is a bit of an overhead and complexity by creating new classes and looping through the results as opposed to a simple version that lives within the Calculator class.

`CLI.js`
The interface was also designed in this manner. Such that each interface would receive a new instance of Calculator and apply interface specific logic to it while keeping the calculator free of interface-specific responsibilities. If given more time I would probably try to figure out a way to further dilute the methods into simpler ones Ex. like the method `start()`, perhaps separating conditional checking or validation logic into a separate class and reusing it for other interfaces once implemented as the Calculator currently depends on the CLI for validation and proper inputs formatting.

### Other Future Enhancements
Some other future enhancements that I thought of could be to allow the calculator to also receive inputs in wrong orders without failing such as '5 + 7' as I can see users getting confused. This will require to further parse the stdin from the user, and order it correctly to be sent to the Calculator class. Currently if passed input '5 + 1' as an example the 5 and + will be part of the stack before throwing an error which is incorrect. As of now, we assume the user knows how to use RPN calculators but this should be something that has to be prevented in the first place. Currently. clearing the stack helps.

Another thought would be to allow for calculation history, in which the calculator can download a `.txt` or other file at the end of the session that contains the calculations performed.

## Final Thoughts
Thank you for reading through my thought process and design rationale. This project was a fun experience that allowed me to practice some OOP design patters that I learned from Sandy Metz Book! It also help me notice my limitations and some areas of improvement. Lastly, I also learned new things such as the use of  `readLine` as a CLI loop as opposed to using a simple while loop with read stdin methods.  