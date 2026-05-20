    import React from 'react';
    import './ProfileDropDown.css'

    function ProfileDropDown({name, email, privacy, setPrivacy, theme, setTheme }) {
        const handleTheme = () => {
            setTheme(
                theme === "light"
                ? "dark"
                : "light"
            );
        };


        return ( 
            <>
                <div className={`Profile-drop-down ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
                    <div className="drop-down-head">
                        <div className="person-info">
                            <p>{name}</p>
                            <p>{email}</p>    
                        </div>
                        <i className="fa-regular fa-pen-to-square"></i>    
                    </div>   
                    <div className="general-settings">
                        <div className="toggle">
                            <p>Privacy mode</p>
                            <i className={`fa-solid fa-toggle-${ privacy === "on" ? "on" : "off"}`}
                                onClick={() =>
                                    setPrivacy(
                                        privacy === "on"?
                                        null
                                        : "on" 
                                    )
                                }
                            ></i>
                        </div>
                        <div className="toggle">
                            <p>Theme</p> 
                            <i className={`fa-solid fa-toggle-${ theme === "light" ? "off" : "on"}`}
                                onClick={handleTheme}
                            ></i>
                        </div>   
                    </div> 
                        <div className="menuLinks">
                            <a href="">
                                <span>
                                    <i className="fa-solid fa-circle-notch"></i>
                                </span>
                                Console
                            </a>

                            <a href="">
                                <span>
                                    <i className="fa-brands fa-nfc-directional accordianIcon"></i>
                                </span>
                                Coin
                            </a>

                            <a href="">
                                <span>
                                    <i className="fa-brands fa-creative-commons-sampling-plus"></i>
                                </span>
                                Support
                            </a>

                            <a href="" className='breaker'>
                                <span>
                                    <i className="fa-solid fa-user-plus"></i>
                                </span>
                                Invite friends
                            </a>
                            <a href="">
                                <span>
                                    <i className="fa-solid fa-square-up-right"></i>
                                </span>
                                Keyboard shortcuts
                            </a>

                            <a href="">
                                <span>
                                    <i className="fa-regular fa-circle-question"></i>
                                </span>
                                User manual
                            </a>

                            <a href="">
                                <span>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </span>
                                Logout
                            </a>
                        </div>
                </div>        
            </>
        );
    }

    export default ProfileDropDown;