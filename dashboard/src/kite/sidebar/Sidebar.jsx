import React, { useState } from 'react';
import Search from './Search';
import Wishlist from './Wishlist';
import SidebarFooter from './SidebarFooter';
import './Sidebar.css';
import initialData from '../../data/wishlist';

export default function Sidebar({action, setAction}) {
    const [stocks] = useState(initialData);
    const count = [1,2,3,4,5,6,7];

    return ( 
        <div className='sidebar'>
            <Search />
            <Wishlist className="wishlistOverflow" stocks={stocks} action={action} setAction={setAction}/>
            <SidebarFooter count={count}/>
        </div>
    );
}
