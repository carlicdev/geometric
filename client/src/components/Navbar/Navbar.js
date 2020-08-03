import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' 
                    aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <div className='navbar-nav'>
                        <Link to='/' className='nav-link'>HOME</Link>
                        <Link to='/services' className='nav-link'>SERVICIOS</Link>
                        <Link to='/blog' className='nav-link'>BLOG</Link>
                        <Link to='/contact' className='nav-link'>CONTACTO</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;