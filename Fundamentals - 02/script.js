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

const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirment =  function (birthYear, firstName)  {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

}

console.log(yearsUntilRetirment(1991, "Joey"))
console.log(yearsUntilRetirment(1970, "Mike"))