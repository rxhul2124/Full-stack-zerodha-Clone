import React from 'react';
import './Education.css';

function Education() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row p-4 m-3">
                    <div className="col-6">
                        <img className='educationImage' src="media/images/education.svg " alt="" />
                    </div>
                    <div className="col-6 mt-5 educationText">
                        <h4>Free and open market education</h4>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="#">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="#">TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Education;