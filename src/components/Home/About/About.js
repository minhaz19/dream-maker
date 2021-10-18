import React from 'react';
import teamPic from '../../../images/undraw_Online_page_re_lhgx.svg'
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid"/>
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle" style={{color: '#1cc7c1'}}>about us</p>
                            <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">Event</span> GOAL</h1>
                            <p className="headerContent">Choosing a suitable theme for your business isn’t hard if you know what to look for. A solid bundled contact form plugin enables customers to make contact with you, and a means of displaying your business and location information prominently is also essential.</p>
                            <button className="btn btn-brand text-white">learn More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;