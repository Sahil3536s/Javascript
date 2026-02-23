    // this keyword refers to the object that is calling the function. It gives us access to the properties and methods of that object.
    // this keyword gives us code reusability, and also this refers to creating new object instance
    // In browser the global object is window, and in node environment the global object is global. In both cases, this refers to the global object. But in strict mode, this refers to undefined. In arrow functions, this refers to the parent scope, which is the global object in this case. Arrow functions do not have their own this keyword, they inherit it from the parent scope.
    // this works on object not in functions
    const user = {
        username: "Sahil",
        age: 19,

        welcomeMessage: function (){
            console.log(`${this.username}, welcome`); // this refers to the object that is calling the function, in this case, it refers to the user object
            console.log(this);
            
        }
    }
    user.welcomeMessage()
    user.username = "Sam"
    user.welcomeMessage()
    console.log(this); // it refers the node environment so it gives us an empty object

const chai = () => {
    employeeName = "Sahil"
    console.log(this.employeeName);
    
}
chai()

// Basic arrow function syntax
const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// Inplicit return in arrow function
const addTwoImplicit = (num1, num2) => num1+num2
console.log(addTwoImplicit(5,8));

const details = (num1,num2) => ({username: "Sahil"})
console.log(details(3,5));

