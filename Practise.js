function addNumbers(num1, num2){
    let result = num1 + num2;
    return result; 
    
}
console.log( addNumbers(3,5));

function loginUserMessage(username){
    if(username === undefined){
        return "Enter a username"
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sahil"));
   console.log(loginUserMessage());


   