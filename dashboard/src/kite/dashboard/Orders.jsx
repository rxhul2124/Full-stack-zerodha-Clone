import React from 'react';
import NoRecord from './NoRecord';

function Orders({theme}) {
    return ( 
        <>
            <NoRecord imageURL={`/media/image/orderbook${theme === "light"?"":"-dark"}.svg`} description1={"You haven't placed any orders today"} description2={""} button={"Get started"}/>
        </>
     );
}

export default Orders;