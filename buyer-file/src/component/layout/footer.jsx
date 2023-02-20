import { Component, Fragment,useState, useContext  } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from '../section/socialmedia';
import accessContext from "../../context/roles/accessContext";

const postTitle = "Top jackpot games";
const newsTitle = "Our Newsletter";
const desc = "We're creating the best in interactive entertainment by making games that change the way people have fun.";
const newsdesc = "Esports HUB organization supported by community leaders";
const NewsLetter = ()=>{
    const [userEmail, setuserEmail] = useState('');
	const [userName, setuserName] = useState('');

    const Context = useContext(accessContext);
    const {NewsLetter} = Context;
    const navigate =useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();
        const response = await  NewsLetter({
        email: userEmail,
        name: userName
    });    
    if (response.status === 200) {
      setuserEmail('');
      setuserName('');
    }
    }
    return(
        <>
 <footer className="footer-section">
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-3 justify-content-center g-lg-0">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Phone Number :  +91 987 654 3210</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/02.png" alt="email-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Email : esportshub@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/03.png" alt="location-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Address : Sec-XYZ, Ghaziabad, U.P, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="container">
                        <div className="row padding-lg-top">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/1.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{desc}</p>
                                            <ul className="match-social-list d-flex flex-wrap align-items-center">
                                                <SocialMedia />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        {/* <div className="fm-item-title">
                                            <h4>{postTitle}</h4>
                                        </div> */}
                                        {/* <div className="fm-item-content">
                                            {FooterItemList.map((val, i) => (
                                                <div className="fm-item-widget lab-item" key={i}>
                                                    <div className="lab-inner">
                                                        <div className="lab-thumb">
                                                            <Link to="/blog-single"> <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                        </div>
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">{val.title}</Link></h6>
                                                            <p>{val.proName}: <b>{val.proPrice}</b></p>
                                                            <Rating />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{newsTitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p>{newsdesc}</p>
                                            <form>
                                                <div className="form-group mb-4">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="item01"
                                                        className="form-control"
                                                        value={userName}
                                                        onChange={(e)=>{setuserName(e.target.value)}}
                                                        placeholder="Your Name *"
                                                    />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="item02"
                                                        className="form-control"
                                                        value={userEmail}
                                                        onChange={(e)=>{setuserEmail(e.target.value)}}
                                                        placeholder="Your Email *"
                                                    />
                                                </div>
                                                <div className="form-group">
                                    <button className=" default-button" 
                                    onClick = {handleSubmit}
                                    ><span>Send Message</span></button>
                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    {<p>&copy;2022-23 <Link to="/">Esports HUB</Link> - #AllAboutEsports</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

// let FooterItemList = [
//     {
//         imgUrl: 'assets/images/footer/01.jpg',
//         imgAlt: 'Footer Blog Post',
//         title: 'free Poker Game',
//         proName: 'Poker',
//         proPrice: '$230',
//     },
//     {
//         imgUrl: 'assets/images/footer/02.jpg',
//         imgAlt: 'Footer Blog Post',
//         title: 'CLUB Poker Game',
//         proName: 'Poker',
//         proPrice: '$230',
//     },
//     {
//         imgUrl: 'assets/images/footer/03.jpg',
//         imgAlt: 'Footer Blog Post',
//         title: 'ROYAL Poker Game',
//         proName: 'Poker',
//         proPrice: '$300',
//     },
// ]

class Footer extends Component {
    render() { 
        return (
            <Fragment>
                <NewsLetter/>
            </Fragment>
        );
    }
}
export default Footer;
