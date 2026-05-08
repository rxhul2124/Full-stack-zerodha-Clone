import React from 'react';

function Search() {
    return ( 
        <>
            <div className="search">
                <div className="input-group mt-1 p-2">
                    <span className="input-group-text " id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>                    
                    <input type="text" className="form-control" placeholder="Search eg: infy bse, nifty fut, index fund, etc" aria-label="Search eg: infy bse, nifty fut, index fund, etc" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-sliders"></i></span>
                </div>      
            </div>
        </>
     );
}

export default Search;
