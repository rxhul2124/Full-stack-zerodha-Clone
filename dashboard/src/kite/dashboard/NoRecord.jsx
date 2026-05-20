import React from 'react';
import './NoRecord.css'

function NoRecord({imageURL, description1, description2, description3, button}) {
    return ( 
        <>
            <div className="no-reocrd">
                <img className='no-reocrd-img mb-2'  src={imageURL} alt="" />
                <p className='no-record-discription'>{description1}</p>
                <p className={`no-record-discription ${description2 === "" ? "hideButton":""}`}>{description2}</p>
                <p className={`no-record-discription ${description3 === "" ? "hideButton":""}`}>{description3}</p>
                <button className={`button mt-4 ${button === ""? "hideButton": ""}`}>{button}</button>
            </div>
        </>
     );
}

export default NoRecord;