import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='navbarLogo' src='media/images/logo.svg'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbarLinks">
                            <li className="nav-item">
                            <Link className="nav-link active lh-1" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link lh-1" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link lh-1" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link lh-1" to='/pricing'>Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link lh-1" to='/support'>Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
     );
}

export default Navbar;