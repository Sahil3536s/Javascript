const myArr = [1, 2, 3, 4, 5]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// Array Methods
myArr.push(0) //  Add en element  to the array in the end
console.log(myArr);

myArr.pop()  // Removes the last element in the array
console.log(myArr);

myArr.unshift(9) // Adds an element at the staring of the array or add at 0 index
console.log(myArr);

myArr.shift()  // Remove the element at 0 index
console.log(myArr);

console.log(myArr.includes(8)); // Checks if the element is in the array or not

const newArr = myArr.join()  // Convert array into string and also bind it
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice
console.log("A - 01_array.js:26", myArr);
const myn1 = myArr.slice(1,3)  // GIves result from index 0 to 2 not give 3
console.log(myn1);

console.log("B - 01_array.js:30", myArr);
const myn2 = myArr.splice(1,3)  //  Gives result from index 0 to 3
console.log(myn2);







