import { Component, Fragment,useState, useContext  } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import accessContext from '../context/roles/accessContext';
const title = "Login";


const LoginFunction = ()=>{
	const [userEmail, setuserEmail] = useState('');
	const [userPass, setuserPass] = useState('');

    const Context = useContext(accessContext);
    const {LoginRequest} = Context;
    const navigate =useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();
        const response = await  LoginRequest({
        email: userEmail,
        password: userPass
    });    
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", data.authData);
      navigate("/");
    }
    else{
        navigate("/login");
    }
    }

    return (
        <>
        <Header />
                <PageHeader title={'LOGIN FOR GAMING'} curPage={'Login'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="item01"
                                        value={userEmail}
                                        onChange={(e)=>{setuserEmail(e.target.value)}}
                                        placeholder="Email *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item02"
                                        value={userPass}
                                        onChange={(e)=>{setuserPass(e.target.value)}}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <a href="#">Forget Password?</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button" 
                                    onClick = {handleSubmit}
                                    ><span>Submit Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Login With Social Media</h5>
                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                    <SocialMedia />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </>
    );
};

class LogIn extends Component {
    render() { 
        return (
            <Fragment>
                <LoginFunction/>
            </Fragment>
        );
    }
}
 
export default LogIn;
