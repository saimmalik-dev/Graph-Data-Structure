
// This is the graph implementation using "Edge List".

class EdgeListGraph {
    constructor() {
        this.edgeList = []
        this.edgeCount = 0
    }

    // Add connection
    addEdge(vertex1, vertex2) {
        console.log("v1", vertex1);
        console.log("v2", vertex2);

        if (vertex1 < 0 || vertex2 < 0) {
            // this.adjacencyList.set(data, [])
            console.error("Error: Uninitialized node");

            return "Uninitialzed"
        }

        for (let i = 0; i < this.edgeList.length; i++) {
            if ((this.edgeList[i][0] === vertex1 && this.edgeList[i][1] === vertex2) || (this.edgeList[i][0] === vertex2 && this.edgeList[i][1] === vertex1)) {
                console.error("Error: Edge already exists");
                return "Edge already exists"
            }
        }
        this.edgeList.push([vertex1, vertex2])
        ++this.edgeCount

    }

    removeEdge(v1, v2) {
        for (let i = 0; i < this.edgeList.length; i++) {
            if (
                (this.edgeList[i][0] === v1 &&
                    this.edgeList[i][1] === v2)
                ||
                (this.edgeList[i][0] === v2 &&
                    this.edgeList[i][1] === v1)
            ) {
                console.log("edge found");
                this.edgeList.splice(i, 1)
                this.edgeCount--
                return
            }
        }
        return "not found"
    }

    hasEdge(v1, v2) {
        for (let i = 0; i < this.edgeList.length; i++) {
            if ((this.edgeList[i][0] === v1 && this.edgeList[i][1] === v2)
                ||
                (this.edgeList[i][0] === v2 && this.edgeList[i][1] === v1)
            ) {
                console.log("Edge found");

                return true
            }
        }
        return false;
    }

    printList() {
        console.log(this.edgeList);

    }
}
const graph = new EdgeListGraph()
// graph.addVertex(0)
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)

graph.addEdge(0, 1) // 0-1 and 1 is connect with 0
graph.addEdge(1, 2) // 1 is connected with 2
graph.addEdge(1, 3) // 1 is also connect with 3
graph.addEdge(2, 3) // 2 is connectd with 3
graph.addEdge(2, 4) // 2 is connected wtih 4

graph.printList()



graph.removeEdge(2, 4) // 2 is connected wtih 4
// See the snapshot of graph
graph.printList()