// console.log("Its working")
// if (1+1 ===2){
//     console.log("Math still works");
// }
// console.log("after conditional")
// let random = Math.random();
// if (random< 0.5){
//     console.log("your number is less than 0.5")
//     console.log(random);
// }
// if (random>= 0.5){
//     console.log("your number is greater than 0.5")
//     console.log(random);
// }

// let num = 2;

// if (num%2 == 0){
//     console.log("even");
// }

// let dayOfWeek = prompt('enter a day').toLowerCase();

// if(dayOfWeek == "monday"){
//     console.log("ugh i hate monday");
// }
// else if(dayOfWeek == "saturday"){
//     console.log("whoop! weekend!");
// }
// else if(dayOfWeek == "friday"){
//     console.log("Nearly there!");
// }
// else{
//     console.log("bgodsgjulsdg")
// };

// const age = 17;

// if (age < 5){
//     console.log("you are a baby you get in for free")
// }
// else if(age <10){
//     console.log("You are a child, you pay 10£")
// }
// else if(age <65){
//     console.log("You are an adult, you pay 20£")
// }
// else if(age >65){
//     console.log("You are a fossil, you pay £10")
// }

// const password = prompt("please enter a new password");
// // password must be 6+ characters
// if (password.length >= 6) {
//     console.log("long enough");
//     if (password.indexOf(' ') == -1) {
//         console.log("good job no space")
//         console.log("valid password")

//     }
//     else {
//         console.log("no spaces allowed");
//     }

// }

// else {
//     console.log("not big enough");
// }
//     // password must not include spaces

// const password = prompt("password: ")
// if(password.length >=6 && password.indexOf(' ') ===-1){
//     console.log('Valid password');
// }else{
//     console.log("shite password");
// }
// const age = 10;
// if(age >=0 && age<5){
//     console.log("Free");
// }
// else if(age >=5 && age<10){
//     console.log("$10");
// }else if(age >=10 && age < 65){
//     console.log("$20")
// }else{
//     console.log("invalid")
// }
// const day = 68;
// switch (day) {
//     case 1:
//         console.log("ew mon");
//         break;
//     case 2:
//         console.log("ew tue");
//         break;
//     case 3:
//         console.log("ew wed");
//         break;
//     case 4:
//         console.log("ew thur");
//         break;
//     case 5:
//         console.log("ew fri");
//         break;
//     default:
//         console.log("ew");
//         break;

// }
// for(let i = 100; i >=0; i-=10){
//     console.log(i);
// }
// let count = 0;
// while( count< 10){
//     count++;
//     console.log(count);
// }
// const SECRET = "babySeal";
// let guess = prompt('enter the secret code');
// while(guess !== SECRET){
//     guess = prompt('enter the secret code');
// }
// console.log("Correct");
// let input = prompt("Hey say something")
// while(true){
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') break;
// }
// console.log("ok then")

// let maxGuess = parseInt(prompt("Enter the max number limit"));
// while (!maxGuess) {
//     maxGuess = parseInt(prompt("Enter a valid number"));
// }
// //guesses between 1 and targetNum, math.random gens a value of 0-num <1
// const targetNum = Math.floor(Math.random() * maxGuess) + 1;
// console.log(targetNum);

// let numTries = 1;
// let ifQuit = false;
// let guess = parseInt(prompt("Enter your first number"));

// while (parseInt(guess) !== targetNum) {
//     if (guess == "q") {
//         ifQuit = true;
//         break;        
//     }
//     if (guess < targetNum) {
//         guess = parseInt(prompt("Too low, enter another guess"));
//         numTries++;
//     }
//     else if (guess > targetNum) {
//         guess = parseInt(prompt("Too high, enter another guess"));
//         numTries++;
//     }
//     else {
//         guess = prompt("Enter a valid guess");
//         numTries++;
//     }
// }
// if(!ifQuit){
//     console.log(`Correct number. You had ${numTries} attempts`);
// }
// else{
//     console.log(`Big loser. You made ${numTries} attempts`);
// }

// let textIterable = prompt("Say a word you'd like to be decomposed");
// for(letter of textIterable){
//     console.log(letter);
// }

// coding exercise 34, loop over array and print the square
// const numbers = [1,2,3,4,5,6,7,8,9]; //untouched
// for(sq of numbers){
//     console.log(`${numbers.indexOf(sq)+ 1}| ${sq*sq}`);
// }
// //wrong since i need a (*let* sq of numbers), the let keyword

//new todo project 202
// let toDoListArray = [];
// let uMenuChoiceInput = prompt("What would you like to do?");
// let uChoiceSelection;
// while (uMenuChoiceInput != "quit") {
//     if (uMenuChoiceInput === "new") {
//         uChoiceSelection = prompt("What would you like to add?");
//         toDoListArray.push(uChoiceSelection);
//         uMenuChoiceInput = prompt("What would you like to do next?");
//     }
//     else if (uMenuChoiceInput === "list") {
//         console.log("*******")
//         for (items in toDoListArray) {
//             console.log(`${items}| ${toDoListArray[items]}`)
//         }
//         console.log("*******")
//         uMenuChoiceInput = prompt("What would you like to do?");
//     }
//     else if (uMenuChoiceInput === "delete") {
//         uChoiceSelection = parseInt(prompt("Which index would you like to delete?"));
//         if(uChoiceSelection == true){
//             toDoListArray.splice(uChoiceSelection, 1);
//         }
//         else{
//             console.log("Uknown number")
//         }
//         uMenuChoiceInput = prompt("Unknown number. What would you like to do?");
//      }
//     else {
//         uMenuChoiceInput = prompt("Please enter a valid menu option");
//     }
// }
// console.log("You have escaped ggez");
// let uNumPicked = prompt("set the upper number limit to generate 100 random numbers of from 0")
// for(let i=0; i<100; i++){
//     console.log(Math.floor(Math.random() * (parseInt(uNumPicked)+1)))
// }
// function singSong(){ //defining it
//     console.log("LALALALALALAALAAAAAAA");
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }
// singSong() //running it
// function greet(firstName, lastName){
//     console.log(`Hey your firstname is ${firstName} ${lastName[0]}!`);
// }
// function repeat(str, numTimes){
//     for(let i =0; i <numTimes; i++){
//         console.log(`${str}`);
//     }
// }
// function repeatStr(str, numTimes){
//     result = '';
//     for(let i =0; i<numTimes;i++){
//         result+=str;
//     }
//     console.log(result);
// }

// function add(num1, num2){
//     console.log(num1+num2);
// } //variable assigned to an output of this function is undefined as nothing is saved
// function addR(num1, num2){
//     return(num1+num2);
// }//variable assigned to an output of this function is saved due to return keyword
// function addComplex(num1, num2){
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return false;
//     }
//     return num1 + num2;
// } //only a single thing can be returned from a function, and then it stops the execution of it
// function capitalize(str){
//     let str2 = `${str[0].toUpperCase()}${str.slice(1, str.length)}`
//     return str2;
// }
// function sumArr(arr) {
//     let sum = 0;
//     for (let sq of arr) {
//         // console.log(`${arr.indexOf(sq)+ 1}| ${sq*sq}`);
//         sum += sq;
//     }
//     return sum;
// } //Coding exercise 42

// function arr(num) {
//     if (num <= 7 & num >= 1) {
//         switch (num) {
//             case 1:
//                 return "Monday";
//             case 2:
//                 return "Tuesday";
//             case 3:
//                 return "Wednesday";
//             case 4:
//                 return "Thursday";
//             case 5:
//                 return "Friday";
//             case 6:
//                 return "Saturday";
//             case 7:
//                 return "Sunday";
//         }
//     }
//     else{
//         return null;
//     }
// }
////section 21: levelling up our functions

//function statements
// function(x, y){
//     return x+y;
// }
//function expression
// const add = function(x,y){
//     return x+y;
// }
//both are called by add(x,y)
//Idea is, is that functions are simply values just like variables
//, so they can be passed as args and also return values
// function callTwice(func){
//     console.log("hey boy i can do it *twice*")
//     func();
//     func();
// }
// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callTwice(rollDie); //this will execute callTwice on the function rollDie
// //callTwice(rollDie()); //this will execute the value of the rollDie function twice 
// //i.e callTwice(Math.floor etc etc)
// function callTenTimes(f){
//     console.log("Doing it ten times in a row try and stop me!");
//     for(i =0; i<10; i++){
//         f();
//     }
// }
// callTenTimes(rollDie);

//function which returns a function. this doesn't get called in it's current state.
// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand >0.5){
//         return function(){
//             console.log("Good Function");
//         }
//     }
//     else{
//         return function(){
//             console.log("Bad function");
//         }
//     }
// }
// //it gets called when a variable gets assigned to it. i.e. const fuck = makeMysteryFunc(); fuck();

// function isBetween(num){
//     return num>=50 && num <=100;
// }
// function isBetween2(num){
//     return num>=1 && num <=10;
// }
//function that generates a function that makes functions like above. called by assigning var to it
// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }
//so we make a function that has the outer functions params to set min and max args.
//then when calling that variable, we give it args for the return function.
//e.g. const isChild = makeBetweenFunc(0,18); isChild(14); <==this returns true

// //methods are functions attached to an object.
// const myMath={
//     PI:3.14,
//     square: function(num){return num*num},
//     cube: function(num){return num* num*num},
// }
// console.log(myMath.PI); //returns the PI variable
// //myMath.square(PI); //Pi not defined here globally
// const frick = myMath.square(3.14); // value of 9.8596
// //when making methods, we can remove the function keyword too.
// const myMath2={
//     PI:3.14,
//     square(num){return num*num},
//     cube(num){return num* num*num},
// }

//keyword this
//used commonly in objects to refer to the object it is inside of
// const cat={
//     name: 'tommy',
//     color: 'tabby',
//     breed: 'british shorthair',
//     meow(){
//         //console.log(color); //<= color not defined. inaccessible
//         console.log(this.color);//fine now, color has been referenced using this
//         console.log(`${this.name} says meowwww!`);
//         console.log(`this is ${this}`);

//     }
// }
// //this can change depending on how we call the function.
// const meow2= cat.meow ; //refers to the window object, exists on the browser
// //all raw variables and functions not in objects are defaulted to the window object.
// //meow2 exists in the window object, so this refers to the window.
// //confusing af.
// //ahmad has an explanation on this on the Q&A for section 217.

// try{
//     hello.toUpperCase(); //this isn't supposed to work since we have no hello object
// }
// catch{
//     console.log("ERRRRRORRRRRRRR");
// }

// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3)); //works for strings not number
//     }
//     catch(e){ //the e is an argument that is passed from the try block automatically
//         console.log(e);
//         console.log("please enter a string next time"); //if you pass a non toUppercase datatype.
//     }

// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // function print(element){
// //     console.log(element);
// // }
// // numbers.forEach(print); //the forEach method applied to the numbers object/array

// // //non-explicit version where print isn't defined already would be more commonly used
// // numbers.forEach(function (el) {console.log(el);})
// //above is where the (arg) is a (function) that has just been defined. ofc for of loop is newer now.
// numbers.forEach(function (elf) { if (elf % 2 == 0) { console.log(elf); } })
// //above is where it prints only the even numbers.
const movies = [
    {
        title: 'sad',
        score: 88,
        date: 2020
    },
    {
        title: 'hate',
        score: 74,
        date: 1990
    },
    {
        title: 'improve',
        score: 55,
        date: 2016
    },
    {
        title: 'suicide',
        score: 100,
        date: 2004
    }
]
// movies.forEach(function(movie){console.log(`${movie.title}, ${movie.score}`)})

// //map returns a new array with the callback function applied, which is a function of some kind
// doubles = numbers.map(function (num){return num*2}) //doubles is the same array with each index *2
// names = movies.map(function (movie){return movie.title.toUpperCase()})

// //arrow function is new syntax to make function expressions but shorter
// const add1 = function(x,y) {return x+y;}
// const add2 = (x,y)=>{return x+y;} //same thing
// //need to have  = () => even when there are no arguments to be passed. if there is one arg
// // then no parenthesis needed. for 0 or 2 or more you need them.

//implicit return functions with arrows, only works for a single expression. This is great for one liners essentially
// const add = (a,b)=> a+b;

// const newMovies = movies.map(function (movie){
//     return `${movie.title} - ${movie.score/10}`
// })
// const newMovies = movies.map(movie=> (`${movie.title} - ${movie.score/10}`)) //arrow version

// setTimeout(() =>{console.log("Hello")}, 3000) //function for first arg, time in miliseconds for it to print
// const id = setInterval(() => {console.log(Math.random())}, 2000); //continues at 2s interval
//we set an id variable on this one, just so we can stop this, it works without.
//to stop we use
//clearInterval(id);
//filter returns an array that fultils a condition in the initial callback array. condition needs to be a bool
// const numbers = [1,2,3,4,5,6,7,8,9];
// const numFil= numbers.filter(n=>{return n===4});

// const movFil = movies.filter(movie=> {return movie.score >80});
// const badMovFil = movies.filter(movie=>{return movie.score <60}); //nomen 1
// const recentMovieFilter = movies.filter(movie=> movie.date > 2012); //nomen 2
// const oldMovieFilter = movies.filter(movie=> movie.date <= 2012);

// //filter and then map a callback function that only grabs the titles
// const goodMovieTitles = movies.filter(m=> m.score>79).map(m => (`${m.title}`));

// function validUserNames(usernames) {
//     let filteredUsernames = usernames.filter(function(username){
//         return username.length < 10;
//     })
//     return filteredUsernames;
// }
// //also

// function validUserNames2(usernames) {
//     return usernames.filter(function(username){
//         return username.length < 10;
//     })
// }
// //also

// const validUserNames3 = usernames => usernames.filter(username=> username.length<10)

// function validUserNames(usernames){
//     return filteredUsernames.filter(function u{
//         return u.length <10;
//     })
// } 
// const validUserNames2 = filteredUsernames2 => filteredUsernames2.filter(u => u.length <10);

// lapTimes = [1.2, 1.5, 1.6, 1.2, 1.9, 1.5, 1.1]
// const isEveryTwo = lapTimes.every(times=> times < 2.0); //true, all in array less than 2
// const isEveryOneSix = lapTimes.every(times=> times < 1.6); //false, not all less than 1.6
// const isSomeOneSix =lapTimes.some(times=> times < 1.6); // true, some are less than 1.6

// //allEvens not defined, this is wrapped
// const allEvens = isAllEvens=> isAllEvens.every(e => e % 2 == 0);

// //specific with pre-defined example
// const teemo = [2,4,5,7,8,10];
// const allEvens2 = teemo.every(e => e % 2 === 0); 

// function allEvens3(teemo2){
//     return teemo2.every(function (t){
//         return t % 2 ===0;
//     })
// }

// function allEvens4(teemo3){
//     return teemo3.filter(t=> t%2 ===0)
// }

//reduce combines all elements of an arry, to a single value
//first arg is an accumulator, what it is currently, the currentValue is the second args.
//[3,5,7,9].reduce((accumulator, currentValue)=> {return accumulator + currentValue;}) values loop from: 3,8,15 etc

//minimum 
// const helloWorld = name=>`Hello there ${name}`;
// const helloWorld2 = (name=>{return `Hello there ${name}`}); //if multiline, need more parenthesese and {} around the function


// const prices = [9.99, 1.5, 19.99,49.99,30.50, 0.67];

// const total = prices.reduce((cumul, nextVal) =>cumul+ nextVal)

// const minimum = prices.reduce((min, price) => {
//     if(price < min){
//         return price;
//     }
//     return min;
// })
// const highestRatedMovie = movies.reduce((maxRatings, currentRatings)=>{
//     if(maxRatings.score > currentRatings.score){
//         return `${maxRatings.title} - ${maxRatings.score}`;
//     }
//     return `${currentRatings.title} - ${currentRatings.score}`;
// })
// const numba= [1,2,2,4,47,7,2,167,214,2,4,5]
// const tryingReduceSecondArg = numba.reduce(total,current => total+current);

// const person = {
//     firstName: 'Jessie',
//     lastName: 'Smalls',
//     fullName: function (){
//         return `${this.firstName} ${this.lastName}`
//     } ,
//     shoutname: function(){
//         setTimeout(() =>console.log(this.fullName()),
//         3000)
//     }
// }

//default function, gives a default value to an optional parameter if no-one uses it

// function rollsDie2(numsides){//rolls a die of numsides size
//     // if(numsides ===undefined){numsides =6} //old way
//     return Math.floor(Math.random() *numsides)+1
// }
// function rollsDie2(numsides = 6){//rolls a die of numsides size, default size 6
//     return Math.floor(Math.random() *numsides)+1
// }
// function greet(msg, person="jodie", punc= " ;)"){ //if you pass in an argument, it will overwrite the default, so leave default params at the end
//     return `${msg}, ${person}${punc}`;
// }

//expands an array so that each index is passed as a function argument
// nums4 = [1,2,3,4];
// Math.max(1,2,3);//returns 3
// Math.max(nums4);//returns undefined
// Math.max(...nums4);//returns 4, takes the indices of the nums4 array and pass them as arguments
//essentially turning into Math.max(1,2,3,4)

// const cats = ['susie', 'mikky', 'nima'];
// const dogs = ['polo', 'rex'];
// const catsCpy = [...cats]; //this copies all the indices of cats into allpets, so operating on it does not change cats
//which means pushing or others will not mess with cats. they have different references.
// const allPets = [...cats,...dogs, "speedy"];

//can do the same with objects too
// const feline = {legs:4, family: "Felidae"}//this shares the same key as below
// const canine = {legs:4, family: "Canidae"}//this shares the same key as below
// const catDog = {...feline, ...canine} //family will be set to Canidae family because it occurs last
// //do it a lot when copying objects, important in React

// const dataForm = { //example of a user registering to a site
//     userName: "tomymsdf1",
//     password: "ohn56198weaigfa27"
// }
// //example of copying and adding more attributes when storing that data
// const serverData = {...dataForm, id: "user1", isAdmin: false}

//arguments will pass all arguments and collect them
//but this is not an array so it is pretty weak
// function sum(nums){
//     console.log(arguments);
// }
// nums = 16,61,71. returns 0:16, 1:61, 2:71
//... in the argument field is "rest" which will COLLECT all of the arguments into an array
// function sum2(...nums){ 
//     console.log(nums);
// }
// nums = 1,2 will return [1,2]
const raceResults = ['me', 'you','everyone else', 'god', 'devil']
// const [best, better, good, ...eliad] = raceresults; //destructured array so that
const [best, better, good, ...eliad] = raceResults;
best; //returns 'me', points to raceresults[0]
better; //returns 'you', points to raceresults[1]
good; //returns 'everyone else', points to raceresults[2]
eliad; //returms ['god', 'devil']
const user = {
    email:'wendy@samsung.com',
    password:'hrfehainu54',
    firstName: 'Wendy',
    lastName: 'Shillings',
    location: 'UK'
}
// const {email, password, firstName} = user;
//the items in the {} : email, password and firstName take the first 3 fields of the user object
//i.e. the email, password and firstName fields.
//to rename, need to use colon ":", setting = will give a default
const {email: fuck, password: these, firstName: shite, favPokemon = 'Charmander'} = user;

//becomes more useful when you can destructure an object into a function in the parameters
function destructuredObjectFunctionExample({email: fuck, password: these}){
    return `${fuck}, ${these}`;
}
movies.filter((movie) => movie.score >=90) //sets an argument movie that takes each index in movies, returns movie.score >90
movies.filter(({score}) => score >=90) //destructs the array completely, each object term in the movies array
//will be searched for score. then the score > 90, where score is the variable in movies.score
//returns the same as the lione before