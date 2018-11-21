/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let temp;
    for (let i = 0; i < matrix.length; i++) {
        temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.unshift(matrix[j].shift())
        }
        matrix[i].push(...temp)
    }
    return matrix;
};

const matrix = [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
];
console.log(rotate(matrix));
