const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
var count = 0;
var dial = 50;
for (let i = 0; i < data.length; i++) {
    const instruction = data[i];
    const direction = instruction.split("")[0];
    const magnitude = Number(instruction.substring(1))
    for (let j = 0; j < magnitude; j++) {
        if (direction == "L") {
            dial--;
        } else {
            dial++;
        }
        if (dial % 100 == 0) {
            console.log("COUNT INCREASED")
            count++;
        }
        if (magnitude > 100) {
        }
    }


}
console.log(data.length)
console.log(count)