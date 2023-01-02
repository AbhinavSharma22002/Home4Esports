import { Component } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from "./rating";

const subtitle = "our Founders";
const title = "Our Founder & Co-Founders";

let TestimonialListContent = [
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgAlt: 'testimonial thumb',
        title: 'Peeyush "PsyLens" Kumar',
        desc: 'Ex-Microsoft, Esports Mentor India Accelerator, Speaker, Caster Esports (15+ Yrs),Corporates (8 Yrs)',
        dige: 'Founder of CCE',
        ratingcount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/03.jpg',
        imgAlt: 'testimonial thumb',

        title: 'Samhita "SheSapien"',
        desc: 'ISB, SEEDS Board Member, Ex-Microsoft, Honeywell, EY-Esports (2+ Yrs), Corporates (15+ Yrs)',
        dige: 'Co-Founder of CCE',
        ratingcount: '5.80',
    },
    {
        imgUrl: 'assets/images/testimonial/02.jpg',
        imgAlt: 'testimonial thumb',
        title: 'Pravesh "EvilEvr" Rawat',
        desc: 'Creative Enterpreneur, Pro Gamer, Artist Esports (10+Yrs) ,Corporates (2 Yrs)',
        dige: 'Co-Founder of CCE',
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