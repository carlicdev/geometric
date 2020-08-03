import React, { useState } from 'react';
import { TiStarburst } from 'react-icons/ti';
import { motion } from 'framer-motion';

const HomeForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    return (
        <div className='col-md-7 col-sm-12 col-lg-4 col-xlg-2 '>
        <div className='container mainform mb-5'>
            <div className='col-md-11 col-lg-10 col-xlg-9 col-xxlg-8 m-auto mt-5 text-dark text-left pt-5 px-5'>
                <div className='container mr-0 p-0 mb-2'>
                    <motion.div className='card bg-success'
                    initial={{ x: 600 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 2.5, type: 'spring', stiffness:'50', duration: 3.5}}
                    >
                        <div className='card-body text-center'>
                            <p className=' text-light mb-3'><span><TiStarburst size={30}/></span>RECIBE GRATIS NUESTRA GUIA:</p>
                            <p className=' lead text-light mb-3'>"Tu primera Web App"</p>
                        </div>
                    </motion.div>
                </div>               
                <form>
                <motion.div className='form-group mb-2'
                    initial={{ x: 600 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 2, type: 'spring', stiffness:'50', duration: 3}}
                >
                    <label htmlFor='name' className='text-light'>Nombre</label>
                    <input type='text' name='name' className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                    </input>
                </motion.div>
                <motion.div className='form-group mb-4'
                    initial={{ x: 600 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.5, type: 'spring', stiffness:'50', duration: 2.5}}               
                >
                    <label htmlFor='email' className='text-light'>Correo electónico</label>
                    <input type='text' name='email' className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                    </input>
                </motion.div>
                <motion.button className='btn btn-success w-100'
                    initial={{ x: 600 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, type: 'spring', stiffness:'50', duration: 2}}
                    >
                    QUIERO LA GUIA
                    </motion.button>                    
                </form>
            </div>
        </div>
        </div>
    )
}

export default HomeForm;
