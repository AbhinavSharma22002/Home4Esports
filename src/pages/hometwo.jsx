import { Component, Fragment } from "react";



import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import BannerTwo from '../component/section/bannertwo';
import CollectionSectionTwo from '../component/section/collectiontwo';
import AboutSection from "../component/section/about";
import MatchSectionTwo from '../component/section/matchtwo';
import PlayerSectionTwo from '../component/section/playertwo';
import CtaSection from '../component/section/cta';
import VideoSectionTwo from '../component/section/videotwo';
import ProductSection from '../component/section/product';
import HrShape from '../component/layout/hrshape';
import SponsorSection from '../component/section/sponsor';
import BlogSection from '../component/section/blog';
import TestimonialSection from '../component/section/testimonial';

class HomeTwo extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <BannerTwo />
                <CollectionSectionTwo />
                <AboutSection imgUrl={'assets/images/about/02.png'} />
                <MatchSectionTwo />
                <PlayerSectionTwo />
                <CtaSection imgUrl={'assets/images/cta/02.png'} />
                <VideoSectionTwo />
                <ProductSection />
                <HrShape />
                <SponsorSection />
                <BlogSection />
                <TestimonialSection />
                <Footer />
            </Fragment>
        );
    }
}
 
export default HomeTwo;