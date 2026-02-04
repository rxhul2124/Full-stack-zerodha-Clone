import React from 'react';
import './Hero.css';

function Hero() {
    return ( 
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-3 text-start text-muted mt-5">
                            <h2>Support Portal</h2>
                        </div>
                        <div className="col-3 text-end mt-5">
                            <button className='btn btn-primary heroButton'>My tickets</button>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="input-group mb-3 input-group-lg mb-5">
                            <span className="input-group-text " id="support-input"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" className="form-control" placeholder="Eg: How do I open my account, Hoe do i activate F&o..." aria-label="Username" aria-describedby="support-input" />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Hero;