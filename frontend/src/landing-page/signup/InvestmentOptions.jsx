import React from 'react';
import './InvestmentOptions.css';


function InvestmentOptions() {
    return (
        <>
            <div className="container mt-5">
                <div className="row m-3 p-4 lh-1 text-center fs-5">
                    <p>Investment options with Zerodha demat account</p>
                </div>
                <div className="row m-3 p-4">
                    <div className="col-3 investmentOptionsImages">
                        <img src="media/images/stocks-acop.svg" alt="" />
                    </div>
                    <div className="col-3 investmentOptions">
                        <h6>Stocks</h6>
                        <p>Invest in all exchange-listed securities</p>
                    </div>
                    <div className="col-3 investmentOptionsImages">
                        <img src="media/images/mf-acop.svg" alt="" />
                    </div>
                    <div className="col-3 investmentOptions">
                        <h6>Mutual funds</h6>
                        <p>Invest in commission-free direct mutual funds</p>
                    </div>
                </div>
                <div className="row m-3 p-4">
                    <div className="col-3 investmentOptionsImages">
                        <img src="media/images/ipo-acop.svg" alt="" />
                    </div>
                    <div className="col-3 investmentOptions">
                        <h6>IPO</h6>
                        <p>Apply to the latest IPOs instantly via UPI</p>
                    </div>
                    <div className="col-3 investmentOptionsImages">
                        <img src="media/images/fo-acop.svg" alt="" />
                    </div>
                    <div className="col-3 investmentOptions">
                        <h6>Futures & options</h6>
                        <p>Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <button className='btn btn-primary mx-auto' style={{backgroundColor:"#387dd1"}}>Explore Investments</button>
                </div>
            </div>
        </>
     );
}

export default InvestmentOptions;