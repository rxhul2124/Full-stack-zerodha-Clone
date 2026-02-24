import React from 'react';
import Search from './Search';
import Wishlist from './Wishlist'
import SidebarFooter from './SidebarFooter'

function Sidebar() {
    return ( 
        <>
            <div>
                <Search />
                <Wishlist />
                <SidebarFooter />
            </div>
        </>
     );
}

export default Sidebar;