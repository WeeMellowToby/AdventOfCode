//bank is a string
function GetLargestJoltage(bank) {
    bank.split("");
    let joltage = 0
    //Get first digit
    let highestPtr = 0;
    for (let digit = 0; digit <= 11; digit++) {
        for (let i = highestPtr; i < bank.length - (11 - digit); i++) {
            if (Number(bank[highestPtr]) < Number(bank[i])) {
                highestPtr = i;
            }
        }
        joltage += Number(bank[highestPtr]) * Math.pow(10, 11 - digit);
        highestPtr++;
    }


    return joltage;
}
const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
var totalJoltage = 0;
for (let i = 0; i < data.length; i++) {
    totalJoltage += GetLargestJoltage(data[i])
}
console.log(totalJoltage)