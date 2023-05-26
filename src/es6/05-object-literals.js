// object literals
// if the object will receive the same element name, we can omit and do not repeat the name of the value of the object

// Normal Way
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
};

// new way
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId,
    }
};
console.log(newUser('Steph', 27, 'US', 0012))