


// This is the graph implementation using "Adjacency List".

class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }
    addVertex(data) {
        //  for every vertex, i have to create a entry in map with its key and empty array, because no connection at first
        if (!this.adjacencyList.has(data)) {
            this.adjacencyList.set(data, [])
        }
    }

    // Add connection
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            // this.adjacencyList.set(data, [])
            console.error("Error: Uninitialized node");

            return "Uninitialzed"
        }

        // Graph is undirected or you can se bi-directed. 
        // Therefore, we have to add edges on both sides.
        let list1 = this.adjacencyList.get(vertex1)
        let list2 = this.adjacencyList.get(vertex2)
        console.log("list 1", list1);
        console.log("list 2", list2);
        list1.push(vertex2)
        list2.push(vertex1)
        this.adjacencyList.set(vertex1, list1)
        this.adjacencyList.set(vertex2, list2)

    }
    printList() {
        console.log(this.adjacencyList);

    }

    bfs(start) {
        const visited = new Set();
        let queue = [start]
        let front = 0;
        let res = []

        while (front < queue.length) {
            let node = queue[front++];
            console.log("queue", queue);
            console.log("node", node);
            if (visited.has(node)) continue;
            res.push(node)
            visited.add(node)
            console.log("this.adjacencyList.get(node)", this.adjacencyList.get(node));
            if (this.adjacencyList.get(node)) {
                let neighbors = this.adjacencyList.get(node)
                console.log("neighbors", neighbors);

                for (let i = 0; i < neighbors.length; i++) {
                    queue.push(neighbors[i])
                    console.log("neighbors", neighbors);

                }
            }

        }

        console.log("BFS Result:", res);

    }

    dfs(start) {
        const visited = new Set();
        let stack = [start]
        let res = []

        while (stack.length > 0) {
            let node = stack.pop();
            console.log("stack", stack);
            console.log("node", node);
            if (visited.has(node)) continue;
            res.push(node)
            visited.add(node)
            console.log("this.adjacencyList.get(node)", this.adjacencyList.get(node));
            if (this.adjacencyList.get(node)) {
                let neighbors = this.adjacencyList.get(node)
                console.log("neighbors", neighbors);

                for (let i = 0; i < neighbors.length; i++) {
                    stack.push(neighbors[i])
                    console.log("neighbors", neighbors);

                }
            }

        }

        console.log("DFS Result:", res);

    }

    dfsRecursive(start) {
        let res = []
        const traverse = (node, visited) => {
            visited[node] = true
            res.push(node)

            let neighbors = this.adjacencyList.get(node)

            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]) {
                    traverse(neighbors[i], visited)
                }
            }
        }

        traverse(start, [])
        console.log("Recursive dfs", res);


    }


    dfsToDetectCycle(start) {

        console.log("Detect a cycle using DFS:");

        let stack = [{ node: start, parent: null }]
        let visited = new Set();
        visited.add(start) // add the start node to visited set

        while (stack.length > 0) {
            let { node, parent } = stack.pop();
            console.log("node:", node);
            console.log("parent:", parent);
            console.log("stack:", stack);
            // if (visited.has(node)) continue


            // if (visited.has(node) && prev === node) return true;

            // prev = node;
            let neighbors = this.adjacencyList.get(node);
            console.log("neighbors:", neighbors);
            for (let i = 0; i < neighbors.length; i++) {

                if (!visited.has(neighbors[i])) {
                    visited.add(neighbors[i])
                    stack.push({ node: neighbors[i], parent: node })
                } else if (neighbors[i] !== parent) {
                    return true
                }
            }
        }
        return false
    }


    edgeListToAdjacencyList(edgeList) {
        let list = new Map();
        for (let i = 0; i < edgeList.length; i++) {
            console.log("edgeList[i]", edgeList[i]);
            let v1 = edgeList[i][0]
            let v2 = edgeList[i][1]
            console.log("vertex1:", v1);
            console.log("vertex2:", v2);

            if (!list.has(edgeList[i][0])) {
                list.set(edgeList[i][0], [])
            }

            if (!list.has(edgeList[i][1])) {
                list.set(edgeList[i][1], [])
            }

            let list1 = list.get(v1)
            let list2 = list.get(v2)
            console.log("list1", list1, "v1", v1);
            console.log("list2", list2, "v2", v2);

            list1.push(v2)
            list2.push(v1)

            list.set(v1, list1)
            list.set(v2, list2)

        }
        console.log("adjacencyList", list);

    }

}
const graph = new Graph()
// graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
// graph.addVertex(4)

// graph.addEdge(0, 1) // 0-1 and 1 is connect with 0
graph.addEdge(1, 2) // 1 is connected with 2
graph.addEdge(1, 3) // 1 is also connect with 3
graph.addEdge(2, 3) // 2 is connectd with 3
// graph.addEdge(2, 4) // 2 is connected wtih 4
// See the snapshot of graph
graph.printList()
// graph.bfs(0)
// graph.dfs(0)
// graph.dfsRecursive(0)
console.log("Detect cycle using dfs:", graph.dfsToDetectCycle(1))
// graph.edgeListToAdjacencyList([[0, 1], [1, 2], [2, 0]])


