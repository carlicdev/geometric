import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';

import { FaTools, FaChartLine, FaDraftingCompass, FaHammer, FaHeadset } from 'react-icons/fa';


const Services = () => {
    return (
        <div  className='container text-center p-5'>
            <div className='container'>
                <p className='display-5'>
                    Nuestros Servicios
                </p>
                <hr/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card bg-light'>
                            <div className='card-header bg-success p-3 text-light'>
                                <FaTools size={60} />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Paginas y aplicaciones Web</p>
                                <p className='card-text'>Mobile Friendly</p>
                                <p className='card-text'>Dinamicas</p>
                                <p className='card-text'>Interactivas</p>
                                <p className='card-text'>Integración de base de datos</p>
                                <Link to='/contact'>
                                    <motion.button className='btn btn-success'
                                        whileHover={{scale: 1.1}}
                                    >
                                        QUIERO UNA WEB APP
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                    <div className='card text-left p-5 border-0'>
                    <p className='display-6'>Desarrollo Web</p>
                        <p>Tu página o aplicación adapta sus proporciones para tener el mismo aspecto atractivo en cualquier dispositivo.</p>                
                        <p>Es dinámica. No siempre es igual. Muestra datos diferentes, cambia de color, tiene animaciones. No hay limites!</p>
                        <p>Cuando alguien ingresa a tu página o aplicación puede interactuar con ella de diferentes maneras. Registrarse, mandarte un mensaje o algun archivo y hasta manipular algunos aspectos de la aplicación.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                <div className='col-lg-8'>
                    <div className='card text-left p-5 border-0'>
                        <p className='display-6'>Diseño Web</p>
                        <p>Tu página o aplicación adapta sus proporciones para tener el mismo aspecto atractivo en cualquier dispositivo.</p>                
                        <p>Es dinámica. No siempre es igual. Muestra datos diferentes, cambia de color, tiene animaciones. No hay limites!</p>
                        <p>Cuando alguien ingresa a tu página o aplicación puede interactuar con ella de diferentes maneras. Registrarse, mandarte un mensaje o algun archivo y hasta manipular algunos aspectos de la aplicación.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card bg-light'>
                            <div className='card-header bg-primary p-3 text-light'>
                            <FaDraftingCompass size={60} />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Paginas y aplicaciones Web</p>
                                <p className='card-text'>Mobile Friendly</p>
                                <p className='card-text'>Dinamicas</p>
                                <p className='card-text'>Interactivas</p>
                                <p className='card-text'>Integración de base de datos</p>
                                <Link to='/contact'>
                                <motion.button className='btn btn-primary'
                                    whileHover={{scale: 1.1}}
                                >
                                    QUIERO UN DISEÑO
                                </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card bg-light'>
                            <div className='card-header bg-dark p-3 text-light'>
                                <FaChartLine size={60} />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Paginas y aplicaciones Web</p>
                                <p className='card-text'>Mobile Friendly</p>
                                <p className='card-text'>Dinamicas</p>
                                <p className='card-text'>Interactivas</p>
                                <p className='card-text'>Integración de base de datos</p>
                                <Link to='contact'>
                                <motion.button className='btn btn-dark'
                                    whileHover={{scale: 1.1}}
                                >
                                    POSICIONEN MI PAGINA
                                </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                    <div className='card text-left p-5 border-0'>
                        <p className='display-6'>Posicionamiento en buscadores</p>
                        <p>Tu página o aplicación adapta sus proporciones para tener el mismo aspecto atractivo en cualquier dispositivo.</p>                
                        <p>Es dinámica. No siempre es igual. Muestra datos diferentes, cambia de color, tiene animaciones. No hay limites!</p>
                        <p>Cuando alguien ingresa a tu página o aplicación puede interactuar con ella de diferentes maneras. Registrarse, mandarte un mensaje o algun archivo y hasta manipular algunos aspectos de la aplicación.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                <div className='col-lg-8'>
                    <div className='card text-left p-5 border-0'>
                        <p className='display-6'>Mantenimiento</p>
                        <p>Tu página o aplicación adapta sus proporciones para tener el mismo aspecto atractivo en cualquier dispositivo.</p>                
                        <p>Es dinámica. No siempre es igual. Muestra datos diferentes, cambia de color, tiene animaciones. No hay limites!</p>
                        <p>Cuando alguien ingresa a tu página o aplicación puede interactuar con ella de diferentes maneras. Registrarse, mandarte un mensaje o algun archivo y hasta manipular algunos aspectos de la aplicación.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card bg-light'>
                            <div className='card-header bg-danger p-3 text-light'>
                            <FaHammer size={60} />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Paginas y aplicaciones Web</p>
                                <p className='card-text'>Mobile Friendly</p>
                                <p className='card-text'>Dinamicas</p>
                                <p className='card-text'>Interactivas</p>
                                <p className='card-text'>Integración de base de datos</p>
                                <Link to='/contact'>
                                <motion.button className='btn btn-danger'
                                    whileHover={{scale: 1.1}}
                                >
                                    QUIERO MANTENIMIENTO
                                </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card bg-light'>
                            <div className='card-header bg-warning p-3 text-light'>
                                <FaHeadset size={60} />
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>Paginas y aplicaciones Web</p>
                                <p className='card-text'>Mobile Friendly</p>
                                <p className='card-text'>Dinamicas</p>
                                <p className='card-text'>Interactivas</p>
                                <p className='card-text'>Integración de base de datos</p>
                                <Link to='/contact'>
                                <motion.button className='btn btn-warning'
                                    whileHover={{scale: 1.1}}
                                >
                                    QUIERO ASESORIA
                                </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                    <div className='card text-left p-5 border-0'>
                        <p className='display-6'>Asesorias</p>
                        <p>Tu página o aplicación adapta sus proporciones para tener el mismo aspecto atractivo en cualquier dispositivo.</p>                
                        <p>Es dinámica. No siempre es igual. Muestra datos diferentes, cambia de color, tiene animaciones. No hay limites!</p>
                        <p>Cuando alguien ingresa a tu página o aplicación puede interactuar con ella de diferentes maneras. Registrarse, mandarte un mensaje o algun archivo y hasta manipular algunos aspectos de la aplicación.</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <Contact />
        </div>
    )
}

export default Services;
