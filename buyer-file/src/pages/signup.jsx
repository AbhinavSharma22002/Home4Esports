import { Component, Fragment,useState,useContext } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import accessContext from '../context/roles/accessContext';

const title = "Register Now";

const SignUpFunction = ()=>{
	const [regFName, setregFName] = useState('');
	const [regLName, setregLName] = useState('');
	const [regEmail, setregEmail] = useState('');
	const [regPassword, setregPassword] = useState('');
	const [regConPassword, setregConPassword] = useState('');
    const Context = useContext(accessContext);
    const {SignUpRequest} = Context;
    const navigate =useNavigate();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(regConPassword===regPassword){
        const data = await SignUpRequest({
        email: regEmail,
        password: regPassword,
        name: regFName,
        Lname: regLName
    });
    if (data.status === 200) {
      navigate("/login");
    }
        }
     setregFName("");
     setregLName("");
     setregEmail("");
     setregPassword("");
     setregConPassword("");
    }
    return (
        <>
        <Header />
                <PageHeader title={'REGISTRATION PAGE'} curPage={'Sign Up'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={regFName}
                                        onChange={(e)=>{setregFName( e.target.value)}}
                                        placeholder="First Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={regLName}
                                        onChange={(e)=>{setregLName( e.target.value)}}
                                        placeholder="Last Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="email"
                                        id="item03"
                                        value={regEmail}
                                        onChange={(e)=>{setregEmail( e.target.value)}}
                                        placeholder="Your email *" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        id="item04"
                                        value={regPassword}
                                        onChange={(e)=>{setregPassword( e.target.value)}}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="conpassword"
                                        id="item05"
                                        value={regConPassword}
                                        onChange={(e)=>{setregConPassword( e.target.value)}}
                                        placeholder="Confirm Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button" 
                                    onClick = {handleSubmit}
                                    ><span>Get Started Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                                <span className="or"><span>or</span></span>
                                <h5 className="subtitle">Register With Social Media</h5>
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



class SignUp extends Component {
    render() { 
        return (
            <Fragment>
                <SignUpFunction />
            </Fragment>
        );
    }
}
 
export default SignUp;