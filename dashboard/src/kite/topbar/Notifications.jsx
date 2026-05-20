import React from 'react';
import './Notifications.css'


function Notifications({theme}) {
    const imagePath = 
    theme === "light" ?
    "/media/image/notifications.svg"
    :"/media/image/notifications-dark.svg"
    return ( 
        <div className="notification">
            <img src={imagePath} alt="" />
        </div>
     );
}

export default Notifications;