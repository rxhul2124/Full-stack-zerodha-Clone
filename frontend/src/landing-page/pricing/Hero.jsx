import React from 'react';
import PricingCard from './PricingCard';

import PricingData from '../../data/pricingData.js';

function Hero() {
    return ( 
        <>
            <div className="container">
                <div className="row text-center mt-5 ">
                    <div className="mt-5">
                        <h3>Charges</h3>
                        <p className='fs-4 text-muted'>List of all charges and taxes</p>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        PricingData.map((item)=>(
                            <PricingCard 
                            key={item.id} 
                            descriptionLines={item.descriptionLines} 
                            title={item.title} 
                            imageURL={item.imageURL} 
                            />
                        ))
                    }
                </div>
            </div>
        </>
     );
}

export default Hero;