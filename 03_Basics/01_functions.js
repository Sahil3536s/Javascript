    function sayMyName(){
        console.log("S");
        console.log("A");
        console.log("H");
        console.log("I");
        console.log("L");
        
    }
    sayMyName()

    function addTwoNumbers(num1, num2){
        console.log(num1 + num2);
    }
    addTwoNumbers(3, 4);  // This function gives us undefined value because we are not returning anything from the function. We are just printing the value inside the function. To get the value we need to return it from the function.
    console.log("Result:", addTwoNumbers());
    

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;  // This will return the value to the caller of the function.
    // After return statement function will stop executing and don't do any work after it
    console.log("Sahil");  // THis will not print
    
}
console.log("Result:", addTwoNumbers(3,5));

// Another short method
// function addNumber(){
//     return Result = num1 + num2;
// }
// addNumber(3, 4);

function loginUserMessage(username){
    if(username === undefined){
        return "Enter a username"
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Sahil"));
console.log(loginUserMessage());

function calculateCartPrice(...number){  // ... it is a rest or spread operator which is used to take multiple arguments and store them in an array. 
    return number
}
console.log(calculateCartPrice(200,500,5,66,44,524));

function Cart(val1, val2, ...items){
    return items
}
console.log(Cart(200,4,22,56));  // 200 goes in val1, 4 goes in val2 and rest goes in array

const user = {
    name: "Sahil",
    age: 22
}
function handleObject(anyobject){
    return `Name is ${anyobject.name} and Age is ${anyobject.age}`
}
// console.log(handleObject(user));

// we can also pass the object directly
handleObject({
    name : "Sam",
    age : 25
})

console.log(handleObject(user))


