import { Component, useState, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Alert from "./alert";
import accessContext from '../../context/roles/accessContext';
import '../../assets/css/logout.css'
const contactNumber = "+91 954 092 2345";
const contactAddress = "Sec-82, Gurugram, Haryana, India-122004";

let SocialMideaList = [
    {
        IconName: 'icofont-facebook-messenger',
        IconLink: '#',
    },
    {
        IconName: 'icofont-twitter',
        IconLink: '#',
    },
    {
        IconName: 'icofont-vimeo',
        IconLink: '#',
    },
    {
        IconName: 'icofont-skype',
        IconLink: '#',
    },
    {
        IconName: 'icofont-rss-feed',
        IconLink: '#',
    },
]

const HeaderFunction = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const Context = useContext(accessContext);
    const { LoggedInStates } = Context;
    useEffect(() => {
        const value = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "auth-token": localStorage.getItem('token')
                },
            };
            const response = await fetch(
                `http://localhost:3001/api/user/status`,
                requestOptions
            );
            const data = await response.json();
            if (response.status === 200) {
                setIsLoggedIn(true);
                if (data.role === "admin") {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false);
                }
            }
            else {
                setIsAdmin(false);
                setIsLoggedIn(false);
            }
		}
		value();
	});
const menuTrigger = ()=> {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    const menuTriggerTwo = () => {
        document.querySelector('.header-top').classList.toggle('open')
        // document.querySelector('.header-bar').classList.toggle('active')
    }
    const Logout = ()=>{
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    props.setIsLoggedIn(false);
    navigate("/");
    }
    
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            } else {
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });
    return (
        <header className="header-section">
            <div className="container">
                <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                    <div className="brand-logo d-none d-lg-inline-block">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="header-menu-part">
                        <div className="header-top">
                            <div className="header-top-area">
                                <ul className="left">
                                    <li>
                                        <i className="icofont-ui-call"></i> <span>{contactNumber}</span>
                                    </li>

                                    <li>
                                        <i className="icofont-location-pin"></i> {contactAddress}
                                    </li>
                                </ul>
                                <ul className="social-icons d-flex align-items-center">
                                    {SocialMideaList.map((val, i) => (
                                        <li key={i}>
                                            <a href={`${val.IconLink}`} className="fb"><i className={`${val.IconName}`}></i></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <div className="header-wrapper justify-content-lg-end">
                                <div className="mobile-logo d-lg-none">
                                    <Link to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                                </div>
                                <div className="menu-area">
                                    <ul className="menu">
                                           <li><Link to="/">Home</Link></li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Features</a>
                                            <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/gallery">gallery</NavLink></li>
                                                <li><NavLink to="/game-list2">game list 2</NavLink></li>
                                                <li><NavLink to="/partners">partners</NavLink></li>
                                                <li><NavLink to="/achievements">achievement</NavLink></li>
                                                <li><NavLink to="/team">team</NavLink></li>
                                                <li><NavLink to="/team-single">team single</NavLink></li>
                                                {/* <li><NavLink to="/404">404 Page</NavLink></li> */}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Shop</a>
                                            <ul className="submenu dropdown-menu">
                                                <li><NavLink to="/shop">shop</NavLink></li>
                                                <li><NavLink to="/shop-single">Shop Details</NavLink></li>
                                                <li><NavLink to="/cart-page">Cart Page</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        {isLoggedIn ? (
                                            <>
                                                {isAdmin ? (
                                                    <>
                                                        <li><Link to="/admin" className="adminpage"><i className="icofont-user"></i>Admin Page</Link></li>
                                                    </>
                                                ) : (
                                                    <>
                                                    </>
                                                )}
                                                <li><Link to="/" className="logout" style={{color: "#fff", background: "none", fontSize: "1rem", fontWeight: "700", textTransform: "uppercase", top:"10px" }} onClick={Logout}><i className="icofont-user"></i><span>Logout</span></Link></li>
                                            </>
                                        )
                                            : (
                                                <>
                                                    <li><Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link></li>
                                                    <li><Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link></li>
                                                </>
                                            )}
                                    </ul>


                                    <div className="header-bar d-lg-none" onClick={menuTrigger}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="ellepsis-bar d-lg-none" onClick={menuTriggerTwo}>
                                        <i className="icofont-info-square"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{height:'40px'}}>
    				{props.alert===null?"": <Alert m={props.alert}/>}
    			</div>
            </div>
        </header>
    );
};

export default HeaderFunction;