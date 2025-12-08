const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);

var newData = data
for (let i = 0; i < newData.length; i++) {
    newData[i] = newData[i].split(" ")
    for (let j = 0; j < newData[i].length; j++) {
        if (newData[i][j] == '') {
            newData[i].splice(j, 1);
            j--;
        }

    }
}
var total = 0
const endIdx = newData.length - 1
for (let i = 0; i < newData[0].length; i++) {
    console.log(newData[endIdx][i])
    if (newData[endIdx][i] == "+") {
        for (let j = 0; j < endIdx; j++) {
            total += Number(newData[j][i]);
        }

    } else {
        let miniTotal = 1
        for (let j = 0; j < endIdx; j++) {
            miniTotal *= Number(newData[j][i])
        }
        total += miniTotal
    }
}
console.log(total)