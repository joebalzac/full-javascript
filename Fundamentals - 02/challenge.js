// const calcAverage = (a, b, c) => (a + b + c) / 3

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas ){
//         console.log(`Dolphins are the winner! (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas are the winner! (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`Nobody won bunch of losers...`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(24, 34, 27)

// checkWinner(scoreDolphins, scoreKoalas)




// function addPlus(x, y) {
//     return x + y
// }

// console.log(addPlus(69, 420))

// function addTogether(x, y, z) {
//     return x + y + z / 3
// }

// console.log(addTogether(46, 54, 89))

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals)


//BMI Challenge mass / height ** 2  (mass in kg and height in meter)


// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 88,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.age
//     }
// }

// mark.calcBMI() 
// john.calcBMI()
// console.log(mark.bmi, john.bmi)


// if (mark.bmi > john.bmi) {
//     console.log(`${mark.firstName} ${mark.lastName} BMI ${mark.bmi} is higher than ${john.firstName} ${john.lastName}!`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.firstName} ${john.lastName} BMI ${john.bmi} is higher than ${mark.firstName} ${mark.lastName}!`)
// } else {
//     console.log('They both have the same BMI')
// }

const calcTip = function (bill) {
    return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.20
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)

const calcAverage = function (arr){
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage([2, 3, 6]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))