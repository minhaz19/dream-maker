import React from 'react';

const Testimonial = (props) => {
    const {name,address,imageURL,Description} = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4 info-card">
            <div className="card-body">
                <p className="card-text text-center">{Description}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
            <img className="mx-3" src={imageURL} alt="" width="60"/>
                <div>
                    <h5 className="text-brand">{name}</h5>
                    <p className="m-0">{address}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;