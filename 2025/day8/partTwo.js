const fs = require("node:fs");

const data = fs.readFileSync("./input.txt", "utf8")
    .trim().split(/\r?\n/);

class Node {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    distanceTo(n) {
        return Math.sqrt(
            (this.x - n.x) ** 2 +
            (this.y - n.y) ** 2 +
            (this.z - n.z) ** 2
        );
    }
}

// Build nodes
const nodes = data.map(line => {
    const [x, y, z] = line.split(",").map(Number);
    return new Node(x, y, z);
});
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
    }
    find(x) {
        if (this.parent[x] !== x)
            this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        if (rootA === rootB) return false;

        if (this.rank[rootA] < this.rank[rootB]) {
            this.parent[rootA] = rootB;
        } else if (this.rank[rootA] > this.rank[rootB]) {
            this.parent[rootB] = rootA;
        } else {
            this.parent[rootB] = rootA;
            this.rank[rootA]++;
        }

        this.components--;
        return true;
    }
}

const edges = [];
for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
        edges.push({
            a: i,
            b: j,
            d: nodes[i].distanceTo(nodes[j])
        });
    }
}

console.log("Sorting edges...");
edges.sort((a, b) => a.d - b.d);

console.log("Running Kruskal...");
const uf = new UnionFind(nodes.length);

let lastA = null;
let lastB = null;

for (const e of edges) {
    if (uf.union(e.a, e.b)) {
        lastA = e.a;
        lastB = e.b;
        if (uf.components === 1) break;
    }
}

console.log("Last two boxes connected:");
console.log(
    [nodes[lastA].x, nodes[lastA].y, nodes[lastA].z],
    [nodes[lastB].x, nodes[lastB].y, nodes[lastB].z]
);
