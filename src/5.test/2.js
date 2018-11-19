const str = '123321';

function pain(str) {
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if(str[i] !== str[j]) {
            return false
        }
    }
    return true;
}

console.log(pain(str));