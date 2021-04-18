import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Treatment of Personal Diseases" , link: "/"},
        {name: "Tooth Extraction" , link: "/"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const Links = [
        {name: "About Dream Maker" , link: "/"},
        {name: "Disclaimer" , link: "/"},
        {name: "Contact us" , link: "/"},
        {name: "Tooth Extraction" , link: "/"},
        {name: "Event Schedule" , link: "/"},
        {name: "Sponsors" , link: "/"},
        {name: "Venues" , link: "/"}
    ]
    const services = [
        {name: "Birthday Party" , link: "/"},
        {name: "Business meeting" , link: "/"},
        {name: "Conference" , link: "/"},
        {name: "Food Event" , link: "/"},
        {name: "Musical Event" , link: "/"},
        {name: "Wedding Party" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="About Us" menuItems={Links}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand text-white">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;