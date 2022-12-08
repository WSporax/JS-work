//Exercise Level 1

const array1 = new Array()
const array2 = new Array(5)

console.log(array1.length, array2.length)

array2.fill('x')

console.log(array2[0], array2[Math.round(array2.length/2)], array2[array2.length-1])

mixedDataTypes = [1,2,'hello', 5.5, true, null]

itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)

console.log(itCompanies[0],itCompanies[(itCompanies.length -1)/2],itCompanies[itCompanies.length-1])

console.log(itCompanies.toString())
console.log(itCompanies.toString().toUpperCase())
console.log(itCompanies.toString(), ' are big IT companies')

if(itCompanies.includes('Apple')){
    console.log("It exists")
}
else{
    console.log('Does not exist')
}

console.log(itCompanies[0].indexOf('o') !== -1)

let o_itCompanies = []

for(i=0; i<itCompanies.length; i++){
    if(itCompanies[i].indexOf('o') !== -1){
        console.log(itCompanies[i])
    }
}

itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
let slicedIt = itCompanies.slice(0,3)
console.log(slicedIt)
let slicedIt2 = itCompanies.slice(itCompanies.length -3, itCompanies.length)
console.log(slicedIt2)

console.log('it companise is', itCompanies)

let slicedIt3 = itCompanies.slice(3, 4)
console.log(slicedIt3)
//remove first, middle, last, all
let removedFirst = itCompanies.shift()
console.log(removedFirst)
let removedLast = itCompanies.pop()
console.log(removedLast)
let removedAll = itCompanies.slice(0,itCompanies.length-1)
console.log(removedAll)

//Ex 2
// import { countries } from "./countries"
// import { webTechs } from "./web_techs"

console.log(webTechs) //so shite that i need to have 3 script elements, idk how to use es import/export

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python'
console.log(text)
console.log(text.length)

const textArr = text.replace(/,/g, '').replace('.', '').split(' ')
console.log(textArr)
console.log(textArr.length)

const shoppingCart = ['Milk', 'Coffee','Tea','Honey']
//add meat start, sugar end, remove honey if allergic, tea -> green tea

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')

//Below works, annoying to refresh and get a prompt
// let isAllergic = prompt("allergic to honey?")
// isAllergic == 'Yes' || 'Y'
// ? shoppingCart.splice(4,1)
// : console.log('No removal')

shoppingCart[3] = 'Green Tea'

countries.includes('Ethiopia')
? console.log(`Ethiopia exists in ${countries.indexOf('Ethiopia')}`)
: countries.push('Ethiopia')

webTechs.includes('Sass')
? console.log('Sass is a CSS preprocess')
: webTechs.push('Sass') && console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise 3
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages = ages.sort()
console.log(ages)
console.log(`min is ${ages[0]} and max is ${ages[ages.length-1]}`)

ages.length %2 == 1
? console.log(`odd, age median is ${ages[(ages.length/2)-.5]}`)
: console.log(`even, age median is ${(ages[ages.length/2] + ages[(ages.length/2)-1])/2}`)

let sum =0;
for(let i=0; i < ages.length; i++){
    sum += ages[i]
}
console.log(`average is ${sum/ages.length}`)
console.log(`range is ${ages[ages.length-1] - ages[0]}`)
console.log(`min-average is ${Math.abs(ages[0] - sum/ages.length)} and max=average is ${Math.abs(ages[ages.length-1]-sum/ages.length)}`)

console.log(countries.slice(0,10))

countries.length %2 ==1
? console.log(`Odd ${countries[countries.length/2 -0.5]}`)
: console.log(`Even ${countries[countries.length /2] -countries[countries.length/2-1]}`)

let firstCountries = []
countries.pop()
countries.length %2 ==1
? (firstCountries = countries.splice(0, countries.length/2 -.5), firstCountries.push('United States'))
: firstCountries = countries.splice(0, countries.length/2)
