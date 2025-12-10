const fs = require('node:fs');
var data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
let numArr = new Array(data.length).fill(0)
for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (data[i - 1].charAt(j) == "S" || data[i - 1].charAt(j) == "|") {
            if (data[i - 1].charAt(j) == "S") {
                numArr[j] = 1
            }
            if (data[i].charAt(j) == "^") {
                data[i] = data[i].substring(0, j - 1) + "|^|" + data[i].substring(j + 2)
                numArr[j - 1] += numArr[j]
                numArr[j + 1] += numArr[j]
                numArr[j] = 0

                console.log(numArr[j])
            } else {
                data[i] = data[i].substring(0, j) + "|" + data[i].substring(j + 1)
            }
        }
    }
}
console.log(data)
console.log(numArr.reduce((sum, val) => sum + val, 0))