
// This is the graph implementation using "Adjacency Matrix".

class AdjacencyMatrixGraph {
    constructor() {
        this.adjacencyMatrix = []
    }

    // gpt code (needs to understand)
    addVertex(data) {
        data = parseInt(data)

        if (!this.adjacencyMatrix[data]) {

            // Add a new column to every existing row
            for (let row of this.adjacencyMatrix) {
                row.push(0)
            }

            // Add a new row
            let zeroArr = new Array(this.adjacencyMatrix.length + 1).fill(0)
            this.adjacencyMatrix[data] = zeroArr
        }
    }

    // my own code
    // addVertex(data) {
    //     data = parseInt(data)
    //     if (!this.adjacencyMatrix[data]) {
    //         let zeroArr = new Array(this.adjacencyMatrix.length + 1).fill(0)

    //         this.adjacencyMatrix[data] = zeroArr
    //         console.log("zero arr", zeroArr);

    //     }
    // }

    // Add connection
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyMatrix[vertex1] || !this.adjacencyMatrix[vertex2]) {
            // this.adjacencyList.set(data, [])
            console.error("Error: Uninitialized node");

            return "Uninitialzed"
        }

        this.adjacencyMatrix[vertex1][vertex2] = 1
        this.adjacencyMatrix[vertex2][vertex1] = 1
    }

    // removeEdge(v1, v2) {
    //     for (let i = 0; i < this.adjacencyMatrix.length; i++) {
    //         if (this.adjacencyMatrix.hasEdge(v1, v2)) {

    //         }
    //     }
    //     return "not found"
    // }

    hasEdge(v1, v2) {
        return this.adjacencyMatrix[v1][v2] === 1;
    }

    printList() {
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            console.log("row:", this.adjacencyMatrix[i]);

            for (let j = 0; j < this.adjacencyMatrix[i].length; j++) {
                console.log("Item:", this.adjacencyMatrix[i][j]);

            }

        }
        console.log(this.adjacencyMatrix);

    }
}
const graph = new AdjacencyMatrixGraph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

graph.addEdge(0, 1) // 0-1 and 1 is connect with 0
graph.addEdge(1, 2) // 1 is connected with 2
graph.addEdge(1, 3) // 1 is also connect with 3
graph.addEdge(2, 3) // 2 is connectd with 3
graph.addEdge(2, 4) // 2 is connected wtih 4

graph.printList()



// graph.removeEdge(2, 4) // 2 is connected wtih 4
// See the snapshot of graph
// graph.printList()W