function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

/* Write an ES2015 Version using the rest operator and an arrow function */

const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);
/* ## **findMin**

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.  */

const findMin = (...numbers) => Math.min(...numbers);

/*## **mergeObjects**

Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object. */

const mergeObjects = (obj, obj2) => ({ ...obj, ...obj2 });
/*
## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.*/

const doubleAndReturnArgs = (arr, ...values) => {
  const firstArr = arr.map((val) => val * 2);
  const secondArr = values.map((val) => val * 2);
  return [...firstArr, ...secondArr];
};

/*  ## **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.*/
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  const randomNum = Math.random() * (items.length - 1);
  const itemsCopy = [...items];
  itemsCopy.splice(randomNum, 1);
  return itemsCopy;
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
