import React from 'react';
import Menubar from './Menubar.jsx';
import './Topbar.css'

function Topbar() {
    return ( 
        <>
            <div className="topbar">
                <div className="topbar-data">
                    <p>NIFTY 50</p>
                    <p><span style={{color:"#A34947"}}>25643.389</span></p>
                    <p><span>-40.38</span></p>
                </div>
                <div className="topbar-data">
                    <p>SENSEX</p>
                    <p><span style={{color:"#569358"}}>83242.39</span></p>
                    <p><span>-30.38</span></p>
                </div>
            </div>
        </>
     );
}

export default Topbar;
