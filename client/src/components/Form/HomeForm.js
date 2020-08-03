import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const HomeForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ serverMsg, setServerMsg ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/contact/free-guide', {
            name, email
        }).then(response => {
            setServerMsg(response.data.msg);
            setName('');
            setEmail('');
        }).catch(err => console.log(err));
    }

    return (
        <div className='col-md-12 col-sm-12 col-lg-4 col-xlg-2'>
        <motion.div className='card col-lg-6 col-md-6 bg-dark m-5'
                        initial={{ y:-2250 }}
                        animate={{ y:0 }} 
                        transition={{ delay: 3, type: 'spring', stiffness: 80, duration: 0.5 }}
        >
            <div className='text-dark text-left p-2'>
                <div className='container  p-0 mb-2'>
                    <div className='card bg-success'>
                        <div className='card-body text-center'>
                            <p className=' text-light mb-3'><small>NUESTRA GUIA:</small></p>
                            <p className=' lead text-light mb-3'>"Tu primera Web App"</p>
                            <p className=' text-light mb-3'><small>GRATIS</small></p>
                        </div>
                    </div>
                </div>               
                <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                    <label htmlFor='name' className='text-light'>Nombre</label>
                    <input type='text' name='name' className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                    </input>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='email' className='text-light'>Correo electónico</label>
                    <input type='text' name='email' className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                </div>
                <button className='btn btn-success w-100' >
                    QUIERO LA GUIA
                </button>                    
                </form>
            </div>
        </motion.div>
        </div>
    )
}

export default HomeForm;
