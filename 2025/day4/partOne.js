const fs = require('node:fs');
const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/);
for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split("");
}
function isPossible(x, y) {
    if (data[y][x] == ".") {
        return false;
    }
    const neighbors = getNeighbors(x, y);
    let neighborCount = 0;
    for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i] == "@") {
            neighborCount++;
        }
    }
    return neighborCount < 4;
}
function getNeighbors(x, y) {
    let neighbors = []
    const offsets = [
        [0, 1], //Up
        [1, 1], //Up-right
        [1, 0], //right
        [1, -1], //down-right
        [0, -1], //down
        [-1, -1], //down-left
        [-1, 0], //left
        [-1, 1] //up-left
    ];
    for (let i = 0; i < offsets.length; i++) {
        const newX = x + offsets[i][0];
        const newY = y + offsets[i][1];
        if (newX < 0 || newX >= data[y].length || newY < 0 || newY >= data.length) {
            continue;
        }
        neighbors.push(data[newY][newX])
    }
    return neighbors
}
let rolls = 0;
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    for (let j = 0; j < row.length; j++) {
        if (isPossible(j, i)) {
            rolls++;
        }
    }
}
console.log(rolls)