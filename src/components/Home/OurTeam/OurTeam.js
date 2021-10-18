import { faBehance, faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OurTeam.css';
import teamImg1 from '../../../images/team01.jpg'
import teamImg2 from '../../../images/team02.jpg'
import teamImg3 from '../../../images/team03.jpg'
import teamImg4 from '../../../images/team04.jpg'
import Fade from 'react-reveal/Fade';

const OurTeam = () => {
    const teamData = [
        {
            name: 'Jynda Martin',
            role: 'Marketing Manager',
            img: teamImg1,
        },
        {
            name: 'George Smith',
            role: 'Site Administrator',
            img: teamImg2,
        },
        {
            name: 'Bill Amadeus',
            role: 'Tour Operator',
            img: teamImg3,
        },
        {
            name: 'Amanda Stoun',
            role: 'Director',
            img: teamImg4,
        },
    ]
    return (
        <div className="container">
            <h1 className="text-center miniTitle" style={{ color: '#1cc7c1' }}>OUR TEAM</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <div className="row">
                {
                    teamData.map(({name, role, img}) => {
                        return <div className="col-md-3 col-sm-6 text-center">
                            <Fade bottom duration={1000} distance='40px'>
                            <div className="teamCard">
                                <div className="teamImg">
                                    <img src={img} alt="" />
                                    <h6>{role}</h6>
                                </div>
                                <h5>{name}</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faGoogle}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faBehance}/>
                                </span>
                                <span className="aboutSocial">
                                    
                                </span>
                            </div>
                            </Fade>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default OurTeam;