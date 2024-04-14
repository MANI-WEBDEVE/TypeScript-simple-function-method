// Function return how do you specify the return type of a function in typescriipt
// To specify the return type of a functio, you can use the colon (:) followed by the desired type after the function parameter list

// Function invocation;
// -> To execute a function, you simply invoke it by using its name followed by parantheses.

// -> You can provide arguments (actual values) for the parameter defined in the function declaration !

const greet = (name: string, id: number): string => {
  return `greeting you ${name}, and your id is ${id}`;
};
const myGreet = greet('mani', 1);
console.log(myGreet);

// Write a function called isPalindrome that takes a string as a parameter and return true if the string is a palindrome (reads the same forwards and backword ), and false otherwise

const palindrome = (str: string): string => {
  let strRever = str.split('').reverse().join('');
  if (str === strRever) {
    return strRever + ' = \ttrue';
  } else {
    return strRever + ' = \tfalse';
  }
};
console.log(palindrome('oppo'));

// Question No 1 -> Create a function clled calculateAverage that takes an array of number as a parameter and returns the average of those number

const calculateAverage = (num: number[]): number => {
  if (num.length === 0) {
    return 0;
  }

  const sum = num.reduce((total, number) => {
    return total + number;
  }, 0);
  const average = sum / num.length;
  return average;
  // return sum
};

// console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

//-----------------------------------
// doute checking area
const avg = (num: number[]) => {
  let number = num.reduce((total, num) => total + num);
  return number;
};
// console.log(avg([1,2,2,2,2,2]))
//-------------------------------------------------------

// Question No 2 Create aFunction called findMaxVal that takes an array of numbers as a parameter and returns the maximum value in the array

const findMaxVal = (num: number[]): number => {
  if (num.length === 0) {
    throw new Error('Array is Empty');
  }
  let maxVal = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > maxVal) {
      maxVal = num[i];
    }
  }
  return maxVal;
};
// console.log(findMaxVal([12,12,34,56]))

//-----------------------------------
// doute checking area
const maxvalue = (number: number[]): number => {
  if (number.length === 0) {
    return 0;
  }

  let maxVal = number[0];

  for (let i = 1; i < number.length; i++) {
    console.log(number[i]);
    console.log(maxVal + ' p');
    if (number[i] > maxVal) {
      maxVal = number[i];
    } else {
      console.log('sorry');
    }
  }
  return maxVal;
};

console.log(maxvalue([12, 12, 3, 56]));
