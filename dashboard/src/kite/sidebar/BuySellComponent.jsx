import React, { useState, useRef } from 'react';
import Draggable from "react-draggable";
import './BuySellComponenet.css'


function BuySellComponenet({data , button, setButton}) {
    const [priceActive , setPriceActive] = useState(false);
    const [headOption, setHeadOption] = useState("Quick");
    const nodeRef = useRef(null);
    

    const headOptions = ["Quick", "Regular", "MFT", "Iceberg", "Cover"];

    return ( 
        <>
        <Draggable nodeRef={nodeRef} handle='.buySell' cancel='input, button'>
            <div className="buySell" ref={nodeRef}>
                <div className="mainHead">
                    <div className="heading d-flex justify-content-between">
                        <p>{data.symbol}</p>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
                        </div>
                    </div>
                    <div className="price">
                        <div className="lastPrice d-inline-flex justify-content-start align-items-center" onClick={()=> setPriceActive(!priceActive)}>
                            <i className={`fa-${ priceActive === true ? "solid" : "regular"} fa-circle priceIcon`} ></i>
                            <p className='price'>{data.exchange} {"\u20B9"}{data.last_price}</p>
                        </div>
                        <div className="lastPrice d-inline-flex justify-content-start align-items-center" onClick={()=> setPriceActive(!priceActive)}>
                            <i className={`fa-${ priceActive === true ? "solid" : "regular"} fa-circle priceIcon`} ></i>
                            <p className='price'>{data.exchange} {"\u20B9"}{data.last_price}</p>
                        </div>
                    </div>
                </div>
                <div className="headOption d-inline-flex position-relative">
                    {
                        headOptions.map((item)=>(
                            <div className={`options ${headOption === item ? "blueBorder":"greyBorder"}`} onClick={()=>setHeadOption(item)} key={item}>{item}</div>
                        ))
                    }
                </div>
                <div className="discription">
                    <div className="m-3 inputParent">
                        <label className='discriptionLabel' htmlFor="Quantity">Qty.</label><br/>
                        <input className='discriptionInput' type="number" id='Quantity'/>
                        <i className="fa-solid fa-layer-group mb-1 discriptionIcon"></i>
                        <br/>
                        <label className='discriptionLabel' htmlFor="price">Price</label><br/>
                        <input className='discriptionInput' type="number" name="price" id="price" />
                        <i className="fa-solid fa-xmark discriptionIcon"></i>
                    </div>
                    <div className='discriptionCheckbox'>
                        <input  type="checkbox" id='intraday' style={{ accentColor: "#4184f3" }}/>
                        <label htmlFor="intraday">Intraday</label>
                    </div>
                </div>
                <div className="buySellFooter">
                    <div className="funds d-flex">
                        <p className='fundsOptions'>Req.</p>
                        <p className='fundsOptions fundsAmount'>N/A</p>
                        <p className='fundsOptions'>Avail.</p>
                        <p className='fundsOptions fundsAmount'>{"\u20B9"}0.00</p>
                    </div>
                    <div className="buttons">
                        <button className='footerButton buy'>Buy</button>
                        <button className='footerButton cancel'>Cancel</button>
                    </div>
                </div>
            </div>
            </Draggable>
        </>
     );
}

export default BuySellComponenet;