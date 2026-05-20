import React from 'react';
import NoRecord from './NoRecord';


function GTT() {
    return ( 
        <>
            <NoRecord imageURL={'/media/image/gtt.svg'} description1={"You have not created any triggers. Learn more about setting"} description2={"automatic stoploss and target orders for your holdings."} button={"Create new GTT"}/>
        </>
     );
}

export default GTT;