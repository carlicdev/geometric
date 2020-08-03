import React from 'react';
import ContactForm from './ContactForm';
import { FaTwitter, FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { MdMail, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='container-fluid m-auto p-5 cover'>
            <div className='row mybox'>
                <div className='col-md-6 pt-5 left text-center'>
                    <div className='card border-success mt-5 text-light main-card'>
                        <div className='card-header bg-success'>
                            <p className='card-title display-6'>CONTACTO</p>
                        </div>
                        <div className='card-body px-5'>
                        <p className='display-6 my-3'>LOGO</p>
                        <p>Quieres mas información sobre alguno de nuestros servicios? Escríbenos para cualquier duda o pregunta que tengas.</p>
                        <p>Si ya tienes una idea de tu proyecto, aquí puedes solicitar un presupuesto sin ningún compromiso y completamente gratis.</p>
                        <div className='container-fluid mb-2'>
                            <FaWhatsapp size={25} />55-555-55
                        </div>
                        <div className='container-fluid mb-4'>
                            <MdMail size={25} />mymail@example.com
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button className='btn btn-success p-2 mx-3 round'>
                                <FaTwitter size={40}/>
                            </button>
                            <button className='btn btn-success p-2 mx-3 round'>
                                <FaFacebookSquare size={40} />
                            </button>
                            <button className='btn btn-success p-2 mx-3 round'>
                                <FaInstagramSquare size={40} />
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <ContactForm />
                </div>
            </div>          
        </div>
    )
}

export default Contact;
