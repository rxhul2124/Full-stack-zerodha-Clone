import React from "react";
import logo from "../../assets/kite-logo.svg";
import './Menubar.css'

function Menubar() {
    const MenuOptions=["Dashboard", "Orders", "Holdings", "Positions", "Bids", "Funds"];
    return (
        <div className="menubar border d-inline-flex">
            <div className="logo width-50">
                <img className="mt-2 ms-3" style={{width:"9%"}} src={logo} alt="Kite Logo" />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="options d-inline-flex">
                {
                    MenuOptions.map((item, index)=>(
                        <p key={index} className="me-4 menuOptions">{item}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default Menubar;
