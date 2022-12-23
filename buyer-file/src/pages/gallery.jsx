import { Component, Fragment } from "react";

import PageHeader from '../component/layout/pageheader';
import GallerySection from '../component/section/gallery';


class GalleryPage extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'OUR PHOTO GALLERY'} curPage={'Gallery'} />
                <GallerySection />
            </Fragment>
        );
    }
}
 
export default GalleryPage;