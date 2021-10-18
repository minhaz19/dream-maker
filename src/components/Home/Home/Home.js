import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import OurTeam from '../OurTeam/OurTeam';
import OurValue from '../OurValue/OurValue';
import ScrollTop from '../ScrollTop/ScrollTop';

const Home = () => {
    return (
        <main>
            <Header/>
            <Services/>
            <OurValue/>
            <About/>
            <Testimonials/>
            <Description/>
            <Contact/>
            <OurTeam/>
            <Footer/>
            <ScrollTop/>
        </main>
    );
};

export default Home;