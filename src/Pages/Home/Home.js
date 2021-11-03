import React from 'react';
import Slider from '../Home/Slider';
import Header from '../Shared/Header';
import Appointment from './Appointment';
import BannerItems from './BannerItems';
import './Home.css';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';
const Home = () => {
    return (
        <div>
             <Header/>
             <Slider/>
             <BannerItems/>
             <Services/>
             <Treatment/>
             <Appointment/>
             <Testimonial/>
        </div>
    );
};

export default Home;