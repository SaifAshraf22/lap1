//write in console
console.log('hellow world');

// object
let person = {
  name: 'saif',
  age: 20,
};
console.log(person);

// dot notation
person.age = 21;
console.log(person.age);

//bracket notation
let change = 'name';
person[change] = 'ashraf';
console.log(person.name);
let change2 = 'age';
person[change2] = 30;
console.log(person.age);

//array
let arr = ['saif', 'youssef', 'ashraf'];
console.log(arr);
arr[3] = 'yassin';
console.log(arr);
console.log(arr.length);

//jason string
const doJason = JSON.stringify(arr);
console.log(doJason);

//functions

// 1-performaing a task
function print(name) {
  console.log('hellow ' + name);
}
print('saif');

// 2- calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));

//dolar notation
let name = ' so';
console.log(`hellow${name}`);

//special method
const addNum = (num1) => num1 + 5;
console.log(addNum(5));

//create an object
const print1 = new print('yo!');
console.log(print1);

//map order function
let addSelf = arr.map(function (element, index, array) {
  return element + element;
}, 10);

//map with arrow fun
let inverted = [1, -50, -20, 15, 100, -30];

let inv = inverted.map((e) => -e);
console.log(inv);

//fillrer
let frinds = ['Ahmed ', 'Sameh', 'Sayed', 'Amged', 'Israa', 'Ashraf'];

let fillrerF = frinds.filter(function (el) {
  return el.startsWith('A');
});

console.log(fillrerF);

//filter with map
let mix = 'A138S2ZX';
let Fmix = mix
  .split(' ')
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele + ele;
  })
  .join(' ');

console.log(Fmix);

//reduce function
let Radd = arr.reduce(function (acc, current, index, arr) {}, 5);

//fillter with reduce
let rwmove = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let Fremove = rwmove
  .filter(function (ele) {
    return !ele.startsWith('@');
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(Fremove);

//DOM:Document Object Model

console.log(document.title);
console.log(document.body);

//create and append elementa

let myMainElement = document.createElement('div');
let myHeading = document.createElement('h2');
let myParagraph = document.createElement('p');

let myHeadingText = document.createTextNode('Product Title');
let myParagraphText = document.createTextNode('Product Description');

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = 'product';

document.body.appendChild(myMainElement);

//cloning (cupying)
let myp = document.querySelector('h1').cloneNode(true);
