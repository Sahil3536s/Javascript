const my_sons = ["Vishal", "Nanda", "Kalu" ]
const new_sons = ["Harish", "Chinna"]

my_sons.push(new_sons)  // Combines two array 
console.log(my_sons);

// const all_sons = my_sons.concat(new_sons) // Combines two array and return a new array
const all_sons = [...my_sons, ...new_sons]
console.log(all_sons);

const another_array = [1,3,3, [4,5], 6,7, [6,8,9]]
console.log(another_array.flat(Infinity));

console.log(Array.from("Sahil"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
