/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let p = 0;
    let len = prices.length - 1;
    for (let i = 0; i < len; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            p += prices[i + 1] - prices[i];
        }
    }
    return p;
};

const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
