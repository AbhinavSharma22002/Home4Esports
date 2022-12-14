import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AdminPage from "../component/section/adminpage";
import VideoSection from "../component/section/video";

class AdminPageSection extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'ADMIN DASHBOARD LOGIN'} curPage={'DASHBOARD'} />
                <AdminPage />
                <VideoSection />
                <Footer />
            </Fragment>
        );
    }
}
 
//export default AdminPageSection;