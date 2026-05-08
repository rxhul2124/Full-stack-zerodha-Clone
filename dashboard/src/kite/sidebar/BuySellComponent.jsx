import React, { useState, useRef } from 'react';
import Draggable from "react-draggable";
import './BuySellComponenet.css'


function BuySellComponenet({action ,setAction}) {
    const [headOption, setHeadOption] = useState("Quick");
    const nodeRef = useRef(null);
    const currentExchange = action.exchange || "NSE";

    const headOptions = ["Quick", "Regular", "MFT", "Iceberg", "Cover"];
    return ( 
        <>
        <Draggable nodeRef={nodeRef} handle='.buySell' cancel='input, button'>
            <div className={`buySell ${action.type==="BUY"? "buyMode":"sellMode"}`}  ref={nodeRef}>
                <div className="mainHead">
                    <div className="heading d-flex justify-content-between">
                        <p>{action?.item?.symbol}</p>
                        <div className="form-check form-switch">
                            <input className={`form-check-input ${action.type === "SELL" ? "switch-sell" : "switch-buy"}`}
                            checked={action.type === "SELL"}
                            onChange={(e) =>
                                setAction(prev => ({
                                ...prev,
                                type: e.target.checked ? "SELL" : "BUY"
                                }))
                            } type="checkbox" role="switch" id="switchCheckDefault"/>
                        </div>
                    </div>
                    <div className="price">
                        
                    {["NSE", "BSE"].map((ex) => (
                        <div
                        key={ex}
                        className="lastPrice d-inline-flex align-items-center"
                        onClick={() =>
                            setAction(prev => ({
                            ...prev,
                            exchange: ex
                            }))
                        }
                        >
                        <i className={`fa-${currentExchange === ex ? "solid" : "regular"} fa-circle`} />

                        <p className="price">
                            {ex} ₹{action?.item?.prices?.[ex]?.last_price}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="headOption d-inline-flex position-relative">
                    {
                        headOptions.map((options)=>(
                            <div className={`options ${headOption === options
                            ? action.type === "SELL"
                            ? "sellBorder"
                            : "buyBorder"
                            : "greyBorder"}`} 
                            onClick={()=>setHeadOption(options)} key={options}>{options}</div>
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
                        <p className={`fundsOptions ${action.type==="BUY"?"buyAmount":"sellAmount"}`}>N/A</p>
                        <p className='fundsOptions'>Avail.</p>
                        <p className={`fundsOptions ${action.type==="BUY"?"buyAmount":"sellAmount"}`}>{"\u20B9"}0.00</p>
                    </div>
                    <div className="buttons">
                        <button className='footerButton buy'>{`${action.type==="BUY"? "BUY": "SELL"}`}</button>
                        <button className='footerButton cancel' 
                            onClick={()=>setAction({item:null, type:""})
                            }
                        >Cancel</button>
                    </div>
                </div>
            </div>
            </Draggable>
        </>
     );
}

export default BuySellComponenet;