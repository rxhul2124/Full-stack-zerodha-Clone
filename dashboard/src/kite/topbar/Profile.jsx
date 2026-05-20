import React, { useState } from 'react';

import './Profile.css';

import Basket from './Basket';
import Notifications from './Notifications';
import ProfileDropDown from './ProfileDropDown';

function Profile({ name, privacy, setPrivacy, theme, setTheme }) {
    const [click, setClick] = useState(null);

    return(
        <>
            <div className="profile">
                <div className="profile-options">
                    <i
                        className="fa-solid fa-cart-shopping"
                        onClick={() =>
                            setClick(
                                click === "basket"
                                ? null
                                : "basket"
                            )
                        }
                    />
                    <i
                        className="fa-regular fa-bell"
                        onClick={() =>
                            setClick(
                                click === "notifications"
                                ? null
                                : "notifications"
                            )
                        }
                    />
                    <button className="profile-button"
                        onClick={() =>
                            setClick(
                                click === "profile"
                                ? null
                                : "profile"
                            )
                        }
                    >
                        {name}
                    </button>
                </div>
            </div>
            {
                click === "basket" && <Basket />
            }
            {
                click === "notifications" && <Notifications theme={theme}/>
            }
            {
                click === "profile" && <ProfileDropDown name={"Rahul"}  email={"rahul@gmail.com"} privacy={privacy} setPrivacy={setPrivacy} theme={theme} setTheme={setTheme}/>
            }
        </>
    );
}

export default Profile;