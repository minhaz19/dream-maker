import React from 'react';
import './OurValue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';

const OurValue = () => {

    const workDetails = [
        {title: 'Happy Clients', number: 342, icon: faSmileBeam, id:1},
        {title: 'Events', number: 333, icon: faTasks, id:2},
        {title: 'Hours of Support', number: 1999, icon: faHeadset, id:3},
        {title: 'Hard Workers', number: 99, icon: faUsers, id:4}
    ]
    
    return (
        <section className="ourValue">
            <div className="row container mx-auto">
                {
                    workDetails.map(({title, number, icon, id}) => {
                        return(<Fade duration={2000} top>
                        <div className="col-md-6 col-lg-3" key={id}>
                            <div className="ourValueDetails">
                                <span className={`valueIcon valueIcon${id}`}>
                                    <FontAwesomeIcon icon={icon}/>
                                </span>
                                <div>
                                    <p className="ourValueTitle">{title}</p>
                                    <h4 className="ourValueNumber">
                                        <CountUp
                                        end={`${number}`}
                                        start={0}
                                        duration={9}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default OurValue;