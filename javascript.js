const cachesDecorator = (func) => {
    const cache = new Map();
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = func.apply(this, args);
      cache.set(key, result);
      return result;
    };
  };
  
  const obj = {
    num: 1,
    result: null,
    sum(num) {
      return this.num + num;
    },
  };
  
  const sum = (num) => {
    return obj.num + num;
  };
  
  const decoratedSum = cachesDecorator(sum);
  console.log(decoratedSum(2));

  const decoratedObjSum = cachesDecorator(obj.sum);
  console.log(decoratedObjSum.call(obj, 3));









  const factorial = (initialNumber) => {
    if (initialNumber <= 1) {
      return 1;
    }
    return initialNumber * factorial(initialNumber - 1);
  };
  
  console.log(factorial(5));








  const fibN = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibN(n - 1) + fibN(n - 2);
  };
  
  const fib = (length) => {
    const sequence = [];
    for (let i = 0; i < length; i++) {
      sequence.push(fibN(i));
    }
    return sequence;
  };
  
  console.log(fib(5));