// Question 4
const array = [1, 2, 3, 4];

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumArray(array));

function multiplyArray(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
}

console.log(multiplyArray(array));
