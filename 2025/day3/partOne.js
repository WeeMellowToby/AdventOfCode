//bank is a string
function GetLargestJoltage(bank) {
    let bankArr = bank.split("");
    let joltage = 0
    //Get first digit
    let highestTensPtr = 0;
    for (let i = 0; i < bank.length - 1; i++) {
        if (Number(bank[highestTensPtr]) < Number(bank[i])) {
            highestTensPtr = i;
        }
    }
    joltage = Number(bank[highestTensPtr]) * 10;
    let highestUnitsPtr = highestTensPtr + 1
    for (let i = highestTensPtr + 1; i < bank.length; i++) {
        if (Number(bank[highestUnitsPtr]) < Number(bank[i])) {
            highestUnitsPtr = i;
        }
    }
    joltage += Number(bank[highestUnitsPtr]);
    return joltage;
}
const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
var totalJoltage = 0;
for (let i = 0; i < data.length; i++) {
    totalJoltage += GetLargestJoltage(data[i])
}
console.log(totalJoltage)