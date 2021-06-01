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

// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;


// if (dolphinsAverageScore  > koalasAverageScore) {
//     console.log("Dolphins are the winner of the game! 🏆");
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log("Koalas are the winner of the game! 🏆");
// } else if (dolphinsAverageScore === koalasAverageScore) {;
// console.log("There is a draw");}


//BONUS 1

// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;

// if (dolphinsAverageScore  > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log("Dolphins are the winner of the game! 🏆");
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
//     console.log("Koalas are the winner of the game! 🏆");
// } else if (dolphinsAverageScore === koalasAverageScore){
// console.log("There is a draw");
// }

// BONUS 2 

// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 106) / 3;

// if (dolphinsAverageScore  > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log("Dolphins are the winner of the game! 🏆");
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
//     console.log("Koalas are the winner of the game! 🏆");
// } else if (dolphinsAverageScore === koalasAverageScore){
// console.log("There is a draw");
// } else {
//     console.log("No one wins the trophy, losers!")
// }
 
const bill = 450
const tip = bill <= 300 && bill <= 50 ? bill * 0.15 : bill * 0.20

console.log(`The bill total was ${bill}, so we left a tip of ${tip},
the total spent for the night was ${bill + tip}`)