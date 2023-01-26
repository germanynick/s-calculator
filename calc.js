const SUB_EXPRESSION_REGEX = /\(([^()]+)\)/;
const VALID_EXPRESSION_REGEX =
  /(^([a-z]+)( +[+-]?([0-9]*[.])?[0-9]+){2,})|(^[+-]?([0-9]*[.])?[0-9]+)$/;

const add = (...args) => {
  return args.reduce((a, b) => a + b);
};

const sub = (...args) => {
  return args.reduce((a, b) => a - b);
};

const mul = (...args) => {
  return args.reduce((a, b) => a * b);
};

const div = (...args) => {
  if (args.some((value) => value === 0)) {
    throw new Error("Cannot divide by zero");
  }

  return args.reduce((a, b) => a / b);
};

const exp = (...args) => {
  return args.reduce((a, b) => a ** b);
};

const operations = {
  add,
  sub,
  mul,
  div,
  exp,
  addition: add,
  substract: sub,
  multiply: mul,
  divide: div,
  exponent: exp,
};

const calc = (expression) => {
  let match = expression.match(SUB_EXPRESSION_REGEX);

  while (match) {
    const sub_expression = match[1];
    const sub_result = calc(sub_expression);

    expression = expression.replace(match[0], sub_result);
    match = expression.match(SUB_EXPRESSION_REGEX);
  }

  if (!expression.match(VALID_EXPRESSION_REGEX)) {
    throw new Error(`Invalid expression "${expression}"`);
  }

  let tokens = expression.trim().split(" ");

  if (tokens.length === 1) {
    return parseFloat(tokens[0]);
  }

  const operation = operations[tokens[0]];

  if (!operation) {
    throw new Error(
      `Invalid operator "${tokens[0]}" for expression "${expression}"`
    );
  }

  const args = tokens.slice(1).map((value) => parseFloat(value));

  return operation(...args);
};

const expression = process.argv[2];
const result = calc(expression);

console.log(result);
