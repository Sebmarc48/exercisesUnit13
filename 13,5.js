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

const mergeObjects = (obj, obj2) => Object.assign({}, ...obj, ...obj2);