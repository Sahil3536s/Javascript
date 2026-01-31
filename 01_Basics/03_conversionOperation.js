let score = 33      // without double quotes it is a number
let scores = "33"   // with double quotes it is a string
let total = "03abc"
let value  = true   // a boolean value
console.log(typeof score);
console.log(typeof scores)

let valueinnumber = Number(total)  // converts any value into number
console.log(typeof valueinnumber);
console.log(valueinnumber); // it actually a nan

let convert = Number(total)
console.log(convert);   // For true we get 1 and for false we get 0

// Convert a number into boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    // gets 1 number as true boolean value

// COnvert a number into string
let someNumber = 33
let StringsomeNumber = String(someNumber)
console.log(typeof StringsomeNumber);
console.log(StringsomeNumber);



