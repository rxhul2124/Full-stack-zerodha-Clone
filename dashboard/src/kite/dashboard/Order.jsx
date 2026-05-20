import React from 'react';
import './Order.css'
import {NavLink , Outlet} from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar';

function Order({theme}) { 
    const optionList = ["GTT", "Basket", "SIP", "Alerts"]
    return ( 
        <>

            <DashboardNavbar
                pageName="orders"
                selectedOption="Orders"
                selectedOptionURL="/orders"
                optionList={optionList}
                theme={theme}
            />

            <Outlet/>
        </>
     );
}

export default Order;