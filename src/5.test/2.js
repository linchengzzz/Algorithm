// const str = '123321';

// function pain(str) {
//     for (var i = 0, j = str.length - 1; i < j; i++, j--) {
//         if(str[i] !== str[j]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(pain(str));

const id = '370321199901033324'
const reg = /\d{6}((\d{4})(\d{2})(\d{2}))\w{4}/;
console.log(reg.exec(id));
