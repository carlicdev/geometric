import React from 'react';
import blogImg2 from '../../images/desarrollo.jpeg';

const BlogList = () => {
    return (
        <div className='container justify-content-around'>
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-1'>
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
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-1'>
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
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-1'>
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
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-1'>
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
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='card m-1'>
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
                </div>
            </div>
        </div>
    )
}

export default BlogList;
