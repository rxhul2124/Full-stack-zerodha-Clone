import React from 'react';
import './People.css';

function People() {
    return ( 
        <>
            <div className="container">
                <div className="row p-4 m-3 text-center">
                    <h4>People</h4>
                </div>
                <div className="row p-4 m-3">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 text-center ">
                        <img className='rounded-circle ceoImage mb-4' src="media/images/nithin-kamath.jpg" alt="CEO-Image" />
                        <h5>Nithin Kamath</h5>
                        <p>Founder, CEO</p>
                    </div>
                    <div className="col-md-6 ceoText mt-3">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
     );
}

export default People;