//Create a function that reverses str
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello'))



// Create a function that clears spaces
const clearWhiteSpace = (str) => {
    return str.split(' ').join('');
};

console.log(clearWhiteSpace('hello 1 1 1 2'));



//Create a function that counts words in sentence
const countWords = (str) => {
    return str.split(' ').length;
};
console.log(countWords('Hi my name is Taras'))