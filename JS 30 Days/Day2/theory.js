//EXlevel1
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, challenge.length-1))
console.log(challenge.substring(0, 2))
console.log(challenge.includes('Script'))

let splitChallenge = challenge.split('')
console.log(splitChallenge);
let split11 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
let replace12 = challenge.replace('JavaScript', 'Python');
console.log(replace12)
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))
console.log('30 Days of Javascript  '.trim())
console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match(/a/g))
console.log('30 Days of '.concat('JavaScript'))
console.log(challenge.repeat(2))

//level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to 'help' one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same - with charity you give love, so don't just give money but reach out your hand instead."`)

console.log(typeof(10) === 10) //it is not
console.log(+'10' === 10) //true

console.log(parseFloat('9.8') === 10) //it is not
console.log(Math.round(parseFloat('9.8'))===10) //true

console.log('python'.includes("on") === 'jargon'.includes("on"))

console.log(Math.random()*100)
console.log(Math.random()*50 + 50)
console.log(Math.random()*255)

console.log('JavaScript'[Math.round(Math.random() * ('JavaScript'.length -1))])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let string12 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string12.substring(string12.indexOf('because'), string12.lastIndexOf('because')+8))

//Level 3 exercises
let string3_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 

console.log(string3_1.match(/love/g).length);
console.log(string12.match(/because/g).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanedSentence = sentence.replace(/%/g, '').replace(/@/g, '').replace(/&/g, '').replace(/#/g, '').replace(/\$/g, '').replace(/;/g, '').replace(/!/g, '')
console.log(cleanedSentence)

const moneyArray = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g)

console.log(moneyArray)

//let salaryTotal = +moneyArray[0]*12 + +moneyArray[1] + +moneyArray[2]*12;
//console.log(salaryTotal)

let someNumber = sumElemInArray(moneyArray)


console.log(someNumber)

function sumElemInArray(param0){
    let sum = 0;
    
    for(let i=0; i < param0.length; i++){
        param0[i] = parseInt(param0[i]);
        sum += param0[i];
    }
    return sum;
}
