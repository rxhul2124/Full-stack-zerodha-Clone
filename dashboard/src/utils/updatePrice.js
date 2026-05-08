export default function updatePrice(data) {
  if (!data) return data;

  const updateMarket = (market) => {
    if (!market) return market;

    const randomMove = (Math.random() - 0.5) * 0.5;
    const newPrice = +(market.last_price + randomMove).toFixed(2);

    const prevClose = market?.stats?.prev_close ?? market.last_price;
    const newChange = +(newPrice - prevClose).toFixed(2);

    return {
      ...market,
      last_price: newPrice,
      change: newChange,
      percent_change: +((newChange / prevClose) * 100).toFixed(2),

      depth: {
        bid: market?.depth?.bid?.map(b => ({
          ...b,
          price: +(b.price + (Math.random() - 0.5) * 0.2).toFixed(2),
          qty: Math.floor(Math.random() * 1500)
        })) || [],

        offer: market?.depth?.offer?.map(o => ({
          ...o,
          price: +(o.price + (Math.random() - 0.5) * 0.2).toFixed(2),
          qty: Math.floor(Math.random() * 1500)
        })) || []
      },

      stats: {
        ...(market.stats || {}),
        prev_close: prevClose,
        open: +(newPrice - 5).toFixed(2),
        high: Math.max(market?.stats?.high || newPrice, newPrice),
        low: Math.min(market?.stats?.low || newPrice, newPrice),
        volume: (market?.stats?.volume || 0) + Math.floor(Math.random() * 1000),
        avg_price: +(newPrice - 2).toFixed(2),
        lower_circuit: +(prevClose * 0.9).toFixed(2),
        upper_circuit: +(prevClose * 1.1).toFixed(2),
        ltq: Math.floor(Math.random() * 100),
        ltt: new Date().toLocaleTimeString()
      }
    };
  };

  return {
    ...data,
    prices: {
      NSE: updateMarket(data.prices?.NSE),
      BSE: updateMarket(data.prices?.BSE)
    }
  };
}