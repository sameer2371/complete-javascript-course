'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


function logger() {
    console.log('Hello World!');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = {
    fristName: 'Jonas',
    lastName: 'Schmidt',
    age: 2037 - 1991,
    job: 'teacher',
    friends: friends
};
console.log(jonas);
console.log(jonas.lastName);

const nameKey = 'Name';
console.log(jonas['last' + nameKey]);


console.log(`${jonas.fristName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}