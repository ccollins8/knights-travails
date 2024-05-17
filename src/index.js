import "./style.css";

class Graph {
    constructor(vertices) {
        this.graph = this.buildGraph()
    }

    buildGraph() {
        let map = new Map()
        const moves = [
            [1,2],[2,1],
            [2,-1],[1,-2],
            [-1,-2],[-2,-1],
            [-2,1],[-1,2]
        ]
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                let values = []
                moves.forEach((move) => {
                    const newX = x + move[0]
                    const newY = y + move[1]
                    if (
                        newX >= 0 &&
                        newX < 8 &&
                        newY >= 0 &&
                        newY < 8
                    ) {
                        values.push([newX,newY])
                    }
                })
                const key = [x,y].toString()
                map.set(key, values);
            }
        }
        return map
    }
}

const g = new Graph()
const board = g.graph

function knightMoves(start, end) {
    const visited = new Set();
    const queue = [[start]];
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const currentPosition = path[path.length - 1];
        // console.log(path)

        if(currentPosition.toString() === end.toString()) {
            return path;
        }

        
        board.get(currentPosition.toString()).forEach((move) => {
            if (!visited.has(move.toString())) {
                const newPath = [...path, move];
                queue.push(newPath);
                visited.add(move.toString());
            }
        })
        console.log(queue)
    }
    return null;
}


    
console.log(knightMoves([0,0],[3,3]))

