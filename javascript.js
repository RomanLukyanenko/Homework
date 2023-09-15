// Return arr of numbers with values that are in range from 'from' param and to 'to' param
function filterRange(arr, from, to) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= from && arr[i] <= to) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterRange(numbers, 3, 7));







// Sort arr from least to biggest
function sortArr(arr) {
    return arr.sort((a, b) => a - b);
}

const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
console.log(sortArr(arr)); 








// Sort arr of strings from shortest to longest
const sortArr1 = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
};

const arr1 = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const sortedArr1 = sortArr1(arr1);
console.log(sortedArr1); 







// Calculate average age of users older then 17 and younger then 55
const averageAge = (users) => {
    let sumAge = 0;
    let count = 0;
    
    users.forEach(user => {
        if (user.age > 17 && user.age < 55) {
            sumAge += user.age;
            count++;
        }
    });
    
    return sumAge / count;
};

const arr2 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

console.log(averageAge(arr2));






// Sort arr by name if 2 elements have same name sort by age
const arr3 = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];
  
  const sortUsers = (users) => {
    users.sort((a, b) => {
      if (a.name === b.name) {
        return a.age - b.age; 
      }
      return a.name.localeCompare(b.name);
    });
    return users;
  };
  
  const sortedArr3 = sortUsers(arr3);
  console.log(sortedArr3);