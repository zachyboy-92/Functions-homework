// Question 7
const array = ["javascript", "java", "spring java4555", "ruby", "python"];

const findLongestWord = (array) => {
  let longestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord(array));

// Question 8
function filterLongWords(array, num) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
console.log(filterLongWords(array, 5));
