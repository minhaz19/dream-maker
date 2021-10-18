import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderMain = () => {
    return (
        <section className="container">
        <main style={{height: "600px"}} className="d-flex align-items-center justify-content-end">
        <Fade duration={2000} right>
            <div className="text-start">
                <h1 className="headerTitle" style={{ color: '#FFD700' }}>Dream Maker</h1>
                <h3 className="miniTitle" style={{ color: '#800000' }}>Your event is our responsibility</h3>
                <p className="text-secondary text-white headerContent">Because in your dreams, every detail matters.</p>
            </div>
            </Fade>
        </main>
      </section>  
    );
};

export default HeaderMain;