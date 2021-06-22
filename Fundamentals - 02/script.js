// `use strict`

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive :D')

// // const interface = 'Audio'
// const private = 534

function logger() {
    console.log('My name is Jonas')
}

//calling / running / invoking function 
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

const num = Number('23')
console.log(num)


function fruitSmoothie (bannanas, strawberries){
    const coldSmoothie = `This is a smoothie with ${bannanas} bannanas and ${strawberries} strawberries`
    return coldSmoothie
}

const storeSmoothie = fruitSmoothie(6, 9)
console.log(storeSmoothie)

const newyorkSmoothie = fruitSmoothie(420, 'blazeit')
console.log(newyorkSmoothie)
