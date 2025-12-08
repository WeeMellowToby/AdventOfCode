const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);


var total = 0;
const endIdx = data.length - 1;
for (let i = 0; i < data[0].length; i++) {
    const operand = data[endIdx].charAt(i);
    if (operand == " ") {
        continue;
    }
    //FOUND A PROBLEM: Lets check how many numbers
    let whitespace = false;
    let miniTotal = operand == "+" ? 0 : 1
    while (!whitespace) {
        whitespace = true;
        let number = ""
        for (let j = 0; j < endIdx; j++) {
            const char = data[j].charAt(i);
            whitespace = whitespace && (char == " " || char == "");
            if (char != " " && char != "") {
                number += char
            }
        }
        if (!whitespace) {
            i++;
        } else {
            i--;
        }
        if (number == "") {
            continue;
        }
        if (operand == "+") {
            console.log("ADDING " + number)
            miniTotal += Number(number)
            console.log(miniTotal)
        } else {
            console.log("MULTIPLYING " + number)
            miniTotal *= Number(number)
            console.log(miniTotal)
        }
    }
    console.log(operand)
    console.log(miniTotal)
    total += miniTotal

}
console.log(total)