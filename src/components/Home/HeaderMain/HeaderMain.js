import React from 'react';
import camera from '../../../images/camera.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: "550px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#1cc7c1' }}>Dream Maker</h1>
                <h3 style={{ color: '#1cc7c1' }}>Your event is our responsibility</h3>
                <p className="text-secondary text-white">Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Rerum expedita aut <br/> sequi aliquid perferendis est?</p>
            </div>
            <div className="col-md-6">
                <img src={camera} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;