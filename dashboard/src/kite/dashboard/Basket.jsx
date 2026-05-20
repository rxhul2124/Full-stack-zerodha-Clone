import React from 'react';
import NoRecord from './NoRecord';

function Basket() {
    return ( 
        <>
            <NoRecord imageURL={"/media/image/basket.svg"} description1={"You haven't created any baskets."} description2={""} button={"Create new basket"}/>
        </>
     );
}

export default Basket;