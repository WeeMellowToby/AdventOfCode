const fs = require('node:fs');

//Load file
const data = fs.readFileSync('./input.txt', 'utf8').trim().split(/\r?\n/);

class Node {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.connections = [];
    }

    getDistance(node) {
        return Math.sqrt(
            (this.x - node.x) ** 2 +
            (this.y - node.y) ** 2 +
            (this.z - node.z) ** 2
        );
    }

    connect(node) {
        if (this === node || this.connections.includes(node)) return;
        this.connections.push(node);
        node.connections.push(this);
    }
}

//Build nodes from file
const nodes = [];
for (let i = 0; i < data.length; i++) {
    const [x, y, z] = data[i].split(',').map(Number);
    nodes.push(new Node(x, y, z));
}

for (let i = 0; i < 1000; i++) {
    let bestA = null;
    let bestB = null;
    let bestDist = Infinity;

    for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
            const A = nodes[a];
            const B = nodes[b];

            if (A.connections.includes(B)) continue;

            const d = A.getDistance(B);
            if (d < bestDist) {
                bestDist = d;
                bestA = A;
                bestB = B;
            }
        }
    }

    if (bestA && bestB) {
        bestA.connect(bestB);
    }
}

//Find connected components
function getComponents(nodes) {
    const visited = new Set();
    const components = [];

    for (const node of nodes) {
        if (!visited.has(node)) {
            const stack = [node];
            const group = [];

            while (stack.length) {
                const n = stack.pop();
                if (!visited.has(n)) {
                    visited.add(n);
                    group.push(n);
                    for (const c of n.connections) stack.push(c);
                }
            }
            components.push(group);
        }
    }
    return components;
}

const networks = getComponents(nodes);
const netLengths = networks.map(c => c.length);
netLengths.sort((a, b) => a - b);
console.log("Network sizes:", netLengths.slice(-3));
console.log(netLengths.slice(-3).reduce((prev, num) => prev * num))
