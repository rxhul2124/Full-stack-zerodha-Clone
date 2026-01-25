import React from 'react';

function PricingCard({title, descriptionLines, imageURL}) {
    return ( 
        <>
            <div className="col-md-4 mt-5">
                <div className="p-4 text-center">
                    <img src={imageURL} alt={title} />
                    <h5>{title}</h5>
                    {
                        descriptionLines.map((line, index)=>(
                            <span key={index}>{line}<br/></span>
                        ))
                    }
                </div>
            </div>
        </>
     );
}

export default PricingCard;