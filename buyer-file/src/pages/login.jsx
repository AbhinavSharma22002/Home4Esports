import { Component, Fragment } from "react";
import { Link, } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from "../firebase/fire.js";
import { useNavigate } from 'react-router-dom';
const title = "Login";

class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPass: '',
        };
        this.history =  useNavigate();
        
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, this.state.userEmail, this.state.userPass)
    .then(
        this.history.push('/')
        )
  .catch(err => console.error(err.message))
  }
    
    render() { 
        return (
            <Fragment>
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
                                        value={this.state.userEmail}
                                        onChange={(e)=>{this.setState({userEmail: e.target.value});}}
                                        placeholder="Email *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="item02"
                                        value={this.state.userPass}
                                        onChange={(e)=>{this.setState({userPass: e.target.value});}}
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
                                    onClick = {this.handleSubmit}
                                    ><span>Submit Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                                <span className="d-block cate pt-10">Admin Dashboard <Link to="/adminpage"> Click Here</Link></span>
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
            </Fragment>
        );
    }
}
 
export default LogIn;
