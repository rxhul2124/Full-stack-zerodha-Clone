import React from 'react';
import NoRecord from '../NoRecord'

function Auctions({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/alert.svg"
    : "/media/image/alert-dark.svg";
    return ( 
        <>
            <NoRecord
                imageURL={imagePath}
                description1={"There are no stocks for auctions yet."}
                description2={"The auction market opens at 2.30 PM. Stocks eligible to be"}
                description3={"sold in the auction will be listed here. Read more."}
                button={""}
            />
        </>
     );
}

export default Auctions;