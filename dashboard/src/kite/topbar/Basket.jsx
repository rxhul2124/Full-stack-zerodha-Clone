import React from 'react';
import './Basket.css'

function Basket() {
    return ( 
        <div className="basket">
            <div className="basket-head">
                <div className="basket-heading">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Basket</p>
                </div>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="basket-input">
                <input type="text" name="" id="" placeholder='Search & add'/>
                <div className="basket-input-clear">
                    <i className="fa-solid fa-circle-minus"></i>
                    <p>Clear basket</p>
                </div>
            </div>
            <div className="basket-item">
                <p>Start by adding instruments</p>
            </div>
            <hr />
            <div className="basket-buttons">
                <button className='button' style={{border:"1px solid #4185F2"}}>Place all</button>
                <button className='button close-button'>Close</button>
            </div>
        </div>
     );
}

export default Basket;