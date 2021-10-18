import React, { useEffect, useState } from 'react';
import { Col, Spinner } from 'react-bootstrap'
import Testimonial from '../Testimonial/Testimonial';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import './Testimonials.css';

const Testimonials = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://lit-plains-47991.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviewData(data))
    }, [])
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section id="testimonial">
            <h5 className="text-center miniTitle" style={{ color: '#1cc7c1' }}>TESTIMONIALS</h5>
            <div className="text-center mb-4">
                <h3 className="text-center headerTitle">WHAT OUR CUSTOMERS SAY’S</h3>
            </div>
            <Col md={11} className="mx-auto swiper">
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                >
                    {
                        reviewData.length === 0 ?
                            <div className="text-center">
                                <Spinner animation="border" variant="success" />
                            </div> :
                            reviewData.map(testimonial => {
                                return (
                                    <SwiperSlide>
                                        <Testimonial testimonial={testimonial} key={testimonial._key} />
                                    </SwiperSlide>
                                )
                            })
                    }
                </Swiper>
            </Col>
        </section>
    );
};

export default Testimonials;