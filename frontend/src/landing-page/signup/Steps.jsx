import React from 'react';
import './Steps.css'

function Steps() {
    return ( 
        <>
            <div className='stepsWhole'>
                <div className="container">
                    <div className="row m-3 p-4">
                        <div className="row text-center mb-5 mt-4 opacity-75">
                            <h5>Steps to open a demat account with Zerodha</h5>
                        </div>
                        <div className="col-md-6">
                            <img className='stepsImage' src="media/images/steps-acop.svg" alt="" />
                        </div>
                        <div className="col-md-6 stepsText mb-5">
                            <p><i class="fa-solid fa-1"></i> Enter the requested details</p>
                            <hr />
                            <p><i class="fa-solid fa-2"></i> Complete e-sign & verification</p>
                            <hr />
                            <p><i class="fa-solid fa-3"></i> Start investing!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Steps;