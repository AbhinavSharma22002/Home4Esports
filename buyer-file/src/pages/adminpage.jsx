import { Component, Fragment } from "react";
import Footer from "../component/layout/Footer";
//import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AdminPage from "../component/section/adminpage";
//import VideoSection from "../component/section/video";
import ProductMgmt from "../component/section/productmgmt";

class AdminPageSection extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'ADMIN DASHBOARD'} curPage={'DASHBOARD'} />
                <AdminPage />
                <ProductMgmt/>
                <Footer />
            </Fragment>
        );
    }
}
 
export default AdminPageSection;