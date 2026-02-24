import React from 'react';
import './Profile.css'

function Profile({name}) {
    return ( 
        <>
            <div className="profile border">
                <div className=" d-inline-flex options">
                    <i className="fa-solid fa-cart-shopping ms-2 me-3"></i>

                    <i className="fa-regular fa-bell ms-2"></i>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary btn-sm dropdown-toggle mb-3 ms-5" data-bs-toggle="dropdown" aria-expanded="false">
                            {name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Profile;