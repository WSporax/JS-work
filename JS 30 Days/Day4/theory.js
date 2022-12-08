//Exercise Level 1

// let uage1 = prompt("Enter your age:")

// if (uage1 >= 18) {
//     console.log("You are old enough to drive")
// }
// else {
//     console.log("You are left with ", 18 - uage1, " to drive")
// }

// let myAge = 22, yourAge

// console.log("I am ", myAge)
// yourAge = prompt("Enter your age: ")

// if (myAge > yourAge) {
//     console.log("You are ", myAge - yourAge, " years younger than me")
// }
// else if (myAge == yourAge) {
//     console.log("You are the same age as i am")
// }
// else {
//     console.log("You are ", yourAge - myAge, " years older than me")
// }

// let a = 4;
// let b = 3;

// if (a > b) {
//     console.log(a, " is greater than ", b)
// }
// else {
//     console.log(a, " is lesser than ", b)
// }

// a > b
//     ? console.log(a, ' is greater than ', b)
//     : console.log(a, ' is lesser than ', b)

// let uNum4 = prompt("Enter a number: ")

// uNum4 % 2 == 0
//     ? console.log(uNum4, "is even")
//     : console.log(uNum4, "is odd")

//Exercise Level 2

let grade = parseInt(prompt("Student grade (/100): "))

switch (true) {
    case (grade >= 80 && grade < 100):
        console.log("A")
        break;
    case (grade >= 70 && grade < 80):
        console.log("B")
        break;
    case (grade >= 60 && grade < 70):
        console.log("C")
        break;
    case (grade >= 50 && grade < 60):
        console.log("D")
        break;
    case (grade >= 0 && grade < 50):
        console.log("E")
        break;
    default:
        console.log("You didn't hand something in")
        break;
}

let season = prompt("wie ist jetzt das Jahreszeit?")
switch (season) {
    case ('September'):
        console.log("Herbst")
        break;
    case 'Oktober':
        console.log("Herbst")
        break;
    case 'November':
        console.log("Herbst")
        break;
    case ('December' || 'Januar' || 'Februar'):
        console.log("Winter")
        break;
    case ('December' || 'Januar' || 'Februar'):
        console.log("Winter")
        break;
    case ('December' || 'Januar' || 'Februar'):
        console.log("Winter")
        break;
    case ('März' || 'April' || 'Mai'):
        console.log("Frühling")
        break;
    case ('Juni' || 'Juli' || 'August'):
        console.log("Sommer")
        break;
    default:
        console.log("Du kennst nicht?")
        break;
}
let derTag = prompt("Welcher Tag ist heute?")
switch (derTag) {
    case ('Montag' || 'Dienstag' || 'Mittwoch' || 'Donnerstag' || 'Freitag'):
        console.log(derTag, " ist ein Wochentag")
        break;
    case ('Samstag' || 'Sonntag'):
        console.log(derTag, " ist ein Wochende")
        break;
    default:
        console.log("Du kennst nicht?")
        break;
}
let numTagImMonat = prompt("Auswählen ein monat?")
switch (numTagImMonat) {
    case ('Januar' || 'März' || 'Mai' || 'Juli' || 'August' || 'Oktober' || 'December'):
        console.log(31, " tage im der monat")
        break;
    case ('Februar' || 'Sonntag'):
        console.log(28, " oder ", 29, " tage im der monat")
        break;
    case ('April' || 'Juni' || 'September' || 'November'):
        console.log(30, " im der monat")
        break;
    default:
        console.log("Du kennst nicht?")
        break;
}