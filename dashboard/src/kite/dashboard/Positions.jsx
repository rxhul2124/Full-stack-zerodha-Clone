import React from 'react';
import NoRecord from './NoRecord';

function Positions({theme}) {
    return ( 
        <>
            <NoRecord imageURL={`/media/image/positions${theme === "light"?"":"-dark"}.svg`} description1={"You don't have any positions yet"} description2={""} button={"Get started"}/>
        </>
     );
}

export default Positions;