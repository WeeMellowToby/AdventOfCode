const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
var ranges = []
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element == "") {
        ranges = data.slice(0, i);
        break;
    }
}

for (let i = 0; i < ranges.length; i++) {
    ranges[i] = ranges[i].split("-")
    ranges[i][0] = Number(ranges[i][0])
    ranges[i][1] = Number(ranges[i][1])
}
ranges.sort((a, b) => a[0] - b[0])
let answer = 0;
let current = 0;
for (let i = 0; i < ranges.length; i++) {
    let start = Math.max(ranges[i][0], current + 1);
    let end = ranges[i][1];
    answer += Math.max(0, (end - start) + 1)
    current = Math.max(end, current)
}
console.log(answer);
