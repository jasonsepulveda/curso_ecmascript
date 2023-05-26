// this is the normal way to define a function with default params
function newUser (name, age, country) {
    var name = name || 'Jason';
    var age =  age || 32;
    var country = country || 'Chile';
    console.log(name, age, country)
};
newUser();
newUser('Laura', 31, "Venezuela");

// new feature in ecmas6

function newAdmin(name = 'Jose', age = 22, country = 'Colombia') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Peter', 40, 'Canada');