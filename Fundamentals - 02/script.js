// `use strict`

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive :D')

// // const interface = 'Audio'
// const private = 534

// function logger() {
//     console.log('My name is Jonas')
// }

// //calling / running / invoking function 
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// const num = Number('23')
// console.log(num)


// function fruitSmoothie (bannanas, strawberries) {
//     const coldSmoothie = `This is a smoothie with ${bannanas} bannanas and ${strawberries} strawberries`
//     return coldSmoothie
// }

// const storeSmoothie = fruitSmoothie(6, 9)
// console.log(storeSmoothie)

// const newyorkSmoothie = fruitSmoothie(420, 'blazeit')
// console.log(newyorkSmoothie)


// //Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }
// const age1 = calcAge1(1985)

// //Function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1985)
// console.log(age1, age2)

// //Arrow Function 
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1985)
// console.log(age3)

// const yearsUntilRetirment = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirment(1985, 'Joe'))
// console.log(yearsUntilRetirment(1991, 'Bob'))


// function cutPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} pieces oranges`
//     return juice
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const yearsUntilRetirment =  function (birthYear, firstName)  {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }

// }

// console.log(yearsUntilRetirment(1991, "Joey"))
// console.log(yearsUntilRetirment(1970, "Mike"))

// const friends = ['Michael', 'Stephen', "Peter", "Paul"]

// // const years = new Array(1991, 1985, 2008, 2020)

// console.log(friends[2])
// console.log(friends[0])

// console.log(friends.length - 1)
// console.log(friends[friends.length - 1])

// friends[2] = "Jay"
// console.log(friends)

// const firstName = "Joseph"
// const joseph = [firstName, 'Balzac', 2037 - 1985, 'teacher', friends]

// console.log(joseph)

// //Exercise 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])

// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

// console.log(ages)

//Add elements
// const friends = ['Michael', 'Steven', 'Peter']
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)



// friends.unshift('John', 'Bobby')
// console.log(friends)

// //Remove elements 
// friends.pop() //last element
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift()//first element 
// const shifted = friends.shift()
// console.log(friends)
// console.log(shifted)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Michael'))

// friends.push(23)
// console.log(friends.includes("Steven"))
// console.log(friends.includes("bob"))
// console.log(friends.includes(23))
// console.log(friends)

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// }

//Objects 
const joe = {
    firstName: 'Joe',
    lastName: 'Balzac',
    age: 2037 - 1985,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(joe.lastName)
console.log(joe['lastName'])

const nameKey = 'Name'
console.log(joe['first' + nameKey])
console.log(joe['last' + nameKey])

// const interestedIn =
//     prompt('What do you want to know about Jonas? Choose between firsName, lastName, age, location, job and friends')

// if (joe[interestedIn]) {
//     console.log(joe[interestedIn])

// } else {
//     console.log("Wrong request! Choose between firsName, lastName, age, job and friends")

// }

joe.location = 'New York City'
joe['twitter'] = '@joebalzac'
console.log(joe)

console.log(`${joe.firstName} has ${joe.friends.length} friends and his best friend is ${joe.friends[0]}`)

