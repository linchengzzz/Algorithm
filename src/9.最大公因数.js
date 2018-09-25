const gcd = (num1, num2) => {
    let a = 0,
        b = 0;
    // a > b 
    if(num1 > num2) {
        a = num1;
        b = num2;
    } else {
        a = num2;
        b = num1;
    }

    while(b !== 0) {
        const m = a % b;
        a = b;
        b = m;
    }

    return a;
}

module.exports = {
    gcd,
}