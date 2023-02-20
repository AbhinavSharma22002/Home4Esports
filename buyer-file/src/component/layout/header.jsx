import { Component, useState, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Alert from "./alert";
import Floating_Alert from "../layout/floating_alert"
import accessContext from '../../context/roles/accessContext';
import '../../assets/css/logout.css'
const contactNumber = "+91 987 654 3210";
const contactAddress = "Sec-XYZ, Ghaziabad, U.P, India-20202";

let SocialMideaList = [
    {
        IconName: 'icofont-facebook',
        IconLink: '#',
    },
    {
        IconName: 'icofont-youtube-play',
        IconLink: '#',
    },
    {
        IconName: 'icofont-instagram',
        IconLink: '#',
    },
    {
        IconName: 'icofont-linkedin',
        IconLink: '#',
    },
    {
        IconName: 'icofont-ebuddy',
        IconLink: '#',
    },
]

const HeaderFunction = (props) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            }
            else {
                setIsLoggedIn(false);
            }
        }
        value();
    });
    const menuTrigger = () => {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')

    }

    const menuTriggerTwo = () => {

        document.querySelector('.header-top').classList.toggle('open')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    const Logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
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
                                <img src="assets/images/logo/1.png" alt="logo" />
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
                                            <a href={`${val.IconLink}`} className="fb" target="_blank"><i className={`${val.IconName}`}></i></a>
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
                                        <li><Link to="/tournaments">Tournaments</Link></li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">ESPORTS_HUB</a>
                                            <ul className="submenu dropdown-menu" aria-labelledby="dropdown">
                                                <li><NavLink to="/about">About</NavLink></li>
                                                {/* <li><NavLink to="/gallery">gallery</NavLink></li> */}
                                                <li><NavLink to="/partners">partners</NavLink></li>
                                                {/* <li><NavLink to="/achievements">achievement</NavLink></li> */}
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        {isLoggedIn ? (
                                            <>
                                             <span className="icons"  style={{left:"23vw"}}>
                                                        <Floating_Alert />
                                                    </span>
                                                        <li><Link to="/admin" className="adminpage"><i className="icofont-user"></i>Admin Page</Link></li>
                                               
                                                <li><Link to="/" className="logout" style={{ color: "#fff", background: "none", fontSize: "1rem", fontWeight: "700", textTransform: "uppercase", top: "10px" }} onClick={Logout}><i className="icofont-user"></i><span>Logout</span></Link></li>
                                            </>
                                        )
                                            : (
                                                <>
                                                    <span className="icons">
                                                        <Floating_Alert />
                                                    </span>
                                                    <li><Link to="/login"><i className="icofont-user" ></i> <span>LOG IN</span> </Link></li>
                                                    <li><Link to="/signup"><i className="icofont-users" ></i> <span>SIGN UP</span></Link></li>
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
                <div>
                    {props.alert === null ? "" : <Alert m={props.alert} />}
                </div>
            </div>
        </header>
    );
};

export default HeaderFunction;
