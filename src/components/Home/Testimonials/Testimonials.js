import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';



const Testimonials = () => {
    const [reviewData, setReviewData] = useState([])
useEffect( () => {
    fetch('https://lit-plains-47991.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setReviewData(data))
}, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-brand text-uppercase">Reviews</h5>
                   <h1>What Our Customer <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        reviewData.map(testimonial => <Testimonial testimonial={testimonial}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;