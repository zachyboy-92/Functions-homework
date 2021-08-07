// Question 6

// Arrow function
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello"));

function reverseString2(str) {
  var reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString2("Hello world"));
