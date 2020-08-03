import React from 'react';
import { BsChatSquareQuoteFill } from 'react-icons/bs';

const Testimonials = () => {
    return (
        <div className='container-fluid  bg-dark p-5'>
            <div className='text-center'>
            <p className='display-5 text-light my-5'>Clientes satisfechos</p>
            <hr className='text-light' />
            </div>
            <div className='row d-flex justify-content-around'>
                <div className='col-lg-4 col-md-6'>
                    <div className='card text-center mx-5 my-3 border-0'>
                        <div className='card-header bg-success text-light'>
                        <BsChatSquareQuoteFill size={25}/>
                        </div>
                        <div className='card-body'>
                            <p>esta es la opinion de un cliente que tiene mucho que decir de nuestro producto</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <p>Nombre Cliente de <span>tal Empresa</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card text-center mx-5 my-3 border-0'>
                        <div className='card-header bg-success text-light'>
                            <BsChatSquareQuoteFill size={25}/>
                        </div>
                        <div className='card-body'>
                            <p>esta es la opinion de un cliente que tiene mucho que decir de nuestro producto</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <p>Nombre Cliente de <span>tal Empresa</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card text-center mx-5 my-3 border-0'>
                        <div className='card-header bg-success text-light'>
                            <BsChatSquareQuoteFill size={25}/>
                        </div>
                        <div className='card-body'>
                            <p>esta es la opinion de un cliente que tiene mucho que decir de nuestro producto</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <p>Nombre Cliente de <span>tal Empresa</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card text-center mx-5 my-3 border-0'>
                        <div className='card-header bg-success text-light'>
                            <BsChatSquareQuoteFill size={25}/>
                        </div>
                        <div className='card-body'>
                            <p>esta es la opinion de un cliente que tiene mucho que decir de nuestro producto</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <p>Nombre Cliente de <span>tal Empresa</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card text-center mx-5 my-3 border-0'>
                        <div className='card-header bg-success text-light'>
                            <BsChatSquareQuoteFill size={25}/>
                        </div>
                        <div className='card-body'>
                            <p>esta es la opinion de un cliente que tiene mucho que decir de nuestro producto</p>
                        </div>
                        <div className='card-footer text-muted'>
                            <p>Nombre Cliente de <span>tal Empresa</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
