import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="container">
                <div className="row m-3 p-4 text-center lh-1 fs-5 opacity-75">
                    <h3 className='p-2 mt-5'>Zerodha Products</h3>
                    <p>Sleek, modern, and intuitive trading platforms</p>
                    <p>Check out our <a href="#">investment offerings →</a> </p>
                </div>
                <br />
                <hr className='mt-5 opacity-25' />
            </div>
        </>
     );
}

export default Hero;