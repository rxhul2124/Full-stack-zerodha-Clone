import React from 'react';
import './Awards.css';

function Awards() {
    return ( 
       <div className="container">
            <div className="row  m-3 p-4">
                <div className="col-6">
                    <img className='AwardsImage' src='media/images/largestBroker.svg'/>
                </div>
                <div className="col-6 AwardsSection">
                    <h3>Largest stock broker in India</h3>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img className='mt-3' src='media/images/pressLogos.png'/>
                    </div>
                </div>
            </div>
       </div>
     );
}

export default Awards;