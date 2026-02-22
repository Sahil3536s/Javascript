// Scope determine the visibility of the variables
// Global Scope - variables declared outside the function abd can be accessed anywhere
// Local Scope - variables declared inside the function and can only be accessed within that function

// Global Scope
var name = "Sahil";

function printName(){
    console.log(name);
}
printName(); // Output: Sahil

// Local Scope
function printName2(){
    var name2 = "Sahil";
    console.log(name2);
}
printName2(); // Output: Sahil
// console.log(name2); // Error: name2 is not defined


function one(){
    const username = "Sahil"
    function two(){
        const website = "Youtube"
        console.log(username); // Output: Sahil  it is the global scope and can be accessed anywhere
    }
    // console.log(website); // It is the local scope cannot accessed outsite the function 

    two()
    console.log(username);
    
    
}
one()

if(true){
   const username = "Sahil"
    if(username === "Sahil"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website); // Error
}
// console.log(username ); // Error
    
// ++++++++++++++++++++ Interesting ++++++++++++++++++++
console.log(addOne(5));  // It not give error we do it with normal function syntax
function addOne(num){
    return num + 1
}

// console.log(addTwo(5));  // It gives error because after declare it we hold it in a variable  addTwo
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));



      
