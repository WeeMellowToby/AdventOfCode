const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
var ranges = []
var ids = []
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element == "") {
        ranges = data.slice(0, i);
        ids = data.slice(i + 1);
        break;
    }
}
for (let i = 0; i < ranges.length; i++) {
    ranges[i] = ranges[i].split("-")
    ranges[i][0] = Number(ranges[i][0])
    ranges[i][1] = Number(ranges[i][1])
}
function isItemFresh(id) {
    let fresh = false;
    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        if (range[0] <= id && id <= range[1]) {
            fresh = true;
        }
    }
    return fresh;
}
var freshCount = 0;
for (let i = 0; i < ids.length; i++) {
    if (isItemFresh(Number(ids[i]))) {
        freshCount++;
    }
    console.log(i)
}
console.log(ranges)
console.log(freshCount)
