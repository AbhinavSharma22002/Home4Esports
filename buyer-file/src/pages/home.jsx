import { Component, Fragment } from "react";

import HrShape from "../component/layout/hrshape";
import AboutSection from "../component/section/about";
import BannerSection from "../component/section/banner";
import BlogSection from "../component/section/blog";
import CollectionSection from "../component/section/collection";
import CtaSection from "../component/section/cta";
import MatchSection from "../component/section/match";
import Player from "../component/section/Player"
import ProductSection from "../component/section/product";
import SponsorSection from "../component/section/sponsor";
import TestimonialSection from "../component/section/testimonial";
import VideoSection from "../component/section/video";
const HomeFunction = ()=>{
    return (
        <>
                <BannerSection />
                <CollectionSection />
                <MatchSection />
                <VideoSection />
                <ProductSection />
                <BlogSection />
                <Player />
                <CtaSection imgUrl={'assets/images/cta/01.png'} />
                <HrShape />
                <SponsorSection />
                <TestimonialSection />
                <AboutSection imgUrl={'assets/images/about/01.png'} />
        </>
    );
}
class HomePage extends Component {
    render() { 
        return (
            <Fragment>
                <HomeFunction/>
            </Fragment>
        );
    }
}
 
export default HomePage;