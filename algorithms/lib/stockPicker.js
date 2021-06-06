export default function stockPicker (prices) {
  let maxProfit = prices[0] - prices[1]

  prices.forEach((buyPrice, buyIndex) => {
    for (let i = buyIndex + 1; i < prices.length; i++) {
      const profit = prices[i] - buyPrice
      if (profit > maxProfit) { maxProfit = profit }
    }
  })
  return maxProfit
}
