class Graph {
    constructor() {
        this.graph = new Map()
    }
    addVertex(data) {
        if (!this.graph.has(data)) {
            return this.graph.set(data, [])
        }
    }

    addEdge(v1, v2) {
        // we considered that edge is from v1 to v2: v1->v2
        if (!this.graph.has(v1) || !this.graph.has(v2)) {
            console.log("invalid vertices");

            return "Invalid vertices"
        }
        let v1List = this.graph.get(v1);
        v1List.push(v2);
        this.graph.set(v1, v1List);
    }


    // we considered that edge is from v1 to v2: v1->v2
    removeEdge(v1, v2) {
        if (!this.graph.has(v1) || !this.graph.has(v2)) {
            console.log("invalid vertices");
            return "Invalid vertices"
        }
        let v1List = this.graph.get(v1);
        console.log("v1, ", v1, v1List);
        let deleteVertexIndex = v1List.indexOf(v2);
        v1List.splice(deleteVertexIndex, 1);
        this.graph.set(v1, v1List);
    }

    printList() {
        console.log("Graph is:", this.graph);
    }

    bfs(start) {
        let queue = [start];
        let front = 0;
        let res = [];
        let visited = new Set()
        while (front < queue.length) {
            let node = queue[front++];
            if (visited.has(node)) continue;
            visited.add(node)
            res.push(node)
            let neighbors = this.graph.get(node);
            console.log("neighbors", neighbors);

            for (let i = 0; i < neighbors.length; i++) {

                queue.push(neighbors[i])

            }
        }
        console.log("BFS:", res);

    }


    dfs(start) {
        let stack = [start];
        let res = [];
        let visited = new Set()
        while (stack.length > 0) {
            let node = stack.pop();
            if (visited.has(node)) continue;
            visited.add(node)
            res.push(node)
            let neighbors = this.graph.get(node);
            console.log("neighbors", neighbors);

            for (let i = 0; i < neighbors.length; i++) {

                stack.push(neighbors[i])

            }
        }
        console.log("DFS:", res);
    }

    dfsRecursive(start) {
        console.log("DFS Recursive:");

        // let stack = [start];
        let res = [];
        let visited = new Set()
        function dfs(node, visited, graph) {
            console.log("graph:", graph);

            if (visited.has(node)) return;
            visited.add(node)
            res.push(node)
            let neighbors = graph.get(node);
            for (let i = 0; i < neighbors.length; i++) {
                dfs(neighbors[i], visited, graph)
            }
        }

        dfs(start, visited, this.graph)
        console.log("DFS:", res);
    }
    // // AI code for cycle detection in directed graph using DFS
    // findCycleUsingDFS(start) {
    //     let stack = [[start, false]];
    //     let visited = new Set();
    //     let path = new Set();

    //     while (stack.length > 0) {
    //         let [node, exiting] = stack.pop();

    //         // Node is completely finished
    //         if (exiting) {
    //             path.delete(node);
    //             continue;
    //         }

    //         // Already completely visited
    //         if (visited.has(node)) {
    //             continue;
    //         }

    //         visited.add(node);
    //         path.add(node);

    //         // Add an exit marker
    //         stack.push([node, true]);

    //         let neighbors = this.graph.get(node);

    //         for (let i = neighbors.length - 1; i >= 0; i--) {
    //             let neighbor = neighbors[i];

    //             // Neighbor is still in the current DFS path
    //             if (path.has(neighbor)) {
    //                 console.log("Cycle exists at node:", neighbor);
    //                 return true;
    //             }

    //             if (!visited.has(neighbor)) {
    //                 stack.push([neighbor, false]);
    //             }
    //         }
    //     }

    //     console.log("No cycle in graph");
    //     return false;
    // }


    findCycleUsingDFSRecursive(start) {


        let visited = new Set()
        let pathSet = new Set()
        function dfs(node, visited, pathSet, graph) {


            visited.add(node)
            pathSet.add(node)

            let neighbors = graph.get(node);
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) {
                  return  dfs(neighbors[i], visited, pathSet, graph)

                } else if (pathSet.has(neighbors[i])) {
                    return true;
                }
            }
            pathSet.delete(node)
            return false
        }


        // console.log("DFS:", res);
        return dfs(start, visited, pathSet, this.graph)

    }

}

// const graph = new Graph();
// graph.addVertex(1)
// graph.addVertex(0)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)

// graph.addEdge(1, 0)
// graph.addEdge(0, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 4)
// graph.addEdge(3, 4)


// graph.printList()

// // graph.removeEdge(3, 4)


// // graph.printList()
// // graph.bfs(1)
// graph.dfs(1)
// // graph.dfsRecursive(1)
// graph.findCycleUsingDFS(1)


// Now create cyclic directed garphs

const cyclicGraph = new Graph();
cyclicGraph.addVertex(1)
cyclicGraph.addVertex(0)
cyclicGraph.addVertex(2)
cyclicGraph.addVertex(3)
// cyclicGraph.addVertex(4)

cyclicGraph.addEdge(1, 0)
cyclicGraph.addEdge(0, 2)
cyclicGraph.addEdge(2, 3)
// cyclicGraph.addEdge(3, 0)

cyclicGraph.dfs(1)

console.log("Cycle found", cyclicGraph.findCycleUsingDFSRecursive(1));
