import React from 'react';
import './Benefits.css';


function Benefits() {
    return ( 
        <>
            <div className="container">
                <div className="row m-3 p-4 mt-5">
                    <div className="col-6 mt-5">
                        <img className='benefitsImage' src="media/images/acop-benefits.svg" alt="" />
                        <h5 className='benefitsText' >Benefits of opening a Zerodha demat account</h5>
                    </div>
                    <div className="col-6 mt-4">
                        <h5>Unbeatable pricing</h5>
                        <p className='benefitsTexts'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                        <h5>Best investing experience</h5>
                        <p className='benefitsTexts'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                        <h5>No spam or gimmicks</h5>
                        <p className='benefitsTexts'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                        <h5>The Zerodha universe</h5>
                        <p className='benefitsTexts'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Benefits;