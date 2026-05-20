import React from 'react';
import NoRecord from './NoRecord';

function SIP({theme}) {
    return ( 
        <>
            <NoRecord imageURL={`/media/image/sip${theme === "light"?"":"-dark"}.svg`} description1={"You haven't created any SIPs."} description2={""} button={"Create new SIP"}/>
        </>
     );
}

export default SIP;