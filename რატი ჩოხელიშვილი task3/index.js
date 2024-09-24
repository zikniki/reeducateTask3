let array1 = [3, 7, 12];
let array2 = [5, 9, 11];
let array3 = [8, 16, 1];

let numbers = [...array1, ...array2, ...array3];
console.log(numbers);

let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((acc, currentNumber) => acc + currentNumber, 0);
console.log(sum);

function checkNumbers(num) {
    return (num > 10 && num % 2 === 0) ? true : false;
};

let value = 12;
let result = checkNumbers(value);
console.log(result);