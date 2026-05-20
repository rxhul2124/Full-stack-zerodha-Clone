import React from 'react';
import NoRecord from '../NoRecord';

function Equity({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/holdings.svg"
    : "/media/image/holdings-dark.svg";
    return ( 
        <>
            <p className='holding-heading'>Holdings</p>
            <NoRecord 
                imageURL={imagePath} 
                description1={"You don't have any smallcases."} 
                description2={""} 
                description3={""} 
                button={"Visit smallcase"}
            />
        </>
     );
}

export default Equity;