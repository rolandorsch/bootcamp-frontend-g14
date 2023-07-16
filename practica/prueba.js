let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]
/*
let greaterTen = [];

for (let i = 0; i<numbers.length; i++) {
  var currentNumber = numbers[i];
  if (currentNumber > 10) {
    greaterTen.push(currentNumber)
  }
}

console.log(greaterTen); // [23, 12, 45, 78, 11, 10.1, 84]
*/
let greaterTen = numbers.filter(number => { number > 10 });
console.log(greaterTen); // []