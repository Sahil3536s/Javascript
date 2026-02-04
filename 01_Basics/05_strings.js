let name = "Sahil"  // Declare a string
let repoCount = 9
console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// Declare a string another method
let gameName = new String('Sahil')
console.log(gameName);
console.log(gameName[0]);

// String methods
console.log(gameName.__proto__);  // used to access an object   it is an prototype property
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));  // used to check at what index any character is   
console.log(gameName.indexOf('h'));  // used to check any character at what index
console.log(gameName.substring(0,3)); // used to acess characters between these index values
console.log(gameName.slice(-5, 2)); // used to access from negative or backside


const myName = "     Sahil     "
console.log(myName);
console.log(myName.trim()); // used to remove the extra space

const url = "https//Portfolio@com"
console.log(url);
console.log(url.replace('@','.' )); // used to replace any character
console.log(gameName.split('-'));















