import React from 'react';
import Fade from 'react-reveal/Fade';

const DescriptionPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card shadow-sm col-md-4">
            <Fade top duration={1000} distance='40px'>
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6 className="text-brand">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            </Fade>
       </div>
    );
};

export default DescriptionPost;