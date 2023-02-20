import { Component } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from "./rating";

const subtitle = "our team";
const title = "DEVELOPERS";

let TestimonialListContent = [
    {
         imgUrl: 'assets/images/testimonial/ZZ.png',
        imgAlt: 'testimonial thumb',
        title: 'Ajay Pandey',
        desc: 'KIET Groups of Institutions, Ghaziabad(201206)',
        dige: 'Information Technology',
        ratingcount: '5.28',
    },
    {
         imgUrl: 'assets/images/testimonial/ZZ.png',
        imgAlt: 'testimonial thumb',

        title: 'Abhinav Sharma',
        desc: 'KIET Groups of Institutions, Ghaziabad(201206)',
        dige: 'Information Technology',
        ratingcount: '5.80',
    },
    {
         imgUrl: 'assets/images/testimonial/ZZ.png',
        imgAlt: 'testimonial thumb',
        title: 'Madhav Ojha',
        desc: 'KIET Groups of Institutions, Ghaziabad(201206)',
        dige: 'Information Technology',
        ratingcount: '5.80',
    },
    {
         imgUrl: 'assets/images/testimonial/ZZ.png',
        imgAlt: 'testimonial thumb',
        title: 'Devyansh Popli',
        desc: 'KIET Groups of Institutions, Ghaziabad(201206)',
        dige: 'Information Technology',
        ratingcount: '5.80',
    },
]

class TestimonialSection extends Component {
    render() { 
        return (
            <div className="testimonial-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/testimonial/bg.png)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="testimonial-slider overflow-hidden">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                loop={'true'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1.5,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2.1,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 2.15,
                                    },
                                }}
                            >
                                {TestimonialListContent.map((val, i) => (
                                    <SwiperSlide key={i}>
                                                <div className="testimonial-item">
                                            <div className="testimonial-inner">
                                                <div className="testimonial-head">
                                                    <div className="testi-top">
                                                    <div className="testimonial-thumb">
                                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    </div>
                                                        <div className="name-des">
                                                            <h5>{val.title}</h5>
                                                            <p>{val.dige}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial-body">
                                                    <p>{val.desc}</p>
                                                </div>
                                                <div className="testimonial-footer">
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TestimonialSection;