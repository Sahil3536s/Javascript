// Declare object with the help of constructor
// const tinderUser = new Object()
const tinderUser = {}   // 
tinderUser.id = "123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedin = false
console.log(tinderUser);

const regularUser = {
    email: "sahil.com",
    fullname: {    // Declare an array inside an array
        userfullname:  {
            firstname: "Sahil",
            lastname: "Sehrawat"
        }
    } 
}
console.log(regularUser.fullname);  // Access an object inside an object
console.log(regularUser.fullname.userfullname);

// Merge two objects
const obj1 = {1: "a", 2:  "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

// Access any users details from the loop
const users = [
    {
        id: 1,
        email: "sahil.com"
    },
    {
        id: 2,
        email: "hi.com"
    },
    {
        id: 3,
        email: "s.com"
    }
]
console.log(users[1].id);
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));  // Gives all the datatypes value of this object
console.log(Object.values(tinderUser));  // Gives values of the object



