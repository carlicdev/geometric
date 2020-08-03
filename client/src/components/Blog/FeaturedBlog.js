import React from 'react';
import { motion } from 'framer-motion';
import blogImg1 from '../../images/seo.jpeg';
import blogImg2 from '../../images/diseño.jpeg';
import blogImg3 from '../../images/desarrollo.jpeg';


const FeaturedBlog = () => {
    return (
        <div className='container text-center p-5'>
            <div className='container'>
                <p className='display-5'>
                    Nuestro Blog
                </p>
                <hr/>
            </div>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='card'>
                        <img src={blogImg1} alt='img' className='img-fluid card-img-top'/>
                        <div className='card-body text-left'>
                            <h5 className='card-title'>Este es el titulo del Blog</h5>
                            <p className='card-text'>Esta es una descripción no demasiado larga de esta entrada del blog. No muchas palabras pero suficiente..</p>
                            <div className='d-flex bd-highlight'>
                                <p className='mr-auto d-inline'><small className='text-muted'>Fecha de pub.</small></p>
                            <motion.button className='btn btn-success ml-auto d-inline'
                                whileHover={{ scale: 1.1}}
                            >
                                Seguir leyendo
                            </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                <div className='card col-12'>
                        <img src={blogImg2} alt='img' className='img-fluid card-img-top'/>
                        <div className='card-body text-left'>
                            <h5 className='card-title'>Este es el titulo del Blog</h5>
                            <div className='d-flex bd-highlight'>
                                <p className='mr-auto d-inline'><small className='text-muted'>Fecha de pub.</small></p>
                            <button className='btn btn-success ml-auto d-inline'>
                                Seguir leyendo
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className='card col-12'>
                        <img src={blogImg3} alt='img' className='img-fluid card-img-top'/>
                        <div className='card-body text-left'>
                            <h5 className='card-title'>Este es el titulo del Blog</h5>
                            <div className='d-flex bd-highlight'>
                                <p className='mr-auto d-inline'><small className='text-muted'>Fecha de pub.</small></p>
                            <button className='btn btn-success ml-auto d-inline'>
                                Seguir leyendo
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog;
