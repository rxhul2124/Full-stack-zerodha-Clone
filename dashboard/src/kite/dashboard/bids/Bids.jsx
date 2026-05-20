import React from 'react';
import DashboardNavbar from '../DashboardNavbar';
import { Outlet } from 'react-router-dom';

function Bids({theme}) {

    const optionList = [
        "Govt. Securities",
        "Auctions",
        "Corporate Actions",
        "SSE IPO"
    ];

    return(
        <>
            <DashboardNavbar
                pageName="bids"
                selectedOption="IPO"
                selectedOptionURL="/bids/ipo"
                optionList={optionList}
                theme={theme}
            />

            <Outlet />
        </>
    );
}

export default Bids;