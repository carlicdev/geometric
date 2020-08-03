import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <div className='nav text-light bg-dark p-5 '>
            <div className='container-fluid  text-center '>
                <button className='btn btn-success mx-3 round p-2'>
                <FaTwitter size={30} />
                </button>
                <button className='btn btn-success mx-3 round p-2'>
                <FaFacebookSquare size={30} />
                </button>
                <button className='btn btn-success mx-3 round p-2'>
                <FaInstagramSquare size={30} />
                </button>
                <button className='btn btn-success mx-3 round p-2'>
                <FaWhatsapp size={30} />
                </button>
            </div>
            <div className='container-fluid text-center'>
                <div className='d-flex justify-content-center mt-3'>
                
                    <Link to='/' className='nav-link mx-3 text-white'>HOME</Link>
                
                
                    <Link to='/services' className='nav-link mx-3 text-white'>SERVICIOS</Link>
                
                
                    <Link to='/blog' className='nav-link mx-3 text-white'>BLOG</Link>
                
                
                    <Link to='/contact' className='nav-link mx-3 text-white'>CONTACTO</Link>
                
                </div>
            </div>
        </div>
        <div className='nav bg-success text-light text-center p-1'>
            <p>Created by GEOMETRICS</p>
        </div>
        </div>
    )
}

export default Footer;
