/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let map = new Map();
        for (let j = 0; j < 9; j++) {
            let ret = board[i][j];
            if (ret !== '.') {
                if (map.has(ret)) {
                    return false;
                } else {
                    map.set(ret, ret)
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        let map = new Map();
        for (let j = 0; j < 9; j++) {
            let ret = board[j][i];
            if (ret !== '.') {
                if (map.has(ret)) {
                    return false;
                } else {
                    map.set(ret, ret);
                }
            }
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let map = new Map();
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    let ret = board[k][l];
                    if (ret !== '.') {
                        if (map.has(ret)) {
                            return false;
                        } else {
                            map.set(ret, ret);
                        }
                    }
                }
            }
        }
    }
    return true;
};

console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
