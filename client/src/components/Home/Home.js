import React from 'react';
import HomeForm from '../Form/HomeForm';
import CoverInfo from './CoverInfo';
import Section from './Section'
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
        <div className='container-fluid cover text-center'>
            <div className='row'>
                <CoverInfo />
                <HomeForm />
            </div>
        </div>
        <Section />
        <Testimonials />
        </div>
    )
}

export default Home;
