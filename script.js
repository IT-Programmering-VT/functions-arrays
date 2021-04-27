// WHY WE GOT AN ERROR
// Sorry guys it's seems like I was a bit to stressed during this lesson
// and wasn't that focused.. I actually missed on example that I ment to show
// the example was a function. But what i did after is I tried calling that
// function which obviously doesn't work beacuse I didn't declare it, I only had it
// in my little notes files. So thanks for the patience today and sorry guys!
// so I added the code that i intended to show you in this file and made some comments
// hopefully it make sense :D
// Helena

// FUNCTONS
//const myName = "Helena";
// we know that this i how we declare a variable and assign a value to it

// A function is almost like a variable. But a variable holds a value, a small piece of code, and a function holds a bigger piece of code
// functions are the most simple form of code that we can reuse through our entire app/website
// functions makes it easier for us to write clean and readable code: It also helps us so we dont have to repeat ourselfs
// when coding.

function logFunction() {
  console.log("This is a function");
}
// this is how we declare a function
// first we define the function by using the keyword function and then name it
// function logFunction()
// we need the () right after the name
// after the () comes the function body
// the function body is defined by using {}

logFunction();
// this is how we do the function call
// we can call the function as many times as we want

// challenge for you!
// can you solve how you can output "orange" if you only have 1 orange and "oranges"
// if you have many oranges?
function makeJuice(apples, oranges) {
  const juice = `Juice made out of ${apples} apples and ${oranges} oranges`;
  return juice;
}
// in the function above we want to make some juice. In order to get some juice we need something
// to mak it out of. Apples and oranges for example! Between the () we define apples and oranges and those
// are epmty parameters for now. When we call the function we can give those parameters a value
// that means we can then decide how many apples we want and how many oranges we want.
// inside of the function body {} we can write the code that we want to be executed when the function runs
// in this case we declare a variable called juice and assign the value of a string (template literal)
// if we want the function to give us the result back we need to use the keyword return and then what we want to return
// in this case we want the juice!

console.log(makeJuice(3, 2));
// we log the result to the consol by calling the function and in the () we define the values of apples and oranges

// HERE IS WHAT I FORGOT BEFORE AND THAT MESSED UP THE CODE :D
function calcAge(age1, age2) {
  const resAge = age1 + age2;
  return resAge;
}
console.log(calcAge(20, 10));
// you can think of the parameters (whats inside here) like blank spaces that you will need
// need to fill up later. The value of the parameters are called argument
// we created two very generic functions which will work for any number or any amount of apples and oranges
// we left our apples and oranges as our blank spaces and then we filled them in
// we can call it as many times we want but we should call it atleast 1 time
// if we dont call it the function will not run, the code never hets executed
// the first function we wrote doesnt return anythign which is ok
// but its way more usual that it does return something
// conslusion - functions allow us to write more maintainable code
// cause it lets us write reusable code so we dont have to write code over and over again
// DRY - do not repeat yourself! this goes for all programming languages

// do you guys remember that we have actually already used some built in functions?
// for example const num = NUmber("23")

// this is what i tried calling but i never declared the function
// and i actually didnt notice this until we started on function expressions because i didnt save
console.log(calcAge(25, 14));

// FUNCTION DECLARATION
function myAge(birthYear) {
  return 2021 - birthYear;
}
console.log(myAge(1985));

// FUNCTION EXPRESION
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
console.log(calcAge2(1985));

/*const getArea = function (width, height) {
  return width * height;
};
console.log(getArea(3, 4));

console.log(test(110, 10));

function test(one, two) {
  return one + two;
}*/
// test code when i had a 404 error....

// in javascript functions are actually just values
// and if a function is a value that means we can store it in a variable
// so whats the big deal? what is the difference between a function declaration and expression?
// well the main difference is that we can actually call function declarations
// before they are defined in the code
// we cant do the same with the expression
// this happens because of a process called hoisting - will not talk about now but later on.
// if you feel like this is a piece of cake and you have total control over function go read up on hoisting :)
// which to use?
// personal preference tbh. I advice to use whatever works the best for you while you are learning
// if you are a bit further on your javascript journey you should try and use both expression and arrow function
// to get familiar with it.

// ARROW FUNCTION
// arrow function was introduced in es6
// arrow functions makes it faster to write functions!
// i use them all the time literally and when we start with modern framworks you will see why :)
const calculateAge = function (birthYear) {
  return 2021 - birthYear;
};
// Function expression

const calcAgeTwo = (birthYear) => 2021 - birthYear;
// arrow function

// the exampels above does the exact same thing and will give us the same result
// arrow function is the simplest form of a function
// and a special form but its still an expression
// we do not need to write the return keyword but if we need to write some more code in our
// function we need to use the return keyword - we need the function body {}
// later on you will see how this will be extremly helpful in certain situiations

const yearUntilRetire = (birthYear) => {
  const age = 2021 - birthYear;
  const retire = 65 - age;
  return retire;
};
console.log(yearUntilRetire(1985));

const usableVariable = yearUntilRetire(1985);
console.log(`You have ${usableVariable} until you can take a break!`);
// if more than one line of code we need code block like i said before
// what if we have more parameters?
const yearUntilRetirement = (birthYear, firstName) => {};
// if you have more parameters you simply seperate them by a comma, just like we did before
// when u add more lines of code and more parameter it gets more complex
// and you loose the advantage of arrow functions
// so what to use?
// should i use arrow functions everywhere?
// no because arrow functons doesnt have the keyword this, and you will learn why we should
// and need to use the this keyword. I will go through that in the video about Objects.

// FUNCTIONS CALLING OTHER FUNCTIONS
// having a function calling another function is common and something
// a developer do all the time
// but as a beginner you can struggle to understand this logic
// to illustrate functions calling another function lets say we want to eat breakfast
// but our slices of bred and cheese are to big so we need to cut them into two pieces
// we cannot use the bread and cheese if we dont slice it before!
// and now we need a function to slice the bread and cheese before we use the breakfast function

function slice(breakfast) {
  return breakfast * 2;
  // 1 part breakfast return 2 pieces
}

function makeSandwich(bread, cheese) {
  const breadSlices = slice(bread);
  const cheeseSlice = slice(cheese);
  // and now we called for another function inside a function
  const sandwich = `I'm having ${breadSlices} bread slices with ${cheeseSlice} slices of cheese for breakfast`;
  return sandwich;
}
console.log(makeSandwich(3, 2));
// this will now call the slice() twice
// this is a silly example i know...
// the point is that its very common that one function calls another function
// and this is also to illustrate the DRY principle
// for example imagine that the slicer would cut in 4 pieces instead 2
// we would have to change it and if we wanted any other amount of pieces we would have to change
// now we can change inside the function and it changes everywhere

// ARRAYS

// lets say we want to store our friends names in a variables so we can use them
// later in our program. We only have three friends here but imagine having 300!
const friend1 = "Janne";
const friend2 = "Anna";
const friend3 = "Johan";
// doing this is repeating yourself!
// and if we had 300 friends it would be soooo much code. Not a good practice
// and we can actually store this in one place because of data structures in js
// array is a data structure, its like a big container where we can store data in
// case we have more than a single value
// most important data structures are arrays and objects

const friends = ["Janne", "Anna", "Johan"];
console.log(friends);
// storing all our friends into one array is a much better approach
// we define the array by using []
// every name inside of the array is called an element and each element is placed on a certain index

const years = new Array(1994, 1985, 2015, 2020);
// you can also define an array by using the keyword new and then Array - new Array
// but you should use the literal syntax which is [] its much more common

console.log(friends[0]);
// lets say we want to log the first element, the first name in the array
// then we write 0 becuase arrays starts at 0. So the first element is always 0

console.log(friends[2]);
// what do we get?
// we get the last index in the array, the third element

//const numbers = [10, 26, 44];
//console.log(numbers);

console.log(friends.length);
// this will give us the exact number of elements in the array more about length later
// if you feel like your comfortable with all this - go read up on arrays length! :)

console.log(friends.length - 1);
// ops i missed a thing here!
// this is what i ment to code
console.log(friends[friends.length - 1]);
// we get the result of "Johan" which is the element on the last index in the array
// but only .length give the exact number of the elements in the array which is three
console.log(friends[friends.length]);
// if we try this we get undefined we do not get a value of an element
// think about how we start counting arrays and this mig make sense :)

// we can mutate the array if we want to change something
// lets say we are no longer friends with Jannw and we want to change that name
friends[0] = "Karin";
console.log(friends);
// Janne is removed and replaced with Karin. We need to tell javascript what index we want to mutate [0]
// in this case
// but wait? const cant be changed or?
// what i didnt tell you at that time is that only primitive values are not changeable
// an array is a non-primitive value (object) and this works because how js stores in its memory
// but we cannot replace the whole array like this
//friends = ["Åke", "Bob"];
// it wont work!

const firstName = "Helena";
const helena = [firstName, "Johansson", 2021 - 1985, "developer", friends];
// an array can hold different types and values
console.log(helena);
console.log(helena.length);
console.log(helena[4]);

const calcNewAge = function (birthYear) {
  return 2021 - birthYear;
};
// function to calculate age

const yearOfBirth = [1999, 1960, 2000, 1998];
// array with birth years

console.log(calcNewAge(yearOfBirth));
// yearsOfBirth is an array and now the function wont know what to do because it does not expect an array
// the function expects a number
// we cant take a number minus an array but we can do it with indiviual elements in the array
const firstAge = calcNewAge(yearOfBirth[0]);
const secondAge = calcNewAge(yearOfBirth[1]);
const thirdAge = calcNewAge(yearOfBirth[yearOfBirth.length - 1]);
//console.log(firstAge);
//console.log(secondAge);
console.log(firstAge, secondAge, thirdAge);
// think about the last output, thirdAge, ill comment the explanation later today
// if i would NOT have been a crackpot today you would have the answer above
//const thirdAge = calcNewAge(yearOfBirth[yearOfBirth.length]);
//console.log(firstAge, secondAge, thirdAge);
// trying this gives us NaN when trying to log thirdAge
// but telling js to first give us the whole length of the array, wich we get as a number right?
// .length returns the number of the elements in the array
// and when we have the number we need to tell js to go back a step because we know arrays start at 0!
// so then we get the result for the last element in the array!

// arrays has some built in functions that we can apply and these are called methods
// think of them as array operations
// there are countless array methods in js but we are going to learn the basic ones
friends.push("Benny");
console.log(friends);
// push adds an element to the last index of the array
// push is a method which technically is a function
// and now we have the origianl array plus the new element
// push is a function so it can also return something
// the value it retuns is the length of the new array

friends.unshift("Lena");
console.log(friends);
// unshift adds an element in the beginning of the array
// just like push method also returns the new length

// we can also remove elements from the array
friends.pop();
console.log(friends);
// pop cannot execute anything else than remove the last element
// opposite of push and no argument is needed cause it removes the last element
// so u can add by using PUSH and if you want to remove what you pushed you can use POP

friends.shift();
console.log(friends);
// shift removes the first element
// we do not need an argument and it returns the element that was removed
// unshift add element first and shift removes the first

// very useful is indexOf which tells us what position an element is located at
console.log(friends.indexOf("Janne"));
// if u do this for an element that is not there you will get -1
console.log(friends.indexOf("Helena"));

// ES6 feature includes
// will return true if the element is in the array and false if not
console.log(friends.includes("Janne"));
// this is testing with strict equality which means it does not do type coersion
// so if we push a number into the array and then test if it includes the string '22'
// it wont work it will return false
// but if we test if it includes the number 22 it will return true
// we can use the includes method to write conditions
// like this
// we can use the includes method to write conditions
// like this
if (friends.includes("Anna")) {
  console.log("You have a friend called Anna");
}

// OK SO I HOPE THIS MAKES MORE SENSE SORRY FOR NOT BEING MYSELF TODAY
// ILL BE BACK AS MYSELF ON THURSDAY :D
//Helena
