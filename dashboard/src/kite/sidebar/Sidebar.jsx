import React from 'react';
import Search from './Search';
import Wishlist from './Wishlist'
import SidebarFooter from './SidebarFooter'
import './Sidebar.css'  
import wishlist from '../../data/wishlist'

function Sidebar() {
    const count = [1,2,3,4,5,6,7];
    return ( 
        <>
            <div className='sidebar border'>
                <Search />
                <Wishlist listOfData={wishlist}/>
                <SidebarFooter count={count}/>
            </div>
        </>
     );
}

export default Sidebar;