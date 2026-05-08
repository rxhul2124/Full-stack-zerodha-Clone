import React, { useState } from 'react';
import './Wishlist.css';
import Hover from './hover';
import BuySellComponenet from './BuySellComponent';
import MarketDepth from './MarketDepth';

function Wishlist({stocks}) {
    const [action, setAction] = useState({ item: null, type: "", exchange:"NSE" });

     return ( 
        <>
            <div className="row wishlist">
                <div className="col ms-4">Wishlist 1(7 / 250)</div>
                <div className="col"></div>
                <div className="col ms-2"><a href="#">+ New group</a></div>
            </div>
            <div className="lists m-2 p-2 px-3">
                <div className="head">Default</div>
                {
                    stocks.map((item) => {
                        const currentExchange = item.exchange || "NSE";
                        const data = item.prices[currentExchange];
                        return(
                        <div key={item.symbol} className="items row  py-2 position-relative align-items-center border-bottom">
                            <div className={`col-5 ${data.change<0? "text-danger" : "text-success"}`}>
                            {item.symbol} <span className='exchange'>{currentExchange}</span>
                            </div>
                            <div className="col-2 hide">{data.change}</div>
                            <div className="col-2 hide">{data.percent_change}%</div>
                            <i className={`col-1 hide fa-solid fa-angle-${data.change < 0 ? "down" : "up"} ${data.change < 0 ? "text-danger" : "text-success"}`}></i>
                            <div className={`col-1 hide ${data.change<0? "text-danger" : "text-success"}`}>{"\u20B9"}{data.last_price}</div>
                            <Hover 
                                item={item}
                                setAction={setAction} 
                                setExchange={(exchange) => item.exchange = exchange}
                            />
                            <div
                                className={`market-depth-wrapper ${
                                    action.type === "Market Depth" &&
                                    action.item?.symbol === item.symbol
                                    ? "open"
                                    : ""
                            }`}
                             >
                                <MarketDepth
                                    depth={item?.prices?.[currentExchange]?.depth}
                                    stats={item?.prices?.[currentExchange]?.stats}
                                />
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className={`${action.type === "BUY" || action.type === "SELL" ? "d-block" : "d-none"}`}>
                <BuySellComponenet  action={action} setAction={setAction} />
            </div>

        </>
     );
}

export default Wishlist;
