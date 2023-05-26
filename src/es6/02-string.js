// normal way to concat strings
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!'
// console.log(epicPhrase);

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings
// in this case I have to use \n to create a jump of the line
let lorem = 'This is a string \n' + 'This is the next line';
console.log(lorem);

// in this case I use enter key in french comillas ``
let lorem2 = `this a a epic phrase
this is the next line of the epic phrase`;
console.log(lorem2);