import React from 'react';
import ContactForm from './ContactForm';
import { FaTwitter, FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { MdMail, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='container text-center my-5 mx-auto'>
        <div className='container bg-dark py-5'>
        <div className='container text-light '>
            <p className='display-5'>
                Contacto
            </p>
            <hr/>
        </div>
        <div className='row'>
            <div className='col-lg-6'>
            <div className='card border-0  text-light main-card'>
                <div className='card-body px-5'>
                <p className='display-6 my-3'>LOGO</p>
                <p>Quieres mas información sobre alguno de nuestros servicios? Escríbenos para cualquier duda o pregunta que tengas.</p>
                <p>Si ya tienes una idea de tu proyecto, aquí puedes solicitar un presupuesto sin ningún compromiso y completamente gratis.</p>
                <p>Elige la opción de contacto que prefieras. estamos para servirte.</p>
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
            <div className='col-lg-6'>
                <ContactForm />
            </div>
        </div>
    </div>
    </div>
    )
}

export default Contact;
