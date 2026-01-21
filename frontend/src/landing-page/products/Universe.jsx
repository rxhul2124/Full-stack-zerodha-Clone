import React from 'react';
import UniverseCard from './UniverseCard';
import UniverseData from '../../data/universeData.js'

function Universe() {
    return ( 
        <>
            <div className="container">
                <div className="row m-3 p-4 text-center">
                    <h4>The Zerodha Universe</h4>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="row m-3 p-4">
                    {
                        UniverseData.map((item)=>(
                            <UniverseCard 
                            key={item.id} 
                            imageURL={item.imageURL} 
                            descriptionLines={item.descriptionLines} />
                        ))
                    }
                </div>
                <div className="row m-3 p-4">
                    <button className='mx-auto fs-5 btn btn-primary' style={{backgroundColor:"#387dd1"}}>Sign up for free</button>
                </div>
            </div>
        </>
     );
}

export default Universe;