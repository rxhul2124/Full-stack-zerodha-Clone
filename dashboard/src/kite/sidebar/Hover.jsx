import React from 'react'; 
import './Hover.css'

function Hover({ item, setAction }) {

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
                style={{ backgroundColor:"#4085f3", color:"white", fontWeight:700 }}>
                B
            </div>

            <div className="hoverButton"
                onClick={() => handleAction("SELL")}
                style={{ backgroundColor:"#fe5622", color:"white", fontWeight:700 }}>
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
