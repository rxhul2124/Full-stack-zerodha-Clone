import React, { useState } from 'react';
import './SidebarFooter.css'

function SidebarFooter({count}) {
    const [active, setActive] = useState(1);

    return ( 
        <>
            <div className="footer">
                <div className="footer-page">
                    {
                        count.map((item,)=>(
                            <div 
                                style={{borderBottom:"none"}}
                                key={item} 
                                onClick={()=>setActive(item)} 
                                className=
                                    {`page d-inline-flex justify-content-start 
                                    ${active === item ? "active": "hover"}`}>{item}
                                
                            </div>
                        ))
                    }
                </div>
                <i className="fa-solid fa-layer-group addPage"></i>
            </div>
        </>
     );
}

export default SidebarFooter;
