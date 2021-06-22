// let js = 'amazing'

// 40 + 8 + 23 - 10
// console.log(40 + 8 + 23 - 10)

// console.log('Jonas')
// console.log(23)

// let firstName = "Matilda"
// console.log(firstName)

// let country = "United States"
// let continent = "North America"
// let population = 350

// console.log(country, continent, population)

// let javascriptIsFun = true
// console.log(typeof javascriptIsFun)



// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)

// let year;

// console.log(typeof year)

// year = 1991;
// console.log(typeof year)
// console.log(typeof null)

// let birthYEar = 1985

// birthYEar = 1889

// console.log(birthYEar)

// const now = 2037
// const ageJoe = now - 1985
// const ageSarah = now - 2020
// console.log(ageJoe, ageSarah)

// console.log(ageJoe * 2, ageJoe / 10, 2 ** 3)
// //2 **3 means 2 to the power of 3 

// //Math Operators
// const firstName = 'Joe';
// const lastName = 'Balzac'
// console.log(firstName + ' ' + lastName)

// //Assisgnment operators
// let x = 10 + 5
// x += 10 //x = x + 10
// x *= 4
// x++
// x--
// x--
// console.log(x) 

// //Comparison operators 
// console.log(ageJoe > ageSarah) //>, <, >=, <=
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18

// const now = 2037
// const ageJoe = now - 1985
// const ageSarah = now - 2020

// console.log(now - 1991 > now  - 2018)


// let x, y;
// x = y = 25 - 10 - 5
// console.log(x, y)

// const averageAge = (ageJoe + ageSarah) / 2

// console.log(averageAge)

// const markHeight = 1.69
// const markWeight = 78
// const johnHeight = 1.95
// const johnWeight = 92

// const bmiMark = markWeight / markHeight ** 2
// const bmiJohn = johnWeight / johnHeight ** 2

// console.log(bmiMark, bmiJohn)

// const markHigherBMI = bmiMark > bmiJohn
// console.log(markHigherBMI)

// const firstName = 'Joe'
// const job = "web developer"
// const birthYEar = 1985
// const year = 2037

// const joe = "I'm " + firstName + ', a ' + (year - birthYEar) + ' years old ' + job + '!'

// console.log(joe)

// const joeNew = `I'm ${firstName}, a ${year - birthYEar} years old ${job}!`
// console.log(joeNew) 

// console.log(`this is also a string bruh....`)

// console.log(`this is
// multiple
// lines`)

// const age = 15 

// if (age >= 18) {
//     console.log('Sarah can start drivng license 🚘')
// } else {
//     const yearsLeft = 18 - age 
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }

// const birthYear = 1991
// let century;

// if ( birthYear <= 2000) {
//     century = 20
// } else {
//    century = 21
// }

// console.log(century)

// const markHeight = 1.69
// const markWeight = 78
// const johnHeight = 1.95
// const johnWeight = 92

// const bmiMark = markWeight / markHeight ** 2
// const bmiJohn = johnWeight / johnHeight ** 2

// console.log(bmiMark, bmiJohn)

// const markHigherBMI = bmiMark > bmiJohn

// if (bmiMark >= bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`)
// } else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`)
// }

// type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Jonas'))

// console.log(String(23), 23)

// // type coercion 
// console.log('I am ' + 23 + " years old ")
// console.log('23' + '10' + 3)
// console.log('23' * '2')
// console.log('23' / '2')
// console.log('23' > 10)

// let n = '1' + 1
// n = n - 1
// console.log(n)

// 5 falsy values: 0, "", undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 0

// if(money) {
//     console.log("don't spend it all")
// } else {
//     console.log("You should get a job!")
// }

// let height 
// if (height) {
//     console.log('YAY! Height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

// const age = 18 

// if (age === 18) console.log("You just became an adult (strict)")

// if (age == 18) console.log("You just became an adult (loose)")

// const favourite = Number(prompt("What is your favorite number?"))
// console.log(favourite)
// console.log(typeof(favourite))

// if(favourite === 6969) {
//     console.log("Cool! 6969 is an amazing number!")
// } else if (favourite === 7) {
//     console.log("7 is also a cool number")
// } else if (favourite === 9 ) {
//     console.log("9 is also a sexy number bruh")
// } else {
//     console.log("Number is not 6969, 7 or 9 you suck!")
// }

// if(favourite !== 6969) console.log("why not the 23?")

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)



// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log("Someone else should drive Sarah is Drunk")
// }



// const day = 'monday'

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure')
//         console.log('Go to coding meetup')
//         break
//     case 'tuesday': 
//     console.log('Prepare theory videos')
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples')
//         break
//     case 'friday':
//         console.log("Record videos")
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D')
//         break
//     default:
//         console.log('Not a valid day!')

// }

// const day = 'tuesday'

// if (day === 'monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos')
// } else if (day === 'wednesday' || 'thursday') {
//   console.log('Write code examples')
// } else if (day === 'friday'){
//     console.log("Record videos")
// } else if (day === 'saturday' && 'sunday') {
//     console.log('Enjoy the weekend :D')
// } else {
//     console.log('Not a valid day!')
// }



// 3 + 4 
// 1991
// true && false && !false 

// if (23 > 10) {
//     const str = '23 is bigger'
// }

// const me = 'Jonas'
// console.log(`I'm ${2037 - 1985} years old ${me}`)

// const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) :
// console.log(`I like to drink water`) 

// const drink = age >= 18 ? 'wine 🍷 ' : 'water 🧊'
// console.log(drink)

// let drink2 
// if (age >= 18){
//     drink2 = 'wine 🍷'
// } else {
//     drink2 = 'water 🧊'
// }   

// console.log(drink2)



// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// 'use strict'; 

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log("I can drive")
