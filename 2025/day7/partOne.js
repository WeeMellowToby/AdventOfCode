const fs = require('node:fs');
var data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
let splits = 0
for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (data[i - 1].charAt(j) == "S" || data[i - 1].charAt(j) == "|") {
            if (data[i].charAt(j) == "^") {
                data[i] = data[i].substring(0, j - 1) + "|^|" + data[i].substring(j + 2)
                splits++;
            } else {
                data[i] = data[i].substring(0, j) + "|" + data[i].substring(j + 1)
            }
        }
    }
}
console.log(data)
console.log(splits)