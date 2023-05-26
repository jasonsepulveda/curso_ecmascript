// var is a global scope and I can change its value
var lastName = "Sepulveda";
lastName = "Salazar";
console.log(lastName);
// let is a local scope and I can chage its value
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);
// const is a local scope and I cannot change its value
const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
} 

fruits();