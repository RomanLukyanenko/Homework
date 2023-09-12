// task-1;
const calculate = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return { x1: null, x2: null };
    
    const [x1, x2] = [
        (-b + Math.sqrt(discriminant)) / (2 * a),
        (-b - Math.sqrt(discriminant)) / (2 * a)
    ];

    return { x1, x2 };
};
console.log(calculate(1, 5, 6));


console.log("===============================");


// task-2;
const factorial = (num) => {
    if (num < 0) return;
    if (num === 0) return 1;

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial(5));


console.log("===============================");

// task-3;
const fib = (n) => {
    if (n <= 0) return "Введіть число більше нуля";

    let result = [];
    let [a, b] = [1, 1];

    for (let i = 1; i <= n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }

    return result.join(' ');
};

const sequence = fib(5);
console.log(sequence); 