/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let firstMinimumPrice = Infinity,
        secondMinimumPrice = Infinity,
        firstMinimumPriceIndex = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < firstMinimumPrice) {
            firstMinimumPrice = prices[i];
            firstMinimumPriceIndex = i;
        }
    }

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < secondMinimumPrice && i !== firstMinimumPriceIndex) {
            secondMinimumPrice = prices[i];
        }
    }

    const leftover = money - firstMinimumPrice - secondMinimumPrice;
    return leftover < 0 ? money : leftover;
};