class user {
    // method
    greeting() {
        return 'Hello';
    }
};

const joseph = new user();
console.log(joseph.greeting())

// constructor

class user {
    constructor (){
        console.log('New User');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this - reference father of the element child

class user {
    constructor(name) {
        this.name = name;
    }
    // method
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana')
console.log(ana.greeting());

// getters and setters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    speak (){
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    };
    
    set uAge(n) {
        this.age = n;
    };
}

const developer = new user ('Mario', 65);
console.log(developer.uAge);
console.log(developer.uAge = 55);






