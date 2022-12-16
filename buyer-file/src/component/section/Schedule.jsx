import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageHeader from "../layout/pageheader";
import SocialMedia from "./socialmedia";

const title = "Result Form";

class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
            regFName: '',
            regLName: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
        };
    }
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'RESULT PAGE '} curPage={'result Form'} />
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
                                        value={this.state.regFName}
                                        onChange={(e)=>{this.setState({regFName: e.target.value});}}
                                        placeholder="Team 1st name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input  
                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={this.state.regLName}
                                        onChange={(e)=>{this.setState({regLName: e.target.value});}}
                                        placeholder="Team 2nd name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="email"
                                        id="item03"
                                        value={this.state.regEmail}
                                        onChange={(e)=>{this.setState({regEmail: e.target.value});}}
                                        placeholder="...... *" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        id="item04"
                                        value={this.state.regPassword}
                                        onChange={(e)=>{this.setState({regPassword: e.target.value});}}
                                        placeholder="...... *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="conpassword"
                                        id="item05"
                                        value={this.state.regConPassword}
                                        onChange={(e)=>{this.setState({regConPassword: e.target.value});}}
                                        placeholder="..... *"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button"><span>Submit</span></button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default Schedule;