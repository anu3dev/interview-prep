/**
 * ou are given an array prices where prices[i] is the price of a given 
 * stock on the ith day.
 * 
 * You want to maximize your profit by choosing a single day to buy one 
 * stock and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you 
 * cannot achieve any profit, return 0.
 * 
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * 
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 */

const buyAndSellStock = (arr) => {
    let profit = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] - arr[i] > profit){
                profit = arr[j] - arr[i];
            }
        }
    }

    return profit;
}

console.log(buyAndSellStock([7,6,4,3,1])) // 0
console.log(buyAndSellStock([7,1,5,3,6,4])) // 5