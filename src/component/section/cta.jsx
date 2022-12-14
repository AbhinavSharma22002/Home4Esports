import { Component } from "react";
import { Link } from "react-router-dom";


const title = <h2 className="mb-3">JOIN <span className="theme-color text-uppercase">bigamer</span> ESPORTS TO BECOME NEXT PRO GAMER TODAY!</h2>;

const subtitle = "Let's Play together";

const desc = 'Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than an extensible archtectur services and cross';

const btnText = 'Join Community';



class CtaSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="cta-section padding-bottom">
                <div className="container">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{backgroundImage: "url(/assets/images/cta/bg.jpg)"}}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">
                                        <p className="theme-color text-uppercase ls-2">{subtitle}</p>
                                        {title}
                                        <p className="mb-4">{desc}</p>
                                        <Link to="/signup" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={imgUrl} alt="gamer-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CtaSection;