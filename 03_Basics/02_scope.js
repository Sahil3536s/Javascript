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


