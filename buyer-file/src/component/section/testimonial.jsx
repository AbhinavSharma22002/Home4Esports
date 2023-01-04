import { Component } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from "./rating";

const subtitle = "our reviews";
const title = "Our Testimonials";

let TestimonialListContent = [
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'INSTINCTs',
        desc: 'We love this event, looking forword to enjoy upcoming event with better time management.',
        dige: 'Second (2nd)',
        ratingcount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'AlphaQ',
        desc: 'Was good enough, maybe streaming can get better as we are unable to view a few past games. ',
        dige: 'First (1st)',
        ratingcount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'Satanic',
        desc: 'We do not face any time issue but others do so if possible then 100% of the audience will love your tournaments',
        dige: 'Second (2nd)',
        ratingcount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'Nirvana Esports',
        desc: 'Include Winner bracket Looser bracket format, its interesting.',
        dige: 'Fourth (4th)',
        ratingcount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'OMEN eSports ',
        desc: 'Nice tourney no issues from our side ',
        dige: 'Third (3rd)',
        ratingcount: '5.28',
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