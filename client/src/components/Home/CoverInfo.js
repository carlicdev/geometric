import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoverInfo = () => {
    return (
        <div className='col-md-12 col-sm-12 col-lg-8 col-xlg-10 '>
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
                <p className='display-6'> Soluciones web para organizaciones y pequeños negocios que buscan tener gran impacto en linea.</p>
                </motion.div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-around'>
                        <div className='card border-0 main-card mt-5'>
                            <div className='card-body'>
                                <Link to='/contact'>
                                    <motion.button className='btn btn-success'
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale:0.9}}
                                        >
                                        QUIERO UNA WEB APP
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
