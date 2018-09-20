const fib1 = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return n * fib1(n - 2);
    }
};
const fib2 = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return fib2(n - 1) + fib2(n - 2);
    }
};
module.exports = {
    fib1,
    fib2,
};
