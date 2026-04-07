import React from 'react';
import Menubar from './Menubar.jsx';
import './Topbar.css'

function Topbar() {
    return ( 
        <>
            <div className="topbar border">
                <div className="row">
                    <div className="col d-inline-flex">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>NIFTY 50</p>&nbsp;
                        <p><span style={{color:"#de504b"}}>25643.389</span></p>&nbsp;
                        <p><span>-40.38</span></p>
                    </div>
                    <div className="col d-inline-flex">
                        <p>SENSEX</p>&nbsp;
                        <p><span style={{color:"#4fb053"}}>83242.39</span></p>&nbsp;
                        <p><span>-30.38</span></p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Topbar;