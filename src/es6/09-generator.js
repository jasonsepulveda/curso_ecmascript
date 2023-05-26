// generator

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'david', 'Ulises', 'Maria']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);