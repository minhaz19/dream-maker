import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetails.css';
import Fade from 'react-reveal/Fade';

const ServiceDetails = ({ service }) => {
    const { name, price, _id, Description, imageURL } = service;
    let history = useHistory();
    const handleSubmit = (id) => {
        const url = `/book/${id}`;
        history.push(url);
    }
    return (
        <div class="col-md-4 text-center mt-2">
            <div class="card h-100">
                <Fade duration={2000} left>
                    <img className="img" style={{ height: '200px' }} src={imageURL} alt="" />
                    <div className="card-body">
                        <h5 className="mt-3 mb-3">{name}</h5>
                        <h5 className="mb-3">${price}</h5>
                        <p className="text-secondary">{Description}</p>
                        <Link onClick={() => handleSubmit(_id)} to={`/book/${_id}`}><button className="btn btn-brand text-white">Order</button></Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ServiceDetails;