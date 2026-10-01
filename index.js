


// // This is the graph implementation using "Adjacency List".

// class Graph {
//     constructor() {
//         this.adjacencyList = new Map()
//     }
//     addVertex(data) {
//         //  for every vertex, i have to create a entry in map with its key and empty array, because no connection at first
//         if (!this.adjacencyList.has(data)) {
//             this.adjacencyList.set(data, [])
//         }
//     }

//     // Add connection
//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
//             // this.adjacencyList.set(data, [])
//             console.error("Error: Uninitialized node");

//             return "Uninitialzed"
//         }

//         // Graph is undirected or you can se bi-directed. 
//         // Therefore, we have to add edges on both sides.
//         let list1 = this.adjacencyList.get(vertex1)
//         let list2 = this.adjacencyList.get(vertex2)
//         console.log("list 1", list1);
//         console.log("list 2", list2);
//         list1.push(vertex2)
//         list2.push(vertex1)
//         this.adjacencyList.set(vertex1, list1)
//         this.adjacencyList.set(vertex2, list2)

//     }
//     printList() {
//         console.log(this.adjacencyList);

//     }
// }
// const graph = new Graph()
// graph.addVertex(0)
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)

// graph.addEdge(0, 1) // 0-1 and 1 is connect with 0
// graph.addEdge(1, 2) // 1 is connected with 2
// graph.addEdge(1, 3) // 1 is also connect with 3
// graph.addEdge(2, 3) // 2 is connectd with 3
// graph.addEdge(2, 4) // 2 is connected wtih 4
// // See the snapshot of graph
// graph.printList()


