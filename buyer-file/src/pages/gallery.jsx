import { Component, Fragment } from "react";



import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import PageHeader from '../component/layout/pageheader';
import GallerySection from '../component/section/gallery';


class GalleryPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'OUR PHOTO GALLERY'} curPage={'Gallery'} />
                <GallerySection />
                <Footer />
            </Fragment>
        );
    }
}
 
export default GalleryPage;