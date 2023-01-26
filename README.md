# Calculator
A simple command-line calculator that evaluates mathematical expressions.

## Features
- Supports the following operations: addition, subtraction, multiplication, division, and exponentiation.
- Handles sub-expressions within parentheses.
- Validates input expressions for proper format.

## Usage
To use the calculator, pass in a mathematical expression as a command-line argument. For example:

> node calc.js "add 2 (multiply 3 4)"

The calculator will return the result of the expression, in this case 14.

## Error Handling
The calculator will throw an error in the following cases:

- Division by zero
- Invalid operator
- Invalid expression format

## Example

> > node calc.js "add 1 2"
> 
> > node calc.js "sub 1 2"
>
> > node calc.js "mul 3 4"
>
> > node calc.js "div 2 4"
>
> > node calc.js "exp 2 3"
>
> > node calc.js "(multiply 3 (multiply (multiply 3 3) 3))"
>
> > node calc.js "(multiply 2 (add (multiply 2 3) 8))"
>
> > node calc.js "(exponent 2 5)"
>
> > node calc.js "(add 1 (multiply (add 2 1) 3))"

## Note
This is a simple calculator, it does not support complex mathematical operation. It's just a demonstration of how to use regular expression and function in JavaScript.