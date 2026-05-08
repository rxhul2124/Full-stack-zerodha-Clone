import React from 'react';
import Topbar from './Topbar';
import Menubar from './Menubar';
import Profile from './Profile';

function Navbar() {
    return ( 
        <>
            <div className='d-inline-flex'>
                <Topbar />
                <Menubar />
                <Profile name={"Rahul"} />
            </div>
        </>
     );
}

export default Navbar;
