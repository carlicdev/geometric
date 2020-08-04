import React from 'react';
import { Link } from 'react-router-dom';
import webDev from '../../images/desarrollo.jpeg';
import webDes from '../../images/diseño.jpeg';
import webSeo from '../../images/seo.jpeg'
import { motion } from 'framer-motion';
import { FaTools, FaChartLine, FaDraftingCompass, FaHammer, FaHeadset } from 'react-icons/fa';

const Section = () => {
    return (
        <div className='container text-center my-5'>
            <p className='display-6'>Soluciones digitales para tu negocio</p>
            <hr/>
            <div className='row d-flex justify-content-around'>
                <div className='col-md-6 col-lg-4'>
                    <div className='card bg-success text-light my-2 mx-1 border-0'>
                        <div className='card-header text-light '>
                            <p className='card-title'>Desarrollo Web</p>
                        </div>
                        <div className='card-body p-5'>
                            <FaTools size={100}/>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card  bg-primary text-light m-2 mx-1 border-0'>
                        <div className='card-header '>
                            <p className='card-title'>Diseño Web</p>
                        </div>
                        <div className='card-body p-5'>
                            <FaDraftingCompass  size={100} />   
                        </div>
                    </div>  
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card bg-dark text-light m-2 mx-1 border-0'>
                        <div className='card-header bg-dark text-light '>
                            <p className='card-title'>Posicionamiento en Buscadores</p>
                        </div>
                        <div className='card-body p-5'>
                        <FaChartLine size={100} />
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
