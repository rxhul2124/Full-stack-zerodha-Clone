const stocks = [
  ["HDFCBANK", 848.10, 7.80],
  ["INFY", 1295.70, -19.30],
  ["TCS", 3895.50, 25.40],
  ["RELIANCE", 2950.30, -10.20],
  ["ICICIBANK", 1025.60, 12.40],
  ["SBIN", 720.50, -5.20],
  ["WIPRO", 520.40, 3.10],
  ["SBI", 3520.40, 3.10,]
];

const round = (value) => Number(value.toFixed(2));

const createDepth = (price) => ({
  bid: Array.from({ length: 5 }, (_, index) => ({
    price: round(price - (index + 1) * 0.2),
    qty: (5 - index) * 100,
    orders: 12 - index * 2,
  })),
  offer: Array.from({ length: 5 }, (_, index) => ({
    price: round(price + (index + 1) * 0.2),
    qty: (5 - index) * 100,
    orders: 11 - index * 2,
  })),
});

const createMarket = (price, change, offset = 0) => {
  const lastPrice = round(price + offset);
  const currentChange = round(change + offset * 0.25);
  const prevClose = round(lastPrice - currentChange);
  const high = round(Math.max(lastPrice, prevClose) + Math.max(4, lastPrice * 0.012));
  const low = round(Math.min(lastPrice, prevClose) - Math.max(4, lastPrice * 0.012));

  return {
    last_price: lastPrice,
    change: currentChange,
    percent_change: round((currentChange / prevClose) * 100),
    depth: createDepth(lastPrice),
    stats: {
      prev_close: prevClose,
      open: round(prevClose + currentChange * 0.35),
      high,
      low,
      volume: 90000,
      avg_price: round((high + low + lastPrice) / 3),
      lower_circuit: round(prevClose * 0.9),
      upper_circuit: round(prevClose * 1.1),
      ltq: 50,
      ltt: "10:00:00 AM",
    },
  };
};

const wishlist = stocks.map(([symbol, price, change], index) => ({
  symbol,
  prices: {
    NSE: createMarket(price, change),
    BSE: createMarket(price, change, index % 2 === 0 ? 0.4 : -0.3),
  },
}));

export default wishlist;
