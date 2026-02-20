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


