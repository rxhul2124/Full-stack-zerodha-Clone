import React from 'react';
import './Search.css'

function Search() {
    return ( 
        <>
            <div className="search">
                <div className="input-group p-2">
                    <span className="input-group-icon1"><i className="fa-solid fa-magnifying-glass"></i></span>                    
                    <input type="text" className="search-input" placeholder="Search eg: infy bse, nifty fut, index fund, etc"/>
                    <span className="input-group-icon2"><i className="fa-solid fa-sliders"></i></span>
                </div>      
            </div>
        </>
     );
}

export default Search;
