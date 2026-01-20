import React from 'react';
import './Pricing.css';

function Pricing() {
    return ( 
        <>
            <div className='container mt-5'>
                <div className='row p-4 m-3'>
                    <div className="col-3 pricingSection">
                        <h5>Unbeatable pricing</h5>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href='#'>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='col-9 PricingImagesSection'>
                        <div className="row pricing">
                            <div className="col-1 pricingImages">
                                <img src='media/images/pricing0.svg'/>
                            </div>
                            <p className='col-2 mt-4'>Free account opening</p>
                            <div className="col-2 pricingImages">
                                <img src='media/images/pricingMF.svg'/>
                            </div>
                            <p className='col-2 mt-4'> Free equity delivery and direct mutual funds</p>
                            <div className="col-1  pricingImages">
                                <img src='media/images/intradayTrades.svg'/>
                            </div>
                            <p className='col-2 mt-4'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Pricing;