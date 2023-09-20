
const obj = {
    from: 1,
    to: 10,
    createArr: function() {
      const arr = [];
      for (let i = this.from; i <= this.to; i++) {
        arr.push(i);
      }
      this.arr = arr;
    }
  };
  
  obj.createArr();
  console.log(obj.arr); 







  const obj1 = {
    from: 1,
    to: 10
  };
  
  const createArr1 = function() {
    const arr1 = [];
    for (let i = this.from; i <= this.to; i++) {
      arr1.push(i);
    }
    this.arr1 = arr1;
  };
  
  const boundedCreateArr = createArr1.bind(obj1);
  boundedCreateArr();
  console.log(obj1.arr1); 







  const obj3 = {
    from: 1,
    to: 10
  };
  
  const createArr3 = function() {
    const arr3 = [];
    for (let i = this.from; i <= this.to; i++) {
      arr3.push(i);
    }
    this.arr3 = arr3;
  };
  
  createArr3.call(obj3);
  console.log(obj3.arr3);













  const calculator = {
    result: 0,
  
    sum: function(value) {
      this.result += value;
      return this;
    },
  
    sub: function(value) {
      this.result -= value;
      return this;
    },
  
    mul: function(value) {
      this.result *= value;
      return this;
    },
  
    div: function(value) {
      this.result /= value;
      return this; 
    }
  };
  
  calculator.sum(2).sum(2).mul(4);
  console.log(calculator.result);


