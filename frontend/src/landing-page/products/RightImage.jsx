import React from 'react';
import './RightImage.css'


function RightImage({productName, productdescription, imageURL, sublink1}) {
    return ( 
        <>
            <div className="container">
                <div className="row m-3 p-4">
                    <div className="col-4 rightProductdescription text-body-secondary">
                        <h4>{productName}</h4>
                        <p className='mt-4'>{productdescription}</p>
                        <a href="#">{sublink1} →</a>
                    </div>
                    <div className="col-8">
                        <img className='rightProductImage' src={imageURL} alt={productName} />
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightImage;