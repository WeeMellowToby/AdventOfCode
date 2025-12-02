const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(",");
let total = 0
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const range = [Number(element.split("-")[0]), Number(element.split("-")[1])]
    for (let j = range[0]; j <= range[1]; j++) {
        if (isIDInvalid(j)) {
            total += j
        }
    }
}
function isIDInvalid(num) {
    let numString = String(num)
    //i is the length of the segments
    for (let i = 1; i <= numString.length / 2; i++) {
        if (numString.length % i != 0) {
            continue;
        }
        const segment1 = numString.slice(0, i)
        let invalid = true
        for (let j = 1; j < numString.length / i; j++) {
            const segment = numString.slice(i * j, (i * j) + i)
            if (segment != segment1) {
                invalid = false;
                break;
            }
        }
        if (invalid) {
            return true
        }
    }
    return false
}
console.log(isIDInvalid(11))
console.log(isIDInvalid(22))
console.log(isIDInvalid(222))
console.log(isIDInvalid(2424))
console.log(isIDInvalid(488487))
console.log(total)