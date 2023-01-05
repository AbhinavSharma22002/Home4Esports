import { Component} from "react";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from './rating';

const subtitle = "our LATEST VIDEOS";
const title = "click here to check our video";



let VideoListContentTop = [
    {
        imgUrl: 'assets/images/game/vdothumbs.png',
        imgAlt: 'Video Thum',
       videoLink: 'https://www.youtube.com/embed/xRgHu4JdcTU',
    },
]

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


class VideoTestimonial extends Component {
    render() { 
        return (
            <div className="video-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="video-top">
                                    <div className="row g-4 justify-content-center">
                                        {VideoListContentTop.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={val.videoLink} target="_blank">
                                                                    <i className="icofont-play-alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="video-bottom">
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
                    </div>
                </div>
            </div>
        );
    }
}
 
export default VideoTestimonial;