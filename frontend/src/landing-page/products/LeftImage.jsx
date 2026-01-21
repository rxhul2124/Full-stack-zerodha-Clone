import React from 'react';
import './LeftImage.css';

function LeftImage({productName, productdescription, imageURL, sublink1, sublink2}) {
    return ( 
        <>
            <div className="container">
                <div className="row m-3 p-4">
                    <div className="col-8 mt-4">
                        <img className='productImage' src={imageURL} alt={productName} />
                    </div>
                    <div className="col-4 mt-5 productdescription text-body-secondary">
                        <h4>{productName}</h4>
                        <p className='mt-4'>{productdescription}</p>
                        <a className={sublink1 ? "":"d-none"} href="#">{sublink1} →</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className={sublink2 ? "":"d-none"} href="#">{sublink2} →</a>
                        <div className='mt-5'>
                            <img src="/media/images/googlePlayBadge.svg" alt="play-store" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src="/media/images/appstoreBadge.svg" alt="appstore-store" />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default LeftImage;