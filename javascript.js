
// Pythagorean theorem
function pythagorean(a, b) {
    return Math.sqrt(a*a + b*b);
}

console.log(pythagorean(5, 12))






// Show number in money format
function formatMoney(num) {
    let sign = num >= 0 ? '+ ' : '- ';
    let absNum = Math.abs(num);

    let integerPart = Math.floor(absNum);
    let decimalPart = (absNum - integerPart).toFixed(2).substr(1);
    
    let formattedInt = integerPart.toLocaleString('en-US');

    return sign + formattedInt + decimalPart;
}

console.log(formatMoney(1232323));   
console.log(formatMoney(-23.2132));






// Write a password generator with length n
function generatePassword(n) {
    const characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz';
    let password = '';

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

console.log(generatePassword(8));





// Calculate percentage with n numbers after dot
function calc(firstNum, secondNum, precision) {
    const percentage = (secondNum * 100) / firstNum;
    return parseFloat(percentage.toFixed(precision));
}

console.log(calc(200, 50, 0));   
console.log(calc(200, 0.14, 1));







// Check if prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(4)); 
console.log(isPrime(5));