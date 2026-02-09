let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreateddate = new Date(2026, 2, 3)  // In js months start from zero
let myCreateddate = new Date("2026-03-03")
// console.log(myCreateddate.toLocaleString());
// let myTimeddate = new Date(2026, 2, 3, 12, 0) 
// console.log(myTimeddate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);  // It gives us millisecond value

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getFullYear());
 console.log(newDate.getMonth());
 console.log(newDate.getDate());


 newDate.toLocaleString('deafult', {
    weekday : "long"
 })
 

