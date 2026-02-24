// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global namespace.
(function (){
    console.log("DB Connected!");
    
})(); // The parentheses at the end of the function definition immediately invoke the function.

// Another example of an IIFE that takes parameters
(function (name){
    console.log(`Hello, ${name}!`);
})("Alice"); // The argument "Alice" is passed to the IIFE and will be logged as "Hello, Alice!"