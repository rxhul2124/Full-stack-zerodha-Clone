import React from 'react';
import './Profile.css'

function Profile({name}) {
    return ( 
        <>
            <div className="profile border">
                <div className=" d-inline-flex options">
                    <i className="fa-solid fa-cart-shopping  "></i>

                    <i className="fa-regular fa-bell"></i>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary btn-sm dropdown-toggle mb-3" data-bs-toggle="dropdown" aria-expanded="false">
                            {name}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Profile;
