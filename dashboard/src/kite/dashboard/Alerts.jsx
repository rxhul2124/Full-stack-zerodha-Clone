import React from 'react'
import Navbar from '../topbar/Navbar'
import NoRecord from './NoRecord';

function Alerts({theme}) {
    const imagePath =
    theme === "light"
    ? "/media/image/alert.svg"
    : "/media/image/alert-dark.svg";
    return ( 
        <>
            <NoRecord 
            imageURL={imagePath} 
            description1={"You haven't created any alerts."} 
            description2={""} 
            button={"Create new alert"}/>
        </>
     );
}

export default Alerts;