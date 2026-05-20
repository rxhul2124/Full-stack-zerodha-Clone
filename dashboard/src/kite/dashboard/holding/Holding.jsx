import React from 'react';
import DashboardNavbar from '../DashboardNavbar';
import { Outlet } from 'react-router-dom';

function Holding({theme}) {
    const optionList= ["Equity","Mutual funds"]
    return ( 
        <>
            <DashboardNavbar
                pageName="holdings"
                selectedOption="All"
                selectedOptionURL="/holdings/all"
                optionList={optionList}
                theme={theme}
            />

            <Outlet/>
        </>
     );
}

export default Holding;