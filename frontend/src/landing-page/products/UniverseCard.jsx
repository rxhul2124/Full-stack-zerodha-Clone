import React from 'react';
import './UniverseCard.css';

function UniverseCard({ imageURL, descriptionLines }) {
    return ( 
        <>
            <div className="col-md-4">                        
                <div className="p-3 text-center">
                    <div className='universeSection'>
                        <img className='w-100 mb-3 img-fluid universeImage' src={imageURL} alt="" />
                    </div>
                    <p className='text-muted description fw-lighter  lh-1'>
                        {descriptionLines.map((line, index)=>(
                           <span key={index} >
                                {line}
                                <br/>
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </>
     );
}

export default UniverseCard;