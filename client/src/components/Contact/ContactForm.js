import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMsg] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/contact/new-message', {
            name,
            phone,
            email,
            message,
        }).then((response) => {
                setSuccessMsg(response.data.msg)
                setName('')
                setPhone('')
                setEmail('')
                setMessage('')
            })
            .catch(err => console.log(err))
    }
    console.log(successMsg)
    return (
        <div className='container'>
        <div className='col-12 m-auto text-dark text-left pt-5 px-5'>

            <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                    <label htmlFor='name' className='text-muted'>Nombre</label>
                    <input type='text' name='name' className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                    </input>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='phone' className='text-muted'>Teléfono</label>
                    <input type='text' name='phone' className='form-control'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        >
                    </input>
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='email' className='text-muted'>Correo <span className='bolder'>electrónico</span></label>
                    <input type='text' name='email' className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                </div>
                <div className='form-group'>
                    <label htmlFor='message' className='text-muted'>Tu <span className='bolder'>mensaje</span></label>
                    <textarea type='text' name='message' className='form-control' rows='6'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                    </textarea>
                </div>
                <div className='container-fluid p-0 mt-2 text-center'>
                    <motion.button className='btn btn-success my-2  w-100' type='submit'
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.8}}
                    >
                        ENVIAR
                    </motion.button>
                </div>
                { successMsg && (
                <div className='alert alert-warning alert-dismissable fade show' role='alert'>
                    <div className='row mt-5 mr-0'>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        {successMsg}
                </div>
                )}
            </form>
        </div>
        </div>
    )
}

export default ContactForm
