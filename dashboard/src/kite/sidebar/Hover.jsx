import React from 'react';
import './Hover.css'

function Hover({item, setActive, active}) {
    const isActive = active === item;
    return ( 
        <>
            <div className="hoverComponent d-inline-flex justify-content-end position-absolute">
                <div className="hoverButton" onClick={()=>setActive(isActive ? "" :item)} style={{backgroundColor:"#4085f3", color:"white",fontWeight:700, border:"2px solid #4085f3"}}>B</div>
                <div className="hoverButton" style={{backgroundColor:"#fe5622", color:"white",fontWeight:700, border:"2px solid #fe5622"}}>S</div>
                <div className="hoverButton"><i className="fa-solid fa-bars-staggered"></i></div>
                <div className="hoverButton"><i className="fa-solid fa-arrow-trend-up"></i></div>
                <div className="hoverButton"><i className="fa-regular fa-trash-can"></i></div>
                <div className="hoverButton"><i className="fa-solid fa-ellipsis"></i></div>
            </div>
        </>
     );
}

export default Hover;