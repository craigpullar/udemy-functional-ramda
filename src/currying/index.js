const add = (a, b) => a + b;

console.log(add(1));

const curry = (fn, callLength = 0) => {
  const maxCallLength = fn.length;
  return (arg) => {
    const newFunction = fn.bind(this, arg);
    const newCallLength = callLength + 1;
    return newCallLength >= maxCallLength ? newFunction() : curry(newFunction, newCallLength);
  };
};

const curriedAdd = curry(add);

console.log(curriedAdd(1));
console.log(curriedAdd(1)(2));
