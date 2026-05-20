import React, { useState, useRef } from 'react';
import Draggable from "react-draggable";
import './BuySellComponenet.css';

function BuySellComponenet({ action, setAction, theme }) {

    const [headOption, setHeadOption] = useState("Quick");
    const nodeRef = useRef(null);

    const currentExchange = action?.exchange || "NSE";

    const headOptions = [
        "Quick",
        "Regular",
        "MFT",
        "Iceberg",
        "Cover"
    ];

    const closeComponent = () => {
        setAction({
            item: null,
            type: "",
            exchange: "NSE"
        });
    };

    return (
        <>
            <Draggable
                nodeRef={nodeRef}
                handle=".buySell"
                cancel="input, button"
            >
                <div
                    ref={nodeRef}
                    className={`buySell 
                        ${action?.type === "BUY" ? "buyMode" : "sellMode"}
                    `}
                >
                    {/* HEADER */}
                    <div className={`mainHead ${action?.type === "BUY" ? "buyHead":"sellHead"}`}>
                        <div className="heading d-flex justify-content-between align-items-center">
                            <p className="m-1">
                                {action?.item?.symbol || "--"}
                            </p>
                            <div className="form-check form-switch">
                                <input
                                    className={`form-check-input ${
                                        action?.type === "SELL"
                                            ? "switch-sell"
                                            : "switch-buy"
                                    }`}
                                    type="checkbox"
                                    role="switch"
                                    id="switchCheckDefault"
                                    checked={action?.type === "SELL"}
                                    onChange={(e) =>
                                        setAction(prev => ({
                                            ...prev,
                                            type: e.target.checked
                                                ? "SELL"
                                                : "BUY"
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        {/* EXCHANGE PRICES */}
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
                                    <i
                                        className={`fa-${
                                            currentExchange === ex
                                                ? "solid"
                                                : "regular"
                                        } fa-circle`}
                                    />
                                    <p className="price m-0 ms-1">
                                        {ex} ₹{
                                            action?.item?.prices?.[ex]?.last_price ?? "--"
                                        }
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* TOP OPTIONS */}
                    <div className="headOption d-inline-flex position-relative">
                        {headOptions.map((option) => (
                            <div
                                key={option}
                                className={`options
                                    ${
                                        headOption === option
                                            ? action?.type === "SELL"
                                                ? "sellBorder"
                                                : "buyBorder"
                                            : "greyBorder"
                                    }
                                `}
                                onClick={() => setHeadOption(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    {/* FORM */}
                    <div className="description">
                        <div className="inputParent">
                            {/* QUANTITY */}
                            <div className="description-quantity">
                                <label
                                className="descriptionLabel"
                                htmlFor="quantity"
                                >
                                    Qty.
                                </label>
                                <br />
                                <input
                                    className="descriptionInput"
                                    type="number"
                                    id="quantity"
                                />
                                <i className="fa-solid fa-layer-group mb-1 descriptionIcon"></i>
                            </div>
                            {/* PRICE */}
                            <div className="description-price">
                                <label
                                    className="descriptionLabel"
                                    htmlFor="price"
                                >
                                    Price
                                </label>
                                <br />
                                <input
                                    className="descriptionInput"
                                    type="number"
                                    id="price"
                                />
                                <i className="fa-solid fa-xmark descriptionIcon"></i>
                            </div>
                        </div>
                        {/* CHECKBOX */}
                        <div className="descriptionCheckbox">
                            <input
                                type="checkbox"
                                id="intraday"
                                style={{ accentColor: "#4184f3" }}
                            />
                            <label htmlFor="intraday">
                                Intraday
                            </label>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="buySellFooter">
                        <div className="funds d-flex">
                            <p className="fundsOptions">
                                Req.
                            </p>
                            <p
                                className={`fundsOptions ${
                                    action?.type === "BUY"
                                        ? "buyAmount"
                                        : "sellAmount"
                                }`}
                            >
                                N/A
                            </p>
                            <p className="fundsOptions">
                                Avail.
                            </p>
                            <p
                                className={`fundsOptions ${
                                    action?.type === "BUY"
                                        ? "buyAmount"
                                        : "sellAmount"
                                }`}
                            >
                                ₹0.00
                            </p>
                        </div>
                        <div className="buttons">
                            <button
                                className={`footerButton ${
                                    action?.type === "BUY"
                                        ? "buy"
                                        : "sell"
                                }`}
                            >
                                {action?.type}
                            </button>
                            <button
                                className="footerButton cancel"
                                onClick={closeComponent}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    );
}

export default BuySellComponenet;