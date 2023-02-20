import { Component, Fragment } from "react";

import PageHeader from '../component/layout/pageheader'
import AboutSection from '../component/section/about'
import VideoTestimonial from "../component/section/videotestimonial";

import CtaSection from "../component/section/cta";
import HrShape from "../component/layout/hrshape";


class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'ESPORTS HUB'} curPage={'About Us'} />
                <AboutSection imgUrl={'assets/images/about/01.png'} />
                <VideoTestimonial />
                <HrShape />
                <CtaSection imgUrl={'assets/images/cta/01.png'} />
            </Fragment>
        );
    }
}
 
export default AboutPage;