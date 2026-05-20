import React from 'react';
import NoRecord from '../NoRecord';

function SSE({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/ipo-list.svg"
    : "/media/image/ipo-list-dark.svg";
    return ( 
        <>
            <NoRecord
                imageURL={imagePath}
                description1={"No active Social Stock Exchange (SSE) issues. SSE allows non-"}
                description2={"profits to raise funds for their causes. Learn more."}
                description3={""}
                button={""}
            />
        </>
     );
}

export default SSE;