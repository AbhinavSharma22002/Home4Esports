import { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

let BannerListContent = [
    {
        bgImgUrl: 'assets/images/banner/home-2/bg.jpg',
        title: 'Online Game',
        subtitle: 'Genuine Money Transaction',
        desc: 'Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital',
        btnText: 'join us today',
    },
    {
        bgImgUrl: 'assets/images/banner/home-2/bg-2.jpg',
        title: 'Online Game',
        subtitle: 'Genuine Money Transaction',
        desc: 'Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital',
        btnText: 'join us today',
    },
]

class BannerTwo extends Component {
    render() { 
        return (
            <div className="banner__slider overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={'true'}
                >
                    {BannerListContent.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className="banner" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                <div className="container">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-12">
                                            <div className="banner__content">
                                                <h1>{val.title}</h1>
                                                <h2>{val.subtitle}</h2>
                                                <p>{val.desc}</p>
                                                <Link to="/login" className="default-button"><span>{val.btnText}  <i className="icofont-play-alt-1"></i></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default BannerTwo;