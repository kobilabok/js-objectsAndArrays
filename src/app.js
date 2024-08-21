// Exercises - https://eloquentjavascript.net/04_data.html

// #1 The sum of a range
// Your code here.
console.log("#1 The sum of a range");
function range(start, end, step = 1) {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  for (let i = start; i >= end; i += step) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  let arraySum = 0;
  for (let value of array) {
    arraySum += value;
  }
  return arraySum;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// #2 Reversing an array
// Your code here.
console.log("#2 Reversing an arrays");

function reverseArray(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.unshift(element);
  });
  return newArray;
}

function reverseArrayInPlace(array) {
  let middleElement = Math.floor(array.length / 2);
  let temp = null;

  for (let i = 0; i < middleElement; i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];

console.log(myArray);
// → ["A", "B", "C"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// # 3 A List
console.log("# 3 A List");
// Your code here.
function arrayToList(array) {
  let list = {
    value: array[array.length - 1],
    rest: null,
  };

  for (let i = array.length - 2; i >= 0; i--) {
    list = { value: array[i], rest: { ...list } };
  }
  return list;
}

// function listToArray(list){
//   let newArray = [];

//   //call the prepend() method?

//   return newArray;
// }

// function prepend(list, element){
//  // find the element and return it
// }

//for(let i = 0; i >= array.length; i++){}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// #4 Deep comparison
// Your code here.
console.log("#4 Deep comparison");

// function deepEqual(obj1, obj2) {
//   if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     return true;
//   }
//   return false;
// }

//OR
function deepEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length != obj2Keys.length) return false;

  for (let key of obj1Keys) {
    if (
      (typeof obj1[key] == "object" &&
        obj1[key] != null &&
        !deepEqual(obj1[key], obj2[key])) ||
      (!(typeof obj2[key] == "object" && obj2[key] != null) &&
        obj1[key] !== obj2[key])
    )
      return false;
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
