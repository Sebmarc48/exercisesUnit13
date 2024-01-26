//*Quick Question #1 What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// returns {1,2,3,4}

//*Quick Question #2 What does the following code return?
//[...new Set("referee")].join("")
// returns {referee}

//*Quick Question #3 What does the map m looks like after running the code
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//Array(3) => true}
//{Array(3) => false}

//*Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate */

//Create a set off the array, compare sizes and if the set is smaller it means the original array had duplicates
const hasDuplicate = (arr) => {
  const arrSet = new Set(arr);
  if (arr.length > arrSet.size) {
    return true;
  }
  return false;
};
console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

//*Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const isVowel = (char) => "aeiou".includes(char);

const vowelCount = (str) => {
  const m = new Map();
  for (let letter of str) {
    if (isVowel(letter)) {
      if (m.has(letter)) {
        m.set(letter, m.get(letter) + 1);
      } else {
        m.set(letter, 1);
      }
    }
  }
  return m;
};
