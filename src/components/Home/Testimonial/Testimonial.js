import React from 'react';
import Fade from 'react-reveal/Fade';
import userImg from '../../../images/user.svg';
import '../Testimonials/Testimonials.css';

const Testimonial = (props) => {
    const {name,address,imageURL,Description} = props.testimonial;
    return (
        <Fade bottom duration={1000} distance='40px'>
              <div className="customerReview">
                { imageURL ? <img src={imageURL} alt=""/>:
                <img src={`${userImg}`} alt=""/>}
                <h5 className="testimonialName">{name}</h5>
                <h6 className="testimonialAddress">{address}</h6>
                <p><i>{Description}</i></p>
            </div>
        </Fade>
    );
};

export default Testimonial;