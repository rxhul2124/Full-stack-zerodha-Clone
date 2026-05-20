import React from 'react';
import NoRecord from '../NoRecord';

function MutualFunds({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/coin-holdings.png"
    : "/media/image/coin-holdings-dark.png";
    return ( 
        <>
            <p className='holding-heading'>Holdings</p>
            <NoRecord 
                imageURL={imagePath}  
                description1={"Start investing in commission-free direct mutual funds."}
                description2={""}
                description3={""}
                button={"Open Coin"}
            />
        </>
     );
}

export default MutualFunds;