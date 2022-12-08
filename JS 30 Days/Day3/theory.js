//Exercise Level 1

let firstName = 'Swain'; let lastName = 'Bedank'; let country = 'Noxia'
let city = 'Noxia Prime'; let age = 69; let isMarried = true; let year = 42069;

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year))

console.log(typeof(10) === typeof('10'))
console.log(parseInt('9.8') === 10)

console.log(1, '10', 1.1)
console.log(0, NaN, null)

console.log('QUESTION 5')
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4 ==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')

console.log('python'.length === 'jargon'.length)

console.log('QUESTION 6')
console.log(4>3 && 10<12) //true
console.log(4>3 && 10>12) //f
console.log(4>3 || 10 <12) //true
console.log(4>3 || 10 >12) //true
console.log(!(4>3)) //f
console.log(!(4<3)) //t
console.log(!(false)) //t
console.log(4>3 && 10<12) //t
console.log(4>3 && 10>12) //f
console.log(4==='4') //f
console.log('dragon'.includes('on') === 'python'.includes('on') && true) //t

const dateObj = new Date();
console.log(dateObj.getFullYear());
console.log(dateObj.getMonth())
console.log(dateObj.getDate())
console.log(dateObj.getDay())
console.log(dateObj.getHours())
console.log(dateObj.getMinutes())
console.log(dateObj.getTime())

//Exercuse Level 2
let height= prompt('Enter the height of a triangle: ')
let base= prompt('Enter the base of a triangle: ')
console.log(`The area of the triangle is ${height*base*0.5}`)

let height1= prompt('Enter side a: ')
let base1= prompt('Enter side b: ')
let base2= prompt('Enter side c: ')

console.log(`The perimeter of the triangle is ${+height1+ +base1+ +base2}`)

let height2 = prompt('Enter h of rect')
let width2 = prompt('Enter 2 of rect')
console.log(`area of rect is ${height2*width2}`)

let radius = prompt('Enter the radius')
console.log(`area of circle is ${Math.round(Math.PI, 2) * radius *radius} and circumference is ${2*Math.round(Math.PI)*radius}`)

//idk how to tackle 5.6.7.8

let hours = prompt("Enter hours: ")
let rateH = prompt("Enter rate per hour: ")
console.log(`Your weekly earning is ${hours*rateH}`)

if(prompt("What is your name").length > 7){
    console.log("Your name is long")
}
else
{
    console.log("Your name is short")
}

let fName= prompt("What is your first name"), lName = prompt("What is your last name");

if(fName.length> lName.length){
    console.log(`Your first name ${fName} is longer than your family name ${lName}`)
}

let myAge = 250;
let yourAge = 25;
if(myAge>yourAge){
    console.log(`I am ${myAge-yourAge} years older than you`)
}

let Date13 = new Date().getFullYear()
let birthYear = prompt("Enter birth year: ")
let uAge = Date13-birthYear
console.log(``)
if(uAge >= 18){
    console.log(`You are ${uAge}. You are old enough to drive.`)
}
else{
    console.log(`You are ${uAge}. You will be old enough to drive in ${18-uAge} years.`)

}

let currentYears = prompt("Enter nubmer of years you were alive for: ")
console.log(`You have lived for ${60*60*23*365*currentYears}`)

let date15 = new Date();

let date15_1 = console.log(`${date15.getFullYear()}-${date15.getMonth()}-${date15.getDate()} ${date15.getHours()}:${date15.getMinutes()}`)
let date15_2 = console.log(`${date15.getDate()}-${date15.getMonth()}-${date15.getFullYear()} ${date15.getHours()}:${date15.getMinutes()}`)
let date15_3 = console.log(`${date15.getDate()}/${date15.getMonth()}/${date15.getFullYear()} ${date15.getHours()}:${date15.getMinutes()}`)

let modDateHours, modDateMin;
//exercise level 3
if(date15.getHours() < 10){
    modDateHours = +(`0${date15.getHours()}`)    
}
else{
    modDateHours = date15.getHours()
}
if(date15.getMinutes() < 10){
    modDateMin = +(`0${date15.getMinutes()}`)    
}
else{
    modDateMin = date15.getMinutes()
}

let date1 = console.log(`${date15.getFullYear()}-${date15.getMonth()}-${date15.getDate()} ${modDateHours}:${modDateMin}`)
