const for1 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum++;
    }
    return sum;
};

const for2 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum++;
        }
    }
    return sum;
};

const for3 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n * n; j++) {
            sum++;
        }
    }
    return sum;
};

const for4 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            sum++;
        }
    }
    return sum;
};

const for5 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i * i; j++) {
            for (let k = 0; k < j; k++) {
                sum++;
            }
        }
    }
    return sum;
};

const for6 = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i * i; j++) {
            if (j % i === 0) {
                for (let k = 0; k < j; k++) {
                    sum++;
                }
            }
        }
    }
    return sum;
};

module.exports = {
    for1,
    for2,
    for3,
    for4,
    for5,
    for6,
};
