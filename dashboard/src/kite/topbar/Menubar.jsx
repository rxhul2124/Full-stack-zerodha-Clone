import React from "react";
import logo from "../../assets/kite-logo.svg";
import "./Menubar.css";
import { NavLink } from "react-router-dom";

function Menubar() {
    const MenuOptions = [
        "Dashboard",
        "Orders",
        "Holdings",
        "Positions",
        "Bids",
        "Funds",
    ];

    return (
        <div className="menubar d-inline-flex">
            <div className="logo">
                <img
                    style={{ width: "9%" }}
                    src={logo}
                    alt="Kite Logo"
                />
            </div>

            <div className="options d-inline-flex">
                {MenuOptions.map((item, index) => (
                    <NavLink
                        to={`/${item.toLowerCase()}`}
                        key={index}
                        className={({ isActive }) =>
                            isActive
                                ? "menuOptions active"
                                : "menuOptions"
                        }

                        style={{border:"none"}}
                    >
                        {item}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Menubar;