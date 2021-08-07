// Question #1
const maxOfTwoNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(maxOfTwoNumber(9, 11));

// Question #2
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(10, 7, 2));
console.log(maxOfThree(4, 7, 2));
console.log(maxOfThree(4, 7, 12));

// Question #2 Arrow Function
const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};
console.log(maxOfThree(101, 7, 2));
console.log(maxOfThree(4, 72, 2));
console.log(maxOfThree(4, 7, 122));
