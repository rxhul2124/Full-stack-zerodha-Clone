import React from 'react';
import NoRecord from '../NoRecord'

function All({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/holdings.svg"
    : "/media/image/holdings-dark.svg";
    return ( 
        <>
            <p className='holding-heading'>Holdings</p>
            <NoRecord
                imageURL={imagePath}
                description1={"You don't have any stocks in your DEMAT yet. Get started"}
                description2={"with absolutely free equity investments."}
                description3={""}
                button={"Get started"}
            />
        </>
     );
}

export default All;