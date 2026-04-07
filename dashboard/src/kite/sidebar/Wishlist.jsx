import React, { useState } from 'react';
import './Wishlist.css';
import Hover from './hover';
import BuySellComponenet from './BuySellComponent';

function Wishlist({listOfData}) {
    const [active , setActive] = useState("");
    const [button , setButton] = useState(false);

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
                    listOfData.map((item)=>(
                        <div key={item.symbol} className="items row  py-2 position-relative align-items-center">
                            <div className={`col-5 ${item.change<0? "text-danger" : "text-success"}`}>
                            {item.symbol} <span className='exchange'>{item.exchange}</span>
                            </div>
                            <div className="col-2 hide">{item.change}</div>
                            <div className="col-2 hide">{item.percent_change}%</div>
                            <i className={`col-1 hide fa-solid fa-angle-${item.change<1? "down text-danger": "up text-success"}`}></i>
                            <div className={`col-1 hide ${item.change<0? "text-danger" : "text-success"}`}>{"\u20B9"}{item.last_price}</div>
                            <Hover active={active} setActive={setActive} item={item}/>
                        </div>
                    ))
                }
            </div>
            <div className={`${active ? "d-block": button ? "d-block" : "d-none"}`}>
                <BuySellComponenet data={active} cancel={button} setCancel={setButton}/>
            </div>

        </>
     );
}

export default Wishlist;