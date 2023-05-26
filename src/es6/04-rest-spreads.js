// arrays deconstructing

let fruits = ['apple', 'banana'];
// old way to call with the index
console.log(fruits[0], fruits[1]);
    // new way creating a new array varaible with the elemnyts
let [a, b] = fruits;
console.log(a, b)

// object deconstructing

let user = {
    userName: 'Jason',
    age: 32,
};
// old way calling the key and values of the element
console.log(user.userName, user.age)
// new way, creating a new object variable with the element of the objetc
let {userName, age} = user;
console.log(userName, age);

// spread operator

let person = { name: 'Matthew', age: 55};
let country = 'Brazil';

let data = { id: 1, ...person, country };
console.log(data);

// spread operator

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[2]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5, 6);
console.log(sum(1,2,3,4)); // here you can see the return of the function

//