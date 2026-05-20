import React from 'react'; 
import './Hover.css'

function Hover({ item, setAction, action }) {
    const handleAction = (type) => {
        setAction(prev =>
            prev.item?.symbol === item.symbol && prev.type === type
                ? { item: null, type: "",exchange:"NSE" }
                : { item, type,exchange:"NSE" }
        );
    };

    return ( 
        <div className="hoverComponent d-inline-flex justify-content-end position-absolute">

            <div className="hoverButton"
                onClick={() => handleAction("BUY")}
                style={{ backgroundColor:"#4683E5", color:"white", fontWeight:700, border:"none" }}>
                B
            </div>

            <div className="hoverButton"
                onClick={() => handleAction("SELL")}
                style={{ backgroundColor:"#FF6838", color:"white", fontWeight:700, border:"none" }}>
                S
            </div>

            <div className="hoverButton"
                onClick={()=> handleAction("Market Depth")}>
                <i className="fa-solid fa-bars-staggered"></i>
            </div>

            <div className="hoverButton">
                <i className="fa-solid fa-arrow-trend-up"></i>
            </div>

            <div className="hoverButton">
                <i className="fa-regular fa-trash-can"></i>
            </div>

            <div className="hoverButton">
                <i className="fa-solid fa-ellipsis"></i>
            </div>

        </div>
    );
}

export default Hover;
