import React, { useState } from 'react';
import './Wishlist.css';
import Hover from './Hover';
import BuySellComponenet from '../../BuySellComponent';
import MarketDepth from './MarketDepth';

function Wishlist({ stocks, setStocks, action, setAction }) {
    const [listAction, setListAction] = useState("")

    return ( 
        <>
        <div className="wishlist-container">
            <div className="row wishlist">
                <div className="col ms-4">Wishlist 1(7 / 250)</div>
                <div className="col"></div>
                <div className="col ms-2"><a href="#">+ New group</a></div>
            </div>
            <div className={`lists ${listAction === "full-screen" ? "full-screen" : ""}`}>
    
            <div className="lists-head">
                <div className="lists-heading">
                    Default
                </div>

                <div className="lists-head-icon hide">
                    <i
                        className={`fa-solid fa-angle-${listAction === "expand" ? "up hide-lists" : "down"}`}
                        onClick={() => setListAction(listAction === "expand" ? "" : "expand")}
                    ></i>

                    <i
                        className={`fa-solid fa-${listAction === "full-screen" ? "expand" : "minimize"}`}
                        onClick={() => setListAction(listAction === "full-screen" ? "mini-screen" : "full-screen")}
                    ></i>

                    <i className="fa-regular fa-pen-to-square" onClick={()=>setListAction(listAction === "edit" ? "":"edit")}></i>
                    <i className="fa-solid fa-ellipsis-vertical" onClick={()=>setListAction(listAction=== "drop-down"?"":"drop-down")}></i>
                    <div className={`more-option ${listAction === "drop-down" ? " ":"edit-hide"}`}>
                        <p className='more-option-icon'><span><i className="fa-solid fa-braille"></i></span>Move</p>
                        <p className='more-option-icon'><span><i className="fa-solid fa-arrow-up"></i></span>Sort</p>
                        <p className='more-option-icon'><span><i className="fa-regular fa-trash-can"></i></span>Delete</p>
                    </div>
                </div>
            </div>  
            <div className={`wishlist-edit ${listAction === "edit" ? "" : "edit-hide"}`}>
                <div className="wishlist-edit-input">
                    <label htmlFor="wishlist-name">Name</label>
                    <input type="text" id='wishlist-name' placeholder='Default'/>
                </div>
                <div className="wishlist-edit-button">
                    <button className='button'>Update</button>
                    <button className='button close'>Close</button>
                </div>
            </div>

            <div className="lists-body">
                {
                    stocks.map((item) => {
                        const currentExchange = item.exchange || "NSE";
                        const data = item.prices[currentExchange];

                        return (
                            <div
                                key={item.symbol}
                                className={`items row position-relative align-items-center ${listAction === "expand" ? "hide-items" : ""}`}
                            >
                                <div className={`col-5 ${data.change < 0 ? "danger" : "success"}`}>
                                    {item.symbol}
                                    <span className='exchange'>{currentExchange}</span>
                                </div>

                                <div className="col-2 hide">{data.change}</div>
                                <div className="col-2 hide">{data.percent_change}%</div>

                                <i
                                    className={`col-1 hide fa-solid fa-angle-${data.change < 0 ? "down" : "up"} ${data.change < 0 ? "text-danger" : "text-success"}`}
                                ></i>

                                <div className={`col-1 hide ${data.change < 0 ? "text-danger" : "text-success"}`}>
                                    {"\u20B9"}{data.last_price}
                                </div>

                                <Hover
                                    item={item}
                                    action={action}
                                    setAction={setAction}
                                    setExchange={(exchange) => item.exchange = exchange}
                                />

                                <div
                                    className={`market-depth-wrapper ${
                                        action?.type === "Market Depth" &&
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
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </div>
        </>
     );
}

export default Wishlist;
