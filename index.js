// Write a JavaScript Program to find the number of even digits in a an array of integers
const countevenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countevenNumbers([1, 2, 3, 4, 5, 6])); // Ans: 3
console.log(countevenNumbers([0, 2, 4, 4, 5, 6])); // Ans: 5
console.log(countevenNumbers([1, 2, 2, 4, 8, 6])); // Ans: 5

// Write a JavaScript Program to find the number of even values up to a given number.
const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
};

console.log(countEvenNumbers(createArrayOfNumbers(6))); // Ans: 3
console.log(countEvenNumbers(createArrayOfNumbers(9))); // Ans: 4

// Write a JavaScript Program to check whether a given array of integers is sorted in acsending order.
const isAscending = (arr) => {
   for (let i = 0; i < arr.length; i += 1) {
      if (arr[i + 1] < arr[i]) return false;
   }
   return true;
}

console.log(isAscending([1, 2, 3, 4, 5, 6])); // Ans: true
console.log(isAscending([1, 2, 4, 2, 5, 6])); // Ans: false
console.log(isAscending([4, 2, 3, 6, 5, 6])); // Ans: false

// Write a JavaScript Program to get the largest even number from an array of integers.
const largestEven = (arr) =>
   Math.max(...arr.filter(num => num % 2 === 0));

   console.log(largestEven([1, 2, 3, 4, 5,6])); // Ans: 6
   console.log(largestEven([1, 2, 33, 4, 5,6])); // Ans: 6
   console.log(largestEven([1, 2, 3, 44, 55,6])); // Ans: 44

// Write a JavaScript Program to replace the first digit in a string (should contains al least digit) with $ character.
const replaceFirstDigit = (str) =>
   str.replace(/[0-9]/,'$');

   console.log(replaceFirstDigit('Abcd1Abcde')); // Ans: Abcd$Abcde
   console.log(replaceFirstDigit('A123Abcde')); // Ans: A$23Abcde
   console.log(replaceFirstDigit('A1cd1Abcd1')); // Ans: A$cd1Abcd1
