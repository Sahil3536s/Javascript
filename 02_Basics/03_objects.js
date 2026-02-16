// Objects literals
const mySym = Symbol("Key1")
const User = {}  // The curly brackets are the object

const JsUser = {
    name: "Sahil",
    [mySym]: "Key1",
    "full name": "Sahil Sehrawat",   // we can not access it with 1st method
    age: 19,
    location: "India"
}
// How to access the objects
// 1st method
console.log(JsUser.name);

// 2nd method
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym); // It gives us string not symbol
console.log( JsUser[mySym]);

JsUser.age = 20  // It changes the value in the object
// Object.freeze(JsUser)  // It freezes the jsuser object so now no one change its value
// JsUser.location = "world"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello, ${this.name}` );
    
}

console.log(JsUser.greeting());







