/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let rows = grid.length // row
    let cols = grid[0].length // cols
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let isLands = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == '1' && !visited[i][j]) {
                // console.log("dfs call", i, j, grid, visited, rows, cols)
                dfs(i, j, grid, visited, rows, cols)
                isLands++
            }
        }
    };
    // console.log("visited", visited)
    return isLands
}

function dfs(i, j, grid, visited, rows, cols) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || visited[i][j] || grid[i][j] != '1') { return; }
    visited[i][j] = true
    // explore left,right,top,bottom
    dfs(i - 1, j, grid, visited, rows, cols) // top
    dfs(i, j + 1, grid, visited, rows, cols) // right
    dfs(i + 1, j, grid, visited, rows, cols) // bottom
    dfs(i, j - 1, grid, visited, rows, cols) // left

}