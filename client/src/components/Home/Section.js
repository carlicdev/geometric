import React from 'react';
import { Link } from 'react-router-dom';
import webDev from '../../images/desarrollo.jpeg';
import webDes from '../../images/diseño.jpeg';
import webSeo from '../../images/seo.jpeg'
import { motion } from 'framer-motion';

const Section = () => {
    return (
        <div className='container text-center my-5'>
            <p className='display-6'>Soluciones digitales para tu negocio</p>
            <hr/>
            <div className='row d-flex justify-content-around'>
                <div className='col-md-6 col-lg-4'>
                    <div className='card my-2 mx-1'>
                        <div className='card-header bg-dark text-light '>
                            <p className='card-title'>Desarrollo Web</p>
                        </div>
                        <div className='card-body p-0'>
                            <img src={webDev} alt='webDev' className='img-fluid'/> 
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-2 mx-1'>
                        <div className='card-header bg-dark text-light '>
                            <p className='card-title'>Diseño Web</p>
                        </div>
                        <div className='card-body p-0'>
                        <img src={webDes} alt='webDev' className='img-fluid'/>   
                        </div>
                    </div>  
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-2 mx-1'>
                        <div className='card-header bg-dark text-light '>
                            <p className='card-title'>Posicionamiento en Buscadores</p>
                        </div>
                        <div className='card-body p-0'>
                        <img src={webSeo} alt='webDev' className='img-fluid'/> 
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <h5 className='card-title'>Conoce a detalle nuestros servicios y las ventajas que cada uno de ellos le traerá a tu negocio.</h5>
            <p className='card-text'>Desde páginas de aterrizaje hasta complejas aplicaciones web, con diseños que marcan tendencia. Tenemos justo lo que tu negocio necesita.</p>
            <Link to='/services'>
                <motion.button className='btn btn-success'
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                >
                    SERVICIOS
                </motion.button>
            </Link>
        </div>
    )
}

export default Section
