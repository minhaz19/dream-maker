import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
    const [serviceData, setServices] = useState([])
    useEffect( () => {
        fetch('https://lit-plains-47991.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <section>
            <div className="text-center mt-5">
                <h5 className="miniTitle" style={{ color: '#1cc7c1' }}>OUR Events</h5>
                <h2 className="headerTitle">Event We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 my-3 pt-3">
                    {
                        serviceData.map(service => <ServiceDetails key={service.key} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;