import React, { useState } from 'react';
import './SidebarFooter.css'

function SidebarFooter({count}) {
    const [active, setActive] = useState(1);

    return ( 
        <>
            <div className="footer border-top">
                {
                    count.map((item,)=>(
                        <div 
                            key={item} 
                            onClick={()=>setActive(item)} 
                            className=
                                {`page d-inline-flex justify-content-start 
                                ${active === item ? "active": "hover"}`}>{item}
                        </div>
                    ))
                }
                <i className="fa-solid fa-layer-group addPage"></i>
            </div>
        </>
     );
}

export default SidebarFooter;
