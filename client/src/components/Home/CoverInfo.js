import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoverInfo = () => {
    return (
        <div className='col-md-5 col-sm-12 col-lg-8 col-xlg-10 '>
            <div className='container mt-5 pt-5 align-middle'>
                <motion.div
                initial={{ y:-1250 }}
                animate={{ y:0 }}
                transition={{ delay: 1.5, duration: 1 }}
                >
                <p className='display-1 my-5 text-success'>LOGO</p>
                </motion.div>
                <motion.div 
                initial={{ x:-1250 }}
                animate={{ x:0 }} 
                transition={{ delay: 0.5, duration: 1.5 }}
                >
                <p className='display-5' >Te conectamos con el mundo!</p>
                </motion.div>
                <hr className='mb-5' />
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                >
                <p className='display-6'>Porque ya es hora de tener tu propia WebApp</p>
                </motion.div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='card-group'>
                        <div className='card border-success main-card mt-5'>
                            <div className='card-body'>
                                <p>Si ya tienes definido tu proyecto puedes solicitar un presupuesto sin ningun compromiso y completamente gratis.</p>
                                <Link to='/contact'>
                                    <motion.button className='btn btn-success'
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale:0.9}}
                                        >
                                        SOLICITAR PRESUPUESTO
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    <div className='card border-success main-card mt-5'>
                            <div className='card-body'>
                                <p>¿Que es y porque necesito una Web App?</p>
                                <p>Averigualo aqui.</p>
                                <Link to='/services'>
                                    <motion.button className='btn btn-success'
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale:0.9}}
                                        >
                                        AVERIGUAR
                                    </motion.button>
                                </Link>
                            </div>
                        </div> 
                        </div> 
                </div>
            </div>
        </div>
    )
}

export default CoverInfo;
