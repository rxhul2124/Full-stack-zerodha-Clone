import React from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardNavbar.css';

function DashboardNavbar({
    pageName,
    selectedOption,
    selectedOptionURL,
    optionList,
    theme
}) {

    const navClass = ({isActive}) =>
        isActive
        ? "dashboard-navbar-options active"
        : "dashboard-navbar-options";

    return(
        <div className="dashboard-navbar">

            <div className="dashboard-navbar-menu">

                <NavLink
                    to={selectedOptionURL}
                    end
                    className={navClass}
                >
                    {selectedOption}
                </NavLink>

                {
                    optionList.map((item)=>(

                        <NavLink
                            key={item}

                            to={`/${pageName}/${item
                                .toLowerCase()
                                .replace(/\./g, '')
                                .replace(/\s+/g, '-')}`}

                            className={navClass}
                        >
                            {item}
                        </NavLink>
                    ))
                }

            </div>

        </div>
    );
}

export default DashboardNavbar;