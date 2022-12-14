import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/section/googlemap";


const infosubtitle = "Get in touch with us";
const infotitle = "We're Always Eager To Hear From You!";
const contacttitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";


let infoListContent = [
    {
        imgUrl: 'assets/images/contact/icon/01.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Office Address',
        desc: '1201 park street, Fifth Avenue',
    },
    {
        imgUrl: 'assets/images/contact/icon/02.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Phone number',
        desc: '+22698 745 632, 02 982 745',
    },
    {
        imgUrl: 'assets/images/contact/icon/03.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Send Email',
        desc: 'yourmail@gmail.com',
    },
]

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactNumber: '',
            contactMassage: '',
        };
    }

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'CONTACT US'} curPage={'CONTACT'} />
                <div className="info-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-header">
                            <p>{infosubtitle}</p>
                            <h2>{infotitle}</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row justify-content-center g-4">
                                {infoListContent.map((val, i) => (
                                    <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                        <div className="contact-item text-center">
                                            <div className="contact-thumb mb-4">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            <div className="contact-content">
                                                <h6 className="title">{val.title}</h6>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-section">
                    <div className="contact-top padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="contact-form-wrapper text-center">
                                        <h2 className="mb-5">{contacttitle}</h2>
                                        <form className="contact-form" action="contact.php" id="contact-form" method="POST">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={this.state.contactName}
                                                    onChange={(e)=>{this.setState({contactName: e.target.value});}}
                                                    placeholder="Your Name *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    value={this.state.contactEmail}
                                                    onChange={(e)=>{this.setState({contactEmail: e.target.value});}}
                                                    placeholder="Your Email *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="item04"
                                                    value={this.state.contactNumber}
                                                    onChange={(e)=>{this.setState({contactNumber: e.target.value});}}
                                                    placeholder="Mobile Number *"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="item03"
                                                    value={this.state.contactSubject}
                                                    onChange={(e)=>{this.setState({contactSubject: e.target.value});}}
                                                    placeholder="Your Subject *"
                                                />
                                            </div>
                                            <div className="form-group w-100">
                                                <textarea 
                                                        rows="8" 
                                                        type="text"
                                                        id="item05"
                                                        name="message"
                                                        value={this.state.respondMassage}
                                                        onChange={(e)=>{this.setState({respondMassage: e.target.value});}}
                                                        placeholder="Your Message"
                                                    ></textarea>
                                            </div>
                                            <div className="form-group w-100 text-center">
                                                <button className="default-button" type="submit"><span>Send our Message</span></button>
                                            </div>
                                        </form>
                                        <p className="form-message"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-bottom">
                        <div className="contac-bottom">
                            <div className="row justify-content-center g-0">
                                <div className="col-12">
                                    <div className="location-map">
                                        <GoogleMap />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default ContactUs;