import React from 'react';
import Topbar from './Topbar';
import Menubar from './Menubar';
import Profile from './Profile';
import './Navbar.css'

function Navbar({privacy, setPrivacy, theme, setTheme}) {
    return ( 
        <>
            <div className='navbar'>
                <Topbar className="topbar" />
                <Menubar className="menubar"/>
                <Profile className="profile" name={"R"} privacy={privacy} setPrivacy={setPrivacy} theme={theme} setTheme={setTheme}/> 
            </div>
        </>
     );
}

export default Navbar;
